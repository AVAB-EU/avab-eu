import { readdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const REVIEW_HOSTS = new Set(["test2.avab.eu"]);
const ROBOTS_META = '<meta name="robots" content="noindex, nofollow, noarchive">';
// Crawlers must be allowed to read the HTML in order to observe its noindex tag.
const ROBOTS_FILE = "User-agent: *\nAllow: /\n";

async function findHtmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const path = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, directory);
      if (entry.isDirectory()) return findHtmlFiles(path);
      return entry.isFile() && entry.name.endsWith(".html") ? [path] : [];
    }),
  );

  return files.flat();
}

function protectHtml(html) {
  const robotsTag = /<meta\b(?=[^>]*\bname=(["'])robots\1)[^>]*>/i;
  if (robotsTag.test(html)) return html.replace(robotsTag, ROBOTS_META);
  return html.replace(/<head>/i, `<head>${ROBOTS_META}`);
}

export function reviewEnvironmentNoindex({ deploymentUrl }) {
  const deploymentHost = new URL(deploymentUrl).hostname.toLowerCase();
  const protectReviewBuild = REVIEW_HOSTS.has(deploymentHost);

  return {
    name: "review-environment-noindex",
    hooks: {
      "astro:build:done": async ({ dir, logger }) => {
        if (!protectReviewBuild) return;

        const htmlFiles = await findHtmlFiles(dir);
        await Promise.all(
          htmlFiles.map(async (file) => {
            const html = await readFile(file, "utf8");
            await writeFile(file, protectHtml(html), "utf8");
          }),
        );

        await writeFile(fileURLToPath(new URL("robots.txt", dir)), ROBOTS_FILE, "utf8");
        logger.info(
          `Protected ${htmlFiles.length} generated pages from indexing on ${deploymentHost}.`,
        );
      },
    },
  };
}
