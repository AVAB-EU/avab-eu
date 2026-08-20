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

- [ ] Granska alt-texter; börja med de 17 tidigare flaggade. Ortsnamn hör hemma i alt-text, inte i generiska filnamn.
- [ ] Pusha `bildstruktur-seo` och skapa PR först när den separata arbetsfasen uttryckligen återupptas och visuell kontroll är klar.
- [ ] Besluta om `kopcentrum-fasad-kvall-bred.webp`, som tidigare saknade referenser: radera eller ta i bruk.
- [ ] Verifiera kvarvarande trasiga internlänkar från tidigare inventering.
- [ ] Spåra eller ersätt saknade originalbilder.
- [ ] Kontrollera publika bild-URL:er och hash-länkar manuellt.
- [ ] Verifiera `SiteFooter.astro` efter ändrad sökväg för logotyp.
- [ ] Välj namnkonvention för `images` respektive `image/partners/` och gör den enhetlig i en separat uppgift.

## Budgetkalkylator

- [ ] Förbättra PDF-underlagets design och säkerställ att AVAB-logotypen visas korrekt i utskrift/PDF.

## Kundönskemål 2026-08-20

Detaljerad analys och fullständig sidlista finns i `docs/projects/kundonskemal-2026-08-20/`.

### Fas 0 – Beslut, material och inventering
- [ ] Besluta om headern ska visa endast `Kontakt` eller även telefonnummer.
- [ ] Välj kanoniskt namn för restaurangmiljön och använd det konsekvent.
- [ ] Definiera skillnaden mellan `Hur vi jobbar` och `Vår leverans`.
- [ ] Få verifierat nytt pris för startsidans aktuella erbjudande.
- [ ] Samla och godkänn alla ersättningsbilder innan breda bildbyten.
- [ ] Förtydliga `Lagom hantera dokument (Andreas)` och exakt WOT-fetmarkering.
- [ ] Inventera referensmaterial och färdigställandeår innan referenspausen hävs.

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
- [ ] Kamera: hero-piller, blixtar, expanderande kort, boxlänkning och Vanliga frågor.
- [ ] Talat utrymningslarm: bildprestanda och full ombyggnad enligt standard.
- [ ] Mikrofoner: hero, Claessons, WOT, Mikrofonguiden, 3+3, Radiolänken, vit ruta, miljölinjering och Ekhagsskolan.
- [ ] Ljudsystem: hero, kabellänk, 3+3, Claessons-bild och internlänkning.
- [ ] Hörslinga: texter, budgetkalkylator, miljöer, NTI, bilder, hyrljud.nu, Auracast och Vanliga frågor.
- [ ] Taluppfattbarhet: referenser och miljöer.
- [ ] Styrsystem: blixtar, 3+2, klickbar hotell/restaurang-ruta och rätt service/support-länk.
- [ ] Bakgrundsmusik: hero och referenser.

### Fas 3 – Miljösidor
- [ ] Dokumentera och implementera gemensam miljösidestandard innan bred sidfix.
- [ ] Sporthall & arena: budgetkalkylator, helklickbar grön CTA och hero-rubrik.
- [ ] Simhall: hero, Spa/relax/ljus, Infoskärmar, Årjäng och Sälen-korrigeringar.
- [ ] Ishall: budgetkalkylator, `Det här får du`-linjering och spacing i `Hur vi jobbar`.
- [ ] Kontor & Konferens: lösningssektion, skärmlänk, BYOD och rätt bildlänk.
- [ ] Hotell: högupplöst hero och referenser.
- [ ] Restaurang/bar/klubb: kanoniskt namn, hero, Capri/Terrassen/Teburu/Pinchos, Tempel, textlinjering och Vanliga frågor.
- [ ] Butik & Retail: hero/GB, piller och bilder.
- [ ] Köpcentrum & Galleria: full ombyggnad enligt miljöstandard, bilder, boxar, grönt streck, arbetssätt och referenser.
- [ ] Skola: rätta lösnings-/informationsskärmslänkar och lägg till referenser.
- [ ] Vård & Sjukhus: hero, rätt bildplacering och nytt upplägg för `Hur vi jobbar`/`Vår leverans`.
- [ ] Industri: hero-bedömning, teknikbilder, Bilparken/Hanza/Lesjöfors och `Hur vi jobbar`.
- [ ] Parkering & garage: hero samt teknikbilder/länkar.

### Fas 4 – Startsida
- [ ] Justera hero-piller enligt global standard.
- [ ] Justera hero-bildens focal position så högtalaren syns bättre.
- [ ] Uppdatera aktuellt erbjudande med kundverifierat pris.

### Fas 5 – Referenser
- [ ] Lägg till strukturerat fält för färdigställandeår och visa endast verifierade år.
- [ ] Verifiera att materialpausen kan hävas innan nya migrationsbatcher startas.
- [ ] Bygg/migrera Mullhyttan, Fortnox arena, STC Kil och STC Hammarö när materialet är komplett.
- [ ] Lesjöfors: bearbeta smutsigt golv med AI endast efter godkännande och utan att förvanska projektet.
- [ ] Standardisera avstånd mellan `Hur vi jobbar`-piller och rubrik.
- [ ] Bygg om Lundsberg.

### Fas 6 – Full QA
- [ ] Kör full internlänkskontroll på hela sajten, inklusive felaktiga Kontakt-fallbacks.
- [ ] Regressionstesta navigation, footer, Vanliga frågor, grids och hero-crops på desktop/tablet/mobil.
- [ ] Kontrollera bildprestanda, dimensioner, lazy loading och LCP-kandidater.
- [ ] Kontrollera alt-texter, canonical, referensår och relevanta schemas.
- [ ] Kör build/CI och visuell kundgranskning före merge/publicering.

### Beslut som ska bevaras

- `AVAB-EU/avab-eu` är gemensam GitHub source of truth för fortsatt arbete.
- Nytt AI-/content-arbete ska inte fortsätta parallellt i `KodAiDeas/avab-eu`.
- `main` ändras inte direkt av AI Content-arbetet; branch + PR används.
- Minnebergsskolan är designpilot; Säffle simhall är första migrationspilot efter designförsoningen.
- Kundrepots aktuella kod är implementationens source of truth när den skiljer sig från äldre dokument/brancher.
- Inga undermappar i `public/assets/`; bilder ligger platt och endast omdöpta.
- Generiska motivnamn används i filnamn, ortsnamn i alt-text.
- Visuellt lika men icke-identiska bilder hålls isär.
- De två tidigare raderade gymfilerna förblir raderade; `gym_hero_hammaro_stc.webp` behålls som framtida gym-hero.
- Val av gym-hero är ett separat innehållsbeslut.