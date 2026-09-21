# Source coverage – Fortnox Arena Växjö

**Route:** `/referenser/fortnox-arena-vaxjo/`  
**Sidtyp:** Reference  
**Kundunderlag:** `Referens Fortnox arena Växjö.docx`  
**Bildpaket:** `avab-fortnox-arena-vaxjo-bilder-webp.zip`  
**Status:** Pilot byggd i draft/noindex för teknisk och visuell granskning.

## Arkitektur

- Structured content: `src/content/references/fortnox-arena-vaxjo.md`
- Tunn route: `src/pages/referenser/fortnox-arena-vaxjo/index.astro`
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
| SEO-title | `seo.title` | PASS |
| Meta description | `seo.description` | PASS |
| H1 | `heroTitle` | PASS |
| Ingress: projektet blev en vändpunkt för AVAB | Hero `summary` + story-intro + kapitel 4 | PASS |
| Permanent teknik i stället för eventuppbyggnad | `brief` + story kapitel 1 och 4 | PASS |
| Cirka 1,4 ton ljudutrustning | Facts + scope + kapitel 2 + results + technicalDetails + FAQ | PASS |
| Projektfakta: projekt, ort, miljö, uppdrag, teknik, omfattning, betydelse | Facts + `scope.projectFacts` | PASS |
| Arena byggd från grunden för innebandy | Story kapitel 1 | PASS |
| Elit/bredd, landskamper, TV, mässor, konserter, skolidrott, event | Story kapitel 1 och FAQ | PASS |
| Publikkapacitet / sitt- och ståplatser / cirka 2 000 vid golvpublik | Story kapitel 1 + FAQ | PASS |
| Kravbild: ljudkapacitet, täckning, tal, musik, mikrofoner, inkoppling, enkel användning | Story kapitel 1 + scope | PASS |
| Historien från Hyrljud/event till fast installation | Story-intro + kapitel 4 + results | PASS |
| Användare: personal, speaker, arrangör, drift, tillfällig användare | Story kapitel 3 | PASS |
| Arenaljud: jämn täckning, tydlig speaker, energi i musik | Story kapitel 2 | PASS |
| Speaker, presentationer, intro, information, musik, arrangemang | Story kapitel 2 | PASS |
| Trådlösa mikrofoner och användningsfall | Story kapitel 2 + scope + FAQ | PASS |
| Stabil trådlös funktion / systemval / antennförhållanden / radiomiljö | Story kapitel 2 | PASS |
| Fasta inkopplingspaneler och varför de behövs | Story kapitel 3 + scope + results + FAQ | PASS |
| Matcher, event, TV, tillfälliga mikrofoner, extern produktion | Story kapitel 3 | PASS |
| Enkel styrning trots stort system | Story kapitel 3 + results + FAQ | PASS |
| Vad normal användare inte ska behöva förstå | Story kapitel 3 | PASS |
| Start, källa, mikrofon, reglering, avslut | Story kapitel 3 | PASS |
| Teknik för verksamheten – inte teknikern | Story kapitel 3 och 4 | PASS |
| Frågor AVAB börjar med före produktval | Story kapitel 4 | PASS |
| Vardagsdrift kontra större produktion | Story kapitel 3 + relevance | PASS |
| Extern teknik ska kunna anslutas professionellt | Story kapitel 3 + relevance | PASS |
| Nuvarande arena: Vipers, träningshall, VIP, TV-studio, media, storbild/LED | Story kapitel 1 och 3 | PASS |
| Lärdomar: dimensionera, förenkla, anslutningar, extern produktion, service, helhet | Story kapitel 4 + relevance | PASS |
| Från Fortnox till dagens AVAB och senare miljöer | Story kapitel 4 | PASS |
| DSP, Dante, nätverksbaserad AV och programmerade styrsystem som senare utveckling | Story kapitel 4 | PASS |
| Överförbarhet till modern sporthall | Story kapitel 4 + relevance | PASS |
| Undervisning, förening, match, speaker, musik, mikrofoner, externa källor, event, styrning | Story kapitel 4 + relevance | PASS |
| Samtliga FAQ-frågor och svar i dokumentet | `faq.items` | PASS |
| CTA: ritningar + användningsbeskrivning | PageCTA | PASS |
| CTA-kompetenser: högtalare, speaker, musik, mikrofoner, inkoppling, styrning, zoner, DSP, taluppfattbarhet, projektering, installation/driftsättning | PageCTA points + relatedCompetence | PASS |
| Internlänkar: Sporthall & arena | `scope.serviceHref`, CTA, relatedCompetence | PASS |
| Internlänkar: Ljudsystem | relatedCompetence | PASS |
| Internlänkar: Mikrofoner | relatedCompetence | PASS |
| Internlänkar: Styrsystem & integration | relatedCompetence | PASS |
| Internlänkar: Projektering | relatedCompetence | PASS |
| Länk från Sporthall & arena till nya referensen | befintlig länk aktiverad / dead-link-kommentar borttagen | PASS |
| Länkar från Om oss till nya referensen | befintliga länkar aktiverade / dead-link-kommentarer borttagna | PASS |
| Redaktionell regel: påstå inte att AVAB levererat arenans nuvarande kompletta ljudsystem | technicalDetails + historisk tempus genom hela sidan | PASS |
| Redaktionell regel: referensen får mer personlighet och företagshistorik än normal produktreferens | hero + story kapitel 4 | PASS |

## Extern faktaverifiering

Följande kunduppgifter är tidskänsliga eller externa arenafakta och har verifierats separat:

### Växjö kommun – Innebandyarena
https://www.vaxjo.se/sidor/se-och-gora/idrottsanlaggningar/arenastaden/innebandyarena.html

Stödjer bland annat:
- Fortnox var första arenan i världen som byggdes från grunden för innebandy,
- hemmaarena för Växjö Vipers,
- stor hall med plats för cirka 1 600,
- två loger,
- TV-studio,
- storbildsskärm och LED-rink,
- träningshall.

### Växjö & Co – Arenor
https://vaxjoco.se/evenemangssida/arenor/

Stödjer bland annat:
- invigd 2012,
- 1 250 sittplatser + ståplatser / cirka 1 600 vid idrott,
- upp till cirka 2 000 vid konsert,
- användning för flera typer av evenemang.

### Fortnox Arena – arrangörsunderlag
https://s3.amazonaws.com/standoutcms/files/8113/original/arrangemang_i_fortnox_arena.pdf

Stödjer bland annat:
- fasta sittplatser och ståplatser,
- golvpublik upp till cirka 2 000,
- LED-skärm och LED-sarg,
- VIP-loger,
- TV-studio,
- mediaplatser,
- användning för konserter, mässor, skolidrott och TV-evenemang.

## Bildcoverage

Alla sju kundbilder används, utan placeholders:

| Asset | Roll |
|---|---|
| `fortnox-arena-vaxjo-huvudarena-hero.webp` | Hero + archive-kort |
| `fortnox-arena-vaxjo-exterior.webp` | Story kapitel 1 |
| `fortnox-arena-vaxjo-vipers-innebandymatch.webp` | Story kapitel 1 |
| `fortnox-arena-vaxjo-hogtalarmontage.webp` | Story kapitel 2 |
| `fortnox-arena-vaxjo-ljudrack-slutsteg.webp` | Story kapitel 2 |
| `fortnox-arena-vaxjo-match-ljudsystem.webp` | Story kapitel 3 |
| `fortnox-arena-vaxjo-led-rink-matchpresentation.webp` | Story kapitel 4 |

## Source deviations

**SOURCE DEVIATIONS: 0**

Kundunderlagets centrala externa uppgifter kunde verifieras utan att huvudbudskapet behövde ändras.

En redaktionell försiktighetsregel från dokumentet har följts: sidan beskriver AVAB:s historiska leverans och säger inte att AVAB levererat arenans nuvarande kompletta ljudsystem.

## Slutkontroll

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

- Astro/schema/build: väntar på PR-validering
- Internal-link audit: täcks av projektets ordinarie QA efter build
- Browser-QA desktop/tablet/mobil: kräver mänsklig/visuell granskning före publicering
