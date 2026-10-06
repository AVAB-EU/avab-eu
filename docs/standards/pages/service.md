# AVAB-standard – tjänstesidor

**Status:** Active
**Owner:** AVAB-projektet
**Scope:** Alla publika sidor under `/tjanster/`
**Last reviewed:** 2026-10-06

## Syfte

Tjänstesidor ska använda ett gemensamt AVAB-språk och återanvändbara komponenter, samtidigt som presentationen följer innehållet. En standardiserad tjänstesida ska inte bli en kopia av en annan tjänstesida eller en lång följd av identiska textblock.

Det tekniska och arkitekturella exemplet är [Konferensteknik](/tjanster/konferensteknik/), som använder service content collection och `ServiceLandingPage.astro`. Det visuella och redaktionella exemplet är [Hörslinga](/tjanster/horslinga/), vars rika innehåll använder flera typer av presentation. Båda ska kännas som delar av samma webbplats utan att få samma sektioner i samma ordning.

## Gemensam sidram

Följande delar ska använda shared components, global CSS och AVAB:s designtokens:

- **Breadcrumbs:** samma hierarki som sidans synliga URL-struktur och tillhörande breadcrumb-schema.
- **Hero:** gemensam hero-princip för eyebrow, en H1, ingress, relevant bild och tydlig primär handling.
- **Factband:** använd när verifierade fakta hjälper besökaren; utelämna det när underlag saknas.
- **Container, rubrik- och textbredder:** använd gemensamma containers och typografiska tokens. Lägg inte in lokala pixelbredder som ny sidstandard.
- **Spacing och färgväxling:** använd globala sektionsklasser och tokens för rytm och ytor. Undvik lokala sektionsteman som duplicerar globala regler.
- **Kort:** tydlig hierarki, konsekvent padding, kant, färg och läsbar text. Rubrik och destination ska alltid gå att förstå; information som behövs för ett beslut får inte bara finnas bakom hover eller expansion.
- **Hover och fokus:** interaktion får förstärka men inte ersätta information. Alla interaktiva element ska ha synlig `:focus-visible`.
- **Responsivitet:** grids ska brytas ned utan overflow; innehåll och handlingar ska fungera med touch, tangentbord och reducerad rörelse. Följ `docs/standards/global/mobile.md`.
- **FAQ:** använd `src/components/FaqSection.astro`. Eyebrow är alltid ”Vanliga frågor”; komponenten äger rubrik, valfri ingress, details/summary-markup, tillgänglighetsbeteende och FAQ-layout. Layouten är två kolumner på desktop och en kolumn på mobil.
- **PageCTA:** använd den gemensamma `PageCTA.astro` som sidans avslutande handling.

FAQ är sista innehållssektionen före sidans avslutande `PageCTA`. Om FAQ-schema används ska det renderas från samma `items`-data som den synliga FAQ:n. Skapa inte en separat kopia av frågor och svar i JSON-LD.

`FaqSection` kan användas av tjänster, miljöer, kamera-branschsidor, referenser, kontakt och budgetkalkylator. Komponentens styling är källan för FAQ-layouten. Nya sidor ska inte skapa egen FAQ-grid, eyebrow eller details/summary-variant.

## Tillåtna innehållsmoduler

Välj de moduler som passar sidans verifierade innehåll. Ordningen är innehållsstyrd; det finns ingen obligatorisk sekvens mellan hero och FAQ.

- text
- text + bild
- statiska informationskort
- helklickbara länkade kort
- process eller numrerade steg
- jämförelse mellan alternativ
- definitioner eller faktakort
- miljö- och användningsgrid
- en fokuserad referens
- referensgrid
- pris- eller nivåblock
- video eller demo
- juridisk eller teknisk fördjupning
- kalkylator- eller verktygs-CTA

### Två kortgridsmönster

**Klarna-hover — `ExpandableCardGrid`** används för visuella navigationskort med bild där varje kort länkar till en riktig undersida. Hela kortet är klickbart. På desktop kan hover eller tangentbordsfokus expandera det aktiva kortet och visa kompletterande text; titel och destination förblir tydliga även utan expansion. Touch och mindre skärmar ska visa innehållet utan att kräva hover. Sätt `desktopColumns` efter önskat radmönster; fem kort med tre kolumner ska bilda 3+2 utan platshållarkort eller uppblåsta kort på sista raden.

**Statisk länkgrid — `.landing-card-grid` med `LandingLinkCard`** (internt kallad **Amelio-grid**) används när bild, text och CTA ska synas direkt. Korten länkar till sina destinationer men expanderar inte vid hover eller fokus. Välj den när all korttext ska gå att läsa omedelbart och varje kort ska ha en synlig handling.

Välj Klarna-hover för bilddriven navigering där en kompakt yta och kompletterande hover-/fokusdetaljer passar. Välj den statiska länkkortsvarianten när text och CTA behöver vara synliga hela tiden. Ingendera varianten får gömma nödvändig information bakom hover.

Återanvänd befintliga komponenter när de täcker behovet: bland annat `ServiceFeature`, `ExpandableCardGrid`, `LandingLinkCard`, `ReferenceCard`, `PageCTA` och globala process-, jämförelse-, video- och prisstilar.

Skapa en ny shared component först när ett återkommande semantiskt/presentationsmönster saknar en lämplig befintlig komponent. En sidspecifik variant får inte bli en ny lokal designprincip.

Content beskriver ord och fakta, media, länkar och vald presentationstyp. Content ska inte innehålla CSS, pixelvärden, färger eller fri HTML. Interaktion ska inte gömma information som behövs för förståelse eller beslut.

## FAQ-regressioner och äldre sidor

`scripts/validate-site.mjs` kontrollerar att den gemensamma FAQ-komponenten behåller sin markup, tvåkolumnslayout på desktop och enkolumnslayout på mobil. Nya eller ändrade FAQ-block ska använda `FaqSection` eller en dokumenterad shared renderer, placeras före sidans sista PageCTA och inte lägga till lokal FAQ-markup eller FAQ-CSS.

Befintliga sidor som ännu inte har migrerats finns som explicita poster i `scripts/faq-standard-exceptions.json`. Det är ett tidsbegränsat migreringsregister, inte ett godkännande för nya avvikelser. Poster får tas bort när sidan använder standarden; nya poster kräver en tydlig scopebeskrivning och uppföljning i `TODO.md`.

## Mobil och visuell verifiering

Kontrollera tjänstesidor vid minst 320, 360, 390, 430 och 768 px samt relevanta desktopbredder. Granska att:

- kort, text, FAQ och media inte skapar horisontell sidscroll,
- kortinnehåll är synligt och läsbart utan hover,
- FAQ går att använda med tangentbord och touch,
- FAQ har två kolumner på desktop och en på mobil,
- sista FAQ-frågan följs direkt av sidans `PageCTA`,
- inga unika lokala FAQ-regler har lagts till.

Jämför visuellt mot Konferenstekniks gemensamma struktur och Hörslingas innehållsvariation. Följ den kanoniska riktningen utan att kopiera en hel sida.