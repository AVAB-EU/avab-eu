# Source coverage – Skolhagenskolan Täby

**Route:** `/referenser/skolhagenskolan-taby/`  
**Sidtyp:** Reference  
**Kundunderlag:** `Referens Skolhagen Stockholm Täby.docx`  
**Bildpaket:** `skolhagenskolan-taby-webp.zip`  
**Status:** Byggd som draft/noindex för teknisk och visuell granskning.

## Arkitektur

- Structured content: `src/content/references/skolhagenskolan-taby.md`
- Tunn route: `src/pages/referenser/skolhagenskolan-taby/index.astro`
- Renderer: befintlig `src/layouts/ReferencePage.astro`
- Visuell regressionreferens: `/referenser/saffle-simhall/`
- Ingen ny lokal CSS, layout eller sidspecifik komponent.

## Publiceringsstatus

- `draft: true`
- `seo.noindex: true`
- `customer.publicationApproved: null`

## Coverage-matris

| Kundunderlag | Implementerad plats | Status |
|---|---|---|
| URL `/referenser/skolhagenskolan-taby/` | slug + route | PASS |
| SEO-title | `seo.title` | PASS |
| Meta description | `seo.description` | PASS |
| H1 | `heroTitle` | PASS |
| Primära/geografiska sökfraser | naturligt fördelade över title, meta, H1, copy och FAQ | PASS |
| Hero + angiven alt-text | `heroImage` | PASS |
| Kunden sökte efter rastsignalsystem på Google och hittade AVAB | Story kapitel 1 + FAQ | PASS |
| Renoveringsbehov och modernisering av traditionell rastsignal | brief + kapitel 1 | PASS |
| SchoolBell som alternativ till traditionellt tidur | kapitel 1 + FAQ | PASS |
| AVAB levererade SchoolBell + 240 W Lab Gruppen 100 V | brief + scope + kapitel 4 + FAQ | PASS |
| Högtalare i elentreprenörens leverans | brief + scope + kapitel 4 + FAQ | PASS |
| Resultatet är mer än vanlig skolklocka | hero + results + story | PASS |
| Högtalare återger ljud; SchoolBell bestämmer vad/var/när | kapitel 1 och 4 | PASS |
| Komplett projektfakta | facts + `scope.projectFacts` + technicalDetails | PASS |
| Skolan byggd 1977 | kapitel 1 | PASS |
| Cirka 450 elever | kapitel 1 | PASS |
| Renovering 2025–sommaren 2027 | projectFacts + kapitel 1 | PASS |
| Modernisering när el/installationer ändå uppdateras | kapitel 1 | PASS |
| Traditionell klocka löser bara "ring vid viss tid" | kapitel 1 | PASS |
| Rastsignal som ljudhändelse vid rätt tid/plats/anledning | story-intro + kapitel 1 | PASS |
| Funktion först – inte fabrikat | kapitel 1 | PASS |
| Traditionell/mjuk signal, musik, talat meddelande, olika situationer | kapitel 1 | PASS |
| SchoolBell håller reda på ljud, tider, dagar, zoner och manuella funktioner | kapitel 1 + technicalDetails | PASS |
| Systemstatus i samma gränssnitt | kapitel 3 | PASS |
| Touchskärm och menyer Hem/Ljudklipp/Schema/Historik/Inställningar | kapitel 1 | PASS |
| Komplexitet bakom gränssnittet | kapitel 1 | PASS |
| Systemstatus, master/slav, lovläge, live mikrofon, Alla in/Alla ut | kapitel 3 + bild | PASS |
| Schema som viktig huvudfunktion | kapitel 2 | PASS |
| Ljud, veckodag, tid och zon | kapitel 2 + technicalDetails | PASS |
| Olika grupper kan ha olika tider | kapitel 2 + FAQ | PASS |
| Olika dagar / sluttider / temadagar / studiedagar | kapitel 2 | PASS |
| Egna ljudklipp, uppladdning/inspelning och namngivning | kapitel 2 + FAQ | PASS |
| Exempel Lågstadiet/Mellanstadiet/Högstadiet in | kapitel 2 + results + FAQ | PASS |
| Lovläge pausar schema utan radering/avstängning | kapitel 2 + FAQ | PASS |
| Snabbknappar när verkligheten inte följer schemat | kapitel 2 | PASS |
| Alla in / Alla ut | kapitel 2 + technicalDetails | PASS |
| Automatik + manuell kontroll | kapitel 2 + results | PASS |
| Live mikrofon / direkt information | kapitel 3 + FAQ | PASS |
| Praktisk info, förändringar, kalla in elever | kapitel 3 | PASS |
| Automatiserat rastsignalsystem + manuellt utropssystem | kapitel 3 | PASS |
| Zonval Skola/Sporthall/Alla zoner | projectFacts + kapitel 3 + results + FAQ | PASS |
| Meddelande till sporthall stör inte automatiskt skolan | kapitel 3 | PASS |
| Flera byggnader, huvudbyggnad/sporthall/annex/paviljong | kapitel 3 + technicalDetails + FAQ | PASS |
| Slav-enhet online / status för sammankopplade enheter | kapitel 3 | PASS |
| Historik för felsökning/service/kontroll | kapitel 3 + technicalDetails | PASS |
| 100 V-princip för distribuerat skolljud | kapitel 4 + FAQ | PASS |
| Många högtalare/längre avstånd/effektuttag | kapitel 4 | PASS |
| Proel hornhögtalare och riktat tal/signal | kapitel 4 + bild | PASS |
| SchoolBell och förstärkare har olika uppgifter | kapitel 4 | PASS |
| Kedjan SchoolBell → förstärkare → 100 V-högtalare | kapitel 4 | PASS |
| AVAB behöver inte leverera alla högtalare | kapitel 4 + FAQ | PASS |
| AVAB: SchoolBell, integration, styrning, förstärkning, konfiguration, programmering, driftsättning | scope + kapitel 4 | PASS |
| Återanvänd befintligt 100 V-system när lämpligt | kapitel 4 + relevance | PASS |
| Det är ofta styrningen som är omodern | kapitel 4 | PASS |
| Gamla tidur/få signaler/svår programmering/ingen zon/live/status | kapitel 4 | PASS |
| Relevant vid både nyproduktion och renovering | kapitel 4 + relevance | PASS |
| Normal schemaläggning lokalt | kapitel 4 + technicalDetails + FAQ | PASS |
| Nätverk för kommunikation/admin/synk/service/uppdatering | kapitel 4 + technicalDetails | PASS |
| Personal ska kunna ändra vardagsfunktioner själv | kapitel 4 + relevance | PASS |
| Tekniska inställningar och vardagsanvändning separeras | kapitel 4 | PASS |
| Utbyggnad med zoner/byggnader/sporthall/paviljong/högtalare/förstärkning/scheman | kapitel 4 + technicalDetails | PASS |
| Rastsignal är inte samma sak som talat utrymningslarm | kapitel 4 + relevance + FAQ | PASS |
| Samtliga "Vad Skolhagenskolan visar"-punkter | results + relevance | PASS |
| Samtliga FAQ-frågor/svar | `faq.items` | PASS |
| AEO/GEO-snippets | täcks semantiskt av FAQ + story + technicalDetails | PASS |
| Bildordning och samtliga 6 kundbilder | hero + story mediaGroups | PASS |
| Internlänk Rastsignal | projectFacts + relatedCompetence + CTA | PASS |
| Internlänk Skola | relatedCompetence | PASS |
| Internlänk Ljudsystem | relatedCompetence | PASS |
| 100 V-ljudsystem | behandlas i kapitel 4 + FAQ; ingen separat verifierad route finns | PASS |
| Fler skolreferenser | referenslistning/arkitektur; ingen påhittad specifik länk | PASS |
| CTA: modernisera rastsignal / återanvänd fungerande högtalarsystem | PageCTA | PASS |
| Inventering, projektering, SchoolBell, zonstyrning, 100 V, integration, programmering, driftsättning | PageCTA | PASS |
| Slutbudskap: från Google-sökning till gemensam plattform | story + CTA | PASS |
| Slutbudskap: mer än att ersätta gammal skolklocka | hero + results + CTA | PASS |

## Extern faktaverifiering

### Täby kommun – Renovering av Skolhagenskolan
https://www.taby.se/stadsplanering-och-trafik/stadsplanering-och-utbyggnad/utvecklingsprojekt-och-byggnation/ovriga-byggprojekt/renovering-av-skolhagenskolan

Verifierar:
- byggstart kvartal 1 2025,
- arbetet beräknas pågå till sommaren 2027,
- omfattande renovering av skola/bibliotek/gymnastiksal/storkök och tekniska installationer.

### Täby kommun – beslutsunderlag
https://doc.taby.se/handlingar/Kommunfullm%C3%A4ktige/2024/2024-04-08/Handlingar/11.2%20Tj%C3%A4nsteutl%C3%A5tande%20KS.pdf

Verifierar:
- Skolhagenskolan byggdes 1977,
- kommunal högstadieskola,
- cirka 450 elever,
- omfattande renoveringsbehov.

SchoolBell-specifika projektfunktioner, utrustning och ansvarsfördelning kommer från kundens projektunderlag och de faktiska systembilderna som levererats för referensen.

## Bildcoverage

Alla sex kundbilder används, utan placeholders:

| Asset | Roll |
|---|---|
| `skolhagenskolan-taby-hero.webp` | Hero + archive |
| `skolhagenskolan-schoolbell-touchskarm-ljudklipp.webp` | Kapitel 1 |
| `skolhagenskolan-schoolbell-schema-rastsignaler.webp` | Kapitel 2 |
| `skolhagenskolan-schoolbell-egna-ljudklipp.webp` | Kapitel 2 |
| `skolhagenskolan-schoolbell-systemstatus-lovlage-snabbknappar.webp` | Kapitel 3 |
| `skolhagenskolan-proel-hornhogtalare.webp` | Kapitel 4 |

## Source deviations

**SOURCE DEVIATIONS: 0**

Den äldre interna arbetslänken `/referenser/skolhagen-stockholm/` har däremot ersatts med den nya kundspecificerade canonical-routen `/referenser/skolhagenskolan-taby/`. Detta är ett routingbeslut, inte en innehållsavvikelse.

## Slutkontroll före build

SOURCE COVERAGE

- Visible content: PASS
- SEO / metadata: PASS
- Technical facts: PASS
- Process / scope: PASS
- Results / proof: PASS
- FAQ: PASS
- Internal links: PASS
- Image mapping: PASS
- Schema/content model: PASS
- Template/structure: PASS

**MISSING SOURCE INFORMATION: 0**  
**SOURCE DEVIATIONS: 0**  
**UNVERIFIED CLAIMS: 0**

## Tekniska kontroller

- Astro/schema/build: väntar på PR-validering.
- Browser-QA desktop/tablet/mobil: kräver mänsklig visuell granskning före publicering.
