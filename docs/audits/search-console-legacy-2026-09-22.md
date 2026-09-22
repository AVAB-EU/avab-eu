# Search Console & legacy-indexering – 2026-09-22

## Källa

Google Search Console via Windsor.ai, property `sc-domain:avab.eu`.

Den här fasen skiljer på verkliga SEO-problem och sådant som endast behöver omcrawl/tid efter go-live. Inga legacy-URL:er redirectas eller 410-markeras utan verifierad destination och verksamhetsbeslut.

## Sitemap

Repo/robots anger aktuell Astro-sitemap:

`https://avab.eu/sitemap-index.xml`

Search Console har fortfarande följande äldre registrerade sitemap-poster:

| Sitemap | Senast inskickad | Senast hämtad | Fel | Varningar |
|---|---|---|---:|---:|
| `http://avab.eu/sitemap.xml.gz` | 2014-03-24 | 2024-10-23 | 0 | 128 |
| `http://avab.eu/sitemap.xml` | 2014-03-24 | 2022-09-13 | 0 | 126 |
| `https://avab.eu/sitemap_index.xml` | 2026-03-24 | 2026-08-13 | 1 | 2 |

### Status 2026-09-22

`https://avab.eu/sitemap-index.xml` är nu inskickad i Search Console och status är **Lyckades**. Google läste sitemapen 2026-09-22 och rapporterade **51 upptäckta sidor**.

Serverkontroll visade samtidigt att både `sitemap-index.xml` och `sitemap-0.xml` svarar med `200 OK` och `Content-Type: application/xml`.

De äldre WordPress-sitemap-posterna är därför historiska och ska inte användas som källa för nya beslut. De kan fasas ut ur Search Console när den nya sitemapen är etablerad.

## Legacy-URL:er – senaste 28 dagarna

| Gammal URL | Klick | Impressions | Position | Repo-status |
|---|---:|---:|---:|---|
| `/author/andreas-avab/` | 0 | 62 | 5,03 | ingen route/redirect i repo |
| `/login/` | 1 | 125 | 14,78 | ingen route/redirect i repo |
| `/om-2/` | 1 | 27 | 3,48 | redirect finns → `/om-oss/` |
| `/sakerhetskameror/` | 0 | 99 | 2,53 | redirect finns → `/tjanster/kameraovervakning/` |
| `/skola/` | 4 | 201 | 29,34 | redirect finns → `/miljo/skola/` |
| `/simhall/` | 1 | 39 | 5,69 | redirect finns → `/miljo/simhall/` |
| `/sporthall/` | 4 | 184 | 27,28 | redirect finns → `/miljo/sporthall-arena/` |
| `/minnebergsskolan-arvika/` | 0 | 35 | 9,2 | redirect finns → `/referenser/minnebergsskolan-arvika/` |
| `/sample-page/` | 0 | 0 | – | ingen route/redirect i repo |

### Bedömning

De sex URL:er som redan har en semantiskt korrekt redirect ska **inte ändras igen** bara för att de fortfarande syns i GSC. Search Console kan fortsätta rapportera gamla URL:er under omcrawlperioden. Nästa steg är att följa deras impressions över tid och verifiera att de successivt flyttas till nya destinations-URL:er.

`/author/andreas-avab/`, `/login/` och `/sample-page/` saknar motsvarande route/redirect i Astro-repot. De ska inte automatiskt redirectas till startsidan eller Kontakt, eftersom det riskerar soft-404 och fel sökintention.

Innan serverbeslut krävs:
1. verifiera faktisk HTTP-status i produktion,
2. avgör om någon URL fortfarande har funktion/verksamhetsvärde,
3. välj därefter korrekt hantering:
   - relevant 301 endast om verklig motsvarande destination finns,
   - 410 för permanent borttaget innehåll utan ersättare,
   - behåll om sidan fortfarande behövs.

`/login/` kräver särskild försiktighet eftersom gamla AVAB-sajten tidigare haft medlems-/inloggningsfunktioner.

## Search Console – viktiga SEO-signaler

### Kontor & konferens

`/miljo/kontor-konferens/` har hög exponering och mycket låg klicknivå. Query-data visar verkliga kommersiella sökintentioner kring bland annat:

- installation konferensrum
- konferensrum teknik
- AV-utrustning konferensrum
- styrsystem konferensrum
- mötesrumsteknik

Det stärker prioriteten på `/tjanster/konferensteknik/`, men den sidan ska fortfarande inte indexeras förrän dess lokala source-gate är stängd. När den publiceras bör de två sidorna separeras tydligt:
- miljösidan = behov/lösningar för kontor och konferensmiljö,
- tjänstesidan = konkret konferensteknik, projektering och system.

### Kamera + AI

Search Console visar redan impressions för AI/kamera-intentioner. Därför är den nyligen publicerade `/tjanster/exakt-sokning-ai-analys/` strategiskt motiverad. Följ impressions/position efter indexering i kommande veckokontroller.

## Vad som INTE ska göras nu

- skriv inte om titles/meta brett enbart på låg aggregerad CTR,
- redirecta inte gamla URL:er till startsidan som standard,
- ändra inte redan korrekta redirects bara för att gamla URL:er fortfarande syns i Search Console,
- begär inte indexering för draft/noindex-sidor,
- publicera inte Konferensteknik eller blockerade kamera-/referenssidor för att fylla sökresultat.

## Nästa mätpunkt

Efter den lyckade sitemap-inlämningen:
- följ att de 51 upptäckta sidorna fortsätter kunna hämtas utan sitemapfel,
- följ gamla redirect-URL:er,
- följ `/tjanster/exakt-sokning-ai-analys/`,
- följ `/miljo/kontor-konferens/`,
- kontrollera om `/author/andreas-avab/` och `/login/` fortfarande får impressions och vad produktionen svarar med.


## Bild-SEO – säker kontroll

Följande kontrollerades i repo:

- Tom `alt=""` på kameraövervakningens hero är samtidigt `aria-hidden="true"` och används dekorativt bakom hero-copy. Den ska därför inte få en fabricerad alt-text.
- Integritetspolicyn använder tom alt på en dekorativ hero-bild. Ingen SEO-text har lagts till utan ett verkligt innehållssyfte.
- `Galleria Duvan` innehåller fortfarande `referens-platshallare.svg` och ligger korrekt kvar som draft/noindex.
- På `/miljo/kontor-konferens/` hittades ett konkret sakfel: en bild med asset `lesjofors-ab.webp` hade alt-text som kallade motivet för Hanza. Detta är rättat i PR #86.
- Inga bild-alttexter har genererats enbart från filnamn.

## Strategisk internlänkning – åtgärdad kandidat

Search Console visar tydligt sökintresse för kamera + AI samt hög exponering för kontor/konferens.

PR #86 gör därför två avgränsade ändringar:

- `/tjanster/kameraovervakning/` länkar kontextuellt till den publicerade `/tjanster/exakt-sokning-ai-analys/`.
- `/miljo/kontor-konferens/` länkar bild/skärm-relaterat innehåll till den publicerade `/tjanster/skarmar-projektorer/` i stället för generella Projektering.

Ingen länk läggs till mot blockerade/noindex-sidor enbart för SEO.

## Metadata – åtgärdad kandidat

De sex sidorna under `Vår leverans` har redan unika titles, descriptions och canonicals, men saknade konsekvent social bildmetadata och hade ofullständig breadcrumb-hierarki.

PR #85 kompletterar:

- Projektering
- Installation
- Driftsättning
- Certifiering
- Överlämning
- Garanti & service

med:

- `og:image`
- `twitter:image`
- `summary_large_image`
- synlig `Start → Tjänster → sida`
- motsvarande BreadcrumbList i JSON-LD

Ingen title eller meta description skrivs om utan stöd i Search Console-querydata.

## 301-verifiering – status

Produktionsserverns aktuella `.htaccess` innehåller uttryckliga `Redirect 301`-regler för de viktigaste WordPress-URL:erna, bland annat:

- `/skola/`
- `/simhall/`
- `/sporthall/`
- `/sakerhetskameror/`
- `/om-2/`
- `/minnebergsskolan-arvika/`
- `/saffle-simhall/`
- `/ljudprojektering/`
- `/horslingor/`
- `/bakgrundsljud/`
- `/taluppfattbarhet-i-publika-lokaler/`
- `/akustik/`

Samma semantiska destinationer finns även dokumenterade i Astro-konfigurationen.

Search Console kan fortsätta visa impressions på gamla URL:er under Googles omcrawlperiod. Att de syns i GSC är därför inte i sig skäl att byta redirectmål.

Den externa läskälla som användes under auditen returnerade äldre cacheade WordPress-snapshots för flera gamla URL:er och kan därför inte användas som säker live-HTTP-verifiering. Inga redirectregler har ändrats utifrån cachead data.
