# Source coverage – Loka Brunn

**Route:** `/referenser/loka-brunn/`  
**Sidtyp:** Reference, compact  
**Status:** Draft/noindex  
**Source audit input:** lokalt `docs/source-material/Konferensteknik.docx` samt befintligt referenskort i `src/pages/tjanster/styrsystem-integration/index.astro`.

## Källläge

Det finns inget dedikerat fullständigt `Referens Loka Brunn.docx`. Sidan är därför medvetet kort och använder endast de uppgifter som faktiskt finns i de två identifierade källorna.

Kund/beställare är inte angiven i underlaget och visas därför inte publikt.

## Traceability

| Source fact | Classification | Implementation | Evidence | Status |
|---|---|---|---|---|
| AVAB har byggt konferensteknik på Loka Brunn | REQUIRED SOURCE FACT | summary + brief | "AVAB har byggt konferensteknik på Loka Brunn" | PASS |
| Betydligt större sal | REQUIRED SOURCE FACT | hero + brief | "konferensteknik för en större sal" | PASS |
| Cirka sex meter bred projektorduk | REQUIRED SOURCE FACT | facts + scope + technicalDetails | "Cirka 6 meter bred projektorduk" | PASS |
| Projektor | REQUIRED SOURCE FACT | brief + scope + technicalDetails | "Projektor" | PASS |
| Ljudsystem | REQUIRED SOURCE FACT | brief + scope + technicalDetails | "Ljudsystem" | PASS |
| Delayhögtalare under balkongen | REQUIRED SOURCE FACT | brief + scope + technicalDetails | "Delayhögtalare under balkongen" | PASS |
| Bose EX-1280 | REQUIRED SOURCE FACT | facts + scope + technicalDetails | "Bose ControlSpace EX-1280" | PASS |
| Crestron HDBaseT | REQUIRED SOURCE FACT | scope + projectFacts + technicalDetails | "Crestron HDBaseT" | PASS |
| Crestron CP4 | REQUIRED SOURCE FACT | facts + scope + projectFacts + technicalDetails | "Crestron CP4" | PASS |
| 7-tums touchpanel | REQUIRED SOURCE FACT | brief + scope + projectFacts + technicalDetails | "7-tums touchpanel" | PASS |
| Motoriserad duk | REQUIRED SOURCE FACT | scope + gallery + technicalDetails | "Motoriserad duk" | PASS |
| Ljusstyrning | REQUIRED SOURCE FACT | scope + gallery + technicalDetails | "Ljusstyrning" | PASS |
| Mikrofoner | REQUIRED SOURCE FACT | scope + technicalDetails | "Mikrofoner" | PASS |
| Hörslinga | REQUIRED SOURCE FACT | scope + technicalDetails | "Hörslinga" | PASS |
| Konferens/spa i befintligt referenskort | STRUCTURAL/COPY INPUT | archive/environment | Spa används inte som projektspecifik teknikclaim | PASS |

## Avsiktligt utelämnat

Följande har inte fabricerats eftersom källmaterialet inte anger det:

- beställare/kundrelation
- projektdatum
- exakt projektomfattning utöver dokumenterade teknikdelar
- verifierade effekter/resultat
- detaljerad story
- projektspecifik FAQ
- produktdata utöver modellnamn
- publiceringsgodkännande

## Assets

- `/assets/konferensteknik-loka-brunn-projektorduk-ljud.webp` – 2048 × 956
- `/assets/victoriasalen-lokabrunn-konferens.webp` – 1200 × 900

Ingen placeholder eller AI-genererad ersättningsbild används.

## Slutgates

**MISSING REQUIRED SOURCE FACTS: 0**  
**UNSUPPORTED PROJECT CLAIMS: 0**  
**MATERIAL SOURCE DEVIATIONS: 0**  
**UNVERIFIED CLAIMS: 0**  
**MISSING REMOTE ASSETS: 0**

## Publiceringsgate

Sidan ska förbli:

- `draft: true`
- `seo.noindex: true`
- `customer.publicationApproved: null`

tills mänsklig granskning och separat publiceringsbeslut är klart.
