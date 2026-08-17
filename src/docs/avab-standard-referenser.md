# AVAB-standard för referenssidor

> **SOURCE OF TRUTH FÖR REFERENSSIDOR – version 1, 2026-08-17.** Detta dokument styr design, struktur och responsivt beteende för alla sidor under `/referenser/`. Implementeringsguiden beskriver arbetsflödet men får inte införa andra designregler.

## Syfte och canonical pilot

Standarden är ett byggsystem, inte en sidkopia. Den ska ge ett enhetligt AVAB-uttryck samtidigt som varje referens endast visar innehåll som faktiskt finns.

`src/pages/referenser/minnebergsskolan-arvika/index.astro` är canonical pilot för en **fördjupad referens** och visuellt regressionstest. Piloten fastställer komponenternas utseende, linjering, spacing, färgrytm och responsiva beteende. Dess projektspecifika kapitel, textmängd, bildmängd och antal sektioner är inte krav på andra sidor.

## Två sidtyper

### Standardreferens

För små och normala projekt. Använd normalt breadcrumb, `ReferenceHero`, `ReferenceFacts`, 2–4 relevanta innehållssektioner, resultat/helhet när underlag finns och CTA. Bildgrupper, teknisk fördjupning, relaterade referenser och FAQ är valfria. Ankarmeny används normalt inte.

### Fördjupad referens

För projekt där flera tydliga kapitel och rikligt verifierat material motiverar längre läsning. Kan dessutom använda `ReferenceAnchorNav`, flera mediegrupper, `ReferenceFeatureSplit`, tekniska fördjupningar, FAQ och relaterade referenser. Minnebergsskolan är referensen för denna nivå.

En standardreferens får aldrig fyllas ut artificiellt för att efterlikna piloten. Sidtyp avgörs av innehållets verkliga omfattning och hierarki, inte av projektets prestige.

## Rekommenderad sidstruktur

1. Breadcrumb.
2. `ReferenceHero`.
3. `ReferenceFacts`, om minst en verifierad faktapunkt finns.
4. Valfri ankarmeny på längre, tydligt kapitelindelade sidor.
5. Huvudinnehåll i logiska kapitel.
6. Resultat eller sammanfattande helhet, om underlag finns.
7. Valfri teknisk fördjupning, FAQ och relaterade referenser.
8. CTA.

Ordningen får anpassas när berättelsen kräver det. Tomma komponenter, tomma faktaceller och tomma sektioner är förbjudna.

## Byggblock och klassificering

| Mönster | Klass | Regel |
|---|---|---|
| AVAB-container, färger, typografi, spacingtokens, knappar och fokusstatus | Global AVAB-standard | Återanvänd `avab.css`; skapa inte lokala kopior. |
| Breadcrumb och huvudheader | Global AVAB-standard | Samma navigation och aktiv sidmarkering som resten av webbplatsen. |
| `ReferenceHero` | Referensstandard | Gemensam hero-familj; full bleed-bild, containerbundet innehåll. |
| `ReferenceFacts` | Referensstandard | Dynamiskt antal verifierade fakta, inga tomma celler. |
| Vit/ljus fullbreddssektion med container | Referensstandard | Bakgrund över viewport, innehåll i `.avab-container`. |
| Section header med eyebrow, H2 och ingress | Referensstandard | Semantisk rubrikhierarki och gemensam typografi. |
| Text-only content | Referensstandard | Rätt val när relevant bild saknas. |
| `ReferenceMediaGrid` och media cards | Referensstandard | Gemensam grid, 4:3-mediayta och linjering. |
| `ReferenceFeatureSplit` | Valfri referenskomponent | En prioriterad bild med tillhörande text. |
| `ReferenceAnchorNav` | Valfri referenskomponent | Endast för längre, kapitelindelade referenser. |
| `ReferenceFaq` | Valfri referenskomponent | Endast för verifierade frågor som tillför sök- eller användarvärde. |
| Teknisk detalj, citat, skala och relaterade referenser | Valfria referenskomponenter | Visa endast med relevant och verifierat underlag. |
| CTA | Referensstandard | Avslutar sidan; använd befintlig CTA-familj. |
| Minnebergs fem kapitel, tidslinjetexter, bilddata och lokala copy-klasser | Minnebergsspecifikt | Ska inte flyttas till generell standard. |
| Minnebergs antal bilder, fakta och FAQ-frågor | Minnebergsspecifikt | Ska inte kopieras som kvantitetskrav. |

## Komponentfamilj

Obligatorisk bas där innehåll finns:

- `ReferenceHero.astro`
- `ReferenceFacts.astro`
- befintliga semantiska innehållskomponenter via `ReferencePage.astro`
- AVAB:s CTA-komponent

Valfria byggblock:

- `ReferenceMediaGrid.astro` – en, två eller tre jämförbara bild/text-enheter.
- `ReferenceFeatureSplit.astro` – en redaktionellt prioriterad bild med nära tillhörande text.
- `ReferenceAnchorNav.astro` – kapitelmeny med aktiv sektion.
- `ReferenceFaq.astro` – kompakt FAQ.
- befintliga `ReferenceQuote`, `ReferenceScale`, `ReferenceTechnicalDetails`, `RelatedReferences` med flera.

Skapa en ny komponent endast när mönstret återkommer, minskar verklig duplicering och har ett stabilt ansvar. Sidunika data och redaktionella kapitel ska normalt ligga kvar på sidan eller i innehållsmodellen.

## Innehålls- och gridregler

### 0 bilder

Använd en textsektion. Skapa aldrig tom medieyta eller dekorativ platshållare för att få sidan att se längre ut.

### 1 bild

På desktop används normalt bild och direkt tillhörande text bredvid varandra via `ReferenceFeatureSplit` eller `ReferenceMediaGrid` med `split`. Texten ska vara vertikalt centrerad och ha 20 px avstånd från bildens kant enligt piloten. På mobil staplas bild över text. Fullbreddsbild med liten caption används bara när motivet har ett uttalat hero-/feature-syfte.

### 2 bilder eller kort

Två kolumner på desktop och en kolumn på mobil. Bilder över text när båda objekten är jämförbara. Skapa inte två ensamma liggande splitboxar ovanpå varandra.

### 3 bilder eller kort

Tre kolumner på bred desktop när korten förblir tydliga, två på mindre tablet och en på mobil. Välj två kolumner redan på desktop om text eller motiv behöver större kortbredd.

### 4 eller fler

Gruppera efter innehållshierarki, exempelvis 2+2 eller 3+1 där den sista är en avsiktlig feature. Undvik en ensam sista standardkolumn som ser ut som ett layoutfel. Dela hellre upp materialet i redaktionellt begripliga grupper.

## Linjering och kort

Jämförbara kort i samma grupp ska ha samma startposition, gridbredd, mediehöjd, interna padding och gap. Rubriker och brödtext ska börja på samma höjd där det är praktiskt. Kort får sträckas till samma höjd inom gruppen.

Berättande sektioner får däremot växa naturligt. Skapa inte stora tomma ytor för att tvinga olika kapitel till samma höjd. Kapa inte text med ellipsis och minska inte textstorleken för att få kort att matcha.

## Bilder

- Vanliga media cards använder `aspect-ratio: 4 / 3` och `object-fit: cover`.
- Bilden fyller hela den definierade mediaytan.
- Använd `objectPosition` per bild när viktig teknik annars beskärs bort.
- Porträttbilder i jämförbara grid beskärs normalt till samma 4:3-yta.
- Använd riktig porträttvariant endast när hela motivet måste synas; den får inte skapa ett extremt högt kort.
- Varje innehållsbärande bild ska ha konkret alt-text. Dekorativa bilder har tom alt-text.
- Ange kända dimensioner för att minska layoutskiften.

## Fullbredd, färgrytm och spacing

Sektionsbakgrund ska gå över hela viewporten och innehållet ska ligga i `.avab-container`:

```astro
<section class="reference-section">
  <div class="avab-container">...</div>
</section>
```

Växla huvudsakligen mellan vitt och AVAB:s ljusa bakgrund per logiskt kapitel, inte per kort. Undvik zebraeffekt. Återanvänd `--avab-section-space`, `--avab-content-gap`, `--avab-card-gap`, container, radier, skuggor och typografisk skala från gemensamma styles före lokala pixelvärden.

## Hero och projektfakta

Alla referenser använder samma `ReferenceHero`-familj. Titel, ingress, eyebrow, metadata och CTA är innehållsstyrda och valfria enligt komponentens kontrakt. Bilden är full bleed; texten är containerbunden. Skapa aldrig en projektspecifik hero-komponent.

Faktabandet renderar endast tillgängliga fakta. På desktop fördelas cellerna jämnt med konsekventa skiljelinjer och optiskt centrerad text. På mobil visas exakt en vänsterställd faktaenhet per rad med horisontella skiljelinjer och utan horisontell scroll.

## Ankarmeny

Ankarmeny används när sidan har flera långa, namngivna kapitel och länkarna hjälper läsaren att orientera sig. Den används inte för en kort standardreferens eller som dekoration.

På desktop/tablet är den sticky under huvudheadern och följer aktiv sektion. Canonical pilot använder den senast godkända huvudmenylika markeringen: **grön text och ett 3 px grönt streck under aktiv länk, utan bakgrund och utan pill-effekt**. Markeringen fyller länkens bredd. På mobil blir menyn statisk och kompakt så att den inte tar över viewporten. Länkar ska vara tangentbordsnåbara, ha tydligt fokus och sätta `aria-current="location"` på aktiv sektion.

## Responsiv standard

### Desktop

Använd en, två eller tre kolumner efter innehåll och faktisk kortbredd. Split visar bild och text sida vid sida. Hero och sektionsbakgrunder är fullbredd; allt läsinnehåll följer containern.

### Tablet

Normalt en eller två kolumner. Tre används endast när kortbredd och text fortfarande är tydliga. Grider med tre standardkort går till två kolumner vid 820 px. Split får inte bli trångt och staplas senast på mobilbrytningen.

### Mobil

Vanliga kort visas ett per rad. Split staplas bild över text. Projektfakta visas ett per rad. Ankarmenyn är statisk och kompakt. Inga porträttmotiv får skapa extrem kort- eller sidheight. Sidan får inte ha horisontell overflow.

Kontrollbredder för regression är 1440, 1024, 768, 390 och 375 px.

## Text, semantik och tillgänglighet

- En H1 i hero, därefter H2 för kapitel och H3 för innehåll inom kapitlet.
- Använd semantiska `main`, `section`, `figure`, `figcaption`, `nav` och `details` där de beskriver innehållet.
- Alla anchor-ID:n är unika och begripliga.
- Interaktiva element fungerar med tangentbord, har synlig fokusstatus och tillräcklig touchyta.
- Färger ska uppfylla tillräcklig kontrast.
- Respektera `prefers-reduced-motion`; innehåll får inte vara beroende av animation.
- Rubriker ska vara redaktionellt korta men får radbrytas. Dölj eller kapa inte verifierat innehåll för layoutens skull.

## SEO och URL

Canonical domän är `https://avab.eu/`; `www.avab.eu` är endast alias. Canonical och strukturerad data ska byggas via central site config (`src/config/site`) och aldrig med hårdkodad `www`-domän. Varje sida ska ha unik titel, beskrivning, canonical, delningsbild och korrekt indexeringsstatus. Endast verifierade fakta ska publiceras eller läggas i strukturerad data.

## Migrationsregler

1. Migrera en sida i taget eller i en uttryckligt beslutad liten batch.
2. Inventera och verifiera text, bilder, rättigheter, länkar och publiceringsstatus före layoutarbete.
3. Klassificera sidan som standard eller fördjupad utifrån innehållet.
4. Återanvänd komponenterna; kopiera inte Minnebergsskolans sidmarkup.
5. Rendera aldrig tomma valfria sektioner.
6. Bevara URL och central canonical-hantering.
7. Jämför varje migrerad sida mot piloten vid alla kontrollbredder.
8. Kör acceptance checklist, build och diffkontroller före commit.
9. Ändra inte unrelated sidor i samma migration.

## Acceptance checklist

- [ ] Hero följer standarden och har korrekt H1.
- [ ] Faktaband visar endast befintliga fakta och fungerar på mobil.
- [ ] Inga tomma sektioner eller tomma medieytor finns.
- [ ] Sektionsbakgrunder är fullbredd och innehållet containerbundet.
- [ ] Bilder fyller mediaytor och viktig information beskärs inte bort.
- [ ] En ensam bild använder split när det är lämpligt.
- [ ] Två och tre jämförbara bilder använder rätt grid.
- [ ] Fyra eller fler objekt är balanserat grupperade.
- [ ] Kort linjerar inom jämförbara grupper utan onaturlig tomyta.
- [ ] Inga extremt höga porträttkort finns.
- [ ] Mobil visar ett vanligt kort per rad; tablet är uttryckligen kontrollerad.
- [ ] Ankarmeny används endast när den är motiverad och aktiv status fungerar.
- [ ] Rubrikhierarki, tangentbord, fokus, touchytor och reduced motion är kontrollerade.
- [ ] Internlänkar och anchor-länkar fungerar.
- [ ] Alla alt-texter är granskade.
- [ ] Canonical använder `avab.eu` via central config.
- [ ] Ingen horisontell overflow finns vid 1440/1024/768/390/375 px.
- [ ] `npm run build` och `git diff --check` är godkända.

## QA för standarden

Minnebergsskolan är regressionstestet. Vid ändring av en gemensam referenskomponent ska minst hero, faktaband, ankarmeny, split, en-/två-/trekolumnsgrid, porträttmotiv, FAQ, CTA och huvudnavigation kontrolleras. Testa både sidans start och kapitel längre ned. Dokumentera kända avvikelser; godkänn inte en migration med trasig overflow, bildbeskärning, ankarnavigation eller rubrikhierarki.
