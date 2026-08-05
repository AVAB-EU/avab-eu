# Standard för AVAB:s referenssidor (Astro-implementation)

## Status och syfte

Detta dokument beskriver den **faktiska, byggda** standarden för
`/referenser/<slug>/`-sidor, sådan den nu ser ut i:

```text
src/pages/referenser/hanza-konferens-tocksfors/index.astro
```

Hanza-sidan är **facit** för referenssidans struktur och visuella system. Alla
nya referenssidor ska byggas enligt den, och alla befintliga referenssidor ska
migreras till samma grundstruktur. CTA:n är ett uttryckligt undantag under
referensmigreringen: äldre sidor behåller sin befintliga CTA tills det separata
CTA-arbetet genomförs.

### Hur detta dokument förhåller sig till de andra

```text
src/docs/AVAB-standard-referensprojekt.md
```
Beskriver en tänkt content collection-arkitektur (Markdown-filer +
`[...id].astro` + valideringsschema) som **inte är byggd**. Sidorna är i
verkligheten enskilda `.astro`-filer under `src/pages/referenser/`. Använd det
dokumentet bara för idéerna om metadata, publiceringsflöde, SEO-regler,
tonalitet och textlängd — inte för filstruktur eller sektionsnamn, de stämmer
inte längre.

```text
src/docs/avab-design-referenssida-inkopare.md
```
Det konceptuella designresonemanget (varför sidan är byggd som ett
"referensblad", vad en inköpare ska kunna bedöma på 10 sekunder/1–2
minuter/vid fördjupning). Fortfarande giltigt som bakgrund och motivering.
Det här dokumentet är den bindande, konkreta implementationen av det
resonemanget.

```text
src/docs/page-cta.md
```
Separat referens för `<PageCTA />`-komponenten som används i slutet av
sidan. Läs det dokumentet för hela prop-API:t — det upprepas inte här.

```text
src/docs/cta-och-sitefooter-overgang.md
```
Bindande avgränsning mellan referensmigreringen, CTA-migreringen och den nya
`SiteFooter`. Läs detta före arbete på en befintlig referens.

---

## Arkitektur

- Ingen content collection, ingen delad layoutkomponent för hela sidan. Varje
  referens är en egen `src/pages/referenser/<slug>/index.astro`.
- Delad CSS (`--avab-*`-tokens, `.avab-container`, `.button` m.fl.) kommer
  från `src/styles/avab.css`, importerad högst upp i frontmatter.
- Sidspecifik CSS ligger i sidans egen `<style>`-block och använder ett eget
  set av `--reference-*`-tokens och `.reference-*`-klasser (se nedan). Detta
  block **kopieras mellan sidor**, det är inte en delad komponent. Det är en
  känd svaghet (se "Kända begränsningar" i slutet) men det är det arbetssätt
  som gäller tills sektionerna eventuellt bryts ut till riktiga
  Astro-komponenter.
- Hanza använder den delade `PageCTA.astro`. Nya referenser ska använda den.
  Vid migrering av en befintlig äldre referens ska dess nuvarande CTA däremot
  bevaras enligt `cta-och-sitefooter-overgang.md`; skapa inte en ny CTA-design
  som en del av referensmigreringen.

---

## Sidans fasta sektionsordning

Byggs i exakt denna ordning. Varje sektion anger om den är **obligatorisk**
eller **valfri**.

### 1. `<SiteHeader />`
Obligatorisk. Ingen variation.

### 2. Brödsmulor — `.reference-breadcrumbs`
Obligatorisk.

```astro
<nav class="reference-breadcrumbs" aria-label="Brödsmulor">
  <div class="avab-container">
    <ol>
      <li><a href="/">Start</a></li>
      <li><a href="/referenser/">Referenser</a></li>
      <li><span aria-current="page">{Projektnamn}</span></li>
    </ol>
  </div>
</nav>
```

### 3. Hero — `.reference-hero`
Obligatorisk.

```astro
<header class="reference-hero">
  <div class="avab-container reference-hero-grid">
    <div>
      <span class="reference-kicker">Referens · {Miljö}</span>
      <h1>{Kort projektnamn}</h1>
      <p class="reference-hero-subtitle">{Nyttobaserad underrubrik}</p>
      <p class="reference-hero-lead">{En mening om vad AVAB levererade}</p>
      <div class="reference-actions">
        <a class="button button-primary" href="#omfattning">Se AVAB:s omfattning</a>
        <a class="button button-secondary" href="/kontakt/#kontaktformular" data-contact-intent="project">Kontakta AVAB</a>
      </div>
    </div>
    <figure class="reference-image">
      <img src={heroImage.src} alt={heroImage.alt} width={heroImage.width} height={heroImage.height} fetchpriority="high" decoding="async" />
    </figure>
  </div>
</header>
```

Regler:

- `h1` ska vara kort (sikta på ≤ 3 ord, max ~12 tecken/rad vid clamp). Fullt
  ortsnamn eller projektnummer hör hemma i kickern eller faktabandet, inte i
  H1. (Hanza gick från "Hanza Mechanics, Töcksfors" till bara "Hanza
  Mechanics" av det här skälet.)
- Max två knappar i `.reference-actions`. Primärknappen pekar på
  `#omfattning`, sekundärknappen på kontaktformuläret.
- `.reference-image` är en "boxad" bild: `box-shadow`, en tunn ljus
  inset-border via `::after`, **`border-radius: 0`** — inga rundade hörn.
  Det är ett medvetet beslut (skiljer sig från Säffle-sidans rundade hörn,
  som ska rättas till, se migreringslistan).
- `min-height` på bilden trappas ner responsivt: `500px` (desktop) →
  `380px` (≤900px) → `290px` (≤680px).

### 4. Faktaband — `.reference-facts`
Obligatorisk. "Referensen i ett nötskal": 4–5 korta fakta direkt under hero.

```astro
<section class="reference-facts" aria-label="Referensen i ett nötskal">
  <div class="avab-container reference-facts-grid">
    <div class="reference-fact">
      <span>{Etikett}</span>
      <strong>{Värde}</strong>
    </div>
    <!-- upprepa 4–5 gånger -->
  </div>
</section>
```

Regler:

- Visa bara fält som faktiskt har ett värde. Skriv aldrig "Ej angivet".
- Typiska etiketter: Kund, Plats, Omfattning, [projektspecifikt fält],
  AVAB:s leverans. Anpassa efter projektet — Hanza använder
  "Rumsbokning" som ett eget fält eftersom det var en central leverans.
- Mobilt (≤ 680px): bandet går kant i kant (`.reference-facts-grid` får
  `width: 100%; margin: 0;` i mediafrågan) och **utan kantstreck** mellan
  posterna. Kom ihåg att nollställa både basreglerna och de mer specifika
  `:nth-child(4)` / `:nth-child(n + 4)`-reglerna som annars vinner på
  specificitet över en enkel `border: 0`.

### 5. "Uppdraget på 30 sekunder" — tre kolumner
Obligatorisk. Samma mönster som resultatsektionen (`.reference-summary-grid`
med tre `.reference-summary`), men utan `.reference-summary-number`-badge.

Kolumnerna är alltid: **Kundens behov**, **AVAB:s ansvar**, **Resultatet**.
40–70 ord per kolumn.

### 6. Leveransomfattning — `id="omfattning"`
Obligatorisk. Målet för hero-CTA:n. Struktur:

```astro
<section class="reference-section reference-section--soft" id="omfattning">
  <div class="avab-container reference-content-grid">
    <article class="reference-article">
      <section class="reference-block">
        <span class="reference-kicker">Leveransomfattning</span>
        <h2>Det här ingick i AVAB:s leverans</h2>
        <p>{Kort ingress}</p>
        <ul class="scope-list">{scope.map(item => <li>{item}</li>)}</ul>
      </section>

      <!-- Valfritt: variant-/delblock, se nedan -->
    </article>

    <aside class="reference-sidebar" aria-label="Projektfakta">
      <h2>Projektfakta</h2>
      <dl class="sidebar-facts">
        <div><dt>{Etikett}</dt><dd>{Värde}</dd></div>
        <!-- 5–7 poster -->
      </dl>
      <a class="button button-primary sidebar-action" href="/miljo/{miljo}/">
        Se {miljö}
      </a>
    </aside>
  </div>
</section>
```

Ett andra `.reference-block` är valfritt och används när projektet har
**flera parallella lösningar** som är värda att jämföra sida vid sida
(Hanza: `.room-grid` med `.room-card` för "Lilla rummet" / "Stora rummet").
Använd bara detta mönster när det finns en verklig uppdelning — hitta inte på
kategorier för att fylla ut sidan.

### 7. Resultat — "Verifierade funktioner"
Obligatorisk. `.reference-summary-grid` med tre `.reference-summary`, var och
en märkt med `.reference-summary-number` = **"Verifierat"**.

Regel: skriv bara sådant som faktiskt levererats och kan verifieras. Om
sidan behöver särskilja verifierat från uppskattat/bedömt (se
`avab-design-referenssida-inkopare.md` § 4.8), använd texten "Bedömd nytta"
i stället för "Verifierat" på den posten — blanda aldrig de två utan
märkning.

### 8. Projektets omfattning / skalindikatorer — **valfri**
`.scale-grid` med `.scale-item` (stort tal + etikett).

**Regel (ny, beslutad på Hanza-sidan): denna sektion är valfri och ska
uteslutas som standard.** Ta bara med den när talen tillför information som
inte redan finns i faktabandet eller sammanfattningen, och när varje tal
faktiskt är verifierat och meningsfullt för en inköpare. Hanza-sidan
uteslöt sektionen eftersom siffrorna (2 rum, 4 paneler, 2 donglar …) bara
upprepade faktabandet utan att tillföra nytt. Säffle-sidan har fortfarande
kvar sektionen — bedöm den på nytt vid migrering (se nedan) i stället för
att automatiskt kopiera den.

CSS-klasserna (`.scale-grid`, `.scale-item`) får gärna finnas kvar i
`<style>`-blocket oanvända inför framtida behov, men ska inte renderas i
markupen om innehållet inte klarar ovanstående regel.

### 9. Bildberättelse — `.gallery-grid`
Obligatorisk, minst två bilder. Varje bild ska ha en bildtext som förklarar
vad besökaren ska lägga märke till (inte bara vad bilden föreställer).

### 10. Teknisk fördjupning — `<details class="technical-details">`
Obligatorisk om projektet har teknikinnehåll att fördjupa. Ihopfälld som
standard (`<summary>Visa teknisk sammanfattning</summary>`), tvåkolumns
lista. Bredvid: `.reference-sidebar` "Relaterad kompetens" med länkar till
relevant miljö- och tjänstesida.

### 11. Överförbar erfarenhet — `.relevance-grid`
Obligatorisk. Rubrik: "Därför är referensen relevant för liknande projekt".
4–6 punkter i `.relevance-item`.

### 12. Relaterade referenser — `.related-grid`
Obligatorisk om det finns minst ett relevant projekt att länka till.
`.related-grid` använder `repeat(auto-fit, minmax(280px, 380px))` så att den
fungerar med allt från ett till tre kort utan extra brytpunkter.

### 13. Avslutande CTA

För en helt ny referensroute är `<PageCTA />` obligatorisk avslutning. Se
`page-cta.md` för fullständigt API. En migrerad sida på en redan befintlig
route räknas inte som ny.

För en befintlig referens som migreras gäller CTA-frysningen: behåll sidans
nuvarande CTA eller avsaknad av CTA. Byt inte `.reference-cta`,
`.fullwidth-cta` eller annan legacy-markup mot `<PageCTA />` i samma körning.
Se `cta-och-sitefooter-overgang.md`.

### 14. `<SiteFooter />`
Obligatorisk. `SiteFooter` är en separat global sidfot och innehåller inte
`PageCTA`. Ändra inte sidfoten som en bieffekt av en referensmigrering.

---

## CSS-kontrakt: `--reference-*`-tokens

Varje sidas `<style>`-block ska deklarera samma bas-tokens i `:root`:

```css
--reference-ink: #1f2521;
--reference-muted: #59615b;
--reference-line: rgba(40, 46, 42, 0.14);
--reference-soft: #f6f7f5;
--reference-facts-bg: rgba(182, 182, 182, 0.05);
--reference-green-soft: rgba(143, 192, 37, 0.12);
```

Håll värdena identiska mellan sidor om det inte finns ett medvetet skäl att
avvika (t.ex. en ljusare/mörkare faktaband-bakgrund för en specifik sida).
Ett avvikande värde ska vara ett aktivt designval, inte en kopieringsslump.

## Brytpunkter

Tre mediafrågor, i den här ordningen, med detta ansvar:

| Brytpunkt | Ansvar |
| --- | --- |
| `max-width: 1100px` | Hero blir 2 lika kolumner. Faktaband blir 3 kolumner. Skalindikatorer (om de finns) blir 3 kolumner. |
| `max-width: 900px` | Hero-grid, content-grid och summary-grid blir 1 kolumn. Sidebar slutar vara sticky. Bildens `min-height` sänks till 380px. |
| `max-width: 680px` | Knappar blir fullbredd och staplas. Faktaband går kant i kant utan kantstreck. Övriga grids (`scope-list`, `room-grid`, `scale-grid`, `gallery-grid`, teknik-listan, `relevance-grid`, `related-grid`) blir 1 kolumn. Bildens `min-height` sänks till 290px. |

Kopiera brytpunkterna med samma gränsvärden på alla sidor så att sidorna
känns likadana när man bläddrar mellan referenser.

---

## Migrering av befintliga sidor

### Redan på `.reference-*`-standarden, men inte helt i linje med facit

- `src/pages/referenser/saffle-simhall/index.astro` — pilotsidan som kom
  före Hanza. Avvikelser mot facit som bör rättas:
  - Hero-bilden har rundade hörn (`border-radius: clamp(18px, 3vw, 34px)`)
    och en pill-badge ovanpå bilden — Hanza har varken rundade hörn eller
    badge.
  - `.scale-grid`-sektionen finns kvar — bedöm på nytt enligt regeln i
    punkt 8 ovan i stället för att behålla den per automatik.
  - CTA:n i slutet är en lokal `.reference-cta`. Den ska bevaras under
    referensmigreringen och bedömas först i det separata CTA-arbetet.
  - H1 är fortfarande fullt projektnamn ("Säffle simhall") — bedöm om det
    ska kortas enligt hero-regeln.

### Fortfarande i den äldre, sidspecifika stilen (`.fullwidth-cta`, ingen
`.reference-hero`)

Dessa 12 sidor är inte byggda enligt den här standarden alls och behöver en
fullständig ombyggnad, inte en justering:

```text
arjangs-simhall
claessons-restaurang-konferens
ekhagsskolan-dals-langed
friskis-solstadens-sportcenter
hundfjallshotellet-hundfjallscenter-salen
kroppkarrs-ip-fotboll
lesjofors-ab
lundsbergs-skola-gym
minnebergsskolan-arvika
nordic-wellness-orebro-marieberg
sannerudshallen-kil
sorby-sporthall-kumla
```

`src/pages/referenser/index.astro` är arkiv-/listningssidan, inte en
projektsida, och omfattas inte av den här standarden.

### Migreringschecklista per sida

- [ ] Bygg om markupen till sektionsordningen i det här dokumentet.
- [ ] Skriv om `<style>`-blocket med samma `--reference-*`-tokens,
      `.reference-*`-klasser och brytpunkter (kopiera från Hanza-sidan, inte
      från Säffle-sidan, tills Säffle själv är migrerad).
- [ ] Bedöm skalindikator-sektionen enligt punkt 8 — inkludera bara om den
      klarar relevanskravet.
- [ ] Dokumentera CTA-typ, text, länkar och antal före migreringen.
- [ ] Behåll befintlig `.fullwidth-cta`/`.reference-cta`, eller avsaknad av
      CTA, utan avsedd visuell förändring. Lägg inte till `<PageCTA />`.
- [ ] Kontrollera att exakt en eller noll CTA-sektioner, samma antal som före
      migreringen, visas direkt före den oförändrade `SiteFooter`.
- [ ] Korta H1 om den innehåller ort/projektnummer som redan syns i kickern
      eller faktabandet.
- [ ] Kör build och kontrollera sidan i både desktop- och mobilbredd.

---

## Kända begränsningar

- `.reference-*`-CSS:en är kopierad mellan sidfiler, inte en delad
  komponent. En framtida designändring måste appliceras sida för sida tills
  detta bryts ut till riktiga Astro-komponenter (`ReferenceHero.astro`,
  `ReferenceFacts.astro` osv., i linje med idéerna i
  `AVAB-standard-referensprojekt.md`). Fram tills dess: håll dig strikt till
  det här dokumentet vid varje ny eller migrerad sida, så att drift mellan
  sidor hålls till ett minimum.
- Innehålls-, tonalitets-, bild- och SEO-reglerna i
  `AVAB-standard-referensprojekt.md` gäller fortfarande som skrivregler,
  trots att filstrukturen i det dokumentet inte stämmer.
