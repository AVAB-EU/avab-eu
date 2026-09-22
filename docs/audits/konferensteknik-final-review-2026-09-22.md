# Konferensteknik – slutreview 2026-09-22

## Status

**NO-GO för indexering ännu.**

Sidan är tekniskt strukturerad i den gemensamma `ServiceLandingPage`-arkitekturen och nuvarande remote/legacy-källor ger inga blockerande unsupported claims. Däremot är det ursprungliga kundunderlaget `Konferensteknik.docx` inte åtkomligt via aktuellt repo eller Google Drive, så den obligatoriska slutliga source-coverage-gaten kan inte stängas helt.

## Kontrollerat

- Route: `/tjanster/konferensteknik/`
- `draft: true`
- `seo.noindex: true`
- canonical genereras från `data.slug`
- Service schema, Breadcrumb schema och FAQ schema genereras i gemensam layout
- hero, factband, sektioner, proof, FAQ och avslutande PageCTA använder gemensam renderer
- verifierade interna källor: Kontor & konferens, Lesjöfors AB, Hanza, mikrofoner och styrsystem
- kompletterande äldre AVAB-källa från Drive/llms-export verifierar kärnområdena mikrofon, kamera, hörslinga, TV/skärm och projektor

## Avvikelse som rättades i review

Den äldre AVAB-källan nämner hörslinga uttryckligen som del av konferensteknik. Första structured draften saknade ämnet helt.

Åtgärd:
- hörslinga/tillgänglighet tillagd i tjänstens principer
- hörslinga/tillgänglighet tillagd i projekteringsscope
- FAQ kompletterad med fråga om hörslinga i konferensrum

## Source coverage

Visible content: **PASS mot verifierade remote/legacy-källor**  
SEO / metadata: **PASS tekniskt**  
Technical facts: **PASS mot repo-källor**  
Process / scope: **PASS**  
Results / proof: **PASS**  
FAQ: **PASS**  
Internal links: **PASS enligt senaste sitewide audit**  
Image mapping: **PASS – befintliga verifierade repo-assets**  
Schema: **PASS tekniskt**  
Template/structure: **PASS**

**MISSING SOURCE INFORMATION: okänt mot kundens DOCX**  
**SOURCE DEVIATIONS: 1 rättad – hörslinga saknades i första draften**  
**UNVERIFIED CLAIMS: 0 identifierade i remote/legacy-granskningen**

## Blockerare före publicering

En av följande krävs:

1. Originalfilen `Konferensteknik.docx` görs åtkomlig och jämförs punkt för punkt mot sidan, eller
2. kunden godkänner uttryckligen att nuvarande sida + verifierade repo/legacy-källor ersätter DOCX-gaten.

Först därefter får `draft:false` och `seo.noindex:false` sättas.
