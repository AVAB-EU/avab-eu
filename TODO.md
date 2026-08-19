# TODO

_Kanonisk projektlista. Senast uppdaterad 2026-08-18._

## AI Content System

- [x] Samla AI-regler, workflows, standarder och fasdokument i `docs/`.
- [x] Flytta AI Content-arbetet till gemensamt repo `AVAB-EU/avab-eu`.
- [x] Skapa `agent/ai-content-system` ovanpå kundens aktuella `main` utan att skriva över kundens nyare kod.
- [ ] Försona AI-dokumentationen med kundrepots aktuella referensimplementation (`compact` / `standard` / `extended` och befintliga `Reference*`-komponenter).
- [x] Säkerställ att guardrails/CI validerar den faktiska content-modellen i kundrepot innan bred migrering.
- [ ] Lägg till unik preview per PR så kunden kan visuellt godkänna brancher från mobil/chat utan lokal VS Code.

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
- [ ] Implementera godkänd referensstandard på återstående referenssidor i små, beslutade batcher.
  - [ ] **Pausad på beställarens begäran 2026-08-18.** Starta inga migrationsbatcher förrän beställaren har kompletterat samtliga återstående referenser med bilder och texter. Gör därefter en ny materialinventering och besluta batchindelningen utifrån det kompletta underlaget.
- [ ] Kör slut-QA för index, internlänkar, alt-texter, canonical, drafts, responsivitet och build.

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
