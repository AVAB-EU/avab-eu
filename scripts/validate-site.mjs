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

  if (!draftMatch) {
    fail(`${rel}: missing explicit draft: true|false`);
  }

  if (draftMatch?.[1] === "false" && approvalMatch?.[1] !== "true") {
    fail(`${rel}: published reference requires customer.publicationApproved: true`);
  }

  for (const match of source.matchAll(/^\s*src:\s*['"]?([^'"\n]+)['"]?\s*$/gm)) {
    const src = match[1].trim();
    if (!publicAssetExists(src)) {
      fail(`${rel}: local image does not exist in public/: ${src}`);
    }
  }
}

function getAddedSourceLines() {
  const base = process.env.GITHUB_BASE_REF || "main";
  const candidates = [`origin/${base}`, base];

  for (const candidate of candidates) {
    try {
      return execFileSync(
        "git",
        ["diff", "--unified=0", `${candidate}...HEAD`, "--", "src", "docs", "AGENTS.md", "CLAUDE.md", "TODO.md"],
        {
          cwd: root,
          encoding: "utf8",
          stdio: ["ignore", "pipe", "ignore"],
        },
      );
    } catch {}
  }

  warn("Could not resolve base ref for added-line checks; repository checks still ran.");
  return "";
}

const diff = getAddedSourceLines();
let currentFile = null;

for (const line of diff.split("\n")) {
  if (line.startsWith("+++ b/")) {
    currentFile = line.slice(6);
    continue;
  }

  if (!currentFile || !line.startsWith("+") || line.startsWith("+++")) continue;
  const added = line.slice(1);

  if (added.includes("https://www.avab.eu")) {
    fail(`${currentFile}: new content must use https://avab.eu/ instead of the www alias`);
  }

  const standardRoute = /^src\/pages\/(referenser|miljo|tjanster|kunskap)\/.+\.astro$/.test(currentFile);
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
