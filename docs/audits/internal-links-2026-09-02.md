# Intern länkinventering – AVAB (READ-ONLY)

- **Datum:** 2026-09-02
- **Branch:** `seo/internlanksinventering`
- **Metod:** `npm run build` → analys av byggd `dist/` som sanningskälla, följt av source-provenance i `src/**`.
- **Verktyg:** `scripts/audit-internal-links.mjs` (deterministiskt, read-only, återanvändbart i CI).
- **Status vid inventering:** Endast inventering. Inga länkar, sidor, redirects, `.htaccess`, `astro.config` eller innehåll ändrades.
- **Uppföljning:** Fas A (systemiska P0-fel) genomförd 2026-09-02 – se [avsnitt 10](#10-fas-a--åtgärdslogg-2026-09-02). Fas C (draft/noindex, sitemap, internlänkning) genomförd 2026-09-02 – se [avsnitt 11](#11-fas-c--draftnoindex-sitemap-och-internlänkning-2026-09-02). Fas B (kvarvarande riktiga 404-destinationer, beslut + verifierade fixar) genomförd 2026-09-04 – se [avsnitt 12](#12-fas-b--kvarvarande-riktiga-404-destinationer-2026-09-04). Fynd-tabellerna i avsnitt 1–7 beskriver tillståndet **vid inventeringen** och är inte uppdaterade i efterhand; aktuell status står i avsnitt 10–12.

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

---

## 11. Fas C – draft/noindex, sitemap och internlänkning (2026-09-02)

Fas C städar publiceringsmodellen för draft/noindex-referenser: sitemap, sitewide footer och referensöversikten. Kvarvarande riktiga 404:er (avsnitt 2/7) rördes inte.

> **Justering efter Fas C0 (2026-09-02):** delen som filtrerade bort draft/noindex-referenser ur `/referenser/`-översikten (11.5) **backades ut** före merge. Fas C0 bekräftade att draft-metadata är avsiktlig och att det dokumenterade go-live-beslutet är *reachable-men-noindex*; att dölja referenserna ur översikten är ett separat publicerings-/UX-beslut som ännu inte är fattat. `/referenser/` beter sig därför som på `main` (15 kort). Sitemap-filtret och footerändringen behölls (SEO-städning). Se **11.12**.

### 11.1 Inventering av referens-content

15 entries i `src/content/references/`. Statusfälten `draft`, `seo.noindex`, `customer.publicationApproved`:

| Slug | draft | seo.noindex | publicationApproved | Status |
|---|---|---|---|---|
| `/referenser/hanza-konferens-tocksfors/` | false | false | **null** | **PUBLICERAD** |
| `/referenser/arjangs-simhall/` | true | true | null | DRAFT |
| `/referenser/claessons-restaurang-konferens/` | true | true | null | DRAFT |
| `/referenser/ekhagsskolan-dals-langed/` | true | true | null | DRAFT |
| `/referenser/friskis-solstadens-sportcenter/` | true | true | null | DRAFT |
| `/referenser/galleria-duvan/` | true | true | null | DRAFT |
| `/referenser/hundfjallshotellet-hundfjallscenter-salen/` | true | true | null | DRAFT |
| `/referenser/kroppkarrs-ip-fotboll/` | true | true | null | DRAFT |
| `/referenser/lesjofors-ab/` | true | true | null | DRAFT |
| `/referenser/lundsbergs-skola-gym/` | true | true | null | DRAFT |
| `/referenser/minnebergsskolan-arvika/` | true | true | null | DRAFT |
| `/referenser/nordic-wellness-orebro-marieberg/` | true | true | null | DRAFT |
| `/referenser/saffle-simhall/` | true | true | null | DRAFT |
| `/referenser/sannerudshallen-kil/` | true | true | null | DRAFT |
| `/referenser/sorby-sporthall-kumla/` | true | true | null | DRAFT |

**PUBLICERAD: 1 · DRAFT: 14 · NOINDEX: 14 (= draft) · PUBLICERINGSSTATUS OKLAR: 0.**

Alla 15 byggs som publika routes (varje `src/pages/referenser/<slug>/index.astro` gör `getCollection("references").find(...)`). `draft` styr: (a) `robots: noindex, nofollow` i `src/layouts/ReferencePage.astro`, (b) exkludering ur `/referenser/`-översikten (men se bugg i 11.5). `customer.publicationApproved` och `referenceAvailableOnRequest` läses **inte** någonstans i koden – ren metadata.

### 11.2 Statusinkonsekvenser

| # | Referens | Inkonsekvens | Åtgärd |
|---|---|---|---|
| 1 | `hanza-konferens-tocksfors` | `draft: false` + `seo.noindex: false` men `publicationApproved: null` (föredragen modell: `true` för publicerad) | **Ej ändrad.** Kräver verifierat publiceringsunderlag. Rapporteras för mänskligt beslut. |
| 2 | 14 draft-referenser | Inga – `draft: true` + `seo.noindex: true` + `publicationApproved: null` är konsekvent draft-modell | — |

Inga `draft:false + noindex:true`- eller `draft:true + noindex:false`-motsägelser. Sitemap inkluderade tidigare 14 noindex-routes (åtgärdat, 11.3). Sitewide footer länkade tidigare till 5 draft-referenser (åtgärdat, 11.4).

### 11.3 A – Sitemap

**Före:** `@astrojs/sitemap` kördes utan `filter`. `sitemap-0.xml` innehöll alla 14 draft/noindex-referenssidor.

**Efter:** Ny beroendefri helper `src/data/reference-publication.mjs` härleder draft/noindex-slugs direkt ur frontmatter i `src/content/references/*.md` (ingen hårdkodad slug-lista – content är source of truth). `astro.config.mjs`:

```js
sitemap({ filter: (page) => !isNonPublicReferenceUrl(page) })
```

- Indexerbara routes: oförändrade.
- Redirect-stubbar: oförändrade (Astro tar redan bort `type: redirect` ur sitemap – den modellen rörs inte).
- Canonical-domän: fortsatt `https://avab.eu/` (`config.site`).
- Route-struktur: oförändrad.

**Faktiska sitemap-routes: 55 → 41** (14 draft-referenser borttagna; `/referenser/` och `/referenser/hanza-konferens-tocksfors/` kvar).

**Sitemap vs indexerbara sidor:** 41 = 41 – exakt paritet, ingen avsiktlig skillnad kvarstår. Före Fas C var differensen (55 mot 41) exakt de 14 draft-sidorna.

### 11.4 B – Footer

`src/components/SiteFooter.astro`, kolumnen "Utvalda projekt". **Alla 5 länkarna gick till draft/noindex-referenser:**

| Borttagen footer-länk | Status |
|---|---|
| `/referenser/saffle-simhall/` | draft/noindex |
| `/referenser/sorby-sporthall-kumla/` | draft/noindex |
| `/referenser/nordic-wellness-orebro-marieberg/` | draft/noindex |
| `/referenser/ekhagsskolan-dals-langed/` | draft/noindex |
| `/referenser/hundfjallshotellet-hundfjallscenter-salen/` | draft/noindex |

Ingen av dem har en publicerad motsvarighet → de ersattes **inte** med gissade referenser. De fem `<li>` byttes mot **en** länk till den publicerade, indexerbara översikten:

```html
<li><a href="/referenser/">Alla referensprojekt</a></li>
```

- Kolumn, rubrik ("Utvalda projekt"), `foot-col`-struktur och all CSS oförändrad (ingen grid-/designändring).
- Ingen ändring av kontakt, telefon, juridik, sociala länkar eller "Genvägar".
- Nettoeffekt: footern ger inte längre sitewide internlänkvärde till draft-referenser, men behåller en publicerad navigationsväg till referenser (som tidigare saknades i footern).
- `src/components/SiteFooter1.astro` innehåller samma 5 länkar men **importeras inte någonstans** (död kod, ej i bygget) – lämnad orörd, se 11.9.

### 11.5 C – Referensöversikten (`/referenser/`) — BACKAD EFTER FAS C0

> Ändringen nedan applicerades först men **återställdes** i Fas C0-justeringen (se 11.12). `src/pages/referenser/index.astro` är oförändrad mot `main`. Beskrivningen behålls som logg över vad som prövades och varför det inte behölls.

**Bugg (teknisk skuld – kvarstår, ej åtgärdad):** `src/pages/referenser/index.astro` filtrerar `getCollection("references").filter(e => !e.data.draft)`, men slår sedan ihop resultatet med den **äldre hårdkodade datakällan** `src/data/referenser.ts`:

```js
const migratedSlugs = new Set(contentReferences.map(r => r.slug)); // efter draft-filter -> bara hanza
const references = [
  ...legacyReferences.filter(r => !migratedSlugs.has(r.slug)),      // => alla 14 draft-slugs slank igenom
  ...contentReferences,
];
```

`src/data/referenser.ts` innehåller alla 14 draft-referenser som hårdkodade objekt. Draft-filtret är därmed verkningslöst – översikten visar **15 kort** (14 draft + hanza) och 14 interna länkar från en indexerbar sida till noindex-sidor. **Detta är oförändrat efter Fas C0** – se motivering i 11.12.

**Prövad (och återställd) fix:** ett tilläggsvillkor `!e.data.seo.noindex` på content-filtret plus filtrering av `legacyReferences` mot draft/noindex-slugs. Effekten var att `/referenser/` visade **1 kort** (endast `hanza`). Fas C0 fastslog att detta är ett publicerings-/UX-beslut, inte SEO-städning, och ändringen backades. `/referenser/` är åter identisk med `main`.

`src/data/referenser.ts` rekommenderas fortfarande avvecklas när alla referenser finns i content collection – **teknisk skuld**, ej i Fas C-scope.

### 11.6 D – Klassificering av kvarvarande interna länkar till draft/noindex

Interna länkförekomster med noindex-destination: **437 → 162** (−275) efter Fas C0-justeringen (footer + sitemap kvar, översiktsfiltret backat).

| Kategori | Källa | Före | Efter | Status |
|---|---|---|---|---|
| SITEWIDE / FOOTER | `SiteFooter.astro` (× ~56 sidor) | ~275 | **0** | Åtgärdad (11.4) |
| ÖVERSIKT | `/referenser/` (content + legacy-merge) → 14 draft | 14 | 14 | **Ej åtgärdad – backad efter Fas C0** (11.12). "Reachable-men-noindex" = översikten får lista dem; att dölja är ett separat publiceringsbeslut. |
| ÖVERSIKT | Startsidans `#referenser`-grid (hårdkodad HTML i `src/pages/index.astro`) → 5 draft (`saffle-simhall`, `sorby-sporthall-kumla`, `minnebergsskolan-arvika`, `hundfjallshotellet…`, `galleria-duvan`) | 5 | 5 | **Ej åtgärdad – publiceringsbeslut** (11.9). |
| ÖVERSIKT | `/tjanster/` "Tjänster i verkliga projekt" – `featuredReferenceSlugs` hårdkodar 3 draft (`hundfjallshotellet…`, `minnebergsskolan-arvika`, `saffle-simhall`) i `src/pages/tjanster/index.astro` | 3 | 3 | **Ej åtgärdad – publiceringsbeslut** (11.9). Filtrering tömmer sektionen helt. |
| RELATERAD REFERENS | `hanza-konferens-tocksfors.md` `relatedReferences` → `/referenser/minnebergsskolan-arvika/` (via `RelatedReferences.astro`) | 1 | 1 | **REVIEW** – enskild frontmatter-post på publicerad sida. Ej värt komponentrefaktor för 1 länk. |
| RELATERAD REFERENS | draft→draft (`saffle`, `hundfjallshotellet` `relatedReferences`) | flera | flera | REVIEW (noindex→noindex, låg prioritet – försvinner när draft publiceras/tas bort) |
| IN-CONTENT | Enskilda brödtextlänkar: `/om-oss/` (6), `/tjanster/{ljudsystem,styrsystem-integration,horslinga,mikrofoner,visuell-kommunikation,taluppfattbarhet}/` (~25), `/miljo/{simhall,skola,gym,hotell,restaurang-bar-klubb,sporthall-arena,utomhusidrott}/` (~13) | ~44 | ~44 | **REVIEW** – Fas C rör inte enskilda innehållslänkar sida för sida. |
| ANNAT | Länkar **från** draft-referenssidor (breadcrumb, inbördes related, egna kort) – källan är noindex | ~95 | ~95 | Ingen SEO-påverkan (noindex-källa). Löses när draft publiceras/tas bort. |
| ANNAT | Redirect-stubbar `/saffle-simhall/`, `/minnebergsskolan-arvika/` → draft-mål | 2 | 2 | Utanför scope (redirects rörs inte). |

**Kvar från indexerbara sidor: ~67 förekomster** (`/referenser/`-översikten 14, startsidans grid 5, `/tjanster/` showcase 3, `/om-oss/` 6, tjänste-brödtext ~25, miljö-brödtext ~13, hanza relatedReferences 1). Inga sitewide, inga i footer, inga i delade layout-komponenter. `/referenser/`-översikten ingår igen efter Fas C0-justeringen.

### 11.7 E – Draft/noindex-konsistens

- **14 draft-referenser:** konsekventa (`draft: true` + `seo.noindex: true` + `publicationApproved: null`). Ingen teknisk korrigering behövd.
- **`hanza-konferens-tocksfors`:** `draft: false` + `seo.noindex: false` men `publicationApproved: null`. Ingen självklar teknisk fix – att sätta `publicationApproved: true` kräver verifierat underlag. **Ej ändrad. Rapporteras (11.9).**
- Inga status-motsägelser i övrigt. `referenceAvailableOnRequest: false` på alla 15 – oanvänt fält.
- Inga `publicationApproved`-ändringar gjorda.

### 11.8 Ändrade filer

| Fil | Ändring |
|---|---|
| `src/data/reference-publication.mjs` | **Ny.** Beroendefri parser som härleder `nonPublicReferenceSlugs` / `publishedReferenceSlugs` / `isNonPublicReferenceUrl()` ur `src/content/references/*.md`-frontmatter. Endast för `astro.config.mjs` (sitemap). |
| `astro.config.mjs` | Importerar helpern; `sitemap()` → `sitemap({ filter: (page) => !isNonPublicReferenceUrl(page) })`. Inga redirects/route-ändringar. |
| `src/components/SiteFooter.astro` | "Utvalda projekt": 5 draft-referenslänkar → 1 länk till `/referenser/`. Ingen design-/struktur-/CSS-ändring. |
| `scripts/audit-internal-links.mjs` | Mät-fix: `sitemapUrls` räknar inte längre `sitemap-index.xml`:s `<loc>` mot `sitemap-0.xml` (hoppar `.xml`-pathnames). Fortsatt read-only och deterministiskt. |

`src/pages/referenser/index.astro` ändrades först men **backades i Fas C0-justeringen** – ingen nettoförändring mot `main`. Se 11.12.

**Ej ändrat:** `.htaccess`, redirects, route-struktur, `src/content/references/*` (inga frontmatter-ändringar), `src/data/referenser.ts`, `src/pages/referenser/index.astro`, `src/pages/index.astro`, `src/pages/tjanster/index.astro`, `ReferencePage.astro`, footer-design, navigation, någon `publicationApproved`. Ingen ny sida/route/referens. Ingen commit, ingen push.

### 11.9 Frågor som kräver mänskligt publiceringsbeslut

1. **Ska `/referenser/`-översikten visa draft-referenser?** 14 av 15 referenser är `draft: true` men listas i översikten (via `src/data/referenser.ts`). Fas C0 bekräftade go-live-beslutet "reachable-men-noindex" → översikten lämnas oförändrad. Om den i stället ska visa endast publicerade referenser krävs ett publiceringsbeslut per kund (`draft: false` + `publicationApproved: true`), inte ett filter som tömmer sidan. Se Fas C0-rapport.
2. **`hanza-konferens-tocksfors` har `publicationApproved: null`** trots att den är publicerad/indexerad. Bekräfta kundgodkännande och sätt `true`, alternativt bekräfta att fältet inte används och ska tas bort ur schemat.
3. **Startsidans `#referenser`-grid** (`src/pages/index.astro`) länkar 5 draft-referenser från sajtens mest auktoritativa sida. Kräver publicerade referenser att visa, eller ett beslut att kortrutan ska visa färre/andra projekt (inkl. rubrik-copy "6 projekt").
4. **`/tjanster/`-sidans referens-showcase** (`featuredReferenceSlugs` i `src/pages/tjanster/index.astro`) pekar på 3 draft-referenser. Samma beslut som punkt 3.
5. **Förtroendebandet på `/referenser/`** nämner draft-projekt i klartext (siffror, ej länkar). Behåll eller ersätt när publiceringsläget är avgjort.
6. **Teknisk skuld:** `src/data/referenser.ts` dubblerar content collection och bör avvecklas när migreringen är klar. `src/components/SiteFooter1.astro` + `src/components/SiteHeader1.astro` är död kod med gamla draft-länkar.

### 11.10 Före/efter (Fas C, efter C0-justering)

| Mått | Före (main) | Efter (merge-läge) |
|---|---|---|
| Byggda HTML-sidor | 69 | 69 |
| Indexerbara sidor | 41 | 41 |
| Sitemap-routes (faktiska `<loc>`) | 55 | **41** |
| Sitemap-routes som är noindex | 14 | **0** |
| Sitemap-routes utan intern länkväg | 0 | 0 |
| P0-poster (förekomster) | 29 (30) | 29 (30) |
| P1-poster | 0 | 0 |
| P2-poster (förekomster) | 436 (485) | **189 (210)** |
| P2 noindex-förekomster | 437 | **162** |
| – varav från indexerbara källsidor | ~330 | **67** |
| Orphan-sidor | 0 | 0 |
| Svagt internlänkade (≤2) | 0 | 0 |

Inga nya P0, inga nya trasiga anchors, inga nya orphans, inga nya P2-poster. Ingen indexerbar publicerad referens försvann ur sitemap. `/referenser/`-översikten oförändrad mot `main` (15 kort).

> Referensvärden vid full Fas C **före** C0-justeringen (översiktsfiltret aktivt): P2 175 (196), P2 noindex 148, varav 53 från indexerbara källor, `/referenser/` = 1 kort. Backningen återför 14 översiktslänkar.

### 11.11 Validering (efter C0-justering)

| Kommando | Resultat |
|---|---|
| `npm run build` | OK – Complete, 56 sidor |
| `node scripts/audit-internal-links.mjs` | OK – exit 0 (siffror i 11.10) |
| `GITHUB_BASE_REF=upstream/main npm run validate` | OK – exit 0, guardrails: "passed for 15 reference content entries" |
| `git diff --check` | OK – exit 0, rent |

### 11.12 Fas C0 – justering inför merge (2026-09-02)

Fas C0 var en read-only-inventering av draft/noindex-metadata. Slutsats: metadatan är **avsiktlig** (git-historik "migrate X as draft", `TODO.md` 2026-08-19 "draft-referenser är reachable-men-noindex, inte hårt gatade", migrering pausad på beställarens begäran 2026-08-18, `publicationApproved` medvetet metadata-only enligt commit `8cc5227`).

**Backat:** ändringen i `src/pages/referenser/index.astro` (11.5) som filtrerade bort draft/noindex ur översikten. Filen är åter identisk med `main`; `/referenser/` visar samma 15 referenser som före Fas C.

**Behållet:** sitemap-filtret (`astro.config.mjs` + `src/data/reference-publication.mjs`), footerändringen (`SiteFooter.astro`), audit-scriptets sitemap-räkningsfix, denna logg.

**Skäl:** att ta bort noindex-sidor ur sitemap och sitewide footer är SEO-städning i linje med "noindex". Att dölja dem ur `/referenser/` är ett separat publicerings-/UX-beslut som inte är fattat. Kvarstår som öppen fråga (11.9 punkt 1).

---

## 12. Fas B – kvarvarande riktiga 404-destinationer (2026-09-04)

- **Branch:** `seo/p0-404-beslut`
- **Metod:** ny baseline (`npm run build` + `node scripts/audit-internal-links.mjs`) mot `upstream/main` efter Fas A + Fas C. Provenance i `src/**`. Varje unik trasig destination klassificerad som exakt en av `BUILD PAGE`, `FIX LINK`, `REMOVE LINK`, `REVIEW`, `ACCEPTED`. Endast entydigt verifierade fall ändrades.
- **Ingen** ny sida, redirect, referens, anchor, sitemap-, footer- eller draft/noindex-ändring.

### 12.1 Baseline före Fas B

| Mått | Värde |
|---|---|
| P0-poster (förekomster) | **29 (30)** |
| P1-poster | 0 |
| P2-poster (förekomster) | 189 |
| Byggda HTML-sidor | 69 |
| Indexerbara sidor | 41 |
| Sitemap-routes | 41 |
| Orphan-sidor | 0 |

Baseline oförändrad mot slutläget för Fas A/C (avsnitt 10–11). Samtliga 29 P0-poster bär redan HTML-kommentaren `<!-- KNOWN EXISTING DEAD LINK – ACCEPTED FOR THIS RELEASE -->` i källan – dvs. de var kända och medvetet parkerade i föregående release, inte oavsiktligt brutna.

### 12.2 Beslut per unik destination

22 unika trasiga destinationer (21 saknade sidor + 1 saknad anchor). Varje förekommer exakt en gång nedan.

| Destination | Förek. | Source files | Klass | Föreslagen åtgärd | Säker att fixa nu? |
|---|---|---|---|---|---|
| `/service-support/` | 3 | `tjanster/ljudsystem`, `tjanster/styrsystem-integration`, `tjanster/talat-utrymningslarm` | **FIX LINK** | → `/tjanster/garanti-och-service/` (verifierad: sidans `<title>`/`<h1>` = "Service och garanti", meta-beskrivning "AVAB erbjuder service, felsökning, support … underhåll av ljudsystem, styrsystem …"; länktext "service och support" i alla tre) | **Ja – fixad** |
| `/kunskap/ratt-kabel-av-teknik/` | 1 | `tjanster/ljudsystem` | **FIX LINK** | → `/kunskap/kablar-kontakter/` (verifierad: enda kunskaps-underartikeln, ämne = kablar & kontakter; länktext "kablage och kontakter") | **Ja – fixad** |
| `/referenser/hanza-mechanics-tocksfors/` | 1 | `om-oss` (ref-card) | **FIX LINK** | → `/referenser/hanza-konferens-tocksfors/` (verifierad: publicerad referens med `title: Hanza Mechanics, Töcksfors`, `name: Hanza Mechanics`; enda Hanza-referensen; alla `hanza-mechanics-*`-assets hör till samma projekt; startsidans motsvarande kort med identisk "modern industrimiljö"-framing länkar redan dit) | **Ja – fixad** |
| `/tjanster/konferensteknik/` | 4 | `kunskap/kablar-kontakter`, `tjanster/ljudsystem`, `tjanster/mikrofoner`, `tjanster/styrsystem-integration` (+ teknikfilter i `src/data/referenser.ts`) | **BUILD PAGE** | Planerad tjänstesida. Underlag finns: länktext/kontext på 4 tjänstesidor ("vår konferensteknik", "konferensljud och konferensteknik"), nav-filterpost `konferens → /tjanster/konferensteknik/`, startsidans sektion `#konferens-tjanst` ("Konferensrum som tjänst (BYOD)"). Saknas: själva sidan (scope, copy, schema, ev. relation till `/miljo/kontor-konferens/`). Bygg inte i Fas B. | Nej |
| `/tjanster/ljus/` | 1 | `kunskap/kablar-kontakter` ("Se även ljus") | **REVIEW** | Ingen ljus-tjänstesida finns; ingår inte i `src/data/services.ts`. Enstaka "se även". Beslut: `REMOVE LINK` (ta bort `<a>`, behåll ordet) eller `BUILD PAGE` om ljus ska bli tjänsteområde. Kräver beslut om tjänsteutbud – gissas inte. | Nej |
| `/tjanster/natverk-switchar-router-fiber/` | 1 | `kunskap/kablar-kontakter` ("Se även nätverk, switchar och fiber") | **REVIEW** | Ingen nätverks-tjänstesida finns; ingår inte i `services.ts`. Nätverk vävs in i mycket innehåll men har ingen egen sida. Beslut: `REMOVE LINK` eller `BUILD PAGE`. Gissas inte. | Nej |
| `/kravstallning/` | 1 | `tjanster/kameraovervakning` (hero-CTA "Ladda ner vår checklista för kravställning →") | **REVIEW** | Nedladdnings-/lead-magnet-destination. Ingen sida och ingen fil finns. Kräver innehållsbeslut: finns checklistan, ska den vara sida eller PDF? Varken `FIX LINK` (inget mål) eller `REMOVE LINK` (CTA med reellt syfte) är entydigt. | Nej |
| `/projektering/systemintegration/` | 1 | `tjanster/kameraovervakning` ("Läs mer om systemintegration →") | **REVIEW** | Trolig `FIX LINK` → `/tjanster/styrsystem-integration/` (services.ts: "Styrsystem & integration"; kortets rubrik = "Integration – när kameraövervakning blir riktigt stark"). Men sökvägen antyder en projektering-undersida och valet står mellan två tjänster → bekräftelse krävs, gissas inte. | Nej |
| `/kameraovervakning/gdpr/` | 1 | `tjanster/kameraovervakning` (länk **inuti** sektionen `id="lagar-gdpr"`) | **REVIEW** | Innehållet finns redan på huvudtjänstesidan i just den sektion länken sitter i (självrefererande). Beslut: `REMOVE LINK` (redundant) eller `BUILD PAGE` (juridisk fördjupningssida). Inga nya anchors skapas för grön audit. | Nej |
| `/kameraovervakning/skola/` | 1 | `tjanster/kameraovervakning` (env-grid) | **BUILD PAGE** | Del av planerat kluster "kameraövervakning per miljö" (6 kort, varav `hotell` redan pekar på `/miljo/hotell/`). Underlag: kortrubrik + kort beskrivning per miljö. Saknas: sidorna, bilder, djупinnehåll. Bygg inte i Fas B. Alternativ: `FIX LINK` till `/miljo/skola/` avvisad – miljösidan är AV-generell, inte kameraspecifik (ingen tydlig semantisk matchning). | Nej |
| `/kameraovervakning/butik/` | 1 | `tjanster/kameraovervakning` (env-grid) | **BUILD PAGE** | Som ovan (motsv. `/miljo/butik-retail/` är AV-generell). | Nej |
| `/kameraovervakning/parkering/` | 1 | `tjanster/kameraovervakning` (env-grid) | **BUILD PAGE** | Som ovan (motsv. `/miljo/parkering-garage/`). | Nej |
| `/kameraovervakning/industri/` | 1 | `tjanster/kameraovervakning` (env-grid) | **BUILD PAGE** | Som ovan (motsv. `/miljo/industri/`). | Nej |
| `/kameraovervakning/galleria/` | 1 | `tjanster/kameraovervakning` (env-grid) | **BUILD PAGE** | Som ovan (motsv. `/miljo/kopcentrum-galleria/`). | Nej |
| `/referenser/fortnox-arena-vaxjo/` | 3 | `miljo/sporthall-arena`, `om-oss` (brödtext + ref-card) | **BUILD PAGE** | Projektet nämns uttryckligen ("den första riktigt stora fasta installationen", "Arena · Milstolpe"). Underlag: 3 kort-/textblock (arena/milstolpe, styrning & integration, inkopplingspaneler + trådlösa mikrofoner). Saknas: content entry, bilder, mätvärden, kundgodkännande. Redirecta inte till `/referenser/`. | Nej |
| `/referenser/stc-kil-gym/` | 2 | `miljo/gym`, `tjanster/mikrofoner` | **BUILD PAGE** | Reellt gymprojekt (STC nämns även i proof-strip). Underlag: 2 kortbeskrivningar + asset `mikrofoner-stc-hammaro.webp` (kortet på `mikrofoner` täcker "STC Hammarö & STC Kil"). Saknas: content entry, Kil-specifika bilder. | Nej |
| `/referenser/mullhyttans-sporthall/` | 1 | `miljo/sporthall-arena` | **BUILD PAGE** | Underlag: 1 kortbeskrivning + asset `hallbyggnad-fasad-byggarbetsplats.webp`. Saknas: allt övrigt referensinnehåll. | Nej |
| `/referenser/loka-brunn/` | 1 | `tjanster/styrsystem-integration` | **BUILD PAGE** | Underlag: 1 kortbeskrivning ("Loka Brunn konferens & spa … Crestron, motoriserad duk, ljusstyrning …") + asset `victoriasalen-lokabrunn-konferens.webp`. Saknas: content entry m.m. | Nej |
| `/referenser/gotetorpsskolan-hammaro/` | 1 | `rastsignal` (referenskort) | **BUILD PAGE** | Rastsignal-skolreferens med specifik kortcopy. Saknas: content entry, bilder, kundgodkännande. Alternativ `REMOVE LINK` om projektet inte ska ha sida – kräver beslut. | Nej |
| `/referenser/stockfallets-skola-karlstad/` | 1 | `rastsignal` (referenskort) | **BUILD PAGE** | Som ovan ("tidsstyrt rastsignalsystem i två zoner, vädertåliga högtalare på fasad och sporthall"). | Nej |
| `/referenser/skolhagen-stockholm/` | 1 | `rastsignal` (referenskort) | **BUILD PAGE** | Som ovan ("Schoolbell-lösning med touchpanel, appstyrning, lovläge …"). | Nej |
| `/kontakt/#ladda-upp-underlag` | 1 | `tjanster/talat-utrymningslarm` (knapp "Skicka projektunderlag") | **REVIEW** | Kvar från Fas A. `/kontakt/` har `#kontaktformular` (4-stegsformulär **utan** filuppladdning) och en not om att bilagor skickas i mejlet efteråt. Länktexten säger "ladda upp" men funktionen saknas. Byt **inte** till `#kontaktformular` för grön audit. Beslut krävs: (a) lägg filuppladdning + riktig `#ladda-upp-underlag`-sektion på `/kontakt/`, (b) ändra CTA-text + peka på `#kontaktformular`, eller (c) `REMOVE LINK` av fragmentet. | Nej |

### 12.3 Faktiska ändringar i Fas B

Endast entydigt verifierade `FIX LINK`. Inga sidor, redirects, referenser, anchors eller draft/sitemap/footer rördes.

| Fil | Rad(er) | Ändring |
|---|---|---|
| `src/pages/tjanster/ljudsystem/index.astro` | ~355–356 | `href="/kunskap/ratt-kabel-av-teknik/"` → `href="/kunskap/kablar-kontakter/"`; stale `KNOWN EXISTING DEAD LINK`-kommentar borttagen |
| `src/pages/tjanster/ljudsystem/index.astro` | ~550–551 | `href="/service-support/"` → `href="/tjanster/garanti-och-service/"`; stale kommentar borttagen |
| `src/pages/tjanster/styrsystem-integration/index.astro` | ~569–570 | `href="/service-support/"` → `href="/tjanster/garanti-och-service/"`; stale kommentar borttagen |
| `src/pages/tjanster/talat-utrymningslarm/index.astro` | ~618–619 | `href="/service-support/"` → `href="/tjanster/garanti-och-service/"`; stale kommentar borttagen |
| `src/pages/om-oss/index.astro` | ~399–400 | `href="/referenser/hanza-mechanics-tocksfors/"` → `href="/referenser/hanza-konferens-tocksfors/"`; stale kommentar borttagen |

4 filer, 5 länkförekomster (3 poster). Länktext, layout, ordning och övrig copy oförändrade. Målet `/tjanster/garanti-och-service/` och `/kunskap/kablar-kontakter/` är indexerbara publika sidor; `/referenser/hanza-konferens-tocksfors/` är den enda publicerade (ej `noindex`) referensen → ingen ny P2-noindex-länk skapades.

### 12.4 Lämnat orört (kräver senare fas eller mänskligt beslut)

**BUILD PAGE (bygg i senare fas, bygg inte nu):**
- `/tjanster/konferensteknik/` – planerad tjänstesida (4 källor + nav-filter + startsektion).
- `/kameraovervakning/{skola,butik,parkering,industri,galleria}/` – kluster kameraövervakning per miljö (5 sidor).
- `/referenser/fortnox-arena-vaxjo/`, `/referenser/stc-kil-gym/`, `/referenser/mullhyttans-sporthall/`, `/referenser/loka-brunn/` – saknade referensdetaljsidor med partiellt underlag (kortcopy, vissa assets).
- `/referenser/gotetorpsskolan-hammaro/`, `/referenser/stockfallets-skola-karlstad/`, `/referenser/skolhagen-stockholm/` – Rastsignalens skolreferenser (kortcopy finns, övrigt underlag saknas).

**REVIEW (kräver kund-/människobeslut):**
- `/tjanster/ljus/` – REMOVE LINK eller BUILD PAGE (tjänsteutbudsbeslut).
- `/tjanster/natverk-switchar-router-fiber/` – REMOVE LINK eller BUILD PAGE (tjänsteutbudsbeslut).
- `/kravstallning/` – innehållsbeslut: existerar checklistan, sida eller PDF?
- `/projektering/systemintegration/` – trolig FIX LINK → `/tjanster/styrsystem-integration/`, kräver bekräftelse (val mellan två tjänster).
- `/kameraovervakning/gdpr/` – REMOVE LINK (redundant självlänk) eller BUILD PAGE (juridisk fördjupning).
- `/kontakt/#ladda-upp-underlag` – UX-/innehållsbeslut (filuppladdning saknas i formuläret).

### 12.5 Före/efter (Fas B)

| Mått | Före Fas B | Efter Fas B |
|---|---|---|
| P0-poster (förekomster) | 29 (30) | **24 (25)** |
| P1-poster | 0 | 0 |
| P2-poster (förekomster) | 189 | **189** |
| Byggda HTML-sidor | 69 | 69 |
| Indexerbara sidor | 41 | 41 |
| Sitemap-routes | 41 | 41 |
| Sitemap-routes som är noindex | 0 | 0 |
| Orphan-sidor | 0 | 0 |
| Svagt internlänkade (≤2) | 0 | 0 |

5 P0-förekomster (3 poster) åtgärdade via verifierad `FIX LINK`. Inga nya P0, inga nya trasiga anchors, inga nya redirects, inga nya P2-poster, ingen ökning av P1. Draft/noindex-logiken från Fas C orörd; sitemap oförändrad; `/referenser/`-urvalet oförändrat (15 kort).

### 12.6 Validering (Fas B)

| Kommando | Resultat |
|---|---|
| `npm run build` | OK – Complete, 56 sidor |
| `node scripts/audit-internal-links.mjs` | OK – exit 0, P0 24, P1 0, P2 189 |
| `GITHUB_BASE_REF=upstream/main npm run validate` | OK – exit 0, "Guardrail validation passed for 15 reference content entries" |
| `git diff --check` | OK – exit 0, rent |
