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

### Åtgärd

Skicka in `https://avab.eu/sitemap-index.xml` i Search Console. Windsor Search Console-connectorn har inga write actions, så själva submissionen måste göras i Search Console UI.

Gamla sitemap-poster ska inte användas som källa för nya beslut. De kan tas bort/fasas ut i GSC när den nya sitemapen är accepterad.

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

Efter att den nya sitemapen har skickats in:
- kontrollera att den accepteras utan errors,
- följ gamla redirect-URL:er,
- följ `/tjanster/exakt-sokning-ai-analys/`,
- följ `/miljo/kontor-konferens/`,
- kontrollera om `/author/andreas-avab/` och `/login/` fortfarande får impressions och vad produktionen svarar med.
