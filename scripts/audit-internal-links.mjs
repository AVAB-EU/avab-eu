// @ts-check
/**
 * Read-only internal-link inventory for the built Astro site.
 *
 * Usage:  node scripts/audit-internal-links.mjs [distDir] [--json]
 *
 * - Never writes or mutates any file. Prints a deterministic report to stdout.
 * - Primary source of truth is the built `dist/` output.
 * - Intended to be reusable later in CI (exit code 0 always in this phase;
 *   a future flag can turn P0 findings into a non-zero exit).
 */

import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join, resolve, relative, posix } from 'node:path';

const DIST = resolve(process.argv[2] && !process.argv[2].startsWith('--') ? process.argv[2] : 'dist');
const CONFIG = resolve('astro.config.mjs');
const EMIT_JSON = process.argv.includes('--json');

const SITE_HOSTS = new Set([
  'avab.eu',
  'www.avab.eu',
  'test2.avab.eu',
]);

/* -------------------------------------------------------------------------- */
/* Filesystem walk                                                            */
/* -------------------------------------------------------------------------- */

/** @param {string} dir @returns {string[]} */
function walk(dir) {
  /** @type {string[]} */
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.isFile()) out.push(full);
  }
  return out;
}

if (!existsSync(DIST)) {
  console.error(`dist directory not found: ${DIST}\nRun \`npm run build\` first.`);
  process.exit(2);
}

const allFiles = walk(DIST);
const htmlFiles = allFiles.filter((f) => f.toLowerCase().endsWith('.html'));

/** dist-relative POSIX path, e.g. "tjanster/index.html" */
const distRel = (f) => relative(DIST, f).split('\\').join('/');

/* Set of every asset path that actually exists in dist (POSIX, leading slash). */
const assetPaths = new Set(allFiles.map((f) => '/' + distRel(f)));

/* -------------------------------------------------------------------------- */
/* Route model                                                               */
/* -------------------------------------------------------------------------- */

/**
 * Map built HTML file -> canonical route.
 *  dist/index.html                 -> /
 *  dist/tjanster/index.html        -> /tjanster/
 *  dist/404.html                   -> /404.html
 */
function fileToRoute(rel) {
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return '/' + rel.slice(0, -'index.html'.length);
  return '/' + rel;
}

/** @type {Map<string, {file:string, route:string, noindex:boolean, redirectTo:string|null, canonical:string|null, anchors:Set<string>, links:Array<any>}>} */
const pages = new Map();

const ROBOTS_RE = /<meta[^>]+name=["']robots["'][^>]*>/i;
const CONTENT_RE = /content=["']([^"']*)["']/i;
const REFRESH_RE = /<meta[^>]+http-equiv=["']refresh["'][^>]*>/i;
const REFRESH_URL_RE = /url=([^"']+)["']/i;
const CANONICAL_RE = /<link[^>]+rel=["']canonical["'][^>]*>/i;
const HREF_ATTR_RE = /href=["']([^"']*)["']/i;
const ID_RE = /\sid=["']([^"']+)["']/gi;
const ANAME_RE = /<a\s+[^>]*\bname=["']([^"']+)["'][^>]*>/gi;
const A_RE = /<a\s+([^>]*?)>([\s\S]*?)<\/a>/gi;

function stripTags(s) {
  return s.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}

for (const file of htmlFiles) {
  const rel = distRel(file);
  const html = readFileSync(file, 'utf8');

  const robotsM = html.match(ROBOTS_RE);
  const robotsContent = robotsM ? (robotsM[0].match(CONTENT_RE)?.[1] ?? '') : '';
  const noindex = /noindex/i.test(robotsContent);

  const refreshM = html.match(REFRESH_RE);
  let redirectTo = null;
  if (refreshM) {
    const u = refreshM[0].match(REFRESH_URL_RE)?.[1] ?? null;
    redirectTo = u ? u.trim() : null;
  }

  const canonicalM = html.match(CANONICAL_RE);
  const canonical = canonicalM ? (canonicalM[0].match(HREF_ATTR_RE)?.[1] ?? null) : null;

  const anchors = new Set();
  let m;
  ID_RE.lastIndex = 0;
  while ((m = ID_RE.exec(html))) anchors.add(m[1]);
  ANAME_RE.lastIndex = 0;
  while ((m = ANAME_RE.exec(html))) anchors.add(m[1]);

  const links = [];
  A_RE.lastIndex = 0;
  while ((m = A_RE.exec(html))) {
    const attrs = m[1];
    const href = attrs.match(HREF_ATTR_RE)?.[1];
    if (href == null) continue;
    links.push({ href: href.trim(), text: stripTags(m[2]).slice(0, 120) });
  }

  pages.set(rel, {
    file: rel,
    route: fileToRoute(rel),
    noindex,
    redirectTo,
    canonical,
    anchors,
    links,
  });
}

/* routeSet: every canonical route that the build actually produced. */
const routeSet = new Set([...pages.values()].map((p) => p.route));

/* Pages that are pure redirect stubs (meta refresh). */
const stubRedirects = new Map(); // route -> target (normalized later)
for (const p of pages.values()) {
  if (p.redirectTo) stubRedirects.set(p.route, p.redirectTo);
}

/* -------------------------------------------------------------------------- */
/* astro.config redirects                                                    */
/* -------------------------------------------------------------------------- */

const configRedirects = new Map(); // from -> to
{
  const cfg = readFileSync(CONFIG, 'utf8');
  const block = cfg.match(/redirects:\s*{([\s\S]*?)}\s*,\s*build:/);
  const body = block ? block[1] : '';
  const re = /['"]([^'"]+)['"]\s*:\s*['"]([^'"]+)['"]/g;
  let m;
  while ((m = re.exec(body))) configRedirects.set(m[1], m[2]);
}

/* -------------------------------------------------------------------------- */
/* Normalisation + classification                                            */
/* -------------------------------------------------------------------------- */

const IGNORE_SCHEME_RE = /^(mailto:|tel:|javascript:|data:|sms:|geo:|#$)/i;

/** Resolve a possibly-relative URL path against the source route. */
function resolvePath(fromRoute, path) {
  if (path.startsWith('/')) return posix.normalize(path);
  // relative
  const baseDir = fromRoute.endsWith('/') ? fromRoute : fromRoute.replace(/[^/]*$/, '');
  return posix.normalize(posix.join(baseDir, path));
}

/**
 * @returns {{
 *  kind:'internal'|'external'|'ignored',
 *  host?:string, rawHost?:string, scheme?:string,
 *  destPath?:string, fragment?:string, normalized?:string
 * }}
 */
function parseHref(fromRoute, href) {
  if (!href || IGNORE_SCHEME_RE.test(href)) return { kind: 'ignored' };

  // Protocol-relative or absolute URL
  let url = null;
  try {
    if (/^https?:\/\//i.test(href)) url = new URL(href);
    else if (href.startsWith('//')) url = new URL('https:' + href);
  } catch {
    /* fall through */
  }

  if (url) {
    const host = url.hostname.toLowerCase();
    if (!SITE_HOSTS.has(host)) {
      return { kind: 'external', host, scheme: url.protocol.replace(':', '') };
    }
    const fragment = url.hash ? url.hash.slice(1) : '';
    const destPath = url.pathname || '/';
    return {
      kind: 'internal',
      rawHost: host,
      scheme: url.protocol.replace(':', ''),
      destPath,
      fragment,
      normalized: destPath,
    };
  }

  // Root-relative or document-relative
  const hashIdx = href.indexOf('#');
  const fragment = hashIdx >= 0 ? href.slice(hashIdx + 1) : '';
  let path = hashIdx >= 0 ? href.slice(0, hashIdx) : href;
  if (path === '') {
    // pure same-page fragment
    return { kind: 'internal', destPath: fromRoute, fragment, normalized: fromRoute };
  }
  // strip query for destination resolution, keep note
  const qIdx = path.indexOf('?');
  if (qIdx >= 0) path = path.slice(0, qIdx);
  const resolved = resolvePath(fromRoute, path);
  return { kind: 'internal', destPath: resolved, fragment, normalized: resolved };
}

/** Does a route/asset exist? returns a status object */
function resolveDestination(destPath) {
  // Try as an asset first (has a file extension and exists literally)
  if (/\.[a-z0-9]{2,5}$/i.test(destPath) && assetPaths.has(destPath)) {
    return { exists: true, type: 'asset', route: destPath };
  }
  const withSlash = destPath.endsWith('/') ? destPath : destPath + '/';
  const noSlash = destPath.endsWith('/') ? destPath.slice(0, -1) : destPath;

  if (routeSet.has(destPath)) return { exists: true, type: 'page', route: destPath };
  if (routeSet.has(withSlash)) {
    return { exists: true, type: 'page', route: withSlash, trailingSlashFix: destPath !== withSlash };
  }
  if (destPath.endsWith('.html') && assetPaths.has(destPath)) {
    return { exists: true, type: 'page', route: destPath };
  }
  // maybe an asset without the extension test above
  if (assetPaths.has(destPath)) return { exists: true, type: 'asset', route: destPath };
  // config redirect source?
  if (configRedirects.has(noSlash) || configRedirects.has(destPath)) {
    return { exists: false, type: 'config-redirect', route: destPath };
  }
  return { exists: false, type: 'missing', route: destPath };
}

/* -------------------------------------------------------------------------- */
/* Walk every link                                                           */
/* -------------------------------------------------------------------------- */

/** @type {Map<string, any>} aggregated per (sourceRoute, href) */
const records = new Map();
/** @type {Map<string, number>} inbound indexable link counts per destination route */
const inbound = new Map();
const inboundFrom = new Map(); // dest -> Set(source)

for (const p of pages.values()) {
  // skip counting outbound links that originate from redirect stubs / 404
  const originIsReal = !p.redirectTo && p.route !== '/404.html';

  for (const { href, text } of p.links) {
    const parsed = parseHref(p.route, href);
    if (parsed.kind === 'ignored') continue;
    if (parsed.kind === 'external') continue;

    const destPath = parsed.normalized ?? parsed.destPath ?? '';
    const dest = resolveDestination(destPath);

    // redirect detection
    let viaRedirect = false;
    let redirectTarget = null;
    if (dest.type === 'config-redirect') {
      viaRedirect = true;
      redirectTarget =
        configRedirects.get(destPath.replace(/\/$/, '')) ?? configRedirects.get(destPath) ?? null;
    } else if (dest.exists && dest.type === 'page') {
      const destPage = [...pages.values()].find((x) => x.route === dest.route);
      if (destPage?.redirectTo) {
        viaRedirect = true;
        redirectTarget = destPage.redirectTo;
      }
    }

    // noindex destination?
    let destNoindex = false;
    if (dest.exists && dest.type === 'page') {
      const destPage = [...pages.values()].find((x) => x.route === dest.route);
      destNoindex = !!destPage?.noindex;
    }

    // anchor check
    let anchorStatus = 'n/a';
    if (parsed.fragment) {
      let targetRoute = dest.exists ? dest.route : destPath;
      const targetPage = [...pages.values()].find((x) => x.route === targetRoute);
      if (!targetPage) anchorStatus = 'unknown-page';
      else anchorStatus = targetPage.anchors.has(parsed.fragment) ? 'ok' : 'missing';
    }

    // trailing-slash anomaly
    const trailingSlashIssue =
      !!dest.trailingSlashFix ||
      (parsed.rawHost && !/^https:\/\//i.test(href) === false && false);

    // absolute-url-to-self anomaly
    const absoluteSelf = !!parsed.rawHost;
    const httpDowngrade = parsed.scheme === 'http';
    const wwwHost = parsed.rawHost === 'www.avab.eu';

    const key = p.route + ' ||| ' + href;
    if (!records.has(key)) {
      records.set(key, {
        sourceRoute: p.route,
        sourceFile: p.file,
        href,
        text,
        destPath,
        destRoute: dest.route,
        exists: dest.exists,
        destType: dest.type,
        viaRedirect,
        redirectTarget,
        destNoindex,
        fragment: parsed.fragment || null,
        anchorStatus,
        trailingSlashIssue,
        absoluteSelf,
        httpDowngrade,
        wwwHost,
        count: 0,
      });
    }
    records.get(key).count++;

    // inbound counting: only links from real, indexable pages toward real pages
    if (originIsReal && !p.noindex && dest.exists && dest.type === 'page' && !viaRedirect) {
      inbound.set(dest.route, (inbound.get(dest.route) ?? 0) + 1);
      if (!inboundFrom.has(dest.route)) inboundFrom.set(dest.route, new Set());
      inboundFrom.get(dest.route).add(p.route);
    }
  }
}

/* -------------------------------------------------------------------------- */
/* Sitemap                                                                   */
/* -------------------------------------------------------------------------- */

const sitemapRoutes = new Set();
for (const f of allFiles.filter(
  (x) => /sitemap.*\.xml$/i.test(x) && !/sitemap-index\.xml$/i.test(x),
)) {
  const xml = readFileSync(f, 'utf8');
  const re = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = re.exec(xml))) {
    try {
      const u = new URL(m[1]);
      // Skip nested sitemap references (e.g. the sitemap-index -> sitemap-0.xml loc).
      if (u.pathname.endsWith('.xml')) continue;
      if (SITE_HOSTS.has(u.hostname.toLowerCase())) sitemapRoutes.add(u.pathname);
    } catch {
      /* ignore */
    }
  }
}

/* -------------------------------------------------------------------------- */
/* Derived sets                                                              */
/* -------------------------------------------------------------------------- */

const indexablePages = [...pages.values()].filter(
  (p) => !p.noindex && !p.redirectTo && p.route !== '/404.html',
);

const inboundCounts = Object.fromEntries(
  indexablePages
    .map((p) => [p.route, inbound.get(p.route) ?? 0])
    .sort((a, b) => a[1] - b[1]),
);

const orphans = indexablePages
  .filter((p) => (inbound.get(p.route) ?? 0) === 0)
  .map((p) => p.route);

const weak = indexablePages
  .filter((p) => {
    const c = inbound.get(p.route) ?? 0;
    return c > 0 && c <= 2;
  })
  .map((p) => ({ route: p.route, inbound: inbound.get(p.route) ?? 0 }));

const sitemapNoindex = [...sitemapRoutes].filter((r) => {
  const pg = [...pages.values()].find((p) => p.route === r);
  return pg?.noindex;
});

const sitemapNoInternalPath = [...sitemapRoutes].filter((r) => {
  const pg = [...pages.values()].find((p) => p.route === r);
  if (!pg || pg.noindex) return false;
  return (inbound.get(r) ?? 0) === 0;
});

/* -------------------------------------------------------------------------- */
/* Classification                                                            */
/* -------------------------------------------------------------------------- */

const all = [...records.values()];

const p0 = all.filter(
  (r) => (!r.exists && r.destType === 'missing') || r.anchorStatus === 'missing',
);
const p1 = all.filter((r) => r.viaRedirect);
const p2 = all.filter(
  (r) =>
    !r.viaRedirect &&
    r.exists &&
    (r.destNoindex || r.trailingSlashIssue || r.absoluteSelf || r.httpDowngrade || r.wwwHost),
);

/* -------------------------------------------------------------------------- */
/* Output                                                                    */
/* -------------------------------------------------------------------------- */

const totalInternalLinks = all.reduce((n, r) => n + r.count, 0);
const uniqueDests = new Set(all.map((r) => r.destRoute || r.destPath)).size;

const summary = {
  distDir: DIST,
  builtHtmlPages: htmlFiles.length,
  realPages: htmlFiles.length - stubRedirects.size - 1, // minus stubs and 404
  indexablePages: indexablePages.length,
  noindexPages: [...pages.values()].filter((p) => p.noindex).length,
  redirectStubPages: stubRedirects.size,
  sitemapUrls: sitemapRoutes.size,
  totalInternalLinkOccurrences: totalInternalLinks,
  uniqueInternalLinkRecords: all.length,
  uniqueInternalDestinations: uniqueDests,
  counts: { P0: p0.length, P1: p1.length, P2: p2.length },
  orphanIndexablePages: orphans,
  weakInternalLinking: weak,
  inboundLinkCounts: inboundCounts,
  sitemapRoutesThatAreNoindex: sitemapNoindex,
  sitemapRoutesWithoutInternalPath: sitemapNoInternalPath,
  configRedirects: Object.fromEntries(configRedirects),
  stubRedirects: Object.fromEntries(stubRedirects),
};

if (EMIT_JSON) {
  console.log(JSON.stringify({ summary, p0, p1, p2, records: all }, null, 2));
  process.exit(0);
}

const line = (s = '') => console.log(s);
line('# Internal link audit (read-only)');
line();
line('```');
line(JSON.stringify(summary, null, 2));
line('```');
line();

function table(rows) {
  for (const r of rows) {
    line(
      [
        r.sourceRoute,
        r.href,
        r.destRoute || r.destPath,
        r.exists ? (r.viaRedirect ? 'REDIRECT' : 'ok') : r.destType,
        r.fragment ? `#${r.fragment}(${r.anchorStatus})` : '',
        r.destNoindex ? 'noindex' : '',
        r.absoluteSelf ? `abs:${r.rawHost ?? ''}` : '',
        r.trailingSlashIssue ? 'trailing-slash' : '',
        `x${r.count}`,
      ]
        .filter(Boolean)
        .join('  |  '),
    );
  }
}

line('## P0');
table(p0);
line();
line('## P1');
table(p1);
line();
line('## P2');
table(p2);
