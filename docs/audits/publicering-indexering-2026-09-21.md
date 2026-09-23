# Publicerings- och indexeringsaudit – 2026-09-21

## Syfte

Den tekniska SEO-grunden och den stora undersidesfasen är genomförd. Den här auditen skiljer nu på:

1. sidor som redan är publicerade/indexerbara,
2. sidor som är tekniskt färdiga men fortfarande draft/noindex,
3. referenser som dessutom kräver kundens uttryckliga publiceringsgodkännande,
4. sidor med kända innehålls- eller bildblockerare.

Ingen `draft`, `noindex` eller `customer.publicationApproved` ändras i denna audit.

## Sammanfattning

| Grupp | Publicerad/indexerbar | Draft/noindex | Kommentar |
|---|---:|---:|---|
| Structured references | 3 | 21 | 2 har publicationApproved=true; Hanza är indexerbar men publicationApproved=null |
| Structured service pages | 5 | 2 | Fyra huvudtjänster + Exakt sökning/AI-analys är indexerbara; Konferensteknik och Videomöten/BYOM är fortfarande draft/noindex |
| Camera industry/guidance pages | 1 | 5 | Butik är befintlig pilot; fem nya sidor är draft/noindex |

## A. Redan publicerade/indexerbara references

### Go Banana Bergvik
- `draft: false`
- `seo.noindex: false`
- `customer.publicationApproved: true`
- Status: **publicerad**

### Nobel Forum
- `draft: false`
- `seo.noindex: false`
- `customer.publicationApproved: true`
- Status: **publicerad**

### Hanza Mechanics, Töcksfors
- `draft: false`
- `seo.noindex: false`
- `customer.publicationApproved: null`
- Status: **indexerbar men metadata/process behöver granskas**
- Åtgärd: ändra inte approval-fältet automatiskt. Bekräfta om publiceringen redan är kundgodkänd och dokumentera därefter beslutet.

## Publiceringsbeslut – huvudtjänster 2026-09-21

| Sida | Beslut | Skäl |
|---|---|---|
| `/tjanster/ljus/` | **REDO ATT INDEXERA** | Verifierat underlag, inga unsupported claims, inga saknade assets, visuellt godkänd |
| `/tjanster/natverk-switchar-router-fiber/` | **REDO ATT INDEXERA** | Verifierat underlag, inga unsupported/product claims, inga saknade assets, visuellt godkänd |
| `/tjanster/skarmar-projektorer/` | **SLUTREVIEW** | Coverage ren, men kräver sista mänskliga visuella/content-review före indexering |
| `/tjanster/digital-signage/` | **SLUTREVIEW** | Coverage ren, men proof/referens använder Galleria Duvan som fortfarande beskrivs som under uppbyggnad |
| `/tjanster/konferensteknik/` | **BLOCKERAD** | Coverage har `LOCAL SOURCE CHECK: PENDING` mot lokal `Konferensteknik.docx` |

## B. Structured service pages – aktuell status 2026-09-22

### Indexerbara
- `/tjanster/skarmar-projektorer/`
- `/tjanster/digital-signage/`
- `/tjanster/ljus/`
- `/tjanster/natverk-switchar-router-fiber/`
- `/tjanster/exakt-sokning-ai-analys/`

Dessa har:
- `draft: false`
- `seo.noindex: false`

### Fortfarande draft/noindex
- `/tjanster/konferensteknik/`
- `/tjanster/videomoten-byod/`

Konferensteknik väntar på slutlig source-jämförelse mot kundunderlaget samt visuell review. Videomöten/BYOM tas efter huvudtjänsterna som fördjupningssida.

### Rekommenderad publiceringsordning

**Huvudtjänster – granska först för indexering**
1. Konferensteknik
2. Skärmar & projektorer
3. Digital signage
4. Ljus
5. Nätverk, switchar & fiber

**Fördjupnings-/undersidor – granska efter huvudtjänster**
6. Videomöten / BYOD
7. Exakt sökning & AI-analys

Skäl: huvudtjänsterna är nu exponerade i tjänsteöversikt/header och bör vara de första som får indexeringsbeslut. Fördjupningssidor bör inte publiceras före sin tydliga parent-/huvudtjänst utan separat SEO-bedömning.

## C. Kamera – tekniskt byggda, fortfarande draft/noindex

Befintlig publicerad pilot:
- `/kameraovervakning/butik/`

Nya draft/noindex:
- `/kameraovervakning/skola/`
- `/kameraovervakning/parkering/`
- `/kameraovervakning/industri/`
- `/kameraovervakning/galleria/`
- `/kameraovervakning/gdpr/`

Rekommendation:
- gör en gemensam visuell/content-slutgranskning av de fyra branschsidorna,
- gör separat juridisk färskhetskontroll av GDPR-sidan nära publicering,
- publicera inte automatiskt bara för att CI är grön.

## D. Referenser – draft/noindex och publiceringsgodkännande saknas

Följande structured references är fortfarande:
- `draft: true`
- `seo.noindex: true`
- `customer.publicationApproved: null`

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

### Referensregel

Ingen av dessa ska göras indexerbar enbart för att sidan är tekniskt färdig.

Innan publicering:
1. visuell granskning,
2. verifiera projektfakta/bilder,
3. kundbeslut om publicering,
4. sätt först därefter `customer.publicationApproved: true`,
5. sätt `draft: false` och `seo.noindex: false`,
6. build + internlänksaudit + validate.

### Känd blockerare

**Götetorpsskolan:** ingen verifierad projektbild finns i repot. Nuvarande rastsignalbild är uttryckligen illustrativ. Rekommendation: verifierad projektbild före indexering/publicering.

**Galleria Duvan:** nuvarande referenscopy beskriver projektet som under uppbyggnad. Kontrollera projektstatus och copy innan indexering.

## E. SEO-status efter tekniska slut-QA:n

Senaste lokala verifiering efter SEO-fixer:
- build: godkänd
- guardrails: godkända
- internlänksaudit: P0 = 0
- internlänksaudit: P1 = 0
- orphan indexable pages: 0
- sitemap routes that are noindex: 0
- sitemap routes without internal path: 0

P2 består huvudsakligen av:
- avsiktliga interna länkar till reachable/noindex-drafts,
- absoluta interna URL:er som kan normaliseras senare,
- trailing-slash i Astro-genererade redirect-stubbar.

P2 är därför inte ett publiceringsstopp för den tekniska SEO-fasen, men kan optimeras vidare.

## Nästa rekommenderade SEO-fas

1. **Publiceringsbeslut för huvudtjänster**
   - Konferensteknik
   - Skärmar & projektorer
   - Digital signage
   - Ljus
   - Nätverk, switchar & fiber

2. **Kamera-publiceringsgranskning**
   - Skola
   - Parkering
   - Industri
   - Galleria
   - GDPR separat juridisk check

3. **Referensgodkännande med kund**
   - batcha endast referenser där text, bild och projektfakta är verifierade

4. **Sitewide metadata-audit**
   - title
   - meta description
   - canonical
   - robots
   - H1/title
   - Open Graph/Twitter
   - structured data

5. **Search Console efter publicering**
   - indexeringsstatus
   - queries/impressions
   - CTR
   - Google-omskrivna titles/snippets
   - gamla URL:er och crawlstatus
