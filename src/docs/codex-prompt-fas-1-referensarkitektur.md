# Codex-prompt – fas 1: gemensam referensarkitektur och Hanza-migrering

Du arbetar i AVAB:s lokala Astro-projekt på branchen:

```text
feature/referenser-markdown
```

## Uppdrag

Genomför endast fas 1 av migreringen till den nya inköparorienterade referensdesignen.

Denna körning ska:

1. inventera nuvarande referensstruktur
2. skapa en gemensam, återanvändbar referenslayout
3. införa Astro content collections för referenser
4. centralisera SEO, canonical och JSON-LD
5. låta arkiv och sida börja använda samma datakälla
6. migrera endast Hanza Mechanics
7. bevara Hanzas nuvarande godkända visuella utseende
8. skapa en konkret bild-, länk- och faktainventering för alla referenser
9. stanna för granskning

Migrera inga andra referenssidor i denna körning.

---

# 1. Kontrollera arbetsläget

Kör:

```bash
git status
git branch --show-current
git log -1 --oneline
```

Bekräfta att aktuell branch är:

```text
feature/referenser-markdown
```

Arbeta inte i `main`.

Arbetskopian kan innehålla avsiktliga, osparade ändringar från arbetet med den
nya `SiteFooter`, `PageCTA`, Hanza och tillhörande dokumentation. De är
baslinjen för denna migrering och ska bevaras. Dokumentera berörda filer och
läs deras diff innan implementation. Stanna inte enbart för att arbetskopian
är smutsig.

Stanna och rapportera endast om en befintlig ändring är okänd, trasig eller
står i direkt konflikt med migrationsmålet så att den inte kan bevaras. Skriv
aldrig över, återställ eller radera befintliga användarändringar.

Gör ingen commit, push eller Pull Request utan uttryckligt besked.

---

# 2. Läs projektet innan implementation

Läs minst:

```text
package.json
astro.config.mjs
src/styles/avab.css
src/components/SiteHeader.astro
src/components/SiteFooter.astro
src/data/referenser.ts
src/docs/avab-standard-referenssida.md
src/docs/AVAB-standard-referensprojekt.md
src/docs/page-cta.md
src/docs/cta-och-sitefooter-overgang.md
src/pages/referenser/index.astro
src/pages/referenser/hanza-konferens-tocksfors/index.astro
src/pages/referenser/saffle-simhall/index.astro
```

Sök även efter:

```text
avab-design-referenssida-inkopare.md
ReferencePage
ReferenceHero
ReferenceFacts
PageCTA
fullwidth-cta
SITE_URL
canonical
getCollection
defineCollection
content.config
```

Om en nämnd fil saknas ska det rapporteras. Hitta inte på innehållet.

Inventera alla mappar under:

```text
src/pages/referenser/
```

och räkna de faktiska referenssidorna.

---

# 3. Låsta beslut

## Terminologi

Använd i gränssnittet:

```text
Referens
Referenser
Relaterade referenser
Se referensen
Fler referenser
```

Undvik som namn på innehållstyp:

```text
Referensprojekt
Se referensprojekt
Fler referensprojekt
```

Ordet projekt får användas naturligt i saktext.

## CTA och SiteFooter under denna körning

`SiteFooter` och sidans avslutande CTA är två separata komponenter. Den nya
`SiteFooter.astro` innehåller ingen inbyggd CTA. Ändra inte `SiteFooter`,
`PageCTA` eller global CTA-CSS i denna körning.

CTA-designen är en fryst zon under referensmigreringen:

- Hanza har redan den nya `<PageCTA />` och ska behålla sin nuvarande CTA
  exakt vad gäller innehåll, länkar, knappantal, placering och visuellt
  utseende.
- När övriga befintliga referenser migreras i senare körningar ska de behålla
  den CTA de har i källsidan, inklusive `.fullwidth-cta`, `.reference-cta`
  eller avsaknad av CTA.
- Referensmigreringen får inte i sig lägga till, ta bort eller byta CTA.
- En äldre CTA är inte ett fel och får inte stoppa migreringen enbart för att
  den inte använder `<PageCTA />`.
- Ingen sida får rendera två CTA-sektioner före sidfoten.

Om en framtida gemensam layout behöver stöd för flera befintliga CTA-varianter
ska minsta kompatibilitetslösning användas, exempelvis variant, adapter eller
namngiven slot. Gör ingen generell CTA-migrering nu. Den genomförs som ett
separat arbete i tre faser efter att referensmigreringen är klar: inventering
och beslut, kontrollerad implementering samt verifiering och städning. Följ
`src/docs/cta-och-sitefooter-overgang.md`.

## URL

Alla befintliga URL:er under `/referenser/` ska bevaras.

Hanza ska fortsätta ligga på:

```text
/referenser/hanza-konferens-tocksfors/
```

## Kanonisk domän

Den enda kanoniska produktionsdomänen är:

```text
https://avab.eu/
```

`www.avab.eu` är endast alias.

Canonical, Open Graph, JSON-LD och absoluta bildadresser ska genereras från central konfiguration.

Interna HTML-länkar ska normalt vara relativa.

`test2.avab.eu` är testmiljö och får inte bli canonical för produktionsinnehåll.

---

# 4. Arkitektur

Bygg enligt principen:

```text
Markdown/content collection
        ↓
ReferencePage.astro
        ↓
Gemensamma komponenter
        ↓
Referenssida + arkivkort + metadata + relaterade referenser
```

Rekommenderad struktur:

```text
src/
├── content/
│   └── references/
│       └── hanza-konferens-tocksfors.md
├── components/
│   └── references/
│       ├── ReferenceHero.astro
│       ├── ReferenceFacts.astro
│       ├── ReferenceBrief.astro
│       ├── ReferenceScope.astro
│       ├── ReferenceVariants.astro
│       ├── ReferenceScale.astro
│       ├── ReferenceResults.astro
│       ├── ReferenceGallery.astro
│       ├── ReferenceTechnicalDetails.astro
│       ├── ReferenceRelevance.astro
│       └── RelatedReferences.astro
├── layouts/
│   └── ReferencePage.astro
└── pages/
    └── referenser/
        └── hanza-konferens-tocksfors/
            └── index.astro
```

Anpassa efter projektets befintliga konventioner.

Skapa inte komponenter som saknar verklig användning i Hanza. Börja hellre med en mindre, fungerande uppsättning och komplettera efter nästa pilot.

---

# 5. Content collection

Använd den metod som projektets installerade Astro-version stödjer.

Skapa ett typat schema som minst kan hantera:

```yaml
draft:
slug:
layout:
title:
shortTitle:
heroTitle:
summary:
publishedDate:
updatedDate:

seo:
  title:
  description:
  noindex:

category:
environment:
location:

customer:
  name:
  publicDisplay:
  showName:
  publicationApproved:
  referenceAvailableOnRequest:

heroImage:
  src:
  alt:
  width:
  height:
  objectPosition:

facts:
brief:
  need:
  responsibility:
  result:

scope:
variants:
scale:
results:
gallery:
technicalDetails:
relevance:
relatedReferences:

cta:
  enabled:
  eyebrow:
  title:
  text:
  primaryLabel:
  primaryHref:
  secondaryLabel:
  secondaryHref:
```

Fälten får struktureras annorlunda om typningen blir bättre. CTA-fälten ska i
denna fas beskriva och bevara sidans befintliga CTA, inte tvinga fram
`PageCTA` på äldre referenser. Gör inga prematura, globala antaganden om vilka
CTA-varianter som ska finnas efter det senare CTA-arbetet.

Tillåt:

```text
compact
standard
extended
```

som presentationsläge, inte som separata mallar.

Komponenter ska främst visas utifrån om data finns.

Tvinga inte:

- exakt tre kort
- ett visst antal relevanspunkter
- minst två galleribilder
- skalindikatorer
- variantkort
- kundcitat
- FAQ

Schemat ska fånga kritiska fel men inte kräva valfria moduler.

---

# 6. Evidensmodell

Skapa en intern evidensmodell för resultat.

Tillåt exempelvis:

```text
delivered
commissioned
measured
customerConfirmed
estimated
```

Exempel:

```yaml
results:
  - text: "Rumsbokningsstatus visas utanför fyra konferensrum."
    evidence:
      type: "delivered"
      source: "Befintlig projektbeskrivning"
      verifiedAt:
      internalNote:
```

Regler:

- `source`, `verifiedAt` och `internalNote` är interna
- intern metodtext får aldrig renderas publikt
- när underlag saknas ska uppgiften utelämnas
- `estimated` ska kräva intern notering
- `measured` ska kräva intern källa eller notering
- etiketter som `Uppmätt` eller `Beräknad` visas endast när det är viktigt för läsaren

Förbjud synlig text som:

```text
Sidan gör inga antaganden om...
Vi har inte kunnat verifiera...
Inga uppgifter finns om...
Följande uppgifter är verifierade...
```

---

# 7. Gemensam layout

`ReferencePage.astro` ska ansvara för:

- dokumentstruktur
- SiteHeader och SiteFooter
- brödsmulor
- hero
- faktarad
- gemensamma sektioner
- relaterade referenser
- sidans befintliga godkända CTA-variant utan redesign
- title och meta description
- canonical
- Open Graph
- Twitter/X
- JSON-LD
- tillgänglig grundstruktur

Innehållsfilen ska inte innehålla:

- full HTML-sida
- SiteHeader eller SiteFooter
- manuella meta-taggar
- manuellt JSON-LD
- stora sidspecifika CSS-block

---

# 8. Hero

Bevara den senaste godkända Hanza-riktningen:

- cirka 8 procent AVAB-grön bakgrund
- använd inte `opacity: 0.08` på förälderelement
- vänster textkolumn linjerad med webbplatsens container
- projektbild som fyller högerkolumnen
- bilden når viewportens högra kant på desktop
- ingen mörk overlay
- ingen kortskugga
- normalt inga rundade hörn
- `object-fit: cover`
- konfigurerbart `objectPosition`
- text först och bild därefter på mobil

Bakgrund kan använda:

```css
background-color: rgba(143, 192, 37, 0.08);
background-color: color-mix(
  in srgb,
  var(--avab-green) 8%,
  var(--avab-white)
);
```

Kopiera inte Hanzas stora sid-CSS rakt av. Rensa och strukturera återanvändbar styling.

---

# 9. CTA

CTA:n ska bevaras, inte migreras, i denna körning.

- Hanza ska fortsätta använda sin nuvarande `<PageCTA />` med samma props och
  högst två knappar.
- Byt inte CTA-komponent, markup, text, länkar, knappantal eller design.
- Ändra inte `PageCTA.astro`, `SiteFooter.astro` eller global CTA-CSS.
- Schemat och layouten får modellera Hanzas befintliga CTA, men får inte göra
  `<PageCTA />` obligatorisk för framtida migrering av äldre referenser.
- Stöd `cta.enabled: false` så att en sida utan CTA kan bevaras utan att
  migreringen lägger till en.
- Att en senare referens använder legacy-CTA ska hanteras som ett avsiktligt
  kompatibilitetsläge och inte som ett fel.

Inventering och byte av CTA på webbplatsens sidor sker först efter avslutad
referensmigrering enligt `src/docs/cta-och-sitefooter-overgang.md`.

---

# 10. Arkiv från samma data

`src/data/referenser.ts` får inte fortsätta vara en separat manuell källa för Hanza.

Efter migreringen ska Hanzas arkivkort hämta från samma content entry:

- titel
- slug
- bild
- alt-text
- ingress
- miljö eller kategori
- tekniker eller taggar

Bryt inte de omigrerade referenserna.

Tillåt en övergång där:

- migrerade poster hämtas från content collection
- omigrerade poster tillfälligt finns kvar i `referenser.ts`

Undvik dubbla Hanza-poster.

Dokumentera hur `referenser.ts` ska avvecklas när sista sidan är migrerad.

---

# 11. Migrera endast Hanza

Flytta Hanzas innehåll från:

```text
src/pages/referenser/hanza-konferens-tocksfors/index.astro
```

till content collection.

Den befintliga `index.astro` ska bli tunn och hämta rätt entry.

Anpassa efter aktuell Astro-version.

## Visuell regression

Hanza ska se så nära den nuvarande godkända sidan som möjligt.

Tillåtet:

- bättre semantik
- bättre tillgänglighet
- borttagning av död kod
- borttagning av oanvänd `scale`-data
- centralisering av metadata och schema
- CSS-förenkling utan avsedd visuell förändring

Inte tillåtet:

- ny sidlayout
- nya texter utan underlag
- ändrad informationsordning
- nya sektioner
- ändrade fakta
- nya bilder
- ändrad hero-riktning
- ändrad CTA-struktur
- ändrad CTA-text, CTA-länk eller CTA-styling
- ändrad `SiteFooter`
- migrering av andra referenser

---

# 12. SEO och schema

Generera centralt:

- `<title>`
- meta description
- canonical
- Open Graph
- Twitter/X
- `Article`
- `WebPage`
- `BreadcrumbList`

Använd ett gemensamt JSON-LD-`@graph` när det förenklar.

Använd alltid:

```text
https://avab.eu/
```

FAQ-schema genereras endast när en synlig FAQ finns i content entry.

Publiceringsdatum får inte framställas som projektets färdigställandedatum.

---

# 13. Bildinventering

Skapa:

```text
src/docs/referenser-migreringsinventering.md
```

Inventera samtliga referenssidor.

Tabell:

| Referens | Route | Bildväg | Finns lokalt | Användning | Dimensioner verifierade | Alt-text | Åtgärd |
|---|---|---|---:|---|---:|---|---|

Kontrollera varje faktisk bildväg mot filsystemet.

Skilj mellan:

- lokal bild som finns
- lokal bild som saknas
- extern bild
- felaktig eller antagen sökväg
- platshållare
- fil som finns under annat namn eller i annan mapp

Hitta inte på ersättningsbilder.

Möjliga åtgärder:

```text
Återställ från källa
Lokalisera original
Byt till verifierad befintlig bild
Tillåt enbildsläge
Blockera publicering
```

---

# 14. Länkinventering

Inventera interna länkar i alla referenser.

Tabell:

| Källa | Länk | Route finns | Typ | Åtgärd |
|---|---|---:|---|---|

Kontrollera särskilt:

```text
/tjanster/konferensteknik/
/tjanster/skarmar-projektorer/
/tjanster/videomoten-byod/
/service-support/
/kunskap/ratt-kabel-av-teknik/
```

Verifiera mot den faktiska arbetskopian.

Ändra inte länkar på omigrerade sidor i denna körning. Rapportera endast.

---

# 15. Faktainventering

Notera per referens:

- kundnamn verifierat
- publiceringsgodkännande känt eller okänt
- bildrättigheter kända eller okända
- färdigställandedatum verifierat eller okänt
- AVAB:s ansvar tydligt eller otydligt
- mätvärden med källa eller utan källa
- kundcitat godkänt eller okänt
- rekommenderat layoutläge: compact, standard eller extended

Använd:

```text
ja
nej
okänt
```

Skilj alltid `okänt` från `nej`.

---

# 16. Tillgänglighet

Säkerställ:

- exakt en H1
- logisk rubrikhierarki
- fungerande skip-link
- korrekt `main`
- brödsmulor med `aria-current`
- synligt tangentbordsfokus
- semantiska listor
- korrekta `figure` och `figcaption`
- fungerande `details/summary`
- alt-texter för informativa bilder
- inga tomma länkar
- inget viktigt förmedlas enbart via färg
- stöd för `prefers-reduced-motion`
- ingen horisontell scroll
- fungerande layout vid 200 procents zoom

---

# 17. Tester

Läs scripts i `package.json`.

Kör minst:

```bash
npm run build
```

Kör även lint, typecheck eller test om scripts finns.

Starta:

```bash
npm run dev
```

Kontrollera:

```text
/referenser/
/referenser/hanza-konferens-tocksfors/
```

Testa Hanza på:

```text
375 px
768 px
1024 px
1440 px
1920 px
```

Kontrollera:

- visuell likhet före och efter
- hero
- bildbeskärning
- faktarad
- sammanfattning
- scope
- variantkort
- resultat
- galleri
- teknisk sammanfattning
- relevans
- relaterade referenser
- CTA
- header och footer
- tangentbord
- mobil
- konsolfel
- nätverksfel
- trasiga bilder
- trasiga länkar

---

# 18. Sökningar före avslut

Sök i ny och ändrad kod efter:

```text
www.avab.eu
Referensprojekt
Se referensprojekt
Fler referensprojekt
BILDPLATS
image-placeholder
TODO
href="#"
Sidan gör inga antaganden
Vi har inte kunnat verifiera
Inga uppgifter finns om
```

Sök också efter duplicerade Hanza-data i:

```text
src/data/referenser.ts
src/content/references/
src/pages/referenser/hanza-konferens-tocksfors/
```

Hanza ska ha en primär innehållskälla.

---

# 19. Avgränsning

Gör inte detta:

- migrera Säffle
- migrera Sörby
- migrera Nordic Wellness
- migrera resterande referenser
- ta bort all gammal referens-CSS
- skapa PDF-generator
- ändra headern
- ändra `SiteFooter.astro`
- ändra `PageCTA.astro` eller migrera legacy-CTA
- ta bort global legacy-CTA-CSS
- ändra routing för alla referenser
- radera `referenser.ts` helt
- ändra kundfakta
- skapa nya kundcitat
- hitta på bilder
- göra stora globala designändringar
- commit eller push

---

# 20. Rapport och stoppunkt

Rapportera:

## Ändrade filer

Lista varje skapad, ändrad och borttagen fil.

## Arkitektur

Beskriv:

- content collection
- schema
- layout
- komponenter
- SEO-generering
- arkivets övergångslösning

## Hanza

Redovisa:

- vilka data som flyttades
- synliga skillnader
- borttagen död kod
- borttagen oanvänd data
- kvarvarande sidspecifika undantag

## Inventering

Sammanfatta:

- antal referenser
- saknade lokala bilder
- externa bilder
- platshållare
- trasiga eller saknade interna routes
- projekt med okänt publiceringsgodkännande
- rekommenderade compact/standard/extended

## Tester

Redovisa:

- körda kommandon
- buildresultat
- typecheck/lint
- konsolfel
- bildfel
- länkfel
- testade skärmbredder

## Risker och nästa steg

Lista vad som blockerar nästa migrationsbatch.

Avsluta sedan.

Migrera inga ytterligare referenser och gör ingen commit eller push.
