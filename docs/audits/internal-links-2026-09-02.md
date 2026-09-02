# Intern länkinventering – AVAB (READ-ONLY)

- **Datum:** 2026-09-02
- **Branch:** `seo/internlanksinventering`
- **Metod:** `npm run build` → analys av byggd `dist/` som sanningskälla, följt av source-provenance i `src/**`.
- **Verktyg:** `scripts/audit-internal-links.mjs` (deterministiskt, read-only, återanvändbart i CI).
- **Status vid inventering:** Endast inventering. Inga länkar, sidor, redirects, `.htaccess`, `astro.config` eller innehåll ändrades.
- **Uppföljning:** Fas A genomförd 2026-09-02 – se [avsnitt 10](#10-fas-a--åtgärdslogg-2026-09-02). Fynd-tabellerna nedan beskriver tillståndet **vid inventeringen** och är inte uppdaterade i efterhand; aktuell status per fynd står i avsnitt 10.

---

## 1. Sammanställning

| Mått | Värde |
|---|---|
| Byggda HTML-sidor i `dist/` | **69** |
| – varav redirect-stubbar (meta refresh) | 13 |
| – varav `404.html` | 1 |
| Publika "riktiga" sidor | **55** |
| Indexerbara sidor (`robots` utan `noindex`, ej stub/404) | **41** |
| `noindex`-sidor totalt | 28 (14 referens-*draft* + 13 stubbar + 404) |
| URL:er i `sitemap-0.xml` | **56** |
| Interna länkförekomster (alla `<a>` mot egen domän/relativt) | **5 552** |
| Unika interna länkposter (source + href) | **2 811** |
| Unika interna destinations-URL:er | **79** |

### P0/P1/P2

| Nivå | Poster | Förekomster | Innehåll |
|---|---|---|---|
| **P0** | 62 | 63 | Intern 404 (saknad destination) + trasig anchor |
| **P1** | 0 | 0 | Länk via redirect: **0**. Orphan-sidor: **0**. Strikt svag internlänkning (≤2 inkommande): **0**. |
| **P2** | 437 | 485 | Länk till `noindex`/draft (387), absolut URL mot egen domän (37), trailing-slash-avvikelse (13, samtliga i Astro-genererade redirect-stubbar) |

> P1 är tomt i strikt mening. Se avsnitt 6 för fyra indexerbara sidor som ligger långt under sitens medianvärde för inkommande länkar och bör granskas (REVIEW).

---

## 2. P0 – Interna 404 (saknad destinationssida)

Länktext anges där den var meningsfull. "Förek." = antal förekomster i bygget.

| Destination (normaliserad) | Förek. | Source routes | Genererande källfiler |
|---|---|---|---|
| `/miljo/` | 12 | `/miljo/butik-retail/`, `/miljo/hotell/`, `/miljo/industri/`, `/miljo/ishall/`, `/miljo/kontor-konferens/`, `/miljo/kyrka/`, `/miljo/parkering-garage/`, `/miljo/restaurang-bar-klubb/`, `/miljo/skola/`, `/miljo/sporthall-arena/`, `/miljo/utomhusidrott/`, `/miljo/vard/` | Brödsmula i varje `src/pages/miljo/<env>/index.astro` (`<li><a href="https://avab.eu/miljo/">Miljöer</a></li>`, ca rad 247–248). Samma URL finns även som `BreadcrumbList`-`item` position 2 i JSON-LD på dessa sidor. |
| `/tjanster/konferensteknik/` | 4 | `/kunskap/kablar-kontakter/`, `/tjanster/ljudsystem/`, `/tjanster/mikrofoner/`, `/tjanster/styrsystem-integration/` | `src/pages/kunskap/kablar-kontakter/index.astro`, `src/pages/tjanster/ljudsystem/index.astro`, `src/pages/tjanster/mikrofoner/index.astro`, `src/pages/tjanster/styrsystem-integration/index.astro`; refereras även i `src/data/referenser.ts` |
| `/service-support/` | 3 | `/tjanster/ljudsystem/`, `/tjanster/styrsystem-integration/`, `/tjanster/talat-utrymningslarm/` | `src/pages/tjanster/ljudsystem/index.astro` (rad ~551), `src/pages/tjanster/styrsystem-integration/index.astro`, `src/pages/tjanster/talat-utrymningslarm/index.astro` |
| `/referenser/fortnox-arena-vaxjo/` | 3 | `/miljo/sporthall-arena/`, `/om-oss/` | `src/pages/miljo/sporthall-arena/index.astro`, `src/pages/om-oss/index.astro` |
| `/referenser/stc-kil-gym/` | 2 | `/miljo/gym/`, `/tjanster/mikrofoner/` | `src/pages/miljo/gym/index.astro`, `src/pages/tjanster/mikrofoner/index.astro` |
| `/tjanster/ljus/` | 1 | `/kunskap/kablar-kontakter/` | `src/pages/kunskap/kablar-kontakter/index.astro` |
| `/tjanster/natverk-switchar-router-fiber/` | 1 | `/kunskap/kablar-kontakter/` | `src/pages/kunskap/kablar-kontakter/index.astro` |
| `/kunskap/ratt-kabel-av-teknik/` | 1 | `/tjanster/ljudsystem/` | `src/pages/tjanster/ljudsystem/index.astro` |
| `/kravstallning/` | 1 | `/tjanster/kameraovervakning/` | `src/pages/tjanster/kameraovervakning/index.astro` |
| `/projektering/systemintegration/` | 1 | `/tjanster/kameraovervakning/` | `src/pages/tjanster/kameraovervakning/index.astro` |
| `/kameraovervakning/gdpr/` | 1 | `/tjanster/kameraovervakning/` | `src/pages/tjanster/kameraovervakning/index.astro` |
| `/kameraovervakning/skola/` | 1 | `/tjanster/kameraovervakning/` | `src/pages/tjanster/kameraovervakning/index.astro` |
| `/kameraovervakning/butik/` | 1 | `/tjanster/kameraovervakning/` | `src/pages/tjanster/kameraovervakning/index.astro` |
| `/kameraovervakning/parkering/` | 1 | `/tjanster/kameraovervakning/` | `src/pages/tjanster/kameraovervakning/index.astro` |
| `/kameraovervakning/industri/` | 1 | `/tjanster/kameraovervakning/` | `src/pages/tjanster/kameraovervakning/index.astro` |
| `/kameraovervakning/galleria/` | 1 | `/tjanster/kameraovervakning/` | `src/pages/tjanster/kameraovervakning/index.astro` |
| `/referenser/mullhyttans-sporthall/` | 1 | `/miljo/sporthall-arena/` | `src/pages/miljo/sporthall-arena/index.astro` |
| `/referenser/hanza-mechanics-tocksfors/` | 1 | `/om-oss/` | `src/pages/om-oss/index.astro` |
| `/referenser/loka-brunn/` | 1 | `/tjanster/styrsystem-integration/` | `src/pages/tjanster/styrsystem-integration/index.astro` |
| `/referenser/gotetorpsskolan-hammaro/` | 1 | `/rastsignal/` | `src/pages/rastsignal/index.astro` |
| `/referenser/skolhagen-stockholm/` | 1 | `/rastsignal/` | `src/pages/rastsignal/index.astro` |
| `/referenser/stockfallets-skola-karlstad/` | 1 | `/rastsignal/` | `src/pages/rastsignal/index.astro` |

**Delsumma P0-404:** 21 unika destinationer, 42 förekomster.

### 2b. P0 – Trasiga anchors

| Källa → href | Destinationssida | Ankare finns? | Förek. | Genererande källfil |
|---|---|---|---|---|
| 9 tjänste-undersidor → `https://avab.eu/#tjanster` (brödsmula "Tjänster") | `/` | Nej – startsidan har inget `id="tjanster"` (finns `losningar`, `miljoer`, `projektering`, `referenser`, `utmaningar`, `konferens-tjanst` m.fl.) | 9 | `src/pages/tjanster/{bakgrundsmusik,horslinga,kameraovervakning,ljudsystem,mikrofoner,styrsystem-integration,talat-utrymningslarm,taluppfattbarhet,visuell-kommunikation}/index.astro` (brödsmula, ca rad 293). Samma URL finns även som JSON-LD `BreadcrumbList`-`item`. |
| `/tjanster/talat-utrymningslarm/` → `/kontakt/#ladda-upp-underlag` | `/kontakt/` | Nej – inget sådant `id` på `/kontakt/` | 1 | `src/pages/tjanster/talat-utrymningslarm/index.astro` |
| 11 referenssidor → `#tekniken` (ankarnav "Tekniken") | egen sida | Nej – navposten genereras men motsvarande sektion renderas med annat/inget `id` | 11 | `src/layouts/ReferencePage.astro` (`anchorItems`, rad ~104–114) + `src/components/references/ReferenceAnchorNav.astro` |
| `/referenser/sorby-sporthall-kumla/` → `#uppdraget` | egen sida | Nej – sidan saknar `id="uppdraget"` | 1 | `src/layouts/ReferencePage.astro` (`anchorItems` byggs från `data.story.chapters`, id/navLabel matchar inte renderade sektioner) |

Berörda referenssidor för `#tekniken`: `arjangs-simhall`, `claessons-restaurang-konferens`, `ekhagsskolan-dals-langed`, `friskis-solstadens-sportcenter`, `hanza-konferens-tocksfors`, `hundfjallshotellet-hundfjallscenter-salen`, `kroppkarrs-ip-fotboll`, `lesjofors-ab`, `lundsbergs-skola-gym`, `nordic-wellness-orebro-marieberg`, `sannerudshallen-kil`.

> `hanza-konferens-tocksfors` är den enda **indexerbara** referenssidan i listan – där har den trasiga `#tekniken`-ankaren direkt SEO-/UX-påverkan. Övriga är `noindex` (draft).

**Delsumma P0-anchor:** 21 förekomster.

---

## 3. P1 – Länkar via redirect

**Inga.** Ingen byggd, redigerad sida länkar till någon route som är en redirect-källa.

Kontroll utförd mot både `astro.config.mjs`-redirectkartan och de 13 genererade redirect-stubbarna i `dist/`:

```
/miljo/sporthall → /miljo/sporthall-arena
/om-2 → /om-oss
/skola → /miljo/skola
/simhall → /miljo/simhall
/sporthall → /miljo/sporthall-arena
/horslingor → /tjanster/horslinga
/sakerhetskameror → /tjanster/kameraovervakning
/minnebergsskolan-arvika → /referenser/minnebergsskolan-arvika
/saffle-simhall → /referenser/saffle-simhall
/ljudprojektering → /tjanster/projektering
/taluppfattbarhet-i-publika-lokaler → /tjanster/taluppfattbarhet
/akustik → /tjanster/taluppfattbarhet
/bakgrundsljud → /tjanster/bakgrundsmusik
```

De enda `<a>`-länkar som pekar mot dessa routes är stubbarnas egna fallback-länkar (Astro-genererade) – se P2, trailing-slash.

---

## 4. P2 – Länkar till `noindex`/draft

14 referens-detaljsidor är `noindex, nofollow` p.g.a. `draft: true` och/eller `seo.noindex: true` i `src/content/references/*.md`. De tar emot interna länkar och ligger dessutom i `sitemap-0.xml`.

| Destination (`noindex`/draft) | Förek. | Antal källsidor | Notering |
|---|---|---|---|
| `/referenser/saffle-simhall/` | 76 | 57 | Sitewide via footer |
| `/referenser/sorby-sporthall-kumla/` | 72 | 55 | Sitewide via footer |
| `/referenser/hundfjallshotellet-hundfjallscenter-salen/` | 70 | 56 | Sitewide via footer |
| `/referenser/nordic-wellness-orebro-marieberg/` | 63 | 55 | Sitewide via footer |
| `/referenser/ekhagsskolan-dals-langed/` | 62 | 55 | Sitewide via footer |
| `/referenser/minnebergsskolan-arvika/` | 22 | 13 | ReferenceCard + `src/data/referenser.ts` |
| `/referenser/claessons-restaurang-konferens/` | 12 | 6 | ReferenceCard |
| `/referenser/kroppkarrs-ip-fotboll/` | 10 | 5 | ReferenceCard |
| `/referenser/sannerudshallen-kil/` | 10 | 5 | ReferenceCard |
| `/referenser/lesjofors-ab/` | 9 | 4 | ReferenceCard |
| `/referenser/arjangs-simhall/` | 8 | 3 | ReferenceCard |
| `/referenser/friskis-solstadens-sportcenter/` | 8 | 3 | ReferenceCard |
| `/referenser/lundsbergs-skola-gym/` | 8 | 3 | ReferenceCard |
| `/referenser/galleria-duvan/` | 7 | 3 | ReferenceCard |

**Genererande källfiler:**
- `src/components/SiteFooter.astro` (rad 57–61) – länkar sitewide till `saffle-simhall`, `sorby-sporthall-kumla`, `hundfjallshotellet-hundfjallscenter-salen` m.fl. `SiteFooter1.astro` (rad 72–76) innehåller samma men används inte i bygget.
- `src/data/referenser.ts` – `slug`-fält konsumeras av `src/components/references/ReferenceCard.astro` på `/referenser/`, miljösidor och tjänstesidor.
- `src/pages/referenser/index.astro` – referensöversikten listar även draft-sidorna.

**Relaterat (utanför denna fas att åtgärda):** `@astrojs/sitemap` körs utan `filter` i `astro.config.mjs`, därför tas de 14 `noindex`-sidorna med i `sitemap-0.xml`. → REVIEW.

---

## 5. P2 – URL-normalisering

### 5a. Absolut URL mot egen domän i stället för rot-relativ (37 förek.)

| href | Förek. | Källsidor | Genererande källfil |
|---|---|---|---|
| `https://avab.eu/` (brödsmula "Start") | 24 | 24 sidor (tjänste- och miljösidor m.fl.) | Per-sidbrödsmulor i `src/pages/tjanster/*/index.astro` och `src/pages/miljo/*/index.astro` |
| `https://avab.eu/#tjanster` | 9 | 9 tjänste-undersidor | Samma brödsmulor – *dubbelfel*: absolut URL **och** trasigt ankare (se P0 2b) |
| `https://avab.eu/#miljoer` | 3 | `/miljo/gym/`, `/miljo/kopcentrum-galleria/`, `/miljo/simhall/` | Brödsmula i dessa tre `src/pages/miljo/<env>/index.astro`. Ankaret `#miljoer` **finns** på startsidan – enbart normaliseringsproblem. |
| `https://avab.eu/kunskap/` | 1 | `/kunskap/kablar-kontakter/` | `src/pages/kunskap/kablar-kontakter/index.astro` |

> Inkonsekvens: 12 miljösidor länkar "Miljöer" till `https://avab.eu/miljo/` (**404**, se P0), medan 3 miljösidor (`gym`, `kopcentrum-galleria`, `simhall`) länkar "Miljöer" till `https://avab.eu/#miljoer` (fungerar).

### 5b. Trailing-slash-avvikelser (13 förek.)

Samtliga 13 kommer från de **Astro-genererade redirect-stubbarna** i `dist/` (`/akustik/`, `/bakgrundsljud/`, `/horslingor/`, `/ljudprojektering/`, `/miljo/sporthall/`, `/minnebergsskolan-arvika/`, `/om-2/`, `/saffle-simhall/`, `/sakerhetskameror/`, `/simhall/`, `/skola/`, `/sporthall/`, `/taluppfattbarhet-i-publika-lokaler/`). Stubbens fallback-`<a>` pekar på målet utan avslutande slash (t.ex. `/tjanster/taluppfattbarhet`). Ingen redigerad källfil – genereras av Astros redirect-mall.

### 5c. `www.avab.eu` och `http://avab.eu`

**Inga** interna `<a>`-länkar i `dist/` använder `www.avab.eu` eller `http://` mot egen domän. Canonical, `og:url` och JSON-LD i byggda sidor använder konsekvent `https://avab.eu`. (Not: `www.avab.eu` förekommer i icke-byggda `src/pages/**/index.txt` / `index2.txt`-arbetsfiler, som inte ingår i bygget.)

---

## 6. Orphan pages och svag internlänkning

- **Orphan-sidor (0 inkommande interna länkar från indexerbar, icke-redirect-sida):** inga.
- **Strikt svag (≤2 inkommande):** inga.
- **Sitemap-routes utan intern länkväg:** inga (alla 56 sitemap-URL:er nås via minst en intern länk).

Global header/footer gör att varje indexerbar sida får många inkommande länkar (median ≈ 90). Fyra sidor ligger dock långt under och saknar sannolikt kontextuell (brödtext-)länkning – rekommenderas för **REVIEW**:

| Sida | Inkommande | Kommentar |
|---|---|---|
| `/budgetkalkylator-av-teknik/` | 8 | Långt under median; nås främst via global chrome |
| `/kunskap/kablar-kontakter/` | 9 | Enda kunskaps-underartikeln; få kontextuella ingångar |
| `/tjanster/visuell-kommunikation/` | 10 | Nyaste tjänstesidan; svagt inlänkad från övriga tjänstesidor |
| `/referenser/hanza-konferens-tocksfors/` | 13 | Enda indexerbara referens-detaljsidan; övriga referenssidor är draft |

---

## 7. Rekommenderad åtgärd per unik destination

Tillåtna kategorier: `FIX LINK`, `BUILD PAGE`, `REDIRECT`, `REMOVE LINK`, `REVIEW`, `ACCEPTED`.
Slutdestination för trasiga länkar **gissas inte** – oklara fall får `REVIEW`.

### P0 – interna 404

| Destination | Rekommendation | Not |
|---|---|---|
| `/miljo/` | REVIEW | Antingen `FIX LINK` (linja med de 3 miljösidor som redan använder `/#miljoer`), `BUILD PAGE` (en riktig `/miljo/`-hubb) eller `REDIRECT`. Gäller även JSON-LD-brödsmulan. Beslut krävs. |
| `/tjanster/konferensteknik/` | REVIEW | Återkommande länk (4 sidor + `referenser.ts`) – troligen planerad tjänstesida. `BUILD PAGE` eller `REMOVE LINK`. |
| `/service-support/` | REVIEW | 3 tjänstesidor länkar hit som "service och support". Kan avse befintlig `/tjanster/garanti-och-service/` → i så fall `FIX LINK`; annars `BUILD PAGE`. Beslut krävs. |
| `/kunskap/ratt-kabel-av-teknik/` | REVIEW | Kan avse befintlig `/kunskap/kablar-kontakter/` → `FIX LINK`; annars `BUILD PAGE`/`REMOVE LINK`. |
| `/tjanster/ljus/` | REVIEW | `BUILD PAGE` eller `REMOVE LINK`. |
| `/tjanster/natverk-switchar-router-fiber/` | REVIEW | `BUILD PAGE` eller `REMOVE LINK`. |
| `/kravstallning/` | REVIEW | `BUILD PAGE` eller `REMOVE LINK`. |
| `/projektering/systemintegration/` | REVIEW | Kan avse `/tjanster/styrsystem-integration/` → `FIX LINK`; annars `REMOVE LINK`. |
| `/kameraovervakning/gdpr/`, `/kameraovervakning/skola/`, `/kameraovervakning/butik/`, `/kameraovervakning/parkering/`, `/kameraovervakning/industri/`, `/kameraovervakning/galleria/` | REVIEW | 6 planerade underssidor under fel prefix (borde vara `/tjanster/kameraovervakning/...`?). Samlat beslut: `BUILD PAGE` eller `REMOVE LINK`. |
| `/referenser/fortnox-arena-vaxjo/` | REVIEW | Refererad från `sporthall-arena` + `om-oss`. `BUILD PAGE` (ny referens) eller `REMOVE LINK`. |
| `/referenser/stc-kil-gym/` | REVIEW | `BUILD PAGE` eller `REMOVE LINK`. |
| `/referenser/mullhyttans-sporthall/` | REVIEW | `BUILD PAGE` eller `REMOVE LINK`. |
| `/referenser/hanza-mechanics-tocksfors/` | REVIEW | Trolig felstavning av befintliga `/referenser/hanza-konferens-tocksfors/` → i så fall `FIX LINK`. Beslut krävs. |
| `/referenser/loka-brunn/` | REVIEW | `BUILD PAGE` eller `REMOVE LINK`. |
| `/referenser/gotetorpsskolan-hammaro/`, `/referenser/skolhagen-stockholm/`, `/referenser/stockfallets-skola-karlstad/` | REVIEW | 3 referenslänkar från `/rastsignal/`. Samlat beslut: `BUILD PAGE` eller `REMOVE LINK`. |

### P0 – trasiga anchors

| Destination | Rekommendation | Not |
|---|---|---|
| `/#tjanster` (från 9 tjänstesidor) | FIX LINK | `/tjanster/` finns som riktig sida; brödsmulan "Tjänster" bör peka dit (rot-relativt). Alternativt återinföra `id="tjanster"` på startsidan. Åtgärdar även P2 5a. |
| `/kontakt/#ladda-upp-underlag` | REVIEW | Kontrollera om avsett sektions-`id` finns/ska finnas på `/kontakt/`; annars `FIX LINK` till rätt ankare eller `REMOVE LINK` av fragmentet. |
| `#tekniken` (11 referenssidor) | FIX LINK | Mall-fel i `ReferencePage.astro`/`ReferenceAnchorNav.astro`: navpost-`id` matchar inte renderad sektion. Synka `anchorItems` mot faktiska sektions-`id`:n (eller rendera sektionen med `id="tekniken"`). Ingen destinationsgissning krävs – det är samma sida. |
| `#uppdraget` (`sorby-sporthall-kumla`) | FIX LINK | Samma mall-fel; `anchorItems` byggs från `data.story.chapters` vars `id` inte matchar renderade kapitel. |

### P1

| Post | Rekommendation |
|---|---|
| Länkar via redirect | — (inga) |
| Orphan pages | — (inga) |
| `/budgetkalkylator-av-teknik/`, `/kunskap/kablar-kontakter/`, `/tjanster/visuell-kommunikation/`, `/referenser/hanza-konferens-tocksfors/` (svag kontextuell inlänkning) | REVIEW |

### P2

| Post | Rekommendation | Not |
|---|---|---|
| 14 `noindex`/draft-referenssidor som interna länkmål | REVIEW | Publicera drafts (ta bort `draft`/`seo.noindex`) **eller** ta bort länkar från footer/kort och exkludera från sitemap. Konsekvensbeslut. |
| `noindex`-sidor i `sitemap-0.xml` | REVIEW | Lägg `filter` i `@astrojs/sitemap` (config-ändring, utanför denna fas). |
| `https://avab.eu/` som brödsmula "Start" (24 sidor) | FIX LINK | Gör rot-relativ (`/`). Ren normalisering, ingen destinationsändring. |
| `https://avab.eu/#miljoer` (3 miljösidor) | FIX LINK | Gör rot-relativ (`/#miljoer`). Ankaret fungerar redan. |
| `https://avab.eu/kunskap/` (1) | FIX LINK | Gör rot-relativ (`/kunskap/`). |
| Trailing-slash i redirect-stubbar (13) | ACCEPTED | Genereras av Astros redirect-mall; ingen redigerbar källa. Servern 301:ar ändå till slash-varianten. |
| BreadcrumbList JSON-LD `item: https://avab.eu/miljo/` på miljösidor | REVIEW | Följer beslutet för `/miljo/` ovan. |

---

## 8. Om auditscriptet

`scripts/audit-internal-links.mjs`

- **Read-only.** Skriver eller muterar inga filer; all output går till stdout.
- **Deterministiskt.** Ingen nätverksåtkomst, ingen tidsstämpel i output, stabil sortering.
- **Körning:** `node scripts/audit-internal-links.mjs [distDir]` (default `dist`). `--json` ger maskinläsbar rapport (`summary`, `p0`, `p1`, `p2`, `records`).
- **Förutsätter** att `npm run build` har körts först (avbryter med kod 2 om `dist/` saknas).
- **CI-återanvändning:** i denna fas returnerar scriptet alltid 0. Själva CI-integrationen (t.ex. icke-noll exit vid P0) hålls utanför denna fas.
- **Kända begränsningar:** HTML tolkas med regex (matchar Astros output väl men inte godtycklig HTML); JSON-LD-URL:er inventeras inte som länkar (noteras manuellt ovan); `robots.txt`/`.htaccess`-nivåns redirects utanför `astro.config.mjs` täcks inte.

---

## 9. Åtgärdslogg (inventeringsfasen)

Ingen. Inventeringsfasen var endast inventering. Enda tillagda filer:

- `docs/audits/internal-links-2026-09-02.md` (denna rapport)
- `scripts/audit-internal-links.mjs` (read-only auditscript)

---

## 10. Fas A – åtgärdslogg (2026-09-02)

Fas A åtgärdade **endast de systemiska P0-felen** som påverkar flera sidor eller gemensamma mallar. Övriga P0/P1/P2-fynd lämnades orörda.

### Totaler före/efter (`node scripts/audit-internal-links.mjs`)

| Mått | Före Fas A | Efter Fas A |
|---|---|---|
| P0-poster (förekomster) | 62 (63) | **29 (30)** |
| P1-poster | 0 | 0 |
| P2-poster (förekomster) | 437 (485) | **436 (485)** |
| Byggda HTML-sidor | 69 | 69 |
| Indexerbara sidor | 41 | 41 |
| Orphan-sidor | 0 | 0 |

Inga nya interna 404:er, inga nya trasiga anchors, inga nya problem i någon annan klass. `git diff --check` rent. `GITHUB_BASE_REF=upstream/main npm run validate` → exit 0 (guardrails: "passed for 15 reference content entries").

### Per systemiskt fynd

| # | Fynd | Före (P0-förek.) | Efter | Åtgärdsnivå | Ändrade filer |
|---|---|---|---|---|---|
| 1 | Breadcrumb "Miljöer" → `/miljo/` (404) | 12 | **0** | Sida för sida (12 st) – ingen gemensam komponent finns; breadcrumben är inline per sida | 12 × `src/pages/miljo/<env>/index.astro` |
| 2 | Breadcrumb "Tjänster" → `/#tjanster` (ankare saknades på startsidan) | 9 | **0** | Gemensamt mål – ett `id` tillagt på startsidan | `src/pages/index.astro` |
| 3 | Ankarnav `#tekniken` på referenssidor (sektion utan `id`) | 11 | **0** | Gemensam komponent | `src/components/references/ReferenceTechnicalDetails.astro` |
| 4 | `#uppdraget` på Sörby (hero-knapp "Utforska projektet") | 1 | **0** | Gemensam layout | `src/layouts/ReferencePage.astro` |
| 5 | `/kontakt/#ladda-upp-underlag` (ankare saknas) | 1 | 1 | **BLOCKERAD – REVIEW** (ej åtgärdad) | — |

### Vad varje ändring gör

**1. `/miljo/` i breadcrumbs** — `src/pages/miljo/{butik-retail, hotell, industri, ishall, kontor-konferens, kyrka, parkering-garage, restaurang-bar-klubb, skola, sporthall-arena, utomhusidrott, vard}/index.astro`
- Synlig breadcrumb-`<a>`: `href="https://avab.eu/miljo/"` → `href="/#miljoer"`. `/miljo/` finns inte; `#miljoer` är en renderad sektion på startsidan och används redan av `gym`, `kopcentrum-galleria` och `simhall`. Rot-relativ form vald för att inte utöka P2-klassen "absolut intern URL".
- JSON-LD `BreadcrumbList` → `"item": "https://avab.eu/miljo/"` → `"item": "https://avab.eu/#miljoer"` (absolut form, i linje med de tre redan korrekta sidorna; strukturerad data auditeras inte av scriptet men pekade på en 404).
- Breadcrumb-texten ("Miljöer") oförändrad. Ingen `/miljo/`-sida och ingen redirect skapad. De tre redan fungerande sidorna rördes inte (kvar på `https://avab.eu/#miljoer`; deras absolut-URL-form är ett separat P2 som normaliseras i senare fas).

**2. `/#tjanster`** — `src/pages/index.astro`
- `id="tjanster"` tillagt på `<div class="avab-container">` direkt inuti den befintliga tjänstesektionen `<section class="section" id="losningar">` ("Vad vi kan hjälpa dig med" / "Våra expertområden", som länkar till alla `/tjanster/*`-sidor).
- Ingen ny sektion, inget dolt dummy-element, ingen text-/layout-/ordningsändring. `id="losningar"` (används av footer-länk `/#losningar` och av sidans CSS) är kvar oförändrat. De 9 tjänstesidornas breadcrumb-`<a>` (`https://avab.eu/#tjanster`) rördes inte – de resolvar nu korrekt.

**3. `#tekniken`** — `src/components/references/ReferenceTechnicalDetails.astro`
- `id="tekniken"` tillagt på komponentens rot-`<section>`. Ankarnaven i `ReferencePage.astro` lägger till navposten `{ id: "tekniken", label: "Tekniken" }` endast när `data.technicalDetails` finns – dvs. exakt när denna sektion renderas – men sektionen saknade motsvarande `id`.
- Rubriktext och ordning oförändrade. Sektionen renderas högst en gång per sida (extended- resp. simple-grenen är ömsesidigt uteslutande) → inga dubbla `id`. Verifierat: `id="tekniken"` förekommer exakt 1 gång på var och en av de 15 referenssidorna.

**4. `#uppdraget` på Sörby** — `src/layouts/ReferencePage.astro`
- `ReferenceHero`-knappen "Utforska projektet" hade hårdkodat `primaryHref="#uppdraget"`. På story-baserade referenser kommer sektions-id:n från `story.chapters[*].id`; Sörjes första kapitel har `id: byggskedet`, så `#uppdraget` fanns inte. (De tre övriga story-sidorna – galleria-duvan, minnebergsskolan-arvika, saffle-simhall – råkar ha `id: uppdraget` som första kapitel och drabbades därför inte.)
- Ändrat till `primaryHref={`#${anchorItems[0]?.id ?? "uppdraget"}`}` – pekar nu alltid på den första faktiskt renderade sektionen (samma id som ankarnaven listar först). Non-story-sidor: oförändrat beteende (`anchorItems[0].id === "uppdraget"`, sektionen finns). Sörby: nu `#byggskedet` (verifierat att `id="byggskedet"` finns i bygget). Ingen tom sektion skapad, ingen Sörby-specifik copy ändrad.

**5. `/kontakt/#ladda-upp-underlag` — BLOCKERAD (REVIEW)**
- Länken skapas i `src/pages/tjanster/talat-utrymningslarm/index.astro` (`<a class="button button-primary" href="/kontakt/#ladda-upp-underlag">Skicka projektunderlag</a>`).
- `/kontakt/` har **ingen** sektion som semantiskt motsvarar "ladda upp underlag". Sidan har `id="kontaktformular"` (det fyrstegs kontaktformuläret, utan filuppladdning) och en not: *"Ritningar, bilder och FFU kan bifogas i mejlet som öppnas efter sista steget."* Ingen uppladdningsfunktion finns.
- Enligt Fas A-instruktionen: när ingen sådan sektion finns ska länken **inte** ändras automatiskt och fyndet rapporteras som blockerad REVIEW. Att sätta `id="ladda-upp-underlag"` på formuläret eller bifoga-noten vore ett dummy-/gissningsval. **Ingen ändring gjord.**
- Rekommendation för senare fas: antingen `FIX LINK` till `/kontakt/#kontaktformular` (som systerlänken på rad 705 i samma fil redan använder) eller `REMOVE LINK` av fragmentet – kräver innehålls-/UX-beslut.

### Filändringar totalt

15 filer, 27 rader ändrade (27+/27−), alla en-rads länk-/attribut-/id-ändringar:

- `src/pages/index.astro` – 1 rad (id="tjanster")
- `src/layouts/ReferencePage.astro` – 1 rad (hero primaryHref)
- `src/components/references/ReferenceTechnicalDetails.astro` – 1 rad (id="tekniken")
- `src/pages/miljo/*/index.astro` × 12 – 2 rader vardera (`<a href>` + JSON-LD `item`)

Inga ändringar i `.htaccess`, redirects, `astro.config.mjs`, content entries, komponenter utöver ovan, SEO-metadata (utom den korrigerade breadcrumb-`item`) eller design. Inga nya routes/sidor. Ingen commit, ingen push.

> Not om radslut: repo har `core.autocrlf=true` och de 12 `miljo`-filerna ligger som LF i git-index. `sed -i` skrev arbetskopian som LF (git återställer CRLF vid nästa checkout). `git diff` visar enbart innehållsändringarna, `git diff --check` är rent – ingen spårad radslutsändring.

### Kvarvarande P0 efter Fas A (29 poster – utanför Fas A-scope)

Oförändrade sedan inventeringen: saknade sidor `/tjanster/konferensteknik/`, `/service-support/`, `/kravstallning/`, `/kunskap/ratt-kabel-av-teknik/`, `/tjanster/ljus/`, `/tjanster/natverk-switchar-router-fiber/`, `/projektering/systemintegration/`, 6 × `/kameraovervakning/*`, samt saknade referens-detaljsidor (`fortnox-arena-vaxjo`, `stc-kil-gym`, `mullhyttans-sporthall`, `hanza-mechanics-tocksfors`, `loka-brunn`, `gotetorpsskolan-hammaro`, `skolhagen-stockholm`, `stockfallets-skola-karlstad`) – plus den blockerade anchoren `/kontakt/#ladda-upp-underlag`. Se avsnitt 2 och 7.
