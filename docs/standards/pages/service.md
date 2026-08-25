# AVAB-standard – Tjänstesidor

**Status:** Active
**Owner:** AVAB-projektet
**Scope:** Publika sidor under `/tjanster/<slug>/`
**Last reviewed:** 2026-08-25

## Syfte

En tjänstesida ska förklara vad AVAB erbjuder, vilket behov tjänsten löser, hur leveransen genomförs och vilken verifierad erfarenhet som är relevant. Standarden ger en gemensam informations- och layoutprincip utan att tvinga olika tjänster till identiskt innehåll.

Hörslinga är huvudpilot eftersom sidan prövar standarden mot en lång tjänsteguide med process, referenser, teknikjämförelser, krav, budgetstöd och FAQ. Mikrofoner är generaliseringstest. Ljudsystem har fått generell teknisk städning men är inte pilot eller facit. Befintlig kod är fortsatt sanningskälla för vad som är implementerat; standarden innebär inte att övriga tjänstesidor redan är migrerade.

## Grundprinciper

- Behåll verifierade fakta, befintligt urval och sidans faktiska syfte.
- Använd gemensamma komponenter, tokens och layoutprimitiver före lokal markup och CSS.
- Standardisera strukturprincipen, inte innehållsmängden.
- Rendera inte tomma eller irrelevanta sektioner för att fylla en mall.
- Tillåt dokumenterade specialsektioner när tjänsten kräver annan information.
- Migrera en sida i taget och ta bort legacy-CSS först när ersättningen är verifierad.

## Obligatoriskt innehåll

Varje tjänstesida ska ha:

1. korrekt metadata, canonical, breadcrumbs och exakt en H1,
2. hero med tjänstens publika namn och en begriplig ingress,
3. intro eller kort direkt svar som förklarar tjänsten och nyttan,
4. minst en innehållssektion som beskriver lösningen, funktionen eller leveransen,
5. naturliga interna länkar där verifierade relationer finns,
6. en gemensam avslutande CTA,
7. delad header och footer som yttre sidskal.

En sida får vara kort när underlaget är kort. Obligatoriskt innehåll får inte fyllas ut med antaganden.

## Valfria sektioner

Följande används endast när relevant innehåll finns:

- snabbfakta/faktaband eller hero-pills,
- neutral info- eller attention-box,
- jämförelse, guide eller annan tjänstespecifik fördjupning,
- process / `Hur vi jobbar`,
- `Vår leverans`,
- miljöer eller användningsområden,
- referenser,
- Vanliga frågor,
- kalkylator, kravtabell eller annan specialkomponent.

Valfria sektioner ska döljas helt när innehållet saknas. Tom rubrik, tomt kort eller konstruerad utfyllnad är inte tillåtet.

## Innehållsdjup och guideprofil

Standarden har en gemensam kärna, inte en fast innehållslängd. En tjänst med få beslutspunkter kan vara kort. En tekniskt eller upphandlingsmässigt komplex tjänst får fungera som en fördjupande guide när befintligt, verifierat innehåll motiverar det.

En fördjupande tjänsteguide får behålla flera berättande kapitel, till exempel teknikval, installation, begränsningar, standarder, miljöanpassning, pris och framtida alternativ. Kapitlen är inte mallkrav för andra tjänster och ska inte göras om till generella kort enbart för visuell likhet.

Även en lång guide ska ha en tydlig kärnryggrad:

1. hero,
2. direkt svar eller intro,
3. lösning, funktion eller leverans,
4. relevant bevis,
5. FAQ när frågor finns,
6. slut-CTA.

Process, referenser och fördjupningskapitel får placeras där de bäst stödjer användarens beslut. Sidan ska vara begriplig utan visuell styling, och samma fakta ska inte upprepas i flera block utan ett tydligt skannings- eller beslutsvärde.

## Rekommenderad ordning

Normal läsordning för en tjänst utan omfattande guideinnehåll är:

1. Hero
2. Intro / direkt svar
3. Eventuell `NoticeBox`
4. Lösningar och funktioner
5. Process / `Hur vi jobbar`
6. `Vår leverans`
7. Miljöer / användningsområden
8. Referenser
9. Eventuell fördjupning eller beslutsstöd
10. Vanliga frågor
11. Slut-CTA

Ordningen får anpassas när innehållets logik kräver det. Referenser kan exempelvis ligga före en teknisk guide för att tidigt etablera bevis, och process kan ligga före fördjupning när besökaren först behöver förstå leveransen. Avvikelsen ska vara begriplig utan visuell styling och får inte skapas enbart för variation. FAQ:s slutplacering får däremot inte flyttas av AI: när FAQ finns ska den vara sista innehållssektionen före slut-CTA.

## Hero

- Synlig eyebrow använder tjänstens namn utan prefixet `Tjänst:`.
- H1 beskriver tjänsten och dess nytta; sidan har exakt en H1.
- Ingressen ska vara kort nog att fungera på mobil och får inte stapla sökord.
- Hero-pills är valfria och ska, när de används, följa den globala kontrast- och opacitetsregeln i `src/styles/avab.css`.
- Hero ska inte få nya sidspecifika knappvarianter.

CTA-hierarkin i hero är:

1. `.button-primary` för viktigaste handlingen,
2. `.button-secondary` för nästa handling,
3. `.button-quiet` för en eventuell tredje handling.

På mobil staplas handlingarna i samma ordning. Två fullstora handlingar är normalfallet; en tredje ska vara tydligt underordnad.

## NoticeBox

`NoticeBox` i `src/components/NoticeBox.astro` är enda gemensamma notice-komponent.

- `variant="info"` är neutral information utan blixt.
- `variant="attention"` används endast för en viktig begränsning, risk eller annan motiverad uppmärksamhet och visar AVAB-blixten.
- En notice-box får inte skapas för dekoration, vanlig brödtext eller som generell WOT-lösning.
- Nya attention-boxar kräver individuell innehållsbedömning.

Följ de fullständiga kriterierna i `docs/standards/global/layout.md`.

## Läsbarhet och WOT

Följ `docs/standards/global/content-readability.md`: **struktur först, betoning sedan**.

- Dela text vid verkliga ämnes-, process- eller beslutsgränser.
- Använd lista när innehållet faktiskt består av parallella punkter.
- Använd underrubrik eller kort när innehållet ska kunna hittas eller jämföras separat.
- Använd selektiv `<strong>` endast när den hjälper skanning; hela meningar och dekorativ fetstil ska undvikas.
- Skriv inte om korrekt text enbart för att två sidor ska låta likadana.

Varje innehållsändring ska kunna förklaras utan att betydelse eller fakta har förändrats.

## Kort och grid

- Använd `.flow-card` för processkort och numrerade steg.
- Tjänstesidans generella innehållskort använder `.service-card` från `src/styles/service-page.css` när korttypen passar.
- Använd `.grid-balanced--3` tillsammans med `.grid-balanced` för tre kolumner. Sex kort blir 3+3 och fem kort blir 3+2 på bred skärm.
- Använd `.grid-balanced--2` tillsammans med `.grid-balanced` för två kolumner.
- Alla standardiserade kortgridar går till en kolumn vid högst 768 px.
- Kort har innehållsdriven höjd. Fasta höjder, rubrikhöjder och `nth-child`-korrigeringar får inte användas för linjering.

Ett specialgrid får finnas när dess semantik eller interaktion inte ryms i dessa primitiver. Skälet ska dokumenteras och mönstret får inte kopieras till andra sidor utan ny bedömning.

## Hur vi jobbar och Vår leverans

`Hur vi jobbar` används i dagens ämnessidor för tjänstens steg eller arbetssätt. Numrerade steg ska använda `.flow-card` och processpillret i den globala layoutstandarden.

`Vår leverans` används i dagens leveranssidor som en lokal navigation genom projektering, installation, driftsättning, certifiering, överlämning samt service och garanti. Aktuell post ska behålla `aria-current="page"` och befintlig gemensam active-state.

Den slutliga redaktionella gränsen mellan `Hur vi jobbar` och `Vår leverans` är fortfarande en beslutsfråga i `TODO.md`. AI får därför inte flytta innehåll mellan sektionerna, slå ihop dem eller hitta på en ny definition utan kundbeslut.

## Miljöer

En miljösektion ska endast visa miljöer som redan stöds av sidans innehåll eller ett dokumenterat beslut.

- Använd en H2, valfri kort ingress och ett balanserat kortgrid.
- Länka till kanonisk route under `/miljo/`.
- När ett kort har exakt en destination bör huvudlänken vara tydlig och klickytan kan omfatta hela kortet med befintlig klickbar-kort-primitiv.
- När ett kort beskriver flera miljöer ska separata, tydliga textlänkar användas; hela kortet får inte låtsas ha en enda destination.
- Rubriker, ingress och kort ska linjera mot samma container.

## Referenser

Referenser på en tjänstesida ska återanvända globala referenskort och relevanta principer i `docs/standards/pages/reference.md`.

- Ändra inte referensurvalet utan stöd.
- Länka till kanonisk route under `/referenser/`.
- Varje kort ska ha relevant bild och alt-text när bild används.
- Kortets huvudlänk ska vara tydlig och befintlig helkortslösning ska ge hover och `focus-visible`.
- Använd balanserat grid: sex kort 3+3, fem kort 3+2 och mobil en kolumn.
- Rubrik, ingress, bevisrad och kortgrid ska använda samma container och konsekvent spacing.

## Vanliga frågor

Vanliga frågor är valfritt men ska, när sektionen finns, följa den globala FAQ-implementationen:

- FAQ är alltid tjänstesidans sista innehållssektion före `PageCTA`.
- Inga informationsblock, snabbsvar, guidekapitel, gridar eller andra innehållssektioner får ligga mellan FAQ och slut-CTA.
- Ett undantag kräver ett uttryckligt dokumenterat beslut; AI får inte själv skapa ett.
- H2 ska synligt innehålla `Vanliga frågor`.
- `.compact-faq` eller kompatibla `.faq-list` används utan lokala gridregler.
- Frågelistan använder huvudcontainerns fulla bredd; kompletterande snabbsvar får inte pressa FAQ:n in i en smal sidokolumn.
- Två kolumner visas över 768 px och en kolumn vid högst 768 px.
- DOM- och tangentbordsordningen är naturlig och radvis.
- Höjden är innehållsdriven och accordionikonen ligger stabilt till höger.
- Synligt innehåll och eventuell FAQ structured data ska motsvara varandra.

## Slut-CTA

Tjänstesidan avslutas med `PageCTA` när inte en dokumenterad specialkomponent krävs. Om sidan har FAQ ska `PageCTA` följa direkt efter FAQ utan mellanliggande innehållssektion.

- En primär handling ska vara tydlig.
- En sekundär handling används endast när den har en relevant destination.
- Internlänkar ska vara verkliga och kanoniska; Kontakt-fallback får inte ersätta en saknad destination utan innehållsbeslut.
- CTA:n ska fungera utan overflow och med fullbreddsknappar på mobil.

## Mobil

Följ `docs/standards/global/mobile.md` och `docs/workflows/mobile-qa.md`.

- Ingen horisontell scroll vid 320, 360, 390 eller 430 px.
- Hero och CTA ska ha naturlig läsordning och touchytor på minst 44 × 44 px.
- Kort och FAQ går till en kolumn vid högst 768 px.
- Bilder ska vara responsiva, behålla rimligt bildförhållande och inte kapa huvudmotiv fel.
- Rubriker, länkar, accordionikoner och ankarmål får inte klippas eller döljas av sticky UI.
- Visuell QA ska minst omfatta desktop, tablet och mobil; kodverifiering ersätter inte faktisk rendering.

## Lokal CSS

Klassificera lokal CSS innan den flyttas eller tas bort:

- **A. Global och återanvändbar:** använd eller förbättra befintlig global primitiv.
- **B. Sidtypsgemensam:** placera i en avgränsad tjänstesidestil eller tjänstekomponent när minst två verifierade sidor behöver regeln.
- **C. Verkligt sidspecifik:** behåll lokalt med tydligt ansvar.
- **D. Duplicerad eller legacy:** ta bort först när den globala eller delade ersättningen är verifierad.

`src/styles/avab.css` får inte bli en dumpfil för regler som endast används på en sida. Lokal CSS får inte duplicera global FAQ-, grid-, process- eller CTA-layout.

## Tillåtna avvikelser

Sidspecifika sektioner är tillåtna när tjänsten kräver dem, exempelvis:

- jämförelser mellan tekniker,
- standarder, juridik eller mätkrav,
- signalflöden och beslutsstöd,
- pris-/budgetunderlag,
- bildgalleri eller tekniskt diagram,
- interaktiva eller expanderande kort.

En guideprofil med flera sådana kapitel är tillåten när tjänstens faktiska beslutsresa kräver det. Den är fortfarande samma sidtyp och får inte bli en ny generell mall som andra tjänster måste fylla.

Avvikelsen ska bygga på befintligt innehåll, ha ett tydligt ansvar, fungera responsivt och inte skapa en parallell standard för vanliga sektioner.

## AI-regler

AI får automatiskt:

- använda befintliga globala klasser och delade komponenter,
- ta bort verifierad lokal duplicering på den sida som migreras,
- balansera befintliga kort i 3+3, 3+2 eller 2+2 utan att ändra urvalet,
- dela ett stycke vid en tydlig ämnesgräns utan att ändra orden eller betydelsen,
- korrigera rubrikhierarki och synlig FAQ-rubrik enligt standarden.

AI måste bedöma per sida:

- om en valfri sektion behövs,
- om en notice är `info` eller motiverad `attention`,
- om kort hör ihop semantiskt,
- om en miljö eller referens är relevant,
- om text vinner på uppdelning eller selektiv betoning,
- om lokal CSS är verkligt unik.

AI får inte hitta på:

- tekniska fakta, krav, certifieringar eller mätresultat,
- kundnamn, projekt, priser, årtal eller resultat,
- miljö- eller referensrelationer utan stöd,
- skillnaden mellan `Hur vi jobbar` och `Vår leverans`,
- attention-signaler eller nya CTA-destinationer för visuell enhetlighet,
- nya specialkomponenter när befintlig primitiv löser behovet.

## Definition of Done för en migrerad tjänstesida

- obligatoriskt innehåll finns och valfria tomma sektioner saknas,
- hero, CTA, notice, grids, FAQ och mobil följer relevanta globala regler,
- fakta, urval och internlänkar är bevarade eller ändrade med verifierat stöd,
- lokal CSS är klassificerad och duplicering borttagen först efter verifiering,
- build, guardrails och `git diff --check` passerar,
- sidan är visuellt kontrollerad på desktop, tablet och mobil,
- kvarvarande sidspecifika frågor är dokumenterade i `TODO.md`.
