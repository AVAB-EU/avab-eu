# Fas 2A – inventering av tjänstesidor

**Status:** Avslutad och godkänd 2026-08-25
**Owner:** AVAB-projektet
**Scope:** Inventering av `/tjanster/`, huvudpilot Hörslinga och generaliseringstest Mikrofoner
**Last reviewed:** 2026-08-25

## Syfte och avgränsning

Underlaget beskriver faktiska routes och faktisk kod i `src/pages/tjanster/`. Fas 2A definierar tjänstesidestandarden och provar den på Hörslinga samt Mikrofoner. Ljudsystem är inte pilot eller facit; dess redan gjorda generella städning bedöms separat. Övriga tjänster inventeras men migreras inte i denna fas.

Ingen route för Ljus, Bild/skärm eller Visuell kommunikation finns under `src/pages/` i aktuell branch. De ska därför inte beskrivas som delvis byggda eller färdiga.

## Gemensamma mönster

Alla 14 faktiska tjänster är fullsidiga `index.astro`-sidor. Gemensamt är SiteHeader, breadcrumbs, hero, ett faktaband med sex poster, huvudsektioner och `PageCTA`. Hörslingas avvikande footer-markup ersattes i huvudpiloten med samma `SiteFooter` som övriga tjänster. Alla använder global `avab.css`.

Två tydliga familjer finns:

1. **Ämnes-/systemtjänster:** Bakgrundsmusik, Hörslinga, Kameraövervakning, Ljudsystem, Mikrofoner, Styrsystem & integration, Talat utrymningslarm och Taluppfattbarhet. De har innehållsrika fördjupningar, miljöer och/eller referenser samt ofta lokal CSS.
2. **Leveranssteg:** Projektering, Installation, Driftsättning, Certifiering, Överlämning och Garanti & service. De delar nästan identisk struktur, har ingen lokal CSS och använder `Vår leverans` som lokal navigation med `aria-current="page"`.

Hero-eyebrow saknar `Tjänst:` på inventerade sidor. Hero-CTA använder två eller tre handlingar; Hörslinga och Mikrofoner följer primary, secondary, quiet. Hero-pills förekommer inte på pilotsidorna och har därför inte lagts till utan innehållsstöd.

## Inventeringsmatris

| Sida | Gemensamma sektioner | Avvikelser och specialsektioner | Lokal CSS | Rekommendation |
|---|---|---|---|---|
| Bakgrundsmusik | Hero, faktaband, lösningar, miljöer, Hur vi jobbar, FAQ, slut-CTA | Tre miljökort fungerar mer som användningsområden än verifierade referenser | Ingen | Migrera senare med standardgrid; lägg inte till referenser utan stöd |
| Certifiering | Hero, faktaband, intro, två leveransblock, Vår leverans, FAQ, slut-CTA | Del av den gemensamma leveransstegsfamiljen | Ingen | Bevara familjestrukturen; standardisera gemensamt i senare delsteg |
| Driftsättning | Hero, faktaband, intro, två leveransblock, Vår leverans, FAQ, slut-CTA | Del av leveransstegsfamiljen | Ingen | Samma som Certifiering |
| Garanti & service | Hero, faktaband, intro, två leveransblock, Vår leverans, FAQ, slut-CTA | Egen value-grid-variant för svarskort | Ingen lokal; global modifier finns | Behåll modifiern tills familjen migreras gemensamt |
| Hörslinga | Hero, faktaband, intro, miljöer, process, referenser, FAQ, slut-CTA | Lång guide med slingtyper, signalflöde, krav, Auracast, läckage, pris och budget-CTA | Verkligt sidspecifika jämförelse-, krav-, pris-, bild- och länkregler kvar; duplicerad grid/notice och oanvänd legacy-CSS borttagen | Huvudpilot genomförd utan att specialkapitlen tvingats till generiska kort |
| Installation | Hero, faktaband, intro, två leveransblock, Vår leverans, FAQ, slut-CTA | Del av leveransstegsfamiljen | Ingen | Migrera med de övriga leveransstegen, inte separat i Fas 2A |
| Kameraövervakning | Hero, faktaband, intro, lösningar, process, miljöer, omfattande FAQ-innehåll, slut-CTA | Juridik, DORI, VMS/AI, ROI, priser och expanderande lösningskort; FAQ byggs av annan markup än vanliga tjänster | 86 rader för kameraspecifik hero/intro; flera globala specialprimitiver används | Behåll `attention` för juridik; migrera först när kamerans separata TODO-scope tas |
| Ljudsystem | Hero, faktaband, intro + neutral info, lösningar, miljöer, integration, referenser, Hur vi jobbar, FAQ, slut-CTA | Systemval lågohm/100V och taluppfattbarhet; två dokumenterade befintliga döda länkar | Lokal duplicering borttagen; gemensamt tjänstekort ligger i `service-page.css` | Behåll generell CSS-, grid- och FAQ-städning; sidan är inte pilot eller facit |
| Mikrofoner | Hero, faktaband, intro + neutral info, mikrofonguide, miljöer, RF/DSP, referenser, Hur vi jobbar, FAQ, slut-CTA | Sex mikrofontyper, bildgalleri och teknisk radiolänksfördjupning; två dokumenterade befintliga döda länkar | Endast bildhöjd, figcaption och galleri återstår lokalt; kort/ref/FAQ-duplicering borttagen | Generaliseringstest genomfört; bild-, referens- och innehålls-TODO kvarstår |
| Överlämning | Hero, faktaband, intro, två leveransblock, Vår leverans, FAQ, slut-CTA | Del av leveransstegsfamiljen | Ingen | Migrera med familjen |
| Projektering | Hero, faktaband, intro, två leveransblock, Vår leverans, FAQ, slut-CTA | `index2.txt` finns som icke-route/legacy-underlag och ska inte behandlas som publik sida | Ingen i publik route | Hantera eventuell legacy-fil i separat scope; migrera publik route med familjen |
| Styrsystem & integration | Hero, faktaband, intro + neutral info, plattformar, miljöer, referenser, Hur vi jobbar, FAQ, slut-CTA | Fem plattformskort och egen miljögrid | 80 rader, till stor del samma plattforms-/referens-/FAQ-regler som piloternas gamla CSS | Migrera senare; använd 3+2 och delade regler efter separat browser-QA |
| Talat utrymningslarm | Hero, faktaband, intro, fem neutrala info-boxar, miljöer, FAQ, slut-CTA | Säkerhetskrav, systemjämförelse, signalflöde, standarder och prioritet; egen processmarkup | 163 rader för beslutskort, standardkort, signalflöde, checklistor och FAQ-duplicering | Kräver egen sidspecifik migrering; ändra inte tekniska krav eller notice-varianter utan stöd |
| Taluppfattbarhet | Hero, faktaband, lösningar, referenser/miljöer, Hur vi jobbar, FAQ, slut-CTA | Tre kort blandar användningsmiljöer och referensliknande bevis | Ingen | Kvalitetssäkra miljö-/referensrelationer i senare TODO-scope |

## Sektioner och avvikelser i pilotresultatet

### Hörslinga – huvudpilot

- **Hero och direkt svar:** eyebrow, H1, ingress och primary/secondary/quiet-hierarki var korrekta och behölls. Introt ger direkt svar i tre sammanhängande stycken; de längsta är 48 respektive 50 ord och har tydliga ämnesgränser, så de delades inte mekaniskt.
- **Notice och informationsrutor:** den tekniska sammanfattningen migrerades från lokal `.snippet-box` till neutral `NoticeBox variant="info"`. Begränsningen att SLS inte eliminerar allt läckage bedömdes som en verklig sekretess-/teknikbegränsning och använder därför `variant="attention"`. De tre parallella projekteringssvaren är vanliga innehållskort, inte notices, och använder delad `.service-card`.
- **Process och Tekniken bakom:** sex leveranssteg använder `.flow-card` i 3+3. De fyra signalstegen använder samma processkort i 2+2. Mottagarkorten behåller sin sidspecifika taggsemantik men använder delad balansering.
- **Budget och pris:** befintliga länkar till `/budgetkalkylator-av-teknik/` är bevarade och routen finns. Kalkylatorbandet och prisindikatorn är motiverat beslutsstöd; den fasta minhöjden på priskorten togs bort och gridens responsivitet flyttades till delad balansprimitiv.
- **Miljöer:** fyra tidiga miljölänkar och nio senare lösningskort är bevarade. Nio-kortsgruppen använder nu balanserat 3+3+3-grid. Inga miljörelationer lades till eller togs bort.
- **Referenser:** Minnebergsskolan, Hundfjällshotellet och Säffle simhall är bevarade med existerande routes och assets. Referenskorten använder global helkortsstil och balanserat trekolumnsgrid.
- **Slingtyper, läckage och Auracast:** PLS/SLS-jämförelsen, diskslinga, portabel lösning, mörkt läckageband och Auracast-kapitlet är motiverade specialsektioner. De behåller lokal semantik och CSS; endast deras vanliga undergridar använder delade primitiver.
- **Krav och standarder:** upphandlingsdelen med SS-EN IEC 60118-4, AMA- och CPV-uppgifter är bevarad ordagrant. Inga tekniska eller juridiska fakta verifierades eller ändrades i standardmigreringen.
- **FAQ:** samtliga 16 synliga frågor och motsvarande FAQ structured data är bevarade. Frågelistan använder nu huvudcontainerns fulla bredd och global tvåkolumns-FAQ; H2 innehåller synligt `Vanliga frågor`. `Korta svar inför projektering` ligger före FAQ, som är sista innehållssektion före `PageCTA`.
- **CTA och sidskal:** befintlig `PageCTA` och dess destinationer är bevarade. Den handbyggda sidfoten ersattes med gemensam `SiteFooter`.
- **Lokal CSS:** verkligt sidspecifik CSS för teknikjämförelse, minitabeller, läckage, budgetband, pris, miljölänkar, taggkort och bilder behålls. Duplicerad `.snippet-box`-/gridresponsivitet samt oanvänd `.link-pills` och `.image-placeholder` togs bort.
- **WOT och betoning:** inga stycken når den använda 55-ordsindikatorn. Två helt fetstilta avslutningsstycken återgick till vanlig brödtext; orden och betydelsen är oförändrade.
- **Länkar och bilder:** alla sidans interna innehållslänkar går till existerande routes och samtliga tolv bildreferenser går till existerande assets. `hyrljud.nu` är enda externa innehållsdestination. Bilden i direkt-svarskortet har fortfarande en kommentar/alt-text som inte beskriver den faktiska fältstyrkesimuleringen tillräckligt precist; rätt ersättningsasset saknas och frågan lämnas i TODO i stället för att gissas.

Hörslinga visade att en tjänstestandard behöver stödja en gemensam kärnryggrad och en fördjupande guideprofil. Process och tidiga referenser kan etablera leverans och bevis före teknikkapitlen; jämförelser, begränsningar, krav, budget och framtida teknik får sedan följa som beslutsstöd. Dessa kapitel är inte obligatoriska mallfält för kortare tjänster.

### Ljudsystem – generell städning, inte pilot

- **A – generell teknisk städning:** import av `service-page.css`; ersättning av duplicerade plattforms-/miljökort med `.service-card`; balanserade miljö-, referens- och processgridar; ett sammanhållet referensgrid; borttagning av duplicerad referenslänk- och FAQ-CSS; semantiskt FAQ-id och synlig H2 `Vanliga frågor om ljudsystem`.
- **B – pilotrollsspecifik redigering:** ett 63-ordsstycke om zoner delades vid ämnesgränsen mellan miljöexempel och teknisk lösning. Orden och fakta är oförändrade.
- A-ändringarna påverkar inte innehållsurval eller sidans visuella identitet och bör behållas. B-ändringen är läsbarhetsmässigt säker och kan också behållas, men redovisas separat eftersom den gjordes under den tidigare pilotrollen. Ingen rollback har gjorts.

### Mikrofoner – generaliseringstest

- Hero, eyebrow och CTA-hierarki var redan korrekta och behölls.
- Befintlig `NoticeBox variant="info"` behölls neutral; ingen blixt lades till.
- Sex mikrofontypskort använder delat tjänstekort och `.grid-balanced--3`.
- Fyra miljökort använder `.grid-balanced--2`; kortens befintliga miljöurval och länkar är oförändrade.
- Sex referenskort ligger i ett sammanhängande `.grid-balanced--3`.
- Tre processkort använder `.flow-card` i balanserat grid.
- FAQ använder enbart globala regler och H2 `Vanliga frågor om mikrofoner`.
- Två täta stycken i avsnittet om trådlösa system delades vid gränserna systemfamilj/systemval respektive analogt-digitalt/valkriterier. Orden och fakta behölls; ingen kosmetisk fetstil lades till.
- Oanvända placeholder-regler samt duplicerad kort-, referenslänk- och FAQ-CSS togs bort. Bild- och galleriregler är kvar lokalt eftersom de bara används på Mikrofoner i pilotens scope.

## CSS-klassificering för piloterna

| Regelgrupp | Klass | Resultat |
|---|---|---|
| FAQ-heading, tvåkolumnsgrid, ikon och mobilkolumn | A/D: global + duplicerad | Lokala kopior borttagna; `avab.css` används |
| Balansering 3+3, 3+2/2+2 och mobil | A: global | `.grid-balanced`, `.grid-balanced--3` och `.grid-balanced--2` används |
| Processkort och sifferpiller | A: global | `.flow-card` används oförändrad |
| Referenskortets inre huvudlänk/helkort | A/D: global + duplicerad | Lokala kopior borttagna; global referens-/klickbarhetsregel används |
| Generellt innehållskort för tjänster | B: sidtypsgemensam | Samlad som `.service-card` i `src/styles/service-page.css` |
| Mikrofonbilder, figcaption och trebildsgalleri | C: sidspecifik | Kvar lokalt på Mikrofoner |
| Oanvänd bild-placeholder på Mikrofoner | D: legacy | Borttagen |
| Hörslingas PLS/SLS-jämförelse, minitabell, läckage- och kalkylatorband, pris, miljölänkar, taggkort och bilder | C: sidspecifik | Kvar lokalt på Hörslinga; mönstren görs inte till krav för andra tjänster |
| Hörslingas `.snippet-box`, lokala gridkolumner samt oanvänd `.link-pills` och `.image-placeholder` | A/D: global ersättning eller legacy | Ersatt med `NoticeBox`, `.service-card` och `.grid-balanced`, eller borttaget när oanvänt |

## Miljö- och referensprincip

Piloternas befintliga urval är bevarat. Miljökort kan ha helkortslänk när kortet har exakt en destination; kort som samlar flera miljöer behåller separata textlänkar. Referenskort använder befintlig globala helkortslösning via sin huvudlänk och presenteras i ett sammanhängande balanserat grid.

## Kvarvarande sidspecifika frågor

- Kundbeslut saknas fortfarande för den redaktionella gränsen mellan `Hur vi jobbar` och `Vår leverans`.
- Uppgiftsunderlaget hänvisar till en opacity-baserad active-state för `Vår leverans`, medan aktuell kod för leveransstegsfamiljen använder `aria-current="page"` och `.card--current` med kant/skugga. Piloterna saknar sektionen, så ingen visuell regel ändrades i Fas 2A. Skillnaden ska verifieras mot kundbeslutet när leveransstegsfamiljen migreras.
- Ljudsystem har kvar beslutade senare uppgifter för hero-asset, kabellänk, Claessons-bild och viss internlänkning. Sidan är inte pilot.
- Mikrofoner har kvar beslutade senare uppgifter för hero-asset, Claessons/Ekhagsskolan, Mikrofonguiden, Radiolänken och miljölinjering.
- Hörslinga har kvar innehålls- och bildfrågor i `TODO.md`, bland annat direkt-svar-bilden, Minnebergsskolans bildtext, NTI/STI-frågan och specificerad budget-CTA. Standardmigreringen ändrade inte dessa fakta utan underlag.
- Dokumenterade befintliga döda länkar på Ljudsystem och Mikrofoner har inte ändrats i Fas 2A.
- Kameraövervakning och Talat utrymningslarm har verkliga specialsektioner som måste bedömas individuellt.
- Ljus och Bild/skärm saknar routes och ska byggas i senare, uttryckligt scope.

## QA

Tidigare teknisk QA för Ljudsystem och Mikrofoner 2026-08-25:

- `npm run build`: godkänd, 76 sidor byggda utan buildfel.
- `npm run validate:guardrails`: godkänd för 14 referensposter. Valideraren varnade att Git-ändringslistan inte kunde läsas och körde därför repo-omfattande icke-destruktiva kontroller.
- Byggd HTML: exakt en H1 per dåvarande granskningssida, en neutral info-box och ingen attention-box per sida, sju FAQ-poster per sida samt förväntade grid- och CTA-klasser.
- Assets: inga saknade bildreferenser på de två sidorna.
- Internlänkar: inga nya destinationer introducerades. Fyra kommenterade legacy-länkar är fortsatt trasiga: `/kunskap/ratt-kabel-av-teknik/`, `/tjanster/konferensteknik/` på Ljudsystem samt `/tjanster/konferensteknik/`, `/referenser/stc-kil-gym/` på Mikrofoner.
- CSS: `.service-card` definieras endast i `src/styles/service-page.css`; piloternas lokala FAQ- och referenslänkskopior är borttagna.
- UTF-8/CRLF, mojibake och `git diff --check`: godkända.

Ny teknisk QA för Hörslinga som huvudpilot 2026-08-25:

- `npm run build`: godkänd med 76 byggda sidor. Första sandboxkörningen stoppades av `spawn EPERM`; samma kommando passerade med tillåten child-process.
- `npm run validate:guardrails`: godkänd för 14 referensposter. Valideraren varnade att ändrade filer och tillagda källrader inte kunde läsas och körde därför repo-omfattande icke-destruktiva kontroller.
- Byggd Hörslinga-HTML: exakt en H1, 16 FAQ-poster, en neutral info-box, en motiverad attention-box, delad SiteFooter samt förväntade grid- och tjänstekortsklasser.
- Assets och internlänkar: samtliga tolv bildreferenser och alla interna innehållsdestinationer finns.
- UTF-8/CRLF och `git diff --check`: godkända.

Manuell visuell QA är godkänd 2026-08-25 på desktop och mobil för Hörslinga, Mikrofoner och Ljudsystem. Hörslinga är huvudpilot, Mikrofoner visar att standarden generaliserar och Ljudsystems generella tekniska städning behålls som regression/teknisk kontroll. På samtliga tre sidor är FAQ sista innehållssektion före slut-CTA, och `PageCTA` följs av footer. Fas 2A är därmed avslutad; övriga tjänstesidor behåller sin tidigare status och hör till senare avgränsade faser.
