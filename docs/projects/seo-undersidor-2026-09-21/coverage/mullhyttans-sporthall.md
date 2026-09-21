# Source coverage – Mullhyttans sporthall

**Route:** `/referenser/mullhyttans-sporthall/`  
**Sidtyp:** Reference  
**Kundunderlag:** `Referens Mullhyttan.docx`  
**Bildpaket:** 13 färdiga WebP-assets i `public/assets`  
**Status:** Byggd som draft/noindex i `seo/referens-mullhyttans-sporthall`.

## Arkitektur

- Structured content: `src/content/references/mullhyttans-sporthall.md`
- Tunn route: `src/pages/referenser/mullhyttans-sporthall/index.astro`
- Renderer: befintlig `src/layouts/ReferencePage.astro`
- Visuell referens/regression: befintliga strukturerade referenser, särskilt Säffle simhall och Sörby sporthall
- Ingen sidspecifik CSS
- Ingen ny komponent, layout eller schemaändring

## Publiceringsstatus

- `draft: true`
- `seo.noindex: true`
- `customer.publicationApproved: null`

## Canonical

Kundunderlaget anger:

`/referenser/mullhyttans-sporthall/`

Samma route finns sedan tidigare som avsedd internlänk på Sporthall & arena och behålls som canonical route.

## Coverage-matris

| Kundunderlag | Implementerad plats | Status |
|---|---|---|
| SEO-title | `seo.title` | PASS |
| Meta description | `seo.description` | PASS |
| URL | `slug` + tunn route | PASS |
| Primära sökfraser | H1, summary, story, technicalDetails, FAQ | PASS |
| Geografiska sökfraser | location, hero, story, FAQ | PASS |
| H1: ljud och hörslinga som följer ridåväggen | `heroTitle` | PASS |
| Hero-bild + alt | `heroImage` | PASS |
| En hall / två hallar-principen | hero + brief + story kapitel 2 | PASS |
| Bose ControlSpace EX-1280 | scope + story + technicalDetails + FAQ | PASS |
| 4 × Yamaha CBR15 | scope + story + technicalDetails + FAQ | PASS |
| Yamaha PX8 | scope + story + technicalDetails + FAQ | PASS |
| 2 × Sennheiser EW-D 835-S | scope + story + technicalDetails + FAQ | PASS |
| 2 × Dante AVIO Bluetooth | scope + story + technicalDetails + FAQ | PASS |
| 2 lokala externa ljudinkopplingspunkter | scope + story + technicalDetails + FAQ | PASS |
| 2 × Bose CC-16 | scope + story + technicalDetails | PASS |
| Dante / AES67 över AV-nätverk | scope + story + technicalDetails | PASS |
| 2 × Univox SLS-7 | scope + story + technicalDetails + FAQ | PASS |
| cirka 1 900 m kopparfolie | scope + story + technicalDetails + FAQ | PASS |
| helsal eller två automatiska zoner | facts + scope + story + results + FAQ | PASS |
| brandlarm mute:ar ordinarie ljud | brief + scope + story + results + technicalDetails + FAQ | PASS |
| tillgänglighet följer hallindelningen | hero + brief + story + relevance + FAQ | PASS |
| kommunens bakgrund: likvärdig skola | story lead + location FAQ | PASS |
| kommunens bakgrund: föreningsliv | story lead + location FAQ | PASS |
| kommunens bakgrund: rörelseglädje/social mötesplats | story lead + location FAQ | PASS |
| AVAB:s kund Björkholms El, Örebro | customer + facts + story + FAQ | PASS |
| AVAB:s fulla uppdragslista | brief + scope + story + technicalDetails | PASS |
| Ursprungligt FFU med 4 × 50 W + 200 W | brief + story kapitel 1 + FAQ | PASS |
| varför FFU-lösningen bedömdes otillräcklig | story kapitel 1 + FAQ | PASS |
| spridning/riktverkan/headroom/taluppfattbarhet | story kapitel 1 | PASS |
| FFU är underlag – slutlig funktion måste fungera | story kapitel 1 | PASS |
| CBR15 15 tum, 90 × 60°, 126 dB | story + technicalDetails | PASS |
| CBR15 500 W program / 1000 W peak | story + technicalDetails | PASS |
| headroom snarare än extrem ljudnivå | story kapitel 1 | PASS |
| rikta direktljud mot lyssnare, inte hårda ytor | story kapitel 1 | PASS |
| fast/sekundärsäkrat högtalarmontage | story kapitel 1 + bild | PASS |
| ridåväggen delar AV automatiskt | story kapitel 2 + results + FAQ | PASS |
| egen mikrofon per hallzon | story kapitel 2 + FAQ | PASS |
| egen Bluetooth per hallzon | story kapitel 2 + FAQ | PASS |
| egen lokal ljudingång per hallzon | story kapitel 2 + FAQ | PASS |
| egen volymstyrning per hallzon | story kapitel 2 | PASS |
| egen högtalarzon per hallzon | story kapitel 2 | PASS |
| egen hörslingezon per hallzon | story kapitel 2 + FAQ | PASS |
| återgång till helsal när ridån öppnas | story kapitel 2 + FAQ | PASS |
| Bose EX-1280 signalbehandling/logik | story kapitel 2 | PASS |
| 12 analoga mic/line-ingångar | story + technicalDetails | PASS |
| 8 analoga utgångar | story + technicalDetails | PASS |
| 64 × 64 Dante | story + technicalDetails | PASS |
| programmering av routing, nivå, EQ, filter, delay, limiter | story kapitel 2/3 | PASS |
| Bose ControlSpace Designer / driftsättning i hallen | story + image 11 | PASS |
| två CC-16 där användaren är | story + image 12 | PASS |
| enkel användning trots avancerat backend | story kapitel 2 | PASS |
| EW-D för undervisning/speaker/matcher/cuper m.m. | story kapitel 2 + FAQ | PASS |
| EW-D 134 dB dynamiskt omfång | story + technicalDetails | PASS |
| EW-D 1,9 ms latens | story + technicalDetails | PASS |
| extern antennlösning | scope + story + technicalDetails | PASS |
| två separata Bluetooth-källor samtidigt | story + FAQ | PASS |
| Dante AVIO Bluetooth + PoE/nätverksprincip | story + FAQ; extern verifiering i coverage | PASS |
| extern mixer/DJ/produktion via lokala Dante-punkter | story + FAQ | PASS |
| vardag enkel men större produktion möjlig | story kapitel 2 | PASS |
| nätverksljud minskar behov av långa separata analoga vägar | story kapitel 2 | PASS |
| routing kan ändras digitalt | story kapitel 2 | PASS |
| PX8 2 × 800 W @ 8Ω | story + technicalDetails | PASS |
| PX8 2 × 1050 W @ 4Ω | story + technicalDetails | PASS |
| PX8 DSP-funktioner | story kapitel 2 | PASS |
| Bose = systemlogik, Yamaha = effekt | story kapitel 2 | PASS |
| brandlarm har företräde | story + relevance + FAQ | PASS |
| 12 HE teknikrack | story kapitel 3 + technicalDetails | PASS |
| rack innehåller DSP/förstärkning/radio/nätverk | story kapitel 3 | PASS |
| rack avsett för service, inte vardagsanvändning | story kapitel 3 | PASS |
| AV-specialist tillsammans med elentreprenör | story kapitel 3 + FAQ | PASS |
| högtalarval/placering/DSP/Dante/mikrofon/hörslinga | story kapitel 3 | PASS |
| programmering/driftsättning/inmätning/dokumentation | story kapitel 3 | PASS |
| tidig specialistinsats möjliggjorde omprojektering | story kapitel 3 | PASS |
| SLS-hörslinga över sportgolvet | story kapitel 4 + FAQ | PASS |
| hörslinga följer samma zonlogik | story kapitel 4 + results + relevance | PASS |
| hörapparatens T-läge | story kapitel 4 | PASS |
| SLS som fasad/segmenterad slingprincip | story kapitel 4 + FAQ | PASS |
| SLS-7 för stora installationer | story kapitel 4 | PASS |
| IEC 60118-4 | story + technicalDetails + extern verifiering | PASS |
| ledarlayout i Univox Loop Designer | story + technicalDetails + image 02 | PASS |
| projekterad yta ca 43,8 × 26,1 m | story + technicalDetails | PASS |
| 3D/fältstyrkesimulering | story + image 01 | PASS |
| fel helst upptäckas före golvstängning | story kapitel 4 | PASS |
| 9,5 rullar × 200 m | story + technicalDetails | PASS |
| ca 1,9 km slingledare | story + results + technicalDetails + FAQ | PASS |
| inmätning/fixering på betong | story + image 03 | PASS |
| skydd av kopparfolie | story + image 04 | PASS |
| flytspackel + sportgolv ovanpå | story kapitel 4 + FAQ | PASS |
| byggmaterial/metall påverkar magnetfält | story + FAQ | PASS |
| inget armeringsnät över slingan enligt projektdok | story kapitel 4 | PASS |
| hörslingan matas från centrala ljudsystemet | story kapitel 4 | PASS |
| verifiering med mätpunkter/fältstyrka/frekvensgång/mätkarta | story + technicalDetails + FAQ | PASS |
| testmottagare för löpande kontroll | story + technicalDetails + FAQ | PASS |
| flera hörslingeskyltar | story + image 13 | PASS |
| användaren måste veta att funktionen finns | story kapitel 4 | PASS |
| systemintegration snarare än fristående apparater | story + relevance | PASS |
| dokumentation för nästa tekniker | story kapitel 3 + results + relevance | PASS |
| apparat-/nätverks-/Dante-/systemdokumentation | story + technicalDetails | PASS |
| systemfiler sparas | story + results + relevance | PASS |
| “Vad Mullhyttan visar”-lärdomarna | relevance | PASS |
| Från FFU till fungerande sporthall – slutsats | relevance lead + items | PASS |
| samtliga 15 FAQ-frågor | `faq.items` | PASS |
| AEO/GEO: hur delbar hall fungerar | hero + story + FAQ | PASS |
| AEO/GEO: vilket ljudsystem | scope + technicalDetails + FAQ | PASS |
| AEO/GEO: hörslinga | story + technicalDetails + FAQ | PASS |
| AEO/GEO: hur hörslingan installerades | story kapitel 4 | PASS |
| AEO/GEO: brandlarm | story + FAQ | PASS |
| AEO/GEO: geografisk placering | location + FAQ | PASS |
| slut-CTA “Ska ni bygga en delbar sporthall?” | PageCTA | PASS |
| ritning/FFU till färdigt system | CTA + brief + story | PASS |
| internlänk Sporthall & arena | relatedCompetence | PASS |
| internlänk Ljudsystem | relatedCompetence | PASS |
| internlänk Hörslinga | projectFacts + relatedCompetence | PASS |
| internlänk Mikrofoner | relatedCompetence | PASS |
| internlänk Styrsystem & integration | relatedCompetence | PASS |
| internlänk Projektering | relatedCompetence + CTA | PASS |
| internlänk Fler referensprojekt | relatedCompetence | PASS |
| befintlig Sporthall & arena-länk aktiverad | dead-link-kommentar borttagen + riktig bild/copy | PASS |

## Bildcoverage

Alla 13 kundassets används utan placeholders.

| Asset | Roll |
|---|---|
| `10-mullhyttans-sporthall-exterior.webp` | hero + archive |
| `05-mullhyttans-sporthall-yamaha-cbr15-hogtalare.webp` | CBR15 / högtalarval |
| `06-mullhyttans-sporthall-yamaha-cbr15-montage.webp` | fast och sekundärsäkrat montage |
| `07-mullhyttans-sporthall-delbar-hall-ridavagg.webp` | ridåvägg / automatisk zonlogik |
| `11-mullhyttans-sporthall-programmering-bose-controlspace.webp` | programmering och driftsättning |
| `12-mullhyttans-sporthall-bose-cc16-ljudstyrning.webp` | lokal användarstyrning |
| `08-mullhyttans-sporthall-teknikrack-bose-yamaha.webp` | teknikrack / centralutrustning |
| `09-mullhyttans-sporthall-installation-laktare.webp` | installation / entreprenad |
| `02-mullhyttans-sporthall-horslinga-ledarlayout.webp` | hörslingans ledarlayout |
| `01-mullhyttans-sporthall-horslinga-projektering-faltstyrka.webp` | fältstyrkesimulering |
| `03-mullhyttans-sporthall-horslinga-gul-fixering.webp` | inmätning/fixering |
| `04-mullhyttans-sporthall-horslinga-svart-skyddstejp.webp` | skydd av kopparfolie |
| `13-mullhyttans-sporthall-horslinga-skylt.webp` | skyltning och synlig tillgänglighet |

Bildmått verifierades mot de faktiska WebP-filerna i repot innan innehållet byggdes.

## Primärkällor för extern verifiering

Kundunderlaget är källa för vad AVAB faktiskt levererat och hur projektet är byggt. Nedanstående primärkällor används endast för att verifiera produkt-/kommunfakta.

### Bose ControlSpace EX-1280
https://www.boseprofessional.com/products/processors/open-architecture/ex-1280/controlspace-ex-1280-digital-signal-processor

Verifierar 12 mic/line-ingångar, 8 analoga utgångar och 64 × 64 Dante.

### Yamaha CBR15
https://usa.yamaha.com/products/proaudio/speakers/cbr/specs.html

Verifierar 15-tums tvåvägskonstruktion, 90 × 60° spridning, 500 W program, 1000 W peak och 126 dB beräknad max-SPL.

### Yamaha PX8
https://se.yamaha.com/sv/audio/portable-pa/products/power-amplifiers/px-series/

Verifierar 2 × 800 W vid 8Ω och 2 × 1050 W vid 4Ω samt DSP-funktioner.

### Sennheiser EW-D 835-S
https://assets.sennheiser.com/global-downloads/file/22240/EW-D_835-S_SET_Product_specification_v1.7_EN.pdf

Verifierar 134 dB dynamiskt omfång och 1,9 ms systemlatens.

### Audinate Dante AVIO Bluetooth
https://assets.audinate.com/wp-content/uploads/2021/02/Dante-AVIO-Bluetooth-Marketing-Datasheet-20210119-en.pdf

Verifierar Bluetooth-anslutning för mobila enheter/datorer till Dante, Audio-over-IP/AES67 och PoE.

### Univox SLS-7
https://univox.eu/product/sls-7/

Verifierar SLS-7 som phased-array/segment-loop-förstärkare för stora installationer.

### Univox Loop Designer
https://univox.eu/support/consultation-and-support/univox-loop-designer/

Verifierar planering av slinglayout samt 2D/3D-fältstyrka och dimensioneringsdata.

### Univox IEC 60118-4
https://univox.eu/support/consultation-and-support/standards-and-legislation/

Verifierar kravet på mätning/certifiering mot IEC 60118-4.

### Lekebergs kommun
https://meetings.lekeberg.se/committees/kommunstyrelsen/mote-2024-02-13/protocol/protokoll-ks-2024-02-13pdf?downloadMode=open

Verifierar kommunens motiv kring likvärdig skola, föreningsliv, rörelseglädje och social mötesplats.

## Källhantering

- Projektspecifika leveransuppgifter kommer från kundens DOCX.
- Produktdata har kontrollerats mot respektive tillverkares primärkälla.
- Kommunens syfte med sporthallen har kontrollerats mot Lekebergs kommun.
- Inga produkt- eller projektpåståenden har lagts till enbart utifrån filnamn på bilderna.
- Ingen placeholder eller AI-genererad ersättningsbild används.

## Source deviations

**SOURCE DEVIATIONS: 0**

Texten har strukturerats om till referensmallen men kundens sakuppgifter har behållits. Påståendet om hörslingeverifiering är formulerat som del av leverans/verifieringsprocess och inte som ett publicerat mätresultat, eftersom DOCX-underlaget inte innehåller konkreta mätvärden.

## Slutkontroll

SOURCE COVERAGE

- Visible content: PASS
- SEO / metadata: PASS
- Technical facts: PASS
- Process / scope: PASS
- Results / proof: PASS
- FAQ: PASS
- AEO / GEO: PASS
- Internal links: PASS
- Image mapping: PASS
- Schema/content model: PASS
- Template/structure: PASS

**MISSING SOURCE INFORMATION: 0**  
**SOURCE DEVIATIONS: 0**  
**UNVERIFIED CLAIMS: 0**  
**MISSING REMOTE ASSETS: 0**

## Nästa gate

1. Kör `npm run validate` lokalt/CI.
2. Kontrollera renderad sida desktop + mobil.
3. Kontrollera särskilt portrait+split för CBR15 och hörslingeskylten.
4. Kontrollera de två portrait-bilderna i teknikrack/installationssektionen.
5. Kontrollera FAQ 2 kolumner desktop / 1 kolumn mobil.
6. Mänskligt publiceringsgodkännande före draft/noindex ändras.
