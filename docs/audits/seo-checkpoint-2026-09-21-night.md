# SEO-checkpoint – kväll 2026-09-21

Den här checkpointen ersätter äldre statusuppgifter i `docs/audits/publicering-indexering-2026-09-21.md` där de motsägs av senare merges och kontroller.

## Baslinje

Senaste verifierade `main` vid start: `6e082ad0a501c6ecd321b90dfe2ecedcb42394e1`.

Redan mergat och indexeringsförberett före denna checkpoint:

- `/tjanster/ljus/`
- `/tjanster/natverk-switchar-router-fiber/`
- `/tjanster/skarmar-projektorer/`
- `/tjanster/digital-signage/`
- `/kameraovervakning/gdpr/`
- Kamera Butik länkar nu till den publicerade Go Banana Bergvik-referensen.

## 1. Konferensteknik

**Status: blockerad – ingen ändring gjord.**

Coverage kräver slutlig jämförelse mot:

`C:\webbprojekt\avab-eu\docs\source-material\Konferensteknik.docx`

Källan gick inte att hitta i:

- ChatGPT Library
- ansluten Google Drive
- GitHub-repot

Sidan ligger därför fortsatt `draft/noindex`. Det som saknas är själva dedikerade källdokumentet; utan det går det inte att verifiera att inga viktiga fakta har tappats eller förändrats.

## 2. Kamera – Skola, Parkering, Industri och Galleria

**Status: blockerade – ingen publicering gjord.**

Alla fyra coverage-filer har fortfarande `LOCAL SOURCE CHECK: PENDING` mot eventuellt lokalt källmaterial som inte finns åtkomligt i GitHub/Drive.

Dessutom:

- **Parkering:** `HERO IMAGE APPROVAL: PENDING`
- **Skola:** juridiken är redan källkontrollerad mot IMY, men den lokala source-gaten återstår
- **Industri:** inga unsupported claims upptäckta, men source-gaten återstår
- **Galleria:** inga unsupported claims upptäckta, men source-gaten återstår

De fyra sidorna ska alltså inte släppas enbart för att deras generella copy ser rimlig ut.

## 3. Videomöten/BYOD

**Status: håll kvar som draft/noindex.**

Själva tjänstesidan och coverage är tekniskt rena, men två SEO-/publiceringsberoenden gör att publicering bör vänta:

1. sidan länkar vidare till `/tjanster/konferensteknik/`, som fortfarande är blockerad,
2. proof-blocket använder Lesjöfors AB, vars referens fortfarande är `draft: true`, `seo.noindex: true` och `customer.publicationApproved: null`.

Search Console visar dessutom att den gamla sidan `/videokonferens/` fortfarande har organisk synlighet. De senaste 28 dagarna hade den 29 impressions med genomsnittlig position cirka 7,9. Exempel på query: `videokonferenslösning` hade 16 impressions och position cirka 6,3.

Rekommendation: publicera inte nya BYOD-sidan och lägg inte redirect från `/videokonferens/` förrän Konferensteknik och migrationsupplägget är beslutat. Annars finns risk att en sida som redan rankar ersätts för tidigt.

## 4. Exakt sökning & AI-analys

**Status: publiceringsförberedd i PR #82 – inte mergad.**

PR: `https://github.com/AVAB-EU/avab-eu/pull/82`

Gjort:

- `draft: false`
- `seo.noindex: false`
- coverage uppdaterad
- sidan har inga kundspecifika proof-claims
- starka äldre formuleringar om extrema tidsbesparingar används inte som generella fakta
- tjänsten har fått en intern länk från tjänsteöversikten så den inte blir orphan vid publicering

Search Console stödjer att sidan fyller en verklig sökintention:

- `ai kameraövervakning`: 31 impressions, position cirka 28,6
- `kameraövervakning ai`: 24 impressions, position cirka 32,3

PR #82:s valideringsworkflow är grönt.

## 5. Referenser

### Publicerade med uttryckligt approval

- Go Banana Bergvik – `publicationApproved: true`
- Nobel Forum – `publicationApproved: true`

### Processavvikelse som kräver mänskligt beslut

- Hanza Mechanics, Töcksfors – indexerbar men `publicationApproved: null`

Approval-fältet har inte ändrats automatiskt. Bekräfta om den befintliga publiceringen redan är kundgodkänd och dokumentera därefter beslutet.

### Draft/noindex – kräver kundbeslut innan publicering

Följande 21 structured references ligger fortsatt `draft: true`, `seo.noindex: true` och `customer.publicationApproved: null`:

- Årjängs simhall
- Claessons Restaurang & Konferens
- Ekhagsskolan
- Fortnox Arena Växjö
- Friskis & Svettis
- Galleria Duvan
- Götetorpsskolan Hammarö
- Hundfjällshotellet & Hundfjällscenter
- Kroppkärrs IP
- Lesjöfors AB
- Loka Brunn
- Lundsbergs skola
- Minnebergsskolan
- Mullhyttans sporthall
- Nordic Wellness Marieberg
- Säffle simhall
- Sannerudshallen
- Skolhagenskolan Täby
- Sörby sporthall
- STC Kil Gym
- Stockfallets skola

### Kända innehålls-/bildblockerare

- **Galleria Duvan:** innehåller `referens-platshallare.svg`, sidan säger uttryckligen att referensen är under uppbyggnad och behöver bekräftade projektuppgifter/bilder.
- **Götetorpsskolan:** saknar verifierad projektbild; nuvarande rastsignalbild är illustrativ enligt tidigare audit.

Övriga draft-referenser ska inte göras indexerbara förrän visuell kontroll, fakta/bilder och kundens publiceringsbeslut är klara.

## 6. Metadata-audit

Gemensamma structured layouts granskades:

- `ServiceLandingPage.astro`
- `CameraIndustryPage.astro`
- `ReferencePage.astro`

De har konsekvent:

- `<title>` och meta description
- canonical via `https://avab.eu/`
- robots som följer `draft/noindex`
- Open Graph
- Twitter metadata
- relevant JSON-LD, inklusive Breadcrumb/Service/Article/FAQ där det används

Ingen säker sitewide P0/P1-metadatafix identifierades i de gemensamma layouterna.

Manuellt skrivna sidor varierar mer. Exempelvis `/tjanster/` har komplett title/description/canonical/OG och `twitter:card`, men inte egna explicita Twitter title/description/image-taggar. Detta är en lågprioriterad konsistensfråga, inte ett indexeringsfel, eftersom sociala plattformar kan falla tillbaka till OG-data. Ingen bred ändring gjordes utan att först inventera alla handskrivna sidor.

Canonical-domänen i källan är fortsatt `https://avab.eu/`. Den befintliga tekniska auditen har redan verifierat att byggda interna länkar/canonical inte använder `www` eller egen `http`-variant.

## 7. Search Console – baslinje senaste 28 dagarna

Search Console för `sc-domain:avab.eu` är ansluten via Windsor.ai.

### Sidor med tydlig trafik/synlighet

- `/`: 54 klick, 1 433 impressions, CTR 3,77 %, position 7,23
- `/rastsignal/`: 20 klick, 205 impressions, CTR 9,76 %, position 5,48
- `/kontakt/`: 9 klick, 359 impressions, CTR 2,51 %, position 5,38
- `/miljo/ishall/`: 6 klick, 46 impressions, CTR 13,04 %, position 4,96

### Sidor med förbättringsmöjlighet

- `/miljo/kontor-konferens/`: 798 impressions, 1 klick, position cirka 17,3
- `/tjanster/kameraovervakning/`: 207 impressions, 2 klick, position cirka 21,5
- `/tjanster/projektering/`: 130 impressions, 0 klick, position cirka 5,24 – särskilt intressant title/snippet-kandidat
- `/tjanster/installation/`: 280 impressions, 0 klick, position cirka 12,47
- `/tjanster/driftsattning/`: 210 impressions, 0 klick, position cirka 17,71
- `/tjanster/garanti-och-service/`: 98 impressions, 1 klick, position cirka 2,18 – mycket låg CTR relativt positionen

### Konferensintention finns redan

Exempel senaste 28 dagarna:

- `installation konferensrum`: 117 impressions, position cirka 9,2
- `konferensrum teknik`: 92 impressions, position cirka 14,9
- `teknik konferensrum`: 78 impressions, position cirka 21,1
- `av utrustning konferensrum`: 68 impressions, position cirka 20,3
- `styrsystem konferensrum`: 58 impressions, position cirka 8,6
- `mötesrumsteknik`: 58 impressions, position cirka 25,4

Det stärker prioriteten på Konferensteknik när källgaten kan stängas.

### Legacy-URL:er syns fortfarande

GSC visar fortfarande bland annat:

- `/om-2/`
- `/sakerhetskameror/`
- `/skola/`
- `/simhall/`
- `/sporthall/`
- `/minnebergsskolan-arvika/`

Relevanta redirects finns redan i `astro.config.mjs`. Detta ska följas över kommande crawlperioder i stället för att ändras igen direkt.

### Sitemap – konkret åtgärd

`public/robots.txt` pekar på den aktuella Astro-sitemapen:

`https://avab.eu/sitemap-index.xml`

Search Console-anslutningen visar däremot gamla registrerade sitemaps från WordPress-eran, bland annat:

- `http://avab.eu/sitemap.xml.gz`
- `http://avab.eu/sitemap.xml`
- `https://avab.eu/sitemap_index.xml`

Den sistnämnda använder underscore och rapporterar 1 error + 2 warnings i hämtad GSC-data.

**Nästa Google-åtgärd:** verifiera att `https://avab.eu/sitemap-index.xml` svarar korrekt i produktion och skicka in just den i Search Console. Gamla sitemap-poster kan därefter fasas ut när nya sitemapen är accepterad.

## 8. Bild-SEO och internlänkning

- Den nya Exakt sökning/AI-sidan saknade tidigare en tydlig intern ingång från en indexerbar sida. PR #82 lägger därför till den på `/tjanster/`.
- Sökning efter tomma `alt=""` gav bland annat kameraövervakningens hero, men bilden är samtidigt `aria-hidden="true"` och används som dekorativ bakgrund bakom hero-copy. Den är därför inte ändrad bara för SEO:s skull.
- Galleria Duvan är den enda structured reference där den uttryckliga `referens-platshallare.svg` hittades.
- Inga fabricated alt-texter eller projektbilder har lagts till.

## Morgonläge

### PR att granska

**#82 – Exakt sökning & AI-analys**

Granska visuellt:

1. `/tjanster/exakt-sokning-ai-analys/`
2. `/tjanster/` – Kontroll & upplevelse ska nu ha ett nytt kort `Exakt sökning & AI` och landa i två rader om tre kort.

CI är grön. Merge inte förrän den visuella kontrollen är godkänd.

### Blockerat tills nytt underlag/beslut finns

- Konferensteknik – behöver `Konferensteknik.docx`
- Kamera Skola – local source check
- Kamera Parkering – local source check + hero-godkännande
- Kamera Industri – local source check
- Kamera Galleria – local source check
- Videomöten/BYOD – vänta på Konferensteknik + Lesjöfors/publicerings- och redirectbeslut
- Referenser – kundgodkännande; Galleria Duvan/Götetorpsskolan har dessutom kända materialblockerare

### Rekommenderad nästa ordning

1. Visuell granskning och eventuellt merge av PR #82.
2. Skicka in aktuell `https://avab.eu/sitemap-index.xml` i Search Console efter produktionskontroll.
3. Prioritera metadata/snippet-test på `/tjanster/projektering/` och `/tjanster/garanti-och-service/`, eftersom de redan rankar relativt högt men får få klick.
4. När `Konferensteknik.docx` finns: stäng source-gaten och bygg publicerings-/redirectplan för Konferensteknik + Videomöten.
5. Ta referenserna i små batcher först när kundgodkännande och verkliga projektbilder/fakta finns.

Inget har mergats i denna checkpoint.
