# Konferensteknik – slutreview 2026-09-22

## Status

**GO för publicering, under förutsättning att PR-build och guardrails passerar.**

Originalfilen `Konferensteknik.docx` har nu laddats upp och jämförts punkt för punkt mot sidan. Structured content har byggts om så att kundunderlagets innehåll, SEO-riktning och sidroll bevaras.

## Viktigaste ändringarna

- SEO-title, meta description och H1 följer kundunderlaget.
- Hero-intro och CTA:er följer kundunderlaget.
- Sex kompetensområden visas direkt efter hero via factband.
- Sidan har byggts ut från en kort service-draft till den teknik- och lösningsorienterade navsida som underlaget beskriver.
- Hörslinga/tillgänglighet, beamforming, delayhögtalare, Teams Rooms/BYOD/BYOM, AV-over-IP/Dante, akustik, modernisering, standardisering, drift/service, mötes-AI samt streaming/inspelning ingår.
- Verkliga installationsexempel från kundunderlaget är införda.
- FAQ:n täcker samtliga huvudfrågor från källan.
- Gränsdragningen mot `/miljo/kontor-konferens/` är bevarad: miljösidan äger användningsmiljön, tjänstesidan äger konferenssystemets teknik och projektering.

## Source coverage

Visible content: **PASS**  
SEO / metadata: **PASS**  
Technical facts: **PASS**  
Process / scope: **PASS**  
Results / proof: **PASS**  
FAQ: **PASS**  
Internal links: **PASS**  
Image mapping: **PASS – befintliga repo-assets används**  
Schema: **PASS tekniskt**  
Template/structure: **PASS**

**MISSING SOURCE INFORMATION: 0**  
**SOURCE DEVIATIONS: 0**  
**UNVERIFIED CLAIMS: 0 identifierade från kundunderlaget**

## Publiceringsstatus

- `draft: false`
- `seo.noindex: false`

Nästa gate är CI: Astro build + AVAB guardrails. Efter grön merge ska sidan följas upp i sitemap och Search Console.
