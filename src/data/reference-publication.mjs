// Publiceringsstatus för strukturerat innehåll, härledd direkt ur content-filerna.
//
// Används av astro.config.mjs för sitemap-filtret så att routes som renderas
// med draft/noindex inte hamnar i sitemap. Modulen är avsiktligt fristående
// från astro:content eftersom den körs redan när Astro-konfigurationen laddas.

import { readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const CONTENT_DIRS = [
  {
    key: "references",
    dir: fileURLToPath(new URL("../content/references/", import.meta.url)),
  },
  {
    key: "serviceLandingPages",
    dir: fileURLToPath(new URL("../content/service-pages/", import.meta.url)),
  },
  {
    key: "cameraIndustryPages",
    dir: fileURLToPath(new URL("../content/camera-industry-pages/", import.meta.url)),
  },
];

function frontmatterBlock(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return match ? match[1] : "";
}

function parseEntry(dir, fileName, collection) {
  const raw = readFileSync(join(dir, fileName), "utf8");
  const fm = frontmatterBlock(raw);

  const slug = fm.match(/^slug:\s*["']?(\/[^\s"']+?)["']?\s*$/m)?.[1] ?? null;
  const draft = /(?:^|\n)draft:\s*true\s*(?:#.*)?$/m.test(fm);
  const noindex = /(?:^|\n)\s+noindex:\s*true\s*(?:#.*)?$/m.test(fm);

  return { collection, fileName, slug, draft, noindex };
}

function readEntries({ key, dir }) {
  return readdirSync(dir)
    .filter((name) => /\.mdx?$/.test(name))
    .sort()
    .map((fileName) => parseEntry(dir, fileName, key));
}

export const contentPublicationEntries = CONTENT_DIRS.flatMap(readEntries);

export const referenceEntries = contentPublicationEntries.filter(
  (entry) => entry.collection === "references",
);

export const nonPublicReferenceSlugs = new Set(
  referenceEntries
    .filter((entry) => entry.slug && (entry.draft || entry.noindex))
    .map((entry) => entry.slug),
);

export const publishedReferenceSlugs = new Set(
  referenceEntries
    .filter((entry) => entry.slug && !entry.draft && !entry.noindex)
    .map((entry) => entry.slug),
);

/** Alla strukturerade routes som renderas med draft eller seo.noindex. */
export const nonPublicContentSlugs = new Set(
  contentPublicationEntries
    .filter((entry) => entry.slug && (entry.draft || entry.noindex))
    .map((entry) => entry.slug),
);

function pathnameFromUrl(urlOrPath) {
  try {
    return new URL(urlOrPath).pathname;
  } catch {
    return urlOrPath;
  }
}

/** Bakåtkompatibel kontroll för referenser. */
export function isNonPublicReferenceUrl(urlOrPath) {
  return nonPublicReferenceSlugs.has(pathnameFromUrl(urlOrPath));
}

/** Sant om URL:en tillhör en strukturerad draft/noindex-sida. */
export function isNonPublicContentUrl(urlOrPath) {
  return nonPublicContentSlugs.has(pathnameFromUrl(urlOrPath));
}
