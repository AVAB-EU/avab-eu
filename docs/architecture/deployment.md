# Produktion och deployment

```text
Status: Active
Owner: Go-live
Last reviewed: 2026-08-23
Replaces: —
```

## Source of truth

- `AVAB-EU/avab-eu` är projektets gemensamma GitHub source of truth.
- Git-remoten `origin` är det aktiva repot. `legacy` ska inte användas för nytt arbete eller deployment.
- Den kanoniska publika domänen är `https://avab.eu/`. `www.avab.eu` är endast ett server-/DNS-hanterat alias och ska inte användas som canonical.

## Produktionsflöde

`.github/workflows/deploy.yml` triggas av en push till `main`, bygger Astro med `DEPLOYMENT_URL=https://avab.eu/` och laddar upp innehållet i `dist/` via FTP. En merge till `main` ger en push och startar därför samma flöde.

Produktionskontot är låst i cPanel till webbplatsens produktionsroot. Eftersom FTP-kontot redan startar i denna webbroot ska workflowets `server-dir` vara `/`.

Workflowet använder följande parametrar:

- server: `${{ secrets.FTP_HOST }}`
- användare: `${{ secrets.FTP_USERNAME }}`
- lösenord: `${{ secrets.FTP_PASSWORD }}`
- protokoll: `ftp`
- port: `21`
- lokal katalog: `dist/`
- serverkatalog: `/`

## GitHub Secrets

Workflowet kräver dessa GitHub Actions-secrets:

- `FTP_HOST`
- `FTP_USERNAME`
- `FTP_PASSWORD`

Endast secret-namnet dokumenteras. Värdet ska aldrig lagras i repot eller visas i loggar.

## Produktion kontra review/test

Astros produktionsfallback och workflowets explicita `DEPLOYMENT_URL` är `https://avab.eu/`. Det styr bland annat sitemapens absoluta URL:er.

Reviewmiljön `test2.avab.eu` är uttryckligen registrerad i `scripts/review-environment-noindex.mjs`. Ett bygge med `DEPLOYMENT_URL=https://test2.avab.eu` får generell `noindex`; ett produktionsbygge för `avab.eu` får inte detta reviewskydd. Referenssidornas separata draft-/`seo.noindex`-logik är oberoende och ska bevaras enligt publiceringsbeslutet.

Host-redirects, verklig webbroot och servertyp verifieras separat enligt [`wordpress-redirects.md`](wordpress-redirects.md).
