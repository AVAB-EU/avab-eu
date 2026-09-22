# Source coverage – Nätverk, switchar & fiber

**Route:** `/tjanster/natverk-switchar-router-fiber/`  
**Sidtyp:** Service  
**Kanoniskt facit:** `/tjanster/horslinga/`  
**Status:** Published/indexable

## Källor

- `src/pages/kunskap/kablar-kontakter/index.astro`
- `src/pages/tjanster/visuell-kommunikation/index.astro`
- `src/pages/tjanster/styrsystem-integration/index.astro`
- `src/content/references/lesjofors-ab.md`

## Verifierade kärnpunkter

- nätverkskabel används för PoE, kamera, Dante, AES67, styrsystem, AV-over-IP, signage och touchpaneler
- kopparnätverk har normalt 100 meter maximal kanallängd
- fiber används vid längre avstånd eller när galvanisk separation/störmiljö motiverar det
- PoE kräver dimensionering av switchens effektbudget
- AV-over-IP kräver planering av bandbredd, multicast och VLAN där plattformen kräver det
- Lesjöfors AB använder Q-SYS, AEC och Dante i konferenssystemet

## Avgränsning

Sidan beskriver nätverksinfrastruktur för professionell AV. Den gör inga påståenden om konsumentrouterprodukter, Wi-Fi-täckningsgarantier, specifika switchmodeller eller andra produktval som inte finns verifierade i source.

## Gates

**UNSUPPORTED PROJECT CLAIMS: 0**  
**MATERIAL SOURCE DEVIATIONS: 0**  
**UNVERIFIED PRODUCT CLAIMS: 0**  
**MISSING REMOTE ASSETS: 0**

## Publiceringsgate

- `draft: false`
- `seo.noindex: false`
- sidan är indexerbar i aktuell `main`
