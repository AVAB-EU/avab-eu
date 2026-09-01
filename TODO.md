# TODO

_Kanonisk projektlista. Senast uppdaterad 2026-09-01._

## Go-live / deployment
- [x] GO-LIVE/deploy-verifieringen mot `avab.eu` är genomförd; produktions-FTP, webbroot, GitHub Actions-secrets och den tillfälliga deploy-markören har verifierats.
- [ ] Inventera och exkludera gamla backup-/preview-routes (bland annat `index-gammal` och `preview-miljo-*`) från produktionsbuild och sitemap i ett separat, verifierat scope.

## AI Content System
- [x] Samla AI-regler, workflows, standarder och fasdokument i `docs/`.
- [x] Flytta AI Content-arbetet till gemensamt repo `AVAB-EU/avab-eu`.
- [x] Skapa `agent/ai-content-system` ovanpå kundens aktuella `main` utan att skriva över kundens nyare kod.
- [ ] Försona AI-dokumentationen med kundrepots aktuella referensimplementation (`compact` / `standard` / `extended` och befintliga `Reference*`-komponenter).
- [x] Säkerställ att guardrails/CI validerar den faktiska content-modellen i kundrepot innan bred migrering.
- [ ] Lägg till unik preview per PR så kunden kan visuellt godkänna brancher från mobil/chat utan lokal VS Code.

## Navigation / Header
- [ ] **Implementera hero-baserad auto-hide för den gemensamma headern.** Headern ska vara synlig genom hero-sektionen, döljas vid tydlig scroll ned efter hero och visas vid scroll upp. Lås headern synlig när dropdown/mobilmeny är öppen, respektera `prefers-reduced-motion` och påverka inte breadcrumb/referensankarmeny av misstag. Underlag: `docs/workflows/TEMP-header-scroll-behavior.md`.
- [ ] **Städa efter godkänd header-scroll-implementation.** Radera TEMP-underlaget och tillfälliga TODO-punkter när implementationen är godkänd och mergead.

## Referensmigrering – Fas 7
- [x] Inventera referensroutes och etablera structured content + återanvändbara referenskomponenter.
- [x] Frysa Minnebergsskolan som visuell designpilot.
- [x] Godkänd designbaseline: `https://test2.avab.eu/referenser/minnebergsskolan-arvika/`.
- [x] Försona Minneberg med structured-content-arkitekturen.
- [x] Verifiera Minneberg desktop/mobil.
- [x] Migrera Säffle simhall som första migrationspilot.
- [x] Validera Säffle responsivt samt SEO/schema/länkar/bilder/build.
- [x] Valideringsstopp: Säffle och Minneberg använder samma schema, routeprincip och gemensamma komponenter.
- [x] Välj Sörby sportcenter som generaliseringstest.
- [x] Migrera Sörby sportcenter som generaliseringstest.
- [ ] Kontrollera ankarmenyn på samtliga referenssidor, inklusive Hanza.
- [ ] Implementera godkänd referensstandard på återstående referenssidor i små batcher.
  - [ ] **Pausad på beställarens begäran 2026-08-18.** Starta inga migrationsbatcher förrän återstående referenser har komplett text och bildmaterial.
- [ ] Kör slut-QA för index, internlänkar, alt-texter, canonical, drafts, responsivitet och build.
- [ ] Behåll go-live-beslutet från 2026-08-19: draft-referenser är reachable-men-noindex, inte hårt gatade.
- [ ] Besluta framtida process för `customer.publicationApproved` och verkligt skydd av draft-referenser.

## Bild-SEO

> **KORRIGERAD BILDREGEL:** AI får göra kompletta bildbyten och lägga in nya befintliga bilder från `assets`. Andreas/kundteamet gör crop/beskärning, focal point, retuschering och annan bearbetning av själva bildinnehållet. När en bildmappning finns ska AI följa den exakt.

- [ ] Granska alt-texter; börja med de 17 tidigare flaggade.
- [ ] Pusha `bildstruktur-seo` och skapa PR först när separat arbetsfas återupptas och visuell kontroll är klar.
- [ ] Besluta om `kopcentrum-fasad-kvall-bred.webp`: radera eller ta i bruk.
- [ ] Verifiera kvarvarande trasiga internlänkar från tidigare inventering.
- [ ] Spåra saknade originalbilder; AI får koppla in rätt befintlig asset när ersättningen är tydlig.
- [ ] Kontrollera publika bild-URL:er och hash-länkar.
- [ ] Verifiera `SiteFooter.astro` efter ändrad sökväg för logotyp.
- [ ] Välj namnkonvention för `images` respektive `image/partners/`.

## Budgetkalkylator
- [ ] Förbättra PDF-underlagets design och säkerställ att AVAB-logotypen visas korrekt i utskrift/PDF.

## Kundönskemål 2026-08-20

Detaljerad analys och fullständig sidlista finns i `docs/projects/kundonskemal-2026-08-20/`.

> **OBLIGATORISK ANSVARSFÖRDELNING FÖR BILDER:**
> - AI: kompletta bildbyten, nya befintliga bilder från `assets`, uppdatering av bildreferenser och val av relevant asset när uppgiften är entydig.
> - Andreas/kundteamet: crop, focal point, retuschering, korrigering och annan bearbetning av själva bildinnehållet.
> - Föredragen metod: ange före körning `sida/sektion -> asset-fil` så AI använder exakt rätt bild.

### Fas 0 – Beslut, material och inventering
- [ ] Besluta om headern ska visa endast `Kontakt` eller även telefonnummer.
- [ ] Välj kanoniskt namn för restaurangmiljön.
- [ ] Definiera skillnaden mellan `Hur vi jobbar` och `Vår leverans`.
- [ ] Få verifierat nytt pris för startsidans aktuella erbjudande.
- [ ] Skapa om möjligt bildmappning för alla större bildbyten.
- [ ] Förtydliga `Lagom hantera dokument (Andreas)` och exakt WOT-fetmarkering.
- [ ] Inventera referensmaterial och färdigställandeår innan referenspausen hävs.

### Fas 1 – Globala komponenter och designregler
- [x] Gör footern till en sammanhållen global footer. **Fas 1A: kodimplementerad och manuellt verifierad på desktop, tablet, mobil och låg viewporthöjd 2026-08-23.**
- [x] Fixa responsiva dropdown-menyer så alla underrubriker går att nå och menyn själv kan scrolla. **Fas 1A: kodimplementerad och manuellt verifierad på desktop, tablet, mobil och låg viewporthöjd 2026-08-23.**
- [ ] Implementera beslutad förenkling av header/kontakt.
- [ ] Standardisera hero-pillers kontrast/opacitet.
- [ ] Ändra synlig rubrik `FAQ` till `Vanliga frågor` på samtliga sidor.
- [ ] Ta bort `Tjänst:` på samtliga tjänstesidor via gemensam implementation.
- [ ] Standardisera spacing, textlinjering, sifferpiller och kortgrid (3+3, 3+2 m.fl.).
- [x] Standardisera hela klickbara kort/CTA-fält med korrekt hover/focus. **Fas 1A: kod-, semantik- och browser-verifierad 2026-08-23.**

### Fas 1B – Färgstandard och visuellt liv

Underlag: `docs/projects/kundonskemal-2026-08-20/design-farg-och-landningssidor.md`.

- [x] Inventera befintliga globala färgvariabler, sektionskomponenter, knappvarianter, pills och kort innan ny färgimplementation. **Genomfört i PR #29.**
- [x] Definiera en återanvändbar global grön sektionsvariant i stället för sidspecifik CSS. **Genomfört i PR #29 med bland annat `--avab-green-dark` och `ContentSection`.**
- [x] Säkerställ kontrast, text/länk/button/pill/focus-states samt responsiv spacing på grön bakgrund. **Tekniskt verifierat i PR #29.**
- [x] Välj pilot för den gröna varianten och visuellt godkänn designriktningen före fortsatt arbete. **Miljölandningen godkänd av Andreas 2026-08-29; kundjusteringar hanteras efter merge.**
- [x] Använd gröna sektioner selektivt som säljande/accentuerande ytor; undvik flera tunga gröna sektioner direkt efter varandra och långa tekniska textblock på mörk/grön yta. **Princip implementerad i PR #29.**
- [ ] Inventera vilka ytterligare befintliga sidor som faktiskt vinner på en grön sektionsvariant innan eventuell bredare utrullning. **Separat framtida scope; inte blockerande för Fas 1B.**

### Fas 1C – Landningssidor för Miljöer och Tjänster

Underlag: `docs/projects/kundonskemal-2026-08-20/design-farg-och-landningssidor.md`.

**Status: genomförd och mergead via PR #29 den 2026-08-29. Eventuella kundjusteringar görs som nya avgränsade ändringar.**

> **Riktningen ersatt av kundbeslut 2026-09-01 efter PR #29.** Det tidigare arbetet genomfördes enligt dåvarande beslut. Nu ska `/miljo/` avvecklas som landningssida medan miljöundersidorna behålls och `Miljöer` blir navigationskategori. `/tjanster/` behålls som en kompakt tjänsteöversikt. Generellt användbara komponenter och designprinciper från fasen ska behållas.

- [x] Implementera kundbeslutet 2026-09-01 i avgränsad branch: ta bort `/miljo/` som route, justera navigationen och bygg om `/tjanster/` till kompakt översikt.
- [ ] Efter driftsättning: kontrollera trafik, externa länkar och indexering för tidigare `/miljo/`; besluta därefter om verifierad 410-hantering ska införas på servernivå. Ingen redirect till startsidan ska införas utan ny motsvarande destination.

- [x] Verifiera befintlig kanonisk route för Tjänster och nuvarande beteende för `/miljo/`; skapa inga parallella URL:er utan beslut.
- [x] Inventera samtliga miljö- och tjänsteundersidor som ska exponeras från respektive landningssida.
- [x] Gör huvudnavigationens `Miljöer` och `Tjänster` till riktiga destinationslänkar samtidigt som undermenyerna fortfarande är tillgängliga.
- [x] Definiera separat och tillgängligt touch/mobilbeteende för att öppna undermeny respektive följa huvudlänken.
- [x] Bygg `/miljo/` som säljande landningssida med hero, värdeerbjudande, kreativ miljööversikt, behov/problem, referenser, grön säljsektion och avslutande CTA.
- [x] Visuellt granska Miljölandningen på desktop och mobil och godkänn återanvändbara mönster. **Godkänd av Andreas 2026-08-29; kundfeedback hanteras efter merge vid behov.**
- [x] Bygg `/tjanster/` med samma designsystem men egen berättelse och visuell tjänsteresa med ankarmeny, logiska tjänstegrupper, varierade feature-layouter, referenser och CTA.
- [x] Säkerställ att landningssidorna är inspirerande/säljande medan undersidorna förblir informativa och ämnesspecifika.
- [x] Undvik duplicerad text mellan landnings- och undersidor; landningssidorna täcker bred sökintention och vägledning, undersidorna specifik fördjupning.
- [x] Säkerställ unik H1/title/meta description, canonical, breadcrumb, sitemap och relevant schema för båda landningssidorna.
- [x] Verifiera crawlbara länkar från landningssidorna till relevanta undersidor och referenser.
- [x] Regressionstesta navigation, tangentbord/focus, touch, desktop/mobil och build/CI före merge. **Build, validate och diff-check godkända före PR #29 merge.**

### Fas 2 – Tjänstesidor
- [ ] Dokumentera och implementera gemensam tjänstesidestandard innan bred sidfix.
- [ ] Bygg Ljus.
- [ ] Bygg Bild/skärm och koppla Skärmar/projektorer samt Visuell kommunikation korrekt.
- [ ] Kamera: hero-piller, blixtgrafik, expanderande kort, boxlänkning och Vanliga frågor.
- [ ] Talat utrymningslarm: bildprestanda, eventuell hero-asset och full ombyggnad enligt standard.
- [ ] Mikrofoner: hero-asset, Claessons, WOT, Mikrofonguiden, 3+3, Radiolänken, vit ruta, miljölinjering och Ekhagsskolan.
- [ ] Ljudsystem: hero-asset, kabellänk, 3+3, Claessons-bild och internlänkning.
- [ ] Hörslinga: texter, budgetkalkylator, miljöer, NTI, `Tekniken bakom`-bild, hyrljud.nu, Auracast-bild och Vanliga frågor.
- [ ] Taluppfattbarhet: referenser och miljöer.
- [ ] Styrsystem: blixtgrafik, 3+2, klickbar hotell/restaurang-ruta och rätt service/support-länk.
- [ ] Bakgrundsmusik: hero-asset och referenser.

### Fas 3 – Miljösidor
- [ ] Dokumentera och implementera gemensam miljösidestandard innan bred sidfix.
- [ ] Sporthall & arena: budgetkalkylator, helklickbar grön CTA och hero-rubrik.
- [ ] Simhall: byt hero-asset; rätta Spa/relax/ljus, Infoskärmar, Årjäng och Sälen.
- [ ] Ishall: budgetkalkylator, `Det här får du`-linjering och spacing i `Hur vi jobbar`.
- [ ] Kontor & Konferens: lösningssektion, skärmlänk, BYOD och rätt bildlänk.
- [ ] Hotell: högupplöst hero-asset och referenser.
- [ ] Restaurang/bar/klubb: kanoniskt namn, hero-asset, Capri/Terrassen/Teburu/Pinchos, Tempel, textlinjering och Vanliga frågor.
- [ ] Butik & Retail: hero/GB-assets, piller och övriga bildbyten.
- [ ] Köpcentrum & Galleria: full ombyggnad enligt miljöstandard, assets, boxar, grönt streck, arbetssätt och referenser.
- [ ] Skola: rätta lösnings-/informationsskärmslänkar/bilder och lägg till referenser.
- [ ] Vård & Sjukhus: hero-asset, rätt bildplacering och nytt upplägg för `Hur vi jobbar`/`Vår leverans`.
- [ ] Industri: hero-bedömning/asset, teknikbilder, Bilparken/Hanza/Lesjöfors och `Hur vi jobbar`.
- [ ] Parkering & garage: hero-asset samt teknikbilder/länkar.

### Fas 4 – Startsida
- [ ] Justera hero-piller enligt global standard.
- [ ] **MANUELL BILDBEARBETNING – Andreas:** flytta/cropa hero-bilden så högtalaren syns bättre.
- [ ] Uppdatera aktuellt erbjudande med kundverifierat pris.
- [ ] Besluta och rätta startsidans åtta verifierat saknade destinationsroutes: `/ljus/`, `/visuell-kommunikation/`, `/nedladdningar/checklista-av-sakerhet/` och fem ämnesroutes under `/kunskap/`. Ändra inte korten till Kontakt-fallback utan ett innehållsbeslut.

### Fas 5 – Referenser
- [ ] Lägg till strukturerat fält för färdigställandeår och visa endast verifierade år.
- [ ] Verifiera att materialpausen kan hävas innan nya migrationsbatcher startas.
- [ ] Bygg/migrera Mullhyttan, Fortnox arena, STC Kil och STC Hammarö när materialet är komplett.
- [ ] **MANUELL BILDBEARBETNING – Andreas:** Lesjöfors, retuschera/”dammsug” golvet. AI får därefter använda den färdiga asseten.
- [ ] Standardisera avstånd mellan `Hur vi jobbar`-piller och rubrik.
- [ ] Bygg om Lundsberg; kompletta bildbyten får AI göra, crop/retusch gör Andreas.

### Fas 6 – Full QA
- [ ] Kör full internlänkskontroll på hela sajten, inklusive felaktiga Kontakt-fallbacks.
- [ ] Regressionstesta navigation, footer, Vanliga frågor och grids på desktop/tablet/mobil.
- [ ] Kontrollera att bildbyten använder avsedda assets.
- [ ] Kontrollera bildprestanda, dimensioner, lazy loading och LCP.
- [ ] Flagga crop/focal-point/retuschproblem till Andreas.
- [ ] Kontrollera alt-texter, canonical, referensår och relevanta schemas.
- [ ] Kör build/CI och visuell kundgranskning före merge/publicering.

### Beslut som ska bevaras
- `AVAB-EU/avab-eu` är gemensam GitHub source of truth.
- Nytt AI-/content-arbete ska inte fortsätta parallellt i `KodAiDeas/avab-eu`.
- `main` ändras inte direkt av AI Content-arbetet; branch + PR används.
- Minnebergsskolan är designpilot; Säffle simhall är första migrationspilot.
- Kundrepots aktuella kod är implementationens source of truth vid konflikt.
- Inga undermappar i `public/assets/`; bilder ligger platt och endast omdöpta.
- Generiska motivnamn används i filnamn, ortsnamn i alt-text.
- Visuellt lika men icke-identiska bilder hålls isär.
- De två tidigare raderade gymfilerna förblir raderade; `gym_hero_hammaro_stc.webp` behålls som framtida gym-hero.
- Val av gym-hero är ett separat innehållsbeslut.
- **Bildansvar:** AI får göra kompletta bildbyten och lägga in nya befintliga assets; Andreas/kundteamet gör crop, focal point, retuschering och annan bildbearbetning.
