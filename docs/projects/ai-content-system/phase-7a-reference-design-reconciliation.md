# Fas 7A – Designförsoning för Referenser

**Status:** Completed
**Owner:** AVAB-projektet  
**Repo:** `AVAB-EU/avab-eu`  
**Branch:** `agent/ai-content-system`  
**Design baseline:** `https://test2.avab.eu/referenser/minnebergsskolan-arvika/`  
**Last reviewed:** 2026-08-18

## Beslut

Minnebergsskolans live-version på `test2.avab.eu` är visuell source of truth för hur AVAB:s referenssidor ska upplevas under Fas 7.

Kundrepots aktuella kod är teknisk implementation source of truth. Den nyare implementationen får inte ersättas av den äldre renderer som byggdes i det separata arbetsrepot.

Fas 7A ska därför förena:

`kundrepots structured content + befintliga Reference*-komponenter + Minneberg-designens visuella språk`

## Aktuell teknisk baseline i kundrepot

`src/content.config.ts` har redan en rikare referensmodell än den tidigare AI Content-piloten. Referenser använder bland annat:

- layouts: `compact`, `standard`, `extended`
- hero, fakta och brief
- scope och project facts
- variants och tekniska fördjupningar
- verifierings-/evidence-fält
- CTA-varianter
- bilder med width/height/objectPosition
- kund/publiceringsfält

Kundrepot har dessutom återanvändbara komponenter som bland annat:

- `ReferenceHero.astro`
- `ReferenceFacts.astro`
- `ReferenceBrief.astro`
- `ReferenceScope.astro`
- `ReferenceScale.astro`
- `ReferenceFeatureSplit.astro`
- `ReferenceMediaGrid.astro`
- `ReferenceTechnicalDetails.astro`
- `ReferenceGallery.astro`
- `ReferenceFaq.astro`
- `ReferenceQuote.astro`
- `RelatedReferences.astro`
- `ReferenceAnchorNav.astro`

Detta komponentlager ska granskas och återanvändas före skapande av nya parallella blocktyper.

## Varför Fas 7A behövs

Den tidigare AI Content-branchen byggde en alternativ generisk `ReferencePage`/`ReferenceCaseStudy`. Den var tekniskt ren men hade två problem:

1. den förenklade bort viktiga delar av Minnebergs godkända design,
2. kundrepot hade samtidigt hunnit utveckla en rikare och mer relevant implementation.

Lärdomen är att dokumentation och AI-regler ska migreras, men implementation får inte skrivas över utan reconciliation mot aktuell kod.

## Designkontrakt från Minneberg

Den gemensamma referensarkitekturen ska kunna uttrycka följande återkommande mönster utan unik fullsidig CSS per referens:

1. Breadcrumbrad under header.
2. Hero med verklig projektbild, eyebrow, tydlig H1, ingress och kontrollerade CTA:er.
3. Tydliga projektfakta tidigt i sidan.
4. Växlande sektioner som skapar rytm utan att bli en tung säljsida.
5. Scope/leveransomfattning med tydlig informationshierarki.
6. Text + bild-sektioner och möjlighet att spegelvända layout när det behövs.
7. Process-/stegpresentation när den tillför begriplighet.
8. Verifierade metrics/resultat där underlag finns.
9. Bildgalleri med captions och korrekt alt-text.
10. Tekniska fördjupningar utan att varje projekt skapar en egen mall.
11. FAQ som är läsbar på desktop och mobil.
12. Avslutande CTA med tydlig primär handling.
13. Konsekvent alignment i överkant för rubriker, text, bilder och kort på desktop.
14. Innehållsdriven höjd; lika höjd får inte skapa stora tomma ytor.
15. Enkolumnsflöde på mobil som standard där det förbättrar läsbarheten.
16. Berättande ankarkapitel där varje ankarlänk har eget textunderlag och relevanta bilder.
17. Rikt projektmaterial fördelas genom hela sidan efter funktion eller projektfas, inte som ett enda sent bildblock.
18. SEO-text ska hjälpa inköpare att bedöma AVAB:s verifierade ansvar, kompetens och leverans utan obestyrkta påståenden.

## Vad som inte ska göras

- Kopiera inte den gamla `ReferenceCaseStudy.astro` in i kundrepot som ny parallell standard.
- Ersätt inte kundrepots `content.config.ts` med den äldre AI Content-versionen.
- Skriv inte över Minneberg-route eller kundens projektbilder med äldre branchversioner.
- Skapa inte en ny komponent om befintlig `Reference*`-komponent redan löser behovet.
- Lägg inte godtyckliga CSS-klasser eller fri HTML i content för att imitera en enstaka referens.
- Återinför inte `www.avab.eu` som canonical källa.

## Genomförandeordning

1. Inventera Minneberg-route mot befintliga `Reference*`-komponenter och schema.
2. Identifiera vilken markup som fortfarande är Minneberg-specifik och vad som redan är gemensamt.
3. Flytta endast verkligt återkommande mönster till befintliga/gemensamma komponenter.
4. Anpassa schema endast när ett återkommande content-behov saknas.
5. Behåll kundrepots bilder, fakta och nyare implementation.
6. Kör build/validering.
7. Jämför Minneberg visuellt mot `test2` på desktop och mobil.
8. När Minneberg är godkänd: använd **Säffle simhall som första riktiga migrationspilot**.
9. Validera Säffle på flera brytpunkter och kontrollera att ingen ny lokal CSS behövs.
10. Gör ett valideringsstopp innan nästa referens väljs.

## Exit criterion för Fas 7A

Fas 7A är klar när:

- Minneberg använder kundrepots structured content och gemensamma referenskomponenter i den utsträckning som är rimlig,
- sidan visuellt följer godkänd test2-baseline,
- ingen äldre parallell renderer behövs,
- canonical/metadata/schema följer `https://avab.eu/`,
- desktop och mobil är verifierade,
- build/validering passerar,
- Säffle simhall fungerar som första migrationspilot med samma arkitektur utan specialhack.

Först därefter går Fas 7 vidare till fler referenser.

## Slutresultat 2026-08-18

Minnebergsskolan och Säffle simhall använder nu samma strukturerade `story`-modell, tunna routeprincip, gemensamma `ReferencePage` och befintliga `Reference*`-komponenter. Minnebergs fem ankarkapitel och 49 projektbilder bevarades i contentmodellen utan lokal fullsidemarkup eller sidspecifik CSS. Båda piloterna har byggts och jämförts på desktop och mobil. Fas 7A:s exit criterion är därmed uppfyllt.
