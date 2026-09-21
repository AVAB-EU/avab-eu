# Source coverage – Stockfallets skola Karlstad

**Route:** `/referenser/stockfallets-skola-karlstad/`  
**Sidtyp:** Reference  
**Kundunderlag:** `Referens Stockfallets skola.docx`  
**Bildpaket:** `stockfallets-skola-webp-bilder.zip`  
**Status:** Byggd som draft/noindex. Visuell QA blockeras tills de fyra kundbilderna är trackade i repot.

## Arkitektur

- Structured content: `src/content/references/stockfallets-skola-karlstad.md`
- Tunn route: `src/pages/referenser/stockfallets-skola-karlstad/index.astro`
- Renderer: befintlig `src/layouts/ReferencePage.astro`
- Visuell regressionreferens: `/referenser/saffle-simhall/`
- Ingen lokal CSS eller ny sidspecifik komponent.

## Publiceringsstatus

- `draft: true`
- `seo.noindex: true`
- `customer.publicationApproved: null`

## Canonical-beslut

Kundens DOCX föreslår `/referenser/stockfallets-skola/`, men projektets låsta 13-sidorsmanifest och befintliga interna länkar använder:

`/referenser/stockfallets-skola-karlstad/`

Den längre routen behålls för konsekvens och för att undvika att skapa ännu en URL-princip mitt i projektet.

## Coverage-matris

| Kundunderlag | Implementerad plats | Status |
|---|---|---|
| SEO-title | `seo.title` | PASS |
| Meta description | `seo.description` | PASS |
| H1 | `heroTitle` | PASS |
| Primära/geografiska sökfraser | title/meta/H1/story/FAQ | PASS |
| Två olika ljudlösningar i samma projekt | hero + brief + story kapitel 1 | PASS |
| Rastsignal utomhus: återkommande signaler + manuella utrop | brief + scope + story + results + FAQ | PASS |
| Sporthall: idrott, musik, mikrofon, förening, arrangemang | story kapitel 2–4 | PASS |
| Delbar hall med ridåvägg | story kapitel 2 + results + FAQ | PASS |
| Automatisk zonväxling som följer ridåväggen | facts + scope + story kapitel 2 + results + technicalDetails + FAQ | PASS |
| Projektfakta: Stockfallets skola / Karlstad / SP-Gruppen AB | facts + projectFacts | PASS |
| AUDAC MFA216 | scope + story + technicalDetails + FAQ | PASS |
| AUDAC FMP40 | scope + story + technicalDetails + FAQ | PASS |
| AUDAC PDM200 | scope + story + technicalDetails + FAQ | PASS |
| 3 × AUDAC CHA530 | scope + story + results + technicalDetails + FAQ | PASS |
| Bose ControlSpace ESP-880 | scope + story + technicalDetails + FAQ | PASS |
| 4 × Electro-Voice ZLX-15BT | scope + story + technicalDetails + FAQ | PASS |
| Sennheiser EW100 G4 | scope + story + technicalDetails + FAQ | PASS |
| 2 lokala AUDAC-paneler med AUX/Bluetooth/mikrofon | scope + story + technicalDetails | PASS |
| Funktionen bestämmer tekniken | story kapitel 1 + relevance | PASS |
| Modernt rastsignalsystem kan spela andra ljud än klockringning | story kapitel 1 + FAQ | PASS |
| Utomhusljud kräver projektering för ytan/riktning | story kapitel 1 | PASS |
| Sporthall som stor efterklangsrik miljö | story kapitel 2–3 | PASS |
| Helsal eller två separata verksamheter | story kapitel 2 + FAQ | PASS |
| DSP hanterar routing/nivå/signalbehandling bakom enkel användning | story kapitel 2 | PASS |
| Komplexiteten i programmeringen – inte hos användaren | story kapitel 2 | PASS |
| Aktiva ZLX-15BT / integrerad förstärkning | story kapitel 3 + technicalDetails + FAQ | PASS |
| Högtalarplacering viktigare än bara hög nivå | story kapitel 3 + relevance | PASS |
| Direktljud mot aktivitetsytor / undvik tak och hårda ytor | story kapitel 3 | PASS |
| Montage på höjd / skydd / kastavstånd / riktning | story kapitel 3 | PASS |
| Byggskedet ger bättre samordning av montage, kabel, el | story kapitel 3 | PASS |
| Fästen, riktning, kabeldragning och serviceåtkomst | story kapitel 3 | PASS |
| Lokala paneler på respektive hallsida | story kapitel 4 | PASS |
| Bluetooth, AUX och mikrofon där verksamheten finns | story kapitel 4 + results + relevance + FAQ | PASS |
| Telefon som vanlig ljudkälla / enkel vardagsanvändning | story kapitel 4 | PASS |
| Professionell teknik bakom enkel funktion | story kapitel 4 | PASS |
| Trådlös mikrofon för undervisning/samling/speaker/tävling/uppvisning | story kapitel 4 + FAQ | PASS |
| Skola dagtid, föreningsliv efter skoltid | story kapitel 4 | PASS |
| Två separata system i samma skolprojekt | story + results + relevance | PASS |
| Automatisering förenklar skolvardagen | relevance | PASS |
| Rastsignal kan också användas för information | relevance | PASS |
| Delbar sporthall behöver delbart ljud | relevance | PASS |
| Lokal anslutning är viktig | relevance | PASS |
| Rätt högtalarplacering viktigare än fler högtalare | relevance | PASS |
| Flera användartyper utan specialkunskap | results + relevance | PASS |
| Hörslinga ingick inte i slutlig leverans | technicalDetails + relevance + FAQ | PASS |
| Rastsignal är inte talat utrymningslarm | technicalDetails + relevance + FAQ | PASS |
| Samtliga FAQ-frågor/svar | `faq.items` | PASS |
| AEO/GEO-frågorna | täcks av FAQ/story/projectFacts | PASS |
| CTA och slutbudskap | PageCTA | PASS |
| Internlänk Rastsignal | projectFacts + relatedCompetence + CTA | PASS |
| Internlänk Skola | relatedCompetence | PASS |
| Internlänk Sporthall & arena | relatedCompetence | PASS |
| Internlänk Ljudsystem | relatedCompetence | PASS |
| Internlänk Mikrofoner | relatedCompetence | PASS |
| Befintlig Rastsignal-länk till referensen | dead-link-kommentar borttagen och kortcopy korrigerad | PASS |

## Extern produktverifiering

### AUDAC MFA216
https://audac.eu/eu/products/s/by-category/amplifiers/non-network-control-amplifiers/commercial-amplifiers/commercial-all-in-one-amplifiers/mfa-series

Verifierar att MFA216 är en all-in-one-ljudlösning med 160 W vid 70/100 V.

### AUDAC FMP40
https://audac.eu/eu/products/d/fmp40---sourcecon-voice-file-media-player-module

Verifierar ljudfiluppspelning och programmerbara timer-/triggerfunktioner.

### AUDAC PDM200
https://audac.eu/eu/products/d/pdm200---paging-microphone

Verifierar PDM200 som paging-/svanhalsmikrofon för meddelanden.

### AUDAC CHA530
https://audac.eu/eu/products/d/cha530---2-way-horn-loudspeaker-5inch

Verifierar CHA530 som IP66-klassad 2-vägs hornhögtalare med 70/100 V-transformator för inom-/utomhusbruk.

### Electro-Voice ZLX-15BT
Officiellt Electro-Voice datablad.

Verifierar ZLX-15BT som aktiv/powered 15-tums tvåvägshögtalare med Bluetooth.

### Sennheiser EW 100 G4
Officiell Sennheiser-produktdokumentation.

Verifierar EW 100 G4 som professionell trådlös mikrofonfamilj.

## Bildcoverage

Kundpaketet innehåller fyra färdiga sporthallsbilder:

| Asset | Roll |
|---|---|
| `stockfallets-skola-sporthall-oversikt-delbar-hall.webp` | Hero + archive + story |
| `stockfallets-skola-sporthall-planritning.webp` | Delbar hall / zonlogik |
| `stockfallets-skola-sporthall-hogtalarmontage-lift.webp` | Montage på höjd |
| `stockfallets-skola-sporthall-hogtalare-detaljmontage.webp` | Detaljmontage |

Kundunderlaget säger uttryckligen att rastsignalsystemet senare bör kompletteras med minst tre bilder:
- översikt av CHA530 på skolgården,
- närbild på utomhushögtalare,
- centralenhet/mikrofon inomhus.

**Ingen placeholder används nu.** Sidan byggs med det faktiska material som finns och kan kompletteras senare när rastsignalbilderna levereras.

## Remote asset blocker

Vid byggstart finns de fyra Stockfallet-bilderna i kundens ZIP, men de är **inte trackade på GitHub main**.

Följande filer måste läggas till på arbetsbranchen före merge/publicering:

- `public/assets/stockfallets-skola-sporthall-oversikt-delbar-hall.webp`
- `public/assets/stockfallets-skola-sporthall-planritning.webp`
- `public/assets/stockfallets-skola-sporthall-hogtalarmontage-lift.webp`
- `public/assets/stockfallets-skola-sporthall-hogtalare-detaljmontage.webp`

Detta är en asset-blocker, inte ett innehållsbortfall.

## Source deviations

**SOURCE DEVIATIONS: 0**

Kundens kortare URL-förslag har inte använts eftersom projektets redan låsta canonical-route och befintliga interna länk är `/referenser/stockfallets-skola-karlstad/`.

## Slutkontroll före asset-upload/build

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
**MISSING REMOTE ASSETS: 4**

## Nästa gate

1. Lägg de fyra kundbilderna i `public/assets` på arbetsbranchen.
2. Kör `npm run validate`.
3. Kontrollera renderad sida i dev-server desktop + mobil.
4. Bekräfta att rastsignalens saknade framtida bilder inte representeras av placeholders.
5. Mänskligt publiceringsgodkännande före draft/noindex ändras.
