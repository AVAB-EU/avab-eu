export const SITE_URL = "https://avab.eu";

type PhoneNumber = {
  display: string;
  e164: string;
  href: `tel:${string}`;
};

function phone(display: string, e164: string): PhoneNumber {
  return {
    display,
    e164,
    href: `tel:${e164}`,
  };
}

export const AVAB_PHONE = {
  main: phone("054 820 20 80", "+46548202080"),
  direct: {
    "81": phone("054 820 20 81", "+46548202081"),
    "82": phone("054 820 20 82", "+46548202082"),
    "85": phone("054 820 20 85", "+46548202085"),
  },
} as const;

export function absoluteUrl(path: string): string {
  return new URL(path, `${SITE_URL}/`).toString();
}
