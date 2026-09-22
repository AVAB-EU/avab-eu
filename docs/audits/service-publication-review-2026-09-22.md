# Tjänstegranskning – publicering och SEO 2026-09-22

## Scope

Read-only inventering av fem huvudtjänster efter undersidesfasen:

- Konferensteknik
- Skärmar & projektorer
- Digital signage
- Ljus
- Nätverk, switchar & fiber

## Sammanfattning

| Sida | Draft/noindex | Metadata/canonical/schema | Innehåll/coverage | Status |
|---|---|---|---|---|
| Konferensteknik | Ja | Teknisk implementation finns och använder gemensam ServiceLandingPage | Remote coverage ren, men lokal source-check mot Konferensteknik.docx saknas | **Behöver åtgärd före publicering** |
| Skärmar & projektorer | Nej | Gemensam implementation, indexerbar | Coverage: unsupported claims 0, source deviations 0, assets 0 saknade | **Publicerad / följ upp i Search Console** |
| Digital signage | Nej | Gemensam implementation, indexerbar | Coverage ren; ofärdig Galleria Duvan används inte som proof | **Publicerad / följ upp i Search Console** |
| Ljus | Nej | Gemensam implementation, indexerbar | Verifierade kärnpunkter från simhall/gym/Nobel Forum; inga saknade assets | **Publicerad / följ upp i Search Console** |
| Nätverk, switchar & fiber | Nej | Gemensam implementation, indexerbar | Unsupported/product claims 0; inga saknade assets | **Publicerad / följ upp i Search Console** |

## Gemensam teknisk kontroll

Alla fem routes använder `ServiceLandingPage.astro`, som ger:

- canonical via `absoluteUrl(data.slug)`
- robots från `draft || seo.noindex`
- title + meta description
- Open Graph + Twitter
- Service schema
- Breadcrumb schema
- FAQ schema
- gemensam hero, factband, FAQ och PageCTA

## Nästa konkreta steg

1. Konferensteknik: jämför sidan mot originalunderlaget och gör visuell slutreview.
2. Om source coverage blir 0: ändra `draft:false` och `seo.noindex:false` i separat PR.
3. För de fyra redan indexerbara huvudtjänsterna: följ upp indexering/snippets i Search Console i stället för att ändra innehåll utan signal.
4. Därefter: kamera-branschsidor enligt TODO.
