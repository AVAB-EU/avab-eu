import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const errors = [];
const warnings = [];

function fail(message) {
  errors.push(message);
}

function warn(message) {
  warnings.push(message);
}

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function normalizeSlashes(value) {
  return value.replace(/\\/g, "/");
}

function publicAssetExists(src) {
  if (!src?.startsWith("/assets/")) return true;
  return fs.existsSync(path.join(root, "public", src.replace(/^\//, "")));
}

function resolveBaseRef() {
  const base = process.env.GITHUB_BASE_REF || "main";

  // In GitHub Actions the checkout remote is normally "origin".
  // Locally this repository commonly uses "upstream". If we are already
  // standing on the base branch, compare against the local branch itself so
  // stale remote-tracking refs cannot make old files look newly changed.
  let currentBranch = null;
  try {
    currentBranch = execFileSync(
      "git",
      ["branch", "--show-current"],
      { cwd: root, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
    ).trim();
  } catch {}

  const candidates = currentBranch === base
    ? [base, `upstream/${base}`, `origin/${base}`]
    : [`upstream/${base}`, `origin/${base}`, base];

  for (const candidate of candidates) {
    try {
      execFileSync("git", ["rev-parse", "--verify", candidate], {
        cwd: root,
        stdio: "ignore",
      });
      return candidate;
    } catch {}
  }

  warn("Could not resolve base ref; diff-based guardrails are limited.");
  return null;
}

const baseRef = resolveBaseRef();
const changedFiles = new Set();

if (baseRef) {
  try {
    const names = execFileSync("git", ["diff", "--name-only", `${baseRef}...HEAD`], {
      cwd: root,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
    names.split("\n").filter(Boolean).forEach((file) => changedFiles.add(normalizeSlashes(file)));
  } catch {
    warn("Could not read changed files; repository-wide non-destructive checks still ran.");
  }
}

const referenceDir = path.join(root, "src", "content", "references");
const referenceFiles = walk(referenceDir).filter((file) => /\.(md|mdx)$/.test(file));

if (referenceFiles.length === 0) {
  fail("No reference content entries found in src/content/references/.");
}

for (const file of referenceFiles) {
  const rel = normalizeSlashes(path.relative(root, file));
  const source = fs.readFileSync(file, "utf8");
  const draftMatch = source.match(/^draft:\s*(true|false)\s*$/m);
  const approvalMatch = source.match(/^\s*publicationApproved:\s*(true|false|null)\s*$/m);
  const changedReference = changedFiles.has(rel);

  if (changedReference && !draftMatch) {
    fail(`${rel}: changed reference requires explicit draft: true|false`);
  }

  if (changedReference && draftMatch?.[1] === "false" && approvalMatch?.[1] !== "true") {
    fail(`${rel}: published changed reference requires customer.publicationApproved: true`);
  }

  for (const match of source.matchAll(/^\s*src:\s*['"]?([^'"\n]+)['"]?\s*$/gm)) {
    const src = match[1].trim();
    if (!publicAssetExists(src)) {
      fail(`${rel}: local image does not exist in public/: ${src}`);
    }
  }
}

function getAddedSourceLines() {
  if (!baseRef) return "";

  try {
    return execFileSync(
      "git",
      ["diff", "--unified=0", `${baseRef}...HEAD`, "--", "src"],
      {
        cwd: root,
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      },
    );
  } catch {
    warn("Could not resolve added source lines; repository checks still ran.");
    return "";
  }
}

const diff = getAddedSourceLines();
let currentFile = null;

const faqExceptionPath = path.join(root, "scripts", "faq-standard-exceptions.json");
let faqExceptions = [];
try {
  const manifest = JSON.parse(fs.readFileSync(faqExceptionPath, "utf8"));
  faqExceptions = manifest.exceptions;
  if (!Array.isArray(faqExceptions)) throw new Error("exceptions must be an array");
} catch (error) {
  fail(`Could not read FAQ exception manifest: ${error.message}`);
}

const faqExceptionMap = new Map();
for (const exception of faqExceptions) {
  const file = normalizeSlashes(exception.file ?? "");
  if (!file.startsWith("src/pages/") || !exception.reason?.trim()) {
    fail(`FAQ exception requires a src/pages file and a reason: ${JSON.stringify(exception)}`);
    continue;
  }
  if (faqExceptionMap.has(file)) fail(`Duplicate FAQ exception: ${file}`);
  faqExceptionMap.set(file, exception.reason);
}

const faqMarker = /FAQPage|FaqSection|ReferenceFaq|compact-faq|faq-list|faq-item|faq-card|Vanliga frå[gG]or/i;
const activePageFiles = walk(path.join(root, "src", "pages"))
  .filter((file) => file.endsWith(".astro"))
  .filter((file) => !path.basename(file).startsWith("_"));
const activePageFaqFiles = new Set();

for (const file of activePageFiles) {
  const rel = normalizeSlashes(path.relative(root, file));
  const source = fs.readFileSync(file, "utf8");
  const usesSharedLayout = /<(?:ServiceLandingPage|ReferencePage|CameraIndustryPage)\b/.test(source);
  if (!faqMarker.test(source) && !usesSharedLayout) continue;
  activePageFaqFiles.add(rel);

  if (usesSharedLayout) continue;

  if (source.includes("<FaqSection")) {
    const faqIndex = source.indexOf("<FaqSection");
    const ctaIndex = Math.max(
      source.lastIndexOf("<PageCTA"),
      source.lastIndexOf("<ReferenceLegacyCta"),
    );
    if (ctaIndex < 0 || faqIndex > ctaIndex) {
      fail(`${rel}: FaqSection must appear before the final CTA.`);
    }
    continue;
  }

  if (!faqExceptionMap.has(rel)) {
    fail(`${rel}: FAQ page must use FaqSection/shared layout or have a documented migration exception.`);
  }
}

for (const [file, reason] of faqExceptionMap) {
  const absolute = path.join(root, file);
  if (!fs.existsSync(absolute)) {
    fail(`FAQ exception points to a missing page: ${file}`);
    continue;
  }
  if (!faqMarker.test(fs.readFileSync(absolute, "utf8"))) {
    fail(`Remove stale FAQ exception after migration: ${file}`);
  }
  if (!reason.trim()) fail(`FAQ exception must have a reason: ${file}`);
}

for (const rel of [
  "src/layouts/ServiceLandingPage.astro",
  "src/layouts/ReferencePage.astro",
  "src/layouts/CameraIndustryPage.astro",
]) {
  const absolute = path.join(root, rel);
  if (!fs.existsSync(absolute)) {
    fail(`Missing shared FAQ layout: ${rel}`);
    continue;
  }
  const source = fs.readFileSync(absolute, "utf8");
  const faqIndex = source.indexOf("<FaqSection");
  const ctaIndex = Math.max(
    source.lastIndexOf("<PageCTA"),
    source.lastIndexOf("<ReferenceLegacyCta"),
  );
  if (faqIndex < 0 || ctaIndex < 0 || faqIndex > ctaIndex) {
    fail(`${rel}: shared FAQ must use FaqSection before the final CTA.`);
  }
}

const faqComponentPath = path.join(root, "src", "components", "FaqSection.astro");
if (!fs.existsSync(faqComponentPath)) {
  fail("Missing shared FAQ source component: src/components/FaqSection.astro");
} else {
  const faqComponent = fs.readFileSync(faqComponentPath, "utf8");
  const schemaMap = /mainEntity:\s*items\.map\(/.test(faqComponent);
  const visibleMap = /\{items\.map\(/.test(faqComponent);
  const mobileStart = faqComponent.indexOf("@media (max-width: 768px)");
  const mobileStyles = mobileStart >= 0 ? faqComponent.slice(mobileStart) : "";
  if (!faqComponent.includes("Vanliga frågor")) fail("FaqSection must own the standard 'Vanliga frågor' eyebrow.");
  if (!faqComponent.includes("<details") || !faqComponent.includes("<summary>")) {
    fail("FaqSection must render the shared details/summary FAQ markup.");
  }
  if (!schemaMap || !visibleMap) fail("FaqSection must render visible FAQ and FAQPage schema from the same items array.");
  if (!/grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/.test(faqComponent)) {
    fail("FaqSection must use two FAQ columns by default.");
  }
  if (!/grid-template-columns:\s*minmax\(0,\s*1fr\)/.test(mobileStyles)) {
    fail("FaqSection must use one FAQ column at the mobile breakpoint.");
  }
  if (!faqComponent.includes("summary:focus-visible")) fail("FaqSection must retain a visible keyboard focus style.");
}

const localFaqVariantAddition = /(?:\.compact-faq\b|\.faq-list\b|\.faq-card\b|details\.faq-item|<details\b[^>]*class=["'][^"']*faq|<(?:div|section)\b[^>]*class=["'][^"']*(?:compact-faq|faq-list|faq-card)|@type["']?\s*:\s*["']FAQPage|class=["'][^"']*eyebrow["'][^>]*>\s*(?:FAQ|Vanliga frågor))/i;

for (const line of diff.split("\n")) {
  if (line.startsWith("+++ b/")) {
    currentFile = line.slice(6);
    continue;
  }

  if (!currentFile || !line.startsWith("+") || line.startsWith("+++")) continue;
  const added = line.slice(1);

  if (
    currentFile !== "src/components/FaqSection.astro" &&
    currentFile.startsWith("src/") &&
    localFaqVariantAddition.test(added)
  ) {
    fail(`${currentFile}: add FAQ markup and styling through FaqSection, not as a page-local variant.`);
  }

  if (added.includes("https://www.avab.eu")) {
    fail(`${currentFile}: new source code must use https://avab.eu/ instead of the www alias`);
  }

  const standardRoute = /^src\/pages\/(referenser|miljo|tjanster|kunskap|kameraovervakning)\/.+\.astro$/.test(currentFile);
  if (standardRoute && /<style(?:\s|>)/.test(added)) {
    fail(`${currentFile}: new page-specific <style> blocks are forbidden for standard page types`);
  }
}

if (warnings.length) {
  console.warn("\nGuardrail warnings:");
  for (const message of warnings) console.warn(`- ${message}`);
}

if (errors.length) {
  console.error("\nGuardrail validation failed:");
  for (const message of errors) console.error(`- ${message}`);
  process.exit(1);
}

console.log(`Guardrail validation passed for ${referenceFiles.length} reference content entries.`);
console.log(`FAQ guardrail checked ${activePageFaqFiles.size} active FAQ page sources and ${faqExceptionMap.size} documented legacy exceptions.`);
