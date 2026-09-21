# Source coverage – STC Kil

**Route:** `/referenser/stc-kil-gym/`  
**Sidtyp:** Reference  
**Kundunderlag:** `Referens STC Kil.docx`  
**Bildpaket:** `stc-kil-webp-bilder.zip`  
**Status:** Byggd som draft/noindex för teknisk och visuell granskning.

## Arkitektur

- Structured content: `src/content/references/stc-kil-gym.md`
- Tunn route: `src/pages/referenser/stc-kil-gym/index.astro`
- Renderer: befintlig `src/layouts/ReferencePage.astro`
- Visuell regressionreferens: `/referenser/saffle-simhall/`
- Ingen ny lokal CSS, layout eller sidspecifik komponent.

## Publiceringsstatus

- `draft: true`
- `seo.noindex: true`
- `customer.publicationApproved: null`

Sidan ska inte göras indexerbar innan mänsklig visuell granskning och publiceringsbeslut.

## Coverage-matris

| Kundunderlag | Implementerad plats | Status |
|---|---|---|
| Huvudrubrik STC Kil – zonstyrt ljud för gym, gruppträning och virtuella pass | `heroTitle` | PASS |
| Ingress: flera ljudmiljöer i samma gym | Hero + `brief` + story-intro | PASS |
| Gymyta, gruppträning, omklädning/lounge och personalutrop har olika krav | `brief` + story | PASS |
| Fyra huvudzoner: Gym, A-sal, B-sal, omklädning/lounge | Facts + scope + story kapitel 1 + technicalDetails | PASS |
| Varje zon kan ha egen nivå/funktion/källa inom gemensam infrastruktur | Story kapitel 1 och 3–4 | PASS |
| Utrop kan distribueras till relevanta zoner | Story kapitel 1 och 4 + scope + FAQ | PASS |
| Jämnt bakgrundsljud i öppen gymyta | Story kapitel 1 + relevance | PASS |
| Problem med för få högtalare / nivåskillnader | Story kapitel 1 + FAQ | PASS |
| 12 × AUDAC CIRA824 8-tums takhögtalare | Scope + story + results + technicalDetails | PASS |
| CIRA8 bred takspridning och lämplighet för öppen träningsmiljö | Story kapitel 1 | PASS |
| AUDAC:s användning av 8-tums CIRA i andra flerzonsinstallationer | Story kapitel 1 | PASS |
| Målet att tekniken inte ska märkas som teknik | Story kapitel 1 + CTA | PASS |
| Takintegration frigör träningsyta och minskar utsatt utrustning | Story kapitel 1 | PASS |
| A-salen är en annan ljudmiljö än gymytan | Story kapitel 2 | PASS |
| Musikens tempo/dynamik/bas som del av träningspasset | Story kapitel 2 | PASS |
| Infällda 8-tums AUDAC-högtalare i A-salen | Scope + story + technicalDetails | PASS |
| 4 × nedpendlade 12-tums basar ovanför takgaller | Scope + story + results + technicalDetails + FAQ | PASS |
| Basplacering ger mer golvyta och renare visuellt resultat | Story kapitel 2 + FAQ | PASS |
| Virtuella/automatiserade pass som skäl för högre baskapacitet | Story kapitel 2 + FAQ | PASS |
| STC Kil erbjuder virtuell Les Mills-träning på storbild | Story kapitel 2 och 5 + FAQ | PASS |
| Virtuellt pass kan sakna instruktör på plats och kräver att bild/ljud bär mer | Story kapitel 2 | PASS |
| Virtuell träning gör gymmet till en AV-miljö | Story kapitel 2 | PASS |
| Rätt zon, lokal källa, effekt och startbar installation för virtuella pass | Story kapitel 2 | PASS |
| AV-tekniken ska följa träningsformen | Story kapitel 2 och relevance | PASS |
| Instruktören ska höras över stark musik | Story kapitel 3 | PASS |
| Rörelsefrihet och båda händerna fria | Story kapitel 3 + FAQ | PASS |
| Sennheiser EW100 G4-system för gruppträning | Scope + story + technicalDetails | PASS |
| Headset håller mer konsekvent avstånd till mikrofonen | Story kapitel 3 | PASS |
| Mikrofon, högtalare, förstärkning, gainstruktur och signalbehandling måste fungera som helhet | Story kapitel 3 | PASS |
| Målet: slå på mikrofonen och börja passet | Story kapitel 3 | PASS |
| Lokal styrning direkt i A-salen | Story kapitel 3 + scope | PASS |
| AUDAC MWX65 för källa/volym och lokala mic-/line-anslutningar | Story kapitel 3 + technicalDetails | PASS |
| Instruktören ser vardagsfunktioner, teknikern resten | Story kapitel 3 | PASS |
| A-salen kan välja egen källa utan att påverka gymmet | Story kapitel 3 + FAQ | PASS |
| B-salen som mindre separat lösning | Story kapitel 3 | PASS |
| B-sal: AUDAC ATEO6 + NOBA8A + MWX65 + trådlös mikrofon | Scope + story + technicalDetails | PASS |
| Rummet och verksamheten bestämmer systemdimensioneringen | Story kapitel 3 + relevance | PASS |
| Omklädning/lounge har lägre krav på nivå/dynamik/bas | Story kapitel 4 | PASS |
| 6 × AUDAC CIRA724 i omklädning/lounge | Scope + story + technicalDetails | PASS |
| Samma musik behöver inte betyda samma ljud överallt | Story kapitel 4 | PASS |
| AUDAC MTX48 fyrzonsmatris | Facts + scope + story + technicalDetails | PASS |
| MTX48 stödjer fyra individuella zoner, väggpaneler och flera källor | Story kapitel 4 | PASS |
| Förstärkare/signalhantering centralt, enklare kontroll ute i anläggningen | Story kapitel 4 | PASS |
| Utrop genom samma system | Story kapitel 4 + FAQ | PASS |
| Praktiska meddelanden / information inför stängning | Story kapitel 4 | PASS |
| Receptionen ska styra systemet, inte ställa om tekniska parametrar | Story kapitel 4 | PASS |
| Zon/källa/volym till användare; filter, gain, kompression, EQ och routing skyddas | Story kapitel 4 | PASS |
| Tekniska parametrar låses vid driftsättning | Story kapitel 4 | PASS |
| Många användare över året kräver förutsägbart system | Story kapitel 4 | PASS |
| STC Kil öppet dygnet runt men bemannat vissa tider | Story kapitel 5 | PASS |
| Premium-gym med styrka/kondition, funktionell yta, HIIT, gruppträning och virtuell träning | Story kapitel 5 | PASS |
| Lång drifttid, stabila grundinställningar och låg risk för felanvändning | Story kapitel 5 + relevance | PASS |
| Skillnad mellan fast kommersiell installation och tillfälligt ljudsystem | Story kapitel 5 | PASS |
| Samtidigt lugn gymträning, virtuellt pass, headset och separat B-sal | Story kapitel 5 | PASS |
| Zonstyrning ger varje del rätt ljud i stället för en kompromiss | Story kapitel 5 | PASS |
| Projektfrågan ska vara vad som händer i ytorna – inte hur många högtalare | Story kapitel 5 + relevance | PASS |
| Gymyta, A-sal, B-sal, mikrofoner, omklädning och utrop som behovslista | Story kapitel 5 | PASS |
| Allt ska fungera utan mixerbord för användaren | Story kapitel 5 | PASS |
| Komplett projektfaktaruta | `scope.projectFacts` | PASS |
| Samtliga FAQ-frågor/svar från dokumentet | `faq.items` | PASS |
| CTA-frågor: bakgrundsmusik, salar, virtuella pass, mikrofoner, egna källor, utrop | PageCTA | PASS |
| AVAB från planritning/projektering till installation, injustering och driftsättning | PageCTA | PASS |
| Målet att medlemmen upplever ljudet medan personalen knappt tänker på tekniken | PageCTA | PASS |
| SEO-title | `seo.title` | PASS |
| Meta description | `seo.description` | PASS |
| Internlänk till Gym | scope + CTA + relatedCompetence | PASS |
| Internlänk till Ljudsystem | relatedCompetence | PASS |
| Internlänk till Mikrofoner | relatedCompetence | PASS |
| Internlänk till Styrsystem & integration | relatedCompetence | PASS |
| Internlänk till Projektering | relatedCompetence | PASS |
| Befintlig länk från Gym-sidan | Dead-link-kommentar borttagen, routen aktiverad | PASS |
| Befintlig länk från Mikrofoner-sidan | Dead-link-kommentar borttagen, routen aktiverad | PASS |

## Extern faktaverifiering

### STC – Kil
https://www.stc.se/gym/kil

Verifierar aktuella uppgifter i kundunderlaget om:
- dygnet-runt-öppet,
- Premium,
- styrke- och konditionsträning,
- funktionell yta,
- HIIT,
- gruppträning,
- virtuell träning från Les Mills på storbildsskärm.

### AUDAC – CIRA8 / CIRA824
https://audac.eu/eu/products/d/cira8---quickfit-2-way-8inch-ceiling-speaker-with-twistfix-grill

Verifierar:
- CIRA824 är 8-tums CIRA8-modell,
- bred konisk spridning,
- användning som takhögtalare för musik och tydlighet.

### AUDAC – CIRA7 / CIRA724
https://audac.eu/eu/products/d/cira7---quickfit-2-

Verifierar:
- CIRA724 är del av CIRA7-familjen,
- takintegrerad tvåvägshögtalare.

### AUDAC – MTX48
https://audac.eu/products/d/mtx48---4-zone-audio-matrix

Verifierar:
- fyra individuellt styrbara zoner,
- flera line-/mikrofoningångar,
- wall panel inputs,
- kontroll via paneler och nätverk.

### AUDAC – MWX65
https://audac.eu/eu/products/c/by-category/wall-panels/input-and-output-panels

AUDAC:s produkt-/case-underlag verifierar MWX65 som all-in-one-panel för MTX med källa/volym och lokal signalanslutning.

## Bildcoverage

Alla åtta kundbilder används, utan placeholders:

| Asset | Roll |
|---|---|
| `stc-kil-gym-traningsyta-ljudsystem.webp` | Hero + archive + kapitel 1 |
| `stc-kil-gym-konditionsyta-takhogtalare.webp` | Kapitel 1 |
| `stc-kil-grupptraning-takhogtalare.webp` | Kapitel 2 |
| `stc-kil-grupptraningssal-ljudzon.webp` | Kapitel 2 |
| `stc-kil-audac-styrpanel-grupptraning.webp` | Kapitel 3 |
| `stc-kil-grupptraningssal-styrt-ljud.webp` | Kapitel 3 |
| `stc-kil-teknikrack-zonstyrt-ljud.webp` | Kapitel 4 |
| `stc-kil-gym-styrkedel-zonljud.webp` | Kapitel 5 |

## Source deviations

**SOURCE DEVIATIONS: 0**

Inga centrala sakuppgifter från kundunderlaget har behövt ändras. Aktuella externa påståenden om STC Kil och produktfamiljernas funktion har verifierats.

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

- Guardrails: **PASS** för 19 reference content entries.
- Astro/schema/build: **PASS** i PR #62 via `npm run validate`.
- Ny route genererad: **PASS** – `/referenser/stc-kil-gym/index.html`.
- Source coverage: **PASS** – `MISSING SOURCE INFORMATION: 0`.
- FAQ använder gemensam referenskomponent och ligger direkt före PageCTA eftersom ingen `relatedReferences`-sektion används.
- Befintliga STC Kil-länkar från Gym och Mikrofoner pekar på den nya routen utan dead-link-kommentar.
- Browser-QA desktop/tablet/mobil: kräver mänsklig visuell granskning före publicering.
