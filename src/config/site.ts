export const SITE_URL = "https://avab.eu";

export function absoluteUrl(path: string): string {
  return new URL(path, `${SITE_URL}/`).toString();
}
