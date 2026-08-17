# Migrationsinventering för AVAB-referenser

_Status 2026-08-17. Detta är en planeringsöversikt; inga routes utöver canonical pilot har byggts om i standardiseringsfasen._

Designregler finns endast i [`avab-standard-referenser.md`](./avab-standard-referenser.md). Arbetsflödet finns i [`avab-referenser-implementeringsguide.md`](./avab-referenser-implementeringsguide.md).

## Sammanfattning

- 14 projektreferenser finns under `src/pages/referenser/`.
- 13 bedöms som standardreferenser.
- 1 bedöms som fördjupad referens: Minnebergsskolan, som redan är canonical pilot.
- Hanza Mechanics är ensam med `draft: false`; övriga innehållsfiler är drafts och kräver publiceringskontroll.
- Inga av de 13 övriga routes har fått layoutändringar i denna fas.

Antalet sektioner nedan är en grov innehållsbedömning utifrån befintliga datafält, inte ett framtida krav. Hero räknas separat. Hero-bilden ingår inte i kolumnen för innehållsbilder.

## Inventering

| Referens | Ungefärliga innehållssektioner | Innehållsbilder | Typ | Ankarmeny | Specialproblem | Rekommenderad ordning |
|---|---:|---:|---|---|---|---:|
| Nordic Wellness Marieberg | 4–5 | 0 | Standard | Nej | Draft; mycket kort bildunderlag | 1 – enkel verifiering |
| Lesjöfors AB | 4–5 | 0 | Standard | Nej | Draft; inga galleribilder | 2 – enkel verifiering |
| Hanza Mechanics, Töcksfors | 5–6 | 2 | Standard | Nej | Publicerad; variants-sektion och relaterat innehåll | 3 – normal referens |
| Claessons Konferens & Restaurang | 5–6 | 3 | Standard | Nej | Draft; gammal routefil, HTML-preview och ZIP finns i projektmappen | 4 – bildrik kontroll |
| Säffle simhall | 5–6 | 3 | Standard | Nej | Draft; externt hostade bilder, citat och bild-/kundrättigheter ska verifieras | 5 – bildrik kontroll |
| Hundfjällshotellet & Hundfjällscenter | 5–6 | 2 | Standard | Nej | Draft; relaterat innehåll och rättighetskontroll | 6 |
| Årjängs simhall | 4–5 | 0 | Standard | Nej | Draft; verifiera påståenden och bildunderlag | 7 |
| Ekhagsskolan, Dals Långed | 4–5 | 0 | Standard | Nej | Draft; tunt bildunderlag | 8 |
| Friskis&Svettis Karlstad | 4–5 | 0 | Standard | Nej | Draft; löpande servicehistorik behöver avgränsas redaktionellt | 9 |
| Kroppkärrs IP | 4–5 | 0 | Standard | Nej | Draft; utomhusmotiv och bildunderlag ska verifieras | 10 |
| Lundsbergs skola | 4–5 | 0 | Standard | Nej | Draft; tunt bildunderlag | 11 |
| Sannerudshallen, Kil | 4–5 | 0 | Standard | Nej | Draft; fukt-/miljöpåståenden ska verifieras | 12 |
| Sörby idrottshall, Kumla | 4–5 | 0 | Standard | Nej | Draft; LED-vägg och zonlogik kräver faktakontroll | 13 |
| Minnebergsskolan, Arvika | 5 långa kapitel + FAQ | 49 bildnycklar | Fördjupad/canonical | Ja | Historiska `index2.astro`, `index.txt` och `index2.txt` ligger kvar; draft-status ska beslutas separat | Pilot – inte migreringsobjekt |

## Specialfall som inte ska lösas i en massmigrering

- **Claessons:** `index gammal.astro`, HTML-preview och `claessons-referens-astro-assets.zip` ska bedömas separat. De får inte raderas som bieffekt av sidmigreringen.
- **Minnebergsskolan:** historiska jämförelsefiler ska lämnas orörda tills deras syfte och arkiveringsplats är beslutad.
- **Säffle:** externa bild-URL:er och kundcitat kräver käll-, rättighets- och tillgänglighetskontroll.
- **Drafts:** layoutgodkännande innebär inte publiceringsgodkännande. `draft` ändras i en separat, uttrycklig publiceringsprocess.
- **Provisoriska bilder:** saknad eller osäker bild ska ge textsektion, inte tom bildyta eller en osäker publicerad asset.
- **CTA och fakta:** äldre CTA-varianter och påståenden ska granskas mot aktuell standard och verifierad källa innan publicering.

## Rekommenderad migrationsordning

1. **Enkel:** Nordic Wellness Marieberg. Bekräfta att standarden fungerar med kort text och utan innehållsbilder.
2. **Enkel nummer två:** Lesjöfors AB. Bekräfta att den första lösningen inte blev projektspecifik.
3. **Normal:** Hanza Mechanics. Testa tvåbildsgrid, variants-innehåll och en redan publicerad route med extra försiktighet.
4. **Bildrik:** Claessons, därefter Säffle. Testa trebildsgrid, specialfiler, externa bilder och citat utan att blanda ihop problemen.
5. **Valideringsstopp:** gör gemensam desktop/tablet/mobil-QA och justera endast delade regler som bevisligen behövs.
6. **Små batcher:** migrera återstående standardreferenser i grupper med liknande innehåll, med egen diff och acceptance checklist per route.
7. **Slut-QA:** kontrollera referensindex, internlänkar, drafts, canonical, byggresultat och samtliga kontrollbredder.

Minnebergsskolan migreras inte på nytt; den används som regressionstest genom hela fasen.
