# Designförändring – färg och landningssidor för Miljöer/Tjänster

_Status: historiskt besluts- och implementeringsunderlag; landningssideriktningen ersatt 2026-09-01_

> **Nytt kundbeslut 2026-09-01 efter PR #29:** Den tidigare riktningen nedan var korrekt för dåvarande beställning men har ersatts efter ny kundfeedback. `/miljo/` ska inte längre vara en publik landningssida; miljöundersidorna ligger kvar och `Miljöer` är en navigationskategori som öppnar dem. `/tjanster/` ligger kvar men ska vara en kompakt katalog med nio huvudtjänster, en separat översikt över leveransstegen, tre referenser och en avslutande CTA. Återanvändbara komponenter och designprinciper från PR #29 behålls där de fortfarande är generellt användbara.

## Gällande riktning från 2026-09-01

- `/miljo/` avvecklas som sida och ska inte genereras i sitemap.
- Befintliga routes under `/miljo/<slug>/` ändras inte.
- Desktopnavigationens `Miljöer` är en dropdown-trigger utan destinationslänk; mobilnavigationen öppnar miljögrupperna direkt.
- `/tjanster/` behåller canonical och breadcrumb men kortas till en skannbar översikt.
- Den långa tjänsteresan och ankarnavigationen används inte på den kompakta översikten.
- Tidigare implementation ska inte beskrivas som felaktig; kundens beslut och sidornas uppdrag har ändrats efter PR #29.

Följande äldre avsnitt bevaras som historik för designprimitives och förklaringen till PR #29, men är inte längre normerande för `/miljo/` eller den långa versionen av `/tjanster/`.

## Bakgrund
AVAB:s webbplats behöver kännas mer levande, inspirerande och tydligare säljande utan att förlora den rena och professionella grunddesignen.

Två förändringar ska utredas och genomföras samordnat:

1. Mer aktiv användning av AVAB:s gröna färg, exempelvis genom utvalda helbreddssektioner med grön bakgrund.
2. Nya övergripande landningssidor för **Miljöer** och **Tjänster**. Dessa ska vara säljande och inspirerande nav, medan respektive undersida fortsatt ska vara mer informativ och ämnesspecifik.

---

## 1. Målbild

### Övergripande mål
- Skapa mer rytm, variation och energi på webbplatsen.
- Göra AVAB:s visuella identitet tydligare genom mer genomtänkt användning av grönt.
- Förbättra orienteringen mellan övergripande erbjudande och detaljerad information.
- Låta användaren börja brett och inspirerande och sedan gå vidare till rätt miljö eller tjänst.
- Förbättra internlänkning och göra huvudnavigationens `Miljöer` och `Tjänster` till riktiga destinationssidor.

### Sidtypernas olika roller

#### Landningssidor: Miljöer och Tjänster
Ska primärt:
- inspirera,
- sälja in AVAB:s bredd och kompetens,
- hjälpa besökaren välja rätt väg vidare,
- presentera samtliga relevanta undersidor visuellt,
- lyfta förtroende, referenser och tydliga CTA:er.

#### Undersidor för miljöer och tjänster
Ska primärt:
- informera,
- förklara problem, lösningar, funktion och teknik,
- svara på mer specifika frågor,
- stödja SEO för specifika sökintentioner,
- leda vidare till kontakt, referenser och relaterade ämnen.

Denna skillnad ska bevaras. Landningssidorna ska inte bara bli indexsidor med kort, och undersidorna ska inte kopieras upp på landningssidorna i förkortad form.

---

## 2. Kritisk granskning av idén

### Styrkor
- Tydligare informationsarkitektur: huvudmenyn får naturliga destinationssidor.
- Bättre säljflöde: användaren kan upptäcka flera relevanta områden innan hen väljer en undersida.
- Starkare varumärkesupplevelse genom mer kontrollerad färganvändning.
- Större möjlighet till visuellt berättande med bilder, referenser och sektioner.
- Starkare internlänkning mellan breda och smala sökintentioner.

### Risker och logiska luckor

#### 1. “Mer grönt” kan snabbt bli för mycket grönt
Om gröna bakgrunder används på för många sektioner tappar de effekt och sidan kan kännas tung eller monoton.

**Motåtgärd:** definiera gröna sektioner som en namngiven global variant med tydliga regler för när den får användas.

#### 2. Färg får inte vara enda sättet att skilja sektioner
Färgvariation måste även fungera för tillgänglighet, kontrast och visuella hierarkier.

**Motåtgärd:** kombinera färg med spacing, typografi, innehållsstruktur och komponentvariation. Säkerställ WCAG-kontrast för text, länkar, pills, knappar och focus states.

#### 3. Landningssidor riskerar att bli “kortkataloger”
En sida med hero + 12 likadana kort är tekniskt en landningssida men inte särskilt inspirerande eller säljande.

**Motåtgärd:** bygg sidorna som redaktionella/säljande berättelser med flera sektionstyper, inte endast grids.

#### 4. Duplicerat innehåll mellan landnings- och undersidor
Om samma texter återanvänds uppstår sämre användarvärde och risk för otydlig SEO-intention.

**Motåtgärd:** skriv landningssidorna på kategorinivå. De ska beskriva värde, behov, val och bredd – inte återge undersidornas detaljinnehåll.

#### 5. Navigationen måste ändras konsekvent
När `Miljöer` och `Tjänster` blir klickbara destinationssidor måste dropdownbeteende, mobilmeny, tangentbordsnavigation och aktiv state fungera utan att försämras.

**Motåtgärd:** definiera separat beteende för klick på huvudrubriken kontra öppning av undermeny, särskilt touch/mobil.

#### 6. Nya landningssidor påverkar SEO-strukturen
Canonical, metadata, H1, breadcrumbs, sitemap och internlänkar måste behandlas som riktiga index-/kategorisidor.

**Motåtgärd:** ge varje sida en egen tydlig sökintention och metadata. Undvik att försöka ranka landningssidan på exakt samma fraser som undersidorna.

---

## 3. Rekommenderad designprincip för mer färg

### Grundregel
Grönt ska användas som **strategiskt accent- och sektionsverktyg**, inte som generell ersättning för befintliga ljusa bakgrunder.

### Föreslagen global sektionstyp
Skapa en återanvändbar variant, exempelvis konceptuellt:

- `surface: default`
- `surface: soft`
- `surface: green`
- eventuellt senare `surface: dark`

Implementationsnamn beslutas utifrån befintlig komponentarkitektur.

### `green` ska ha regler för
- bakgrundsfärg,
- textfärg,
- rubrikfärg,
- länkfärg,
- knappvariant,
- pills/badges,
- ikonfärg,
- kort som ligger ovanpå sektionen,
- hover/focus,
- kontrast och tillgänglighet,
- responsiv spacing.

### När gröna sektioner passar bäst
- säljande bryggsektioner,
- CTA,
- värdeerbjudanden,
- statistik/fakta,
- särskilt viktiga lösningssektioner,
- introduktion till relaterade tjänster/miljöer.

### När gröna sektioner bör undvikas
- flera sektioner direkt efter varandra,
- långa textmassor,
- tekniskt innehåll som kräver maximal läsbarhet,
- sektioner där många färgstarka bilder redan konkurrerar om uppmärksamheten.

### Rekommenderad rytm
Ingen hård regel som “var tredje sektion”. Färg ska väljas utifrån innehållets funktion. Som riktlinje bör en normal innehållssida oftast ha få men tydliga färgskiften, medan de nya landningssidorna får vara mer visuellt varierade.

---

## 4. Ny landningssida – Miljöer

### Route
`/miljo/`

### Primärt syfte
Hjälpa besökaren känna igen sin verksamhetsmiljö och snabbt förstå att AVAB kan leverera en anpassad helhetslösning.

### Rekommenderad struktur

1. **Hero**
   - Stark bild eller visuell komposition.
   - Kort säljrubrik på kategorinivå.
   - Kort ingress om att olika miljöer ställer olika krav på ljud, bild, säkerhet och kommunikation.
   - Primär CTA: utforska miljöerna.
   - Sekundär CTA: kontakta AVAB.

2. **Introduktion / värdeerbjudande**
   - Vad AVAB löser oavsett miljö.
   - Fokus på rätt teknik för rätt verksamhet, inte produktkatalog.

3. **Kreativ presentation av miljöerna**
   - Samtliga miljöundersidor ska vara åtkomliga.
   - Använd större visuella kort/plattor med bild, namn och mycket kort positionering.
   - Kortformatet får gärna variera i storlek på desktop om detta kan göras återanvändbart och responsivt utan special-CSS per sida.

4. **Utvalda behov/problem**
   - Exempel: hörbarhet, taluppfattbarhet, informationsspridning, presentation, säkerhet, styrning.
   - Ska länka vidare till relevanta tjänster där det är naturligt.

5. **Referenser från flera miljöer**
   - Visa ett begränsat urval med tydlig spridning.
   - Länk vidare till alla referenser.

6. **Grön säljsektion**
   - Exempelvis AVAB:s arbetssätt/helhet eller varför miljöanpassning spelar roll.

7. **Avslutande CTA**
   - Hjälp att välja rätt lösning/miljö.

### Viktigt
Miljölandningen ska sälja in **anpassning efter verksamheten**, inte försöka beskriva varje miljö i detalj.

---

## 5. Ny landningssida – Tjänster

### Route
Rekommenderad kanonisk route måste först verifieras mot befintlig struktur. Om `/tjanster/` redan är den avsedda huvudstrukturen ska den användas; skapa inte parallell URL utan beslut.

### Primärt syfte
Visa AVAB:s samlade kompetens och hjälpa besökaren förstå vilka lösningsområden som kan kombineras.

### Rekommenderad struktur

1. **Hero**
   - Säljande rubrik kring AVAB:s tekniska helhet och kompetens.
   - Kort ingress.
   - CTA till tjänsteöversikt respektive kontakt.

2. **Vad AVAB hjälper till med**
   - Beskriv kundvärde före teknik.
   - Exempelvis höra, se, informera, styra, varna och skapa rätt upplevelse.

3. **Kreativ tjänsteöversikt**
   - Alla tjänsteundersidor ska presenteras och vara åtkomliga.
   - Bild + tydlig tjänst + en rad om vilket problem/värde tjänsten adresserar.
   - Undvik interna tekniska formuleringar i kortens huvudbudskap.

4. **Så hänger tjänsterna ihop**
   - Visa att AVAB kan kombinera flera lösningar i samma projekt.
   - Detta är en central skillnad mot en vanlig katalogsida.

5. **Utvalda miljöer**
   - Korslänka till miljölandningen och relevanta miljöer.

6. **Referenser / proof**
   - Projekt som visar kombination av flera tjänster.

7. **Grön säljsektion / CTA**
   - Tydligt nästa steg.

### Viktigt
Tjänstelandningen ska sälja in **kompetens och lösningsbredd**, inte fungera som duplicerad dokumentation av varje tjänst.

---

## 6. Navigationsprincip

När förändringen är implementerad ska huvudnavigationen följa denna modell:

- Klick på `Miljöer` -> landningssidan `/miljo/`.
- Undermenyn -> direktlänkar till miljöundersidor.
- Klick på `Tjänster` -> tjänsternas landningssida.
- Undermenyn -> direktlänkar till tjänsteundersidor.

### Mobil/touch
Det måste finnas ett tydligt sätt både att:
- öppna undermenyn,
- följa länken till landningssidan.

Använd inte ett enda touch-event som både försöker navigera och öppna menyn.

---

## 7. Komponent- och arkitekturkrav

- Skapa inte sidspecifik CSS för varje grön sektion.
- Återanvänd befintliga globala sektioner/kort där de uppfyller kraven.
- Om ny komponent behövs ska den vara generell nog för både Miljöer, Tjänster och framtida landningssidor.
- Kortdata bör separeras från markup om befintlig Astro-arkitektur stödjer detta.
- Samtliga kort ska ha fungerande hover, focus, tangentbordsnavigation och tydlig länkyta.
- Mobil ska i första hand prioritera läsordning och stora tryckytor framför avancerad asymmetrisk layout.

---

## 8. SEO och innehåll

### Landningssidorna ska ha
- unik H1,
- unik title och meta description,
- canonical till `https://avab.eu/...`,
- breadcrumb,
- korrekt sitemap-status,
- relevant schema om befintlig sajtstandard stödjer det,
- tydliga internlänkar både nedåt till undersidor och tvärs mellan Miljöer/Tjänster/Referenser.

### Innehållsprincip
- Landningssida: bred intention, inspiration, vägledning, kommersiellt värde.
- Undersida: specifik intention, fördjupning, frågor och lösningar.

---

## 9. Tillgänglighet och responsivitet

Före godkännande ska följande verifieras:
- textkontrast på gröna ytor,
- fokusmarkeringar,
- knapp- och länkstates,
- reduced motion där animation används,
- korrekt rubrikhierarki,
- mobil läsordning,
- inga textöverlägg på bilder med instabil kontrast,
- inga kortlayouter som kräver hover för att förstå innehållet.

---

## 10. Föreslagen genomförandeordning

### Fas A – Beslut och inventering
1. Verifiera befintlig route för Tjänster och nuvarande `/miljo/`-beteende.
2. Inventera alla miljö- och tjänsteundersidor som ska ingå.
3. Inventera befintliga globala färger, sektioner och kortkomponenter.
4. Välj vilka befintliga bilder/assets som kan användas på landningssidorna.
5. Godkänn designprincipen för grön sektion innan bred implementation.

### Fas B – Global färgstandard
1. Implementera återanvändbar grön sektionsvariant.
2. Verifiera kontrast, buttons, pills, cards, focus och mobil.
3. Testa varianten på ett begränsat antal befintliga sektioner.
4. Kundgranska innan bred utrullning.

### Fas C – Miljölandning som designpilot
1. Bygg `/miljo/` först.
2. Testa kreativ layout, kortsystem, färgrytm och internlänkar.
3. Kundgranska desktop + mobil.
4. Frys godkända återanvändbara mönster.

### Fas D – Tjänstelandning
1. Återanvänd godkända mönster från Miljölandningen.
2. Anpassa innehållsberättelsen efter tjänsternas syfte.
3. Verifiera att sidan inte känns som en kopia av Miljöer.

### Fas E – Kontrollerad färgutrullning
1. Identifiera vilka befintliga sidor/sektioner som faktiskt vinner på grön bakgrund.
2. Implementera i små batcher.
3. Regressionstesta kontrast, mobil, spacing och komponenter.

### Fas F – QA
- navigation,
- internlänkar,
- SEO/meta/canonical,
- sitemap,
- accessibility,
- desktop/tablet/mobil,
- build/CI,
- visuell kundgranskning.

---

## 11. Rekommendation

Genomför båda förändringarna som **ett sammanhållet designsystemarbete**, men bygg inte allt samtidigt.

Bästa ordningen är:

1. definiera global färgstandard,
2. bygg Miljöer som pilotlandning,
3. frys återanvändbara mönster,
4. bygg Tjänster,
5. rulla därefter ut gröna sektionsvarianter selektivt på befintliga sidor.

Det ger mer färg och liv utan att skapa speciallösningar eller göra webbplatsen visuellt inkonsekvent.
