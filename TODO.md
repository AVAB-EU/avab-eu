# TODO

_Kanonisk projektlista. Senast uppdaterad 2026-08-20._

## AI Content System

- [x] Samla AI-regler, workflows, standarder och fasdokument i `docs/`.
- [x] Flytta AI Content-arbetet till gemensamt repo `AVAB-EU/avab-eu`.
- [x] Skapa `agent/ai-content-system` ovanpå kundens aktuella `main` utan att skriva över kundens nyare kod.
- [ ] Försona AI-dokumentationen med kundrepots aktuella referensimplementation (`compact` / `standard` / `extended` och befintliga `Reference*`-komponenter).
- [x] Säkerställ att guardrails/CI validerar den faktiska content-modellen i kundrepot innan bred migrering.
- [ ] Lägg till unik preview per PR så kunden kan visuellt godkänna brancher från mobil/chat utan lokal VS Code.

## Navigation / Header

- [ ] **Implementera hero-baserad auto-hide för den gemensamma headern.** Headern ska vara synlig från sidtoppen genom hela hero-sektionen. Först efter hero ska tydlig scroll ned dölja headern och scroll upp visa den igen. Använd liten scrolltröskel för att undvika fladder, lås headern synlig när desktop-dropdown eller mobilmeny är öppen, respektera `prefers-reduced-motion` och använd en säker fallback på sidor utan hero. Breadcrumb och referenssidornas ankarmeny ska inte få ändrat beteende av misstag. Tillfälligt genomförandeunderlag: `docs/workflows/TEMP-header-scroll-behavior.md`.
- [ ] **Städa efter godkänd header-scroll-implementation.** När beteendet är implementerat, browserverifierat, godkänt och mergeat ska `docs/workflows/TEMP-header-scroll-behavior.md` raderas och båda tillfälliga header-scroll-punkterna tas bort ur `TODO.md`. Behåll endast permanent dokumentation om implementationen introducerar en generell standard som framtida utveckling behöver känna till.

## Referensmigrering – Fas 7

- [x] Inventera referensroutes och etablera structured content + återanvändbara referenskomponenter i kundrepot.
- [x] Frysa Minnebergsskolan som visuell designpilot.
- [x] Godkänd designbaseline: `https://test2.avab.eu/referenser/minnebergsskolan-arvika/`.
- [x] Försona Minneberg-designen med den gemensamma structured-content-arkitekturen utan att ersätta kundens nyare implementation med den äldre AI Content-renderern. Slutfört 2026-08-18 med samma `ReferencePage` och `story`-modell som Säffle.
- [x] Verifiera Minneberg på desktop och mobil mot designbaslinjen. Slutfört 2026-08-18 med bevarade fem ankarkapitel och 49 projektbilder.
- [x] **Migrera Säffle simhall som första riktiga migrationspilot.** Godkänd av beställaren 2026-08-18 med tunn route, shared `ReferencePage`, berättande ankarkapitel, utspridda projektbilder, structured FAQ och grön CI.
- [x] Validera Säffle vid 1440, 1024, 768, 390 och 375 px samt kontrollera SEO, schema, länkar, bilder och build. Slutfört 2026-08-18.
- [x] Genomför valideringsstopp: Säffle och Minneberg använder samma schema, routeprincip, layout och gemensamma referenskomponenter utan ytterligare sidspecifik CSS. Slutfört 2026-08-18.
- [x] Välj därefter nästa representativa referens för generaliseringstest (inte massmigrering direkt). Sörby sportcenter valdes 2026-08-18.
- [x] **Migrera Sörby sportcenter som generaliseringstest.** Godkänd av beställaren 2026-08-18 med fem ankarkapitel, 21 projektbilder, FAQ, SEO/schema, responsiv kontroll och grön build.
- [ ] **Kontrollera ankarmenyn på samtliga referenssidor.** På vissa sidor, bland annat Hanza konferens i Töcksfors, försvinner ankarmenyn eller tappar aktiv länk vid scroll när kapitelrubrikerna inte följer den förväntade numreringen. Inventera rubrikernas numrering samt kopplingen mellan menyernas `href`, sektionernas `id` och aktiv scroll-state. Verifiera att ankarmenyn ligger kvar och markerar rätt kapitel genom hela sidan på desktop och mobil.
- [ ] Implementera godkänd referensstandard på återstående referenssidor i små, beslutade batcher.
  - [ ] **Pausad på beställarens begäran 2026-08-18.** Starta inga migrationsbatcher förrän beställaren har kompletterat samtliga återstående referenser med bilder och texter. Gör därefter en ny materialinventering och besluta batchindelningen utifrån det kompletta underlaget.
- [ ] Kör slut-QA för index, internlänkar, alt-texter, canonical, drafts, responsivitet och build.
- [ ] **Go-live-beslut 2026-08-19: referenssidor förblir reachable-men-noindex, inte hård gating.** Under go-live-arbetet testades och drogs sedan tillbaka en hård spärr (`Response(null, {status: 404})`) som skulle ha stoppat `draft: true`-referenser från att byggas ut alls. Beställaren beslutade att INTE gata bort befintligt publikt innehåll i denna release ("preserve existing public content first") — samtliga 14 referenssidor genereras därför precis som tidigare, oförändrat beteende i `ReferencePage.astro`: `draft`/`seo.noindex` styr endast `<meta name="robots">` (noindex, nofollow), sidan är fortfarande fysiskt nåbar. `customer.publicationApproved` är fortsatt `null` på alla 14 referenser och läses ingenstans i kod.
- [ ] **Besluta framtida publiceringsprocess för `customer.publicationApproved` OCH hur draft-referenser faktiskt ska skyddas.** Fältet finns i schema men läses ingenstans i kod och är `null` på alla referenser, inklusive redan publicerade (Hanza, Säffle, Minneberg, Sörby). `noindex` är endast en sökmotorhint, inte åtkomstskydd — 13 av 14 referenssidor (allt utom Hanza) är i dagsläget fritt nåbara på sin riktiga URL för vem som helst med länken, trots `draft: true`. Beställaren behöver besluta: ska det byggas en faktisk spärr (kräver `publicationApproved: true` innan sidan går live), och i så fall när — detta lämnades medvetet olöst i go-live-releasen 2026-08-19 för att inte riskera att ta bort redan delade/använda referenslänkar.

## Bild-SEO

> **BILDÄNDRINGAR ÄR MANUELLA:** AI får inte välja, byta, ersätta, lägga till, generera eller retuschera bilder. Sådana ändringar utförs av Andreas/kundteamet. AI får analysera SEO/prestanda och dokumentera vad som behöver göras utan att ersätta bildmaterial.

- [ ] Granska alt-texter; börja med de 17 tidigare flaggade. Ortsnamn hör hemma i alt-text, inte i generiska filnamn.
- [ ] Pusha `bildstruktur-seo` och skapa PR först när den separata arbetsfasen uttryckligen återupptas och visuell kontroll är klar.
- [ ] **MANUELL BILDUPPGIFT:** besluta om `kopcentrum-fasad-kvall-bred.webp`, som tidigare saknade referenser: radera eller ta i bruk.
- [ ] Verifiera kvarvarande trasiga internlänkar från tidigare inventering.
- [ ] **MANUELL BILDUPPGIFT:** spåra eller ersätt saknade originalbilder. AI får endast dokumentera status.
- [ ] Kontrollera publika bild-URL:er och hash-länkar manuellt.
- [ ] Verifiera `SiteFooter.astro` efter ändrad sökväg för logotyp.
- [ ] Välj namnkonvention för `images` respektive `image/partners/` och gör den enhetlig i en separat uppgift.

## Budgetkalkylator

- [ ] Förbättra PDF-underlagets design och säkerställ att AVAB-logotypen visas korrekt i utskrift/PDF.

## Kundönskemål 2026-08-20

Detaljerad analys och fullständig sidlista finns i `docs/projects/kundonskemal-2026-08-20/`.

> **OBLIGATORISK REGEL FÖR DENNA ARBETSLISTA:** Alla kundönskemål som innebär att välja, byta, ersätta, lägga till, generera, retuschera eller på annat sätt ändra en bild är **MANUELLA BILDUPPGIFTER** för Andreas/kundteamet. AI-agent får inte utföra dem, även om den ursprungliga kundanteckningen säger `byt bild`, `byt hero`, `ändra bilder`, `lägg till bild` eller liknande.

### Fas 0 – Beslut, material och inventering
- [ ] Besluta om headern ska visa endast `Kontakt` eller även telefonnummer.
- [ ] Välj kanoniskt namn för restaurangmiljön och använd det konsekvent.
- [ ] Definiera skillnaden mellan `Hur vi jobbar` och `Vår leverans`.
- [ ] Få verifierat nytt pris för startsidans aktuella erbjudande.
- [ ] **MANUELL BILDUPPGIFT:** Andreas/kundteamet väljer och godkänner alla ersättningsbilder.
- [ ] Förtydliga `Lagom hantera dokument (Andreas)` och exakt WOT-fetmarkering.
- [ ] Inventera referensmaterial och färdigställandeår innan referenspausen hävs. AI får inte byta bilder under inventeringen.

### Fas 1 – Globala komponenter och designregler
- [ ] Gör footern till en sammanhållen global footer.
- [ ] Fixa responsiva dropdown-menyer så alla underrubriker går att nå och menyn själv kan scrolla vid låg viewport-höjd.
- [ ] Implementera beslutad förenkling av header/kontakt.
- [ ] Standardisera hero-pillers kontrast/opacitet.
- [ ] Ändra synlig rubrik `FAQ` till `Vanliga frågor` på samtliga sidor.
- [ ] Ta bort `Tjänst:` på samtliga tjänstesidor via gemensam implementation.
- [ ] Standardisera spacing, textlinjering, sifferpiller och kortgrid (bl.a. 3+3 och 3+2).
- [ ] Standardisera hela klickbara kort/CTA-fält med korrekt hover/focus.

### Fas 2 – Tjänstesidor
- [ ] Dokumentera och implementera gemensam tjänstesidestandard innan bred sidfix.
- [ ] Bygg Ljus.
- [ ] Bygg Bild/skärm och koppla Skärmar/projektorer samt Visuell kommunikation korrekt.
- [ ] Kamera: hero-piller, expanderande kort, boxlänkning och Vanliga frågor. Bild-/grafikändring av blixtar är **MANUELL BILDUPPGIFT**.
- [ ] Talat utrymningslarm: kontrollera bildprestanda tekniskt och bygg om enligt standard. Eventuellt bildbyte är **MANUELL BILDUPPGIFT**.
- [ ] Mikrofoner: Claessons, WOT, Mikrofonguiden, 3+3, Radiolänken, vit ruta och miljölinjering. Hero-/referensbildbyten är **MANUELLA BILDUPPGIFTER**.
- [ ] Ljudsystem: kabellänk, 3+3 och internlänkning. Hero- och Claessons-bildbyten är **MANUELLA BILDUPPGIFTER**.
- [ ] Hörslinga: texter, budgetkalkylator, miljöer, NTI, hyrljud.nu och Vanliga frågor. Bildbyte i `Tekniken bakom` och ny Auracast-bild är **MANUELLA BILDUPPGIFTER**.
- [ ] Taluppfattbarhet: referenser och miljöer.
- [ ] Styrsystem: 3+2, klickbar hotell/restaurang-ruta och rätt service/support-länk. Bild-/grafikändring av blixtar är **MANUELL BILDUPPGIFT**.
- [ ] Bakgrundsmusik: referenser. Hero-byte är **MANUELL BILDUPPGIFT**.

### Fas 3 – Miljösidor
- [ ] Dokumentera och implementera gemensam miljösidestandard innan bred sidfix.
- [ ] Sporthall & arena: budgetkalkylator, helklickbar grön CTA och hero-rubrik.
- [ ] Simhall: Spa/relax/ljus, Infoskärmar, Årjäng och Sälen-korrigeringar. Hero-byte är **MANUELL BILDUPPGIFT**.
- [ ] Ishall: budgetkalkylator, `Det här får du`-linjering och spacing i `Hur vi jobbar`.
- [ ] Kontor & Konferens: lösningssektion, skärmlänk, BYOD och rätt länk på befintlig bild. AI ska inte byta bilden.
- [ ] Hotell: referenser. Byte till högupplöst hero är **MANUELL BILDUPPGIFT**.
- [ ] Restaurang/bar/klubb: kanoniskt namn, Capri/Terrassen/Teburu/Pinchos, textlinjering och Vanliga frågor. Hero- och Tempel/Claessons-bildbyten är **MANUELLA BILDUPPGIFTER**.
- [ ] Butik & Retail: piller. Hero/GB och övriga bildändringar är **MANUELLA BILDUPPGIFTER**.
- [ ] Köpcentrum & Galleria: full ombyggnad enligt miljöstandard, boxar, grönt streck, arbetssätt och referenser. Alla bildändringar är **MANUELLA BILDUPPGIFTER**.
- [ ] Skola: rätta lösnings-/informationsskärmslänkar och lägg till referenser. Eventuellt bildbyte är **MANUELL BILDUPPGIFT**.
- [ ] Vård & Sjukhus: nytt upplägg för `Hur vi jobbar`/`Vår leverans`. Hero och rätt bildplacering är **MANUELLA BILDUPPGIFTER**.
- [ ] Industri: Bilparken/Hanza/Lesjöfors och `Hur vi jobbar`. Hero- och teknikbildändringar är **MANUELLA BILDUPPGIFTER**.
- [ ] Parkering & garage: rätta tekniklänkar. Hero- och teknikbildbyten är **MANUELLA BILDUPPGIFTER**.

### Fas 4 – Startsida
- [ ] Justera hero-piller enligt global standard.
- [ ] Justera hero-bildens focal position så högtalaren syns bättre. Detta gäller presentation av befintlig bild, inte val/byte av bildfil.
- [ ] Uppdatera aktuellt erbjudande med kundverifierat pris.

### Fas 5 – Referenser
- [ ] Lägg till strukturerat fält för färdigställandeår och visa endast verifierade år.
- [ ] Verifiera att materialpausen kan hävas innan nya migrationsbatcher startas.
- [ ] Bygg/migrera Mullhyttan, Fortnox arena, STC Kil och STC Hammarö när materialet är komplett. Alla bildval/bildbyten i referenserna görs manuellt.
- [ ] **MANUELL BILDUPPGIFT:** Lesjöfors – eventuell AI-retuschering av smutsigt golv utförs manuellt av Andreas/kundteamet; AI-agenten i utvecklingsflödet får inte göra bildbearbetningen.
- [ ] Standardisera avstånd mellan `Hur vi jobbar`-piller och rubrik.
- [ ] Bygg om Lundsberg. Bildändringar inom ombyggnaden görs manuellt.

### Fas 6 – Full QA
- [ ] Kör full internlänkskontroll på hela sajten, inklusive felaktiga Kontakt-fallbacks.
- [ ] Regressionstesta navigation, footer, Vanliga frågor, grids och hero-crops på desktop/tablet/mobil.
- [ ] Kontrollera bildprestanda, dimensioner, lazy loading och LCP-kandidater utan att AI ersätter bildmaterial.
- [ ] Kontrollera alt-texter, canonical, referensår och relevanta schemas.
- [ ] Kör build/CI och visuell kundgranskning före merge/publicering.

### Beslut som ska bevaras

- `AVAB-EU/avab-eu` är gemensam GitHub source of truth för fortsatt arbete.
- Nytt AI-/content-arbete ska inte fortsätta parallellt i `KodAiDeas/avab-eu`.
- `main` ändras inte direkt av AI Content-arbetet; branch + PR används.
- Minnebergsskolan är designpilot; Säffle simhall är första migrationspilot efter designförsoningen.
- Kundrepots aktuella kod är implementationens source of truth när den skiljer sig från äldre dokument/brancher.
- **Alla bildval, bildbyten, nya bilder, ersättningsbilder, genererade bilder och bildretuscheringar görs manuellt av Andreas/kundteamet. AI-agent får inte utföra dem.**
- AI får analysera bildprestanda/SEO, rätta bildrelaterade länkar och justera presentation/crop/focal-position för redan manuellt vald bild när det uttryckligen ingår i uppgiften.
- Inga undermappar i `public/assets/`; bilder ligger platt och endast omdöpta.
- Generiska motivnamn används i filnamn, ortsnamn i alt-text.
- Visuellt lika men icke-identiska bilder hålls isär.
- De två tidigare raderade gymfilerna förblir raderade; `gym_hero_hammaro_stc.webp` behålls som framtida gym-hero.
- Val av gym-hero är ett separat manuellt innehållsbeslut.