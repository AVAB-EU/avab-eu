# Source coverage – Konferensteknik

**Route:** `/tjanster/konferensteknik/`  
**Sidtyp:** Service  
**Kanoniskt facit:** `https://avab.eu/tjanster/horslinga/`  
**Status:** Draft/noindex

## Tillgängliga källor i denna körning

- `src/pages/miljo/kontor-konferens/index.astro`
- `src/content/references/lesjofors-ab.md`
- `src/content/references/hanza-konferens-tocksfors.md`
- `src/pages/tjanster/styrsystem-integration/index.astro`
- `src/pages/tjanster/mikrofoner/index.astro`
- Befintliga AVAB-assets för konferensmiljöer

**LOCAL SOURCE CHECK PENDING:** `C:\webbprojekt\avab-eu\docs\source-material\Konferensteknik.docx` är fortfarande inte tillgänglig via repo/Drive-anslutning. En kompletterande kontroll har därför gjorts mot äldre AVAB-källor i Google Drive, inklusive sitemap/llms-export där den äldre konferenstekniksidan uttryckligen beskriver mikrofon, kamera, hörslinga, TV/skärm och projektor.

## Claims audit

Sidan återanvänder endast servicefakta som redan finns publicerade/strukturerade i AVAB-repot:

- hybridmöten med skärm, kamera, mikrofoner och högtalare
- DSP och AEC för större rum
- BYOM / egen dator
- USB-C och trådlös presentation
- styrning med bland annat Crestron/Q-SYS
- tidig projektering av kabelvägar, el, nätverk och placering
- Lesjöfors AB som verifierad konferensreferens
- äldre AVAB-källa verifierar även hörslinga som del av konferensteknikens erbjudande; detta saknades i första draften och är nu återinfört i sidan

Inga nya kundspecifika resultat, priser, mätvärden eller produktantal har lagts till.

## Gates

**UNSUPPORTED PROJECT CLAIMS: 0**  
**MATERIAL SOURCE DEVIATIONS: 0**  
**MISSING REMOTE ASSETS: 0**  
**LEGACY SOURCE CHECK: PASS**
**LOCAL CUSTOMER DOCX CHECK: PENDING**

## Publiceringsgate

- `draft: true`
- `seo.noindex: true`

Slutlig source-jämförelse mot lokal `Konferensteknik.docx` krävs fortfarande före publicering. Build/struktur kan valideras nu, men sidan ska inte göras indexerbar förrän kundunderlaget är åtkomligt eller kunden uttryckligen godkänner nuvarande innehåll som ersättning för DOCX-gaten.
