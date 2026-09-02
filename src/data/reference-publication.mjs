// Publiceringsstatus för referenser, härledd direkt ur innehållsfilerna i
// src/content/references/.
//
// Används av astro.config.mjs för sitemap-filtret (draft/noindex-referenser
// utesluts ur sitemap). Sidkomponenter som körs i Astros pipeline bör i stället
// använda getCollection("references") direkt – den här modulen läser filsystemet
// relativt sin egen sökväg och fungerar därför inte efter bundling.
//
// Avsiktligt fristående och beroendefri (ingen astro:content, inget YAML-
// bibliotek) så att den kan köras i astro.config innan content-pipelinen finns.
// Frontmatter i referensfilerna är enhetlig och kontrollerad.

import { readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const REFERENCES_DIR = fileURLToPath(
  new URL("../content/references/", import.meta.url),
);

function frontmatterBlock(source) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  return match ? match[1] : "";
}

function parseEntry(fileName) {
  const raw = readFileSync(join(REFERENCES_DIR, fileName), "utf8");
  const fm = frontmatterBlock(raw);

  const slug = fm.match(/^slug:\s*["']?(\/[^\s"']+?)["']?\s*$/m)?.[1] ?? null;
  // draft är en toppnivånyckel; noindex ligger under seo:.
  const draft = /(?:^|\n)draft:\s*true\s*(?:#.*)?$/m.test(fm);
  const noindex = /(?:^|\n)\s+noindex:\s*true\s*(?:#.*)?$/m.test(fm);

  return { fileName, slug, draft, noindex };
}

export const referenceEntries = readdirSync(REFERENCES_DIR)
  .filter((name) => /\.mdx?$/.test(name))
  .sort()
  .map(parseEntry);

/** Slugs vars referenssida renderas som noindex (draft eller seo.noindex). */
export const nonPublicReferenceSlugs = new Set(
  referenceEntries
    .filter((entry) => entry.slug && (entry.draft || entry.noindex))
    .map((entry) => entry.slug),
);

/** Slugs för publicerade, indexerbara referenser. */
export const publishedReferenceSlugs = new Set(
  referenceEntries
    .filter((entry) => entry.slug && !entry.draft && !entry.noindex)
    .map((entry) => entry.slug),
);

/**
 * Sant om en URL/pathname pekar på en referenssida som inte är publik.
 * Accepterar både full URL och ren pathname.
 */
export function isNonPublicReferenceUrl(urlOrPath) {
  let pathname = urlOrPath;
  try {
    pathname = new URL(urlOrPath).pathname;
  } catch {
    // redan en pathname
  }
  return nonPublicReferenceSlugs.has(pathname);
}
