# Workflow: Standardiserad referensproduktion (source → visual gate)

**Status:** Active
**Owner:** AVAB-projektet
**Scope:** `reference` — produktion av nya standardreferenser under `/referenser/`
**Last reviewed:** 2026-09-21
**Relation till andra dokument:** Detta dokument beskriver **processen och audit-gaten** för en standardreferens, i en sammanhängande körning. Det ersätter inte `docs/standards/pages/reference.md` (innehålls-/designstandarden) eller `docs/workflows/create-reference.md` (grundflödet för skapa/migrera referens) — det bygger vidare på dem och lägger till den källverifiering och de gates som krävts i praktiken när flera referenser byggts (Skolhagenskolan, Stockfallets skola, Mullhyttans sporthall m.fl.).

Vid konflikt gäller dokumenthierarkin i `docs/README.md`. Vid motstridiga regler: flagga, gissa inte tyst.

## Läs före arbete

1. `docs/README.md` (regelhierarki)
2. `docs/standards/pages/reference.md` (canonical innehålls-/designstandard)
3. `docs/architecture/ai-write-scope.md` (vad en normal contentuppgift får/inte får ändra)
4. `docs/architecture/content-model.md`
5. `docs/workflows/create-reference.md`
6. aktuellt `src/content.config.ts` — schemat är sanningskälla, inte gamla exempel

**Känd avvikelse att känna till:** `docs/workflows/create-reference.md` anger målfil `src/content/references/<id>.json`. Den faktiska, implementerade konventionen (verifierad i kod och i samtliga byggda referenser) är `src/content/references/<slug>.md` med YAML-frontmatter. Följ koden, inte det gamla exemplet, tills dokumentet uppdateras.

---

## Fas 0 – Preconditions

Kontrollera innan något annat görs:

- [ ] `main` är uppdaterad: `git checkout main && git fetch upstream && git pull --ff-only upstream main`
- [ ] `git status` visar en clean tracked working tree
- [ ] ny feature-branch skapad från uppdaterad `main` (namnkonvention: `seo/referens-<slug>` för innehåll, eller motsvarande projektkonvention)
- [ ] kundens sourcefil finns lokalt och går att läsa som text (för `.docx`: extraheras via zip/XML eller motsvarande — läs inte bara filnamnet)
- [ ] sourcefilens exakta filnamn/path dokumenteras ordagrant (används senare som `SOURCE AUDIT INPUT` i coverage-filen)

Källfiler av typen `docs/source-material/*.docx` är lokal arbetskälla. De ska **aldrig** committas eller pushas. Lämna dem untracked.

**Om sourcefilen saknas eller inte går att läsa: STOPPA.** Fråga var filen finns. Bygg aldrig en sida eller en coverage-fil genom att gissa innehåll eller genom att bara läsa en tidigare coverage-fil som fakta — en coverage-fil är ett resultat, inte en källa.

---

## Fas 1 – Source extraction

Läs originalkällan direkt (hela dokumentet, inte bara rubriker).

Extrahera atomära, unika sakuppgifter — en sats/ett faktum per punkt, inte hela stycken. Klassificera varje punkt:

### REQUIRED SOURCE FACT
Projektunik fakta: leverans, utrustning, antal, modeller, funktion, integration, användning, process, installation, verifiering, säkerhet, tillgänglighet, entreprenadroll, dokumentation. **Måste** representeras på sidan (semantiskt, inte nödvändigtvis ordagrant, och inte upprepat i flera format bara för att räknas).

### OPTIONAL PRODUCT CONTEXT
Allmän produktbakgrund (t.ex. en hel produktfamiljs sortiment) som inte beskriver den faktiska installerade konfigurationen. Behöver inte tvingas in på sidan. Lägg aldrig till sådan fakta enbart för att uppnå mekanisk coverage.

### EXTERNAL FACT TO VERIFY
Produktdata, standarder (t.ex. IEC-nummer), kommunfakta eller annan extern fakta som kan/ska verifieras mot en primärkälla (tillverkarens datablad, kommunens protokoll etc.).

### SEO TARGET
Sökfraser och geografiska targets. Kräver semantisk coverage genom naturliga formuleringar i H1, summary, story, technicalDetails och FAQ — inte ordagrann stuffing.

### STRUCTURAL/COPY INPUT
FAQ-formuleringar, CTA-text, AEO/GEO-snippets, internlänkar och liknande som får omstruktureras fritt så länge ingen unik fakta tappas.

---

## Fas 2 – Architecture decision

Utgå visuellt och strukturellt från det kanoniska referensfacit `https://avab.eu/referenser/saffle-simhall/` enligt `docs/standards/pages/canonical-page-exemplars.md`. Äldre referenser används endast för regression och för att se redan implementerade variationer — aldrig som alternativ mall.

Avgör om sidan kan byggas helt med befintlig reference-arkitektur:

- `src/layouts/ReferencePage.astro`
- `src/components/references/*` (t.ex. `ReferenceMediaGrid.astro`, `ReferenceFaq.astro`, `ReferenceHero.astro`, `PageCTA.astro`)
- `src/styles/reference-page.css`, `reference-case-study.css`, `reference-gallery-layout.css`
- befintliga schemafält i `src/content.config.ts`: `hero`, `facts`, `brief`, `scope`, `story.chapters[].mediaGroups` (med `columns`, `ratio`: `land`/`pano`/`portrait`/`tall`/`slim`, `split`, `layout`: `grid`/`mixed-pair`/`sidebar`), `results`, `technicalDetails`, `relevance`, `faq`, `cta`

**Default: INGEN NY KOMPONENT. INGEN NY LAYOUTVARIANT. INGEN SIDESPECIFIK CSS.**

**Referenslayout är alltid `extended`.** De tidigare layoutvärdena `compact` och `standard` är avvecklade och får inte användas, återinföras eller användas som genväg för tunt källunderlag. Om source är tunn ska innehållet vara kortare inom den aktuella `extended`-arkitekturen, eller sidan pausas om publiceringskraven inte kan uppfyllas.

Standardreferenser ska normalt kunna representeras med de befintliga `ratio`/`split`/`layout`-kombinationerna för mediaGroups. Prova alltid en befintlig kombination innan en ny variant övervägs.

En ny generell komponent/layoutvariant får **endast** skapas om samtliga gäller:

1. sourceinnehållet verkligen inte går att representera bra med befintliga lösningar,
2. varianten kan motiveras som återanvändbar för fler referenser (inte bara denna sida),
3. den namnges generiskt — **aldrig** efter projekt/slug (t.ex. `mixed-pair`, `sidebar`, inte `mullhyttan-split`),
4. ändringen regressionstestas mot minst 2–3 befintliga referenser som använder närliggande CSS-regler.

**Om ett arkitekturgap upptäcks: STOPPA före implementation och rapportera exakt varför en befintlig lösning inte räcker.** Detta är den enda tekniska stopp-punkten i flödet — standardreferenser ska inte tyst bli arkitekturprojekt.

---

## Fas 3 – Build

Skapa/uppdatera:

- `src/content/references/<slug>.md` — YAML-frontmatter enligt `src/content.config.ts`
- tunn route: `src/pages/referenser/<slug>/index.astro`

  ```astro
  ---
  import { getCollection } from "astro:content";
  import ReferencePage from "../../../layouts/ReferencePage.astro";

  const reference = (await getCollection("references")).find(
    (entry) => entry.data.slug === "/referenser/<slug>/",
  );

  if (!reference) {
    throw new Error("Reference content missing for /referenser/<slug>/");
  }
  ---

  <ReferencePage reference={reference} />
  ```

- coverage-fil, se Fas 5

Regler:

- Ny sida ska alltid börja med `draft: true` och `seo.noindex: true`.
- `customer.publicationApproved` ska vara `null` tills ett uttryckligt godkännande finns.
- Ingen placeholderbild. Ingen AI-genererad ersättningsbild utan uttryckligt godkännande från användaren.
- Använd endast assets som redan finns i `public/assets/` eller som uttryckligen tillhandahålls för uppgiften.
- Bildkomposition (grid, split, mixed-pair, sidebar) väljs efter berättelsens samband enligt `docs/standards/pages/reference.md`, inte efter vad som råkar se enklast ut.
- Om en annan sida på sajten redan är tänkt att länka till denna referens (t.ex. en miljö- eller tjänstesida med en overksam/placeholder-länk), aktivera den riktiga länken som en del av samma build-steg.

---

## Fas 4 – Source audit (två riktningar)

Detta är obligatoriskt för varje ny referens, inte ett extra steg som kan hoppas över för att spara tid.

### A. SOURCE → IMPLEMENTATION
Varje `REQUIRED SOURCE FACT` från Fas 1 ska kunna spåras till en konkret plats i implementationen (citat eller tydlig referens).

Gate: **`MISSING REQUIRED SOURCE FACTS: 0`**

### B. IMPLEMENTATION → SOURCE
Läs igenom hela den byggda sidan och kontrollera att inga projektspecifika påståenden lagts till utan stöd i kundsource.

Gate: **`UNSUPPORTED PROJECT CLAIMS: 0`**

Kontrollera samtidigt om något påstående ändrats semantiskt starkare än källan, t.ex.:

- "projekterad" → "garanterad"
- "beräknad" → "uppmätt"
- "ska verifieras" → "är verifierad"
- "bedömd" → "bevisad"

Gate: **`MATERIAL SOURCE DEVIATIONS: 0`**

### C. Extern fakta
Produktdata, standarder och liknande extern fakta måste vara verifierad mot en primärkälla (tillverkarens webbplats/datablad, standardorganisationens sida, kommunens dokument).

Gate: **`UNVERIFIED CLAIMS: 0`**

### D. Assets
Samtliga assets som är tänkta att användas ska faktiskt finnas och faktiskt vara refererade i content-filen.

Gate: **`MISSING REMOTE ASSETS: 0`**

**Sätt aldrig en gate till 0 innan den faktiska jämförelsen är gjord.** En tidigare coverage-fil (om sådan finns från ett tidigare AI-pass) ska granskas som ett resultat som kan innehålla fel — inte användas som facit.

---

## Fas 5 – Coverage

Coveragefilen ligger under det aktuella projektets mapp, t.ex.:

`docs/projects/<aktivt-projekt>/coverage/<slug>.md`

(Se `docs/projects/` för vilken projektmapp som är aktiv just nu — mappnamnet är datumstämplat per projekt, t.ex. `seo-undersidor-2026-09-21`. Använd den mapp som redan används av systerreferenserna i samma initiativ; skapa inte en ny parallell coverage-struktur.)

Filen ska innehålla:

### Source audit input
Exakt lokal sourcefil som användes, t.ex.:

```
SOURCE AUDIT INPUT: docs/source-material/Referens X.docx
```

Detta är dokumentation av vad som granskades — inte en instruktion att committa sourcefilen.

### Traceability matrix
För varje viktig sakuppgift:

| Source fact | Classification | Implementation | Evidence | Status |
|---|---|---|---|---|

`Evidence` ska innehålla ett kort implementationsexcerpt eller en tydlig faktisk referens (sektion + fält), inte bara "PASS". En rad får bara markeras `PASS` om implementationen faktiskt verifierats innehålla informationen.

### Slutgates
Filen ska avslutas med:

```
MISSING REQUIRED SOURCE FACTS: 0
UNSUPPORTED PROJECT CLAIMS: 0
MATERIAL SOURCE DEVIATIONS: 0
UNVERIFIED CLAIMS: 0
MISSING REMOTE ASSETS: 0
```

`MISSING SOURCE INFORMATION` (äldre benämning som förekommer i tidigare coverage-filer) kan behållas om den definieras tydligt — normalt som synonym till `MISSING REQUIRED SOURCE FACTS` avgränsat till kategori A.

---

## Fas 6 – Automated verification

Kör, i denna ordning:

1. `git diff --check`
2. `npm run build`
3. `npm run validate` (= `validate:guardrails` via `node scripts/validate-site.mjs` + `npm run build`) — eller `node scripts/validate-site.mjs` separat om ett känt orelaterat fel i en annan sida blockerar hela `validate`-kedjan
4. kontroll att `draft: true` och `seo.noindex: true` fortfarande gäller
5. kontroll att samtliga tillhandahållna assets faktiskt används (grep på filnamn i content-filen)
6. kontroll av interna länkar/relationer om verktyg för det finns i `package.json`; annars manuell kontroll av `relatedCompetence`/interna hrefs

**Pre-existing, orelaterade validate-fel (t.ex. ett guardrail-fel i en helt annan referens) ska rapporteras separat och tydligt — de ska aldrig döljas, "fixas" i förbigående på en annan sidas innehåll, eller användas som ursäkt att hoppa över validate helt.**

---

## Fas 7 – Visual gate

Först nu görs mänsklig visuell granskning. Fokusera på:

- hero
- bildval och bildlayout (grid/split/mixed-pair/sidebar, crop vs. hela bilden synlig)
- textmängd och läsbarhet
- desktop
- mobil (stapling, ingen overflow, ingen beskärning av innehåll som ska synas)
- ProjectFacts/facts
- results
- technicalDetails
- FAQ
- CTA

**Inte** en förnyad manuell genomläsning av alla sourcefakta — den kontrollen ska redan vara klar och godkänd i Fas 4/5. Om ett faktafel upptäcks här är det ett tecken på att Fas 4 missades eller gjordes ofullständigt, inte ett normalt steg i visual gate.

---

## Fas 8 – Approval

Ingen commit/push/merge före den stoppunkt som anges i uppgiften.

Normalt flöde:

1. bygg (Fas 0–3)
2. audit (Fas 4)
3. coverage (Fas 5)
4. verifiera (Fas 6)
5. **STOPPA för visuell review** (Fas 7)

Efter uttryckligt godkännande från användaren:

6. commit (endast avsedda filer — kontrollera `git status` och `git diff --stat` innan `git add`)
7. push till rätt remote (se `docs/workflows/local-development-and-deploy.md` för Git-flödet i detta repo, inklusive `origin`/`upstream`-hantering)
8. PR
9. CI/checks
10. merge (repots normala merge-metod — kontrollera historiskt mönster, t.ex. via `git log --merges` om osäker)
11. branch cleanup, se nedan

---

## Branch cleanup-standard (efter merge)

```
git checkout main
git fetch upstream
git pull --ff-only upstream main
```

- verifiera att merge-commiten finns på `main` (två parents, innehåller den nya sidans content-fil)
- `git branch -d <feature-branch>` (safe delete — fungerar bara om branchen faktiskt är mergad)
- radera remote branch om den fortfarande finns: `git push upstream --delete <feature-branch>`
- `git fetch --prune`
- kontrollera clean tracked working tree (`git status`)
- kontrollera att lokal `main` är i synk med `upstream/main` (ingen ahead/behind)

Rör aldrig andra branches än den som just mergades, även om flera feature-branches finns samtidigt i repot.

---

## Fast path

Om samtliga gäller:

- sidan använder helt befintlig arkitektur (ingen ny komponent/layout/CSS krävs, se Fas 2),
- alla assets finns redan tillgängliga,
- sourceunderlaget är tydligt och läsbart utan tolkningskonflikter,
- inga säkerhets- eller publiceringsbeslut krävs under vägen,

då körs hela kedjan i en sammanhängande körning utan mellanstopp:

```
SOURCE → BUILD → AUDIT → VERIFY → VISUAL REVIEW
```

Dvs Fas 0–6 görs utan att stanna för bekräftelse mellan varje fas. Första stoppet är visual gate (Fas 7), inte tidigare.

## Stopp-punkter (även på fast path)

1. sourcefilen saknas eller inte går att läsa
2. ett verkligt arkitekturgap upptäcks (Fas 2)
3. motstridiga sakuppgifter i källan som inte går att lösa säkert utan att gissa
4. kritiska assets saknas
5. visual gate (Fas 7) — alltid ett stopp, oavsett fast path
6. varje punkt där uppgiften eller ett styrande dokument uttryckligen kräver mänskligt godkännande (t.ex. `draft`/`noindex`-ändring, merge, kundpublicering)

## Kvalitetsprincip

Ökad hastighet i detta workflow får aldrig komma från att:

- source-audit hoppas över eller görs mot en gammal coverage-fil i stället för originalkällan,
- produktfakta gissas i stället för verifieras mot primärkälla,
- sourceinformation tappas för att texten ska bli kortare,
- nya claims hittas på för att fylla en sektion,
- placeholders eller AI-genererade bilder används utan godkännande,
- en ny sidspecifik lösning byggs för att undvika att analysera befintlig arkitektur,
- `draft`/`noindex` tas bort innan ett uttryckligt publiceringsgodkännande finns.

Tidsvinsten ska komma från standardisering, återanvändning av befintlig arkitektur och färre manuella omtag — inte från att hoppa över kontroller.
