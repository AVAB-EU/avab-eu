# TEMP – Header scroll behavior

> Tillfälligt arbetsunderlag. Den här filen ska **raderas när implementationen är färdig, verifierad och godkänd**. Samtidigt ska motsvarande punkt tas bort ur `TODO.md` så att genomförda engångsuppgifter inte blir permanent dokumentbrus.

## Bakgrund

Kunden vill att AVAB:s gemensamma huvudheader/navigation döljs när användaren scrollar ned och visas igen när användaren scrollar upp. Beteendet ska fungera på desktop, tablet och mobil.

Startsidan och befintlig `SiteHeader`/global headerimplementation är source of truth för designen. Uppgiften gäller beteende, inte redesign.

## Beslutad UX

1. Headern ska vara **alltid synlig från sidtoppen tills användaren har passerat hero-sektionen**.
2. Först efter hero-sektionen aktiveras auto-hide:
   - scroll ned → headern döljs
   - scroll upp → headern visas
3. Använd en liten riktnings-/scrolltröskel så att headern inte fladdrar vid små touch- eller hjulrörelser. Utgå ungefär från 10–20 px och justera endast om faktisk test visar behov.
4. När användaren åter kommer in i hero-området eller nära sidtoppen ska headern visas och förbli synlig.
5. Om sidan saknar hero ska en robust fallback användas, exempelvis ett litet scrollavstånd från toppen. Hårdkoda inte en antagen hero-höjd.
6. När desktop-dropdown är öppen ska headern vara låst synlig.
7. När mobilmenyn är öppen ska headern vara låst synlig.
8. Dold/visad state ska animeras med transform/translateY eller motsvarande stabil lösning, inte genom layoutförstörande `display: none`.
9. `prefers-reduced-motion` ska respekteras.
10. Breadcrumb/ankarmeny är separata komponenter och ska inte börja följa med eller ändra beteende av misstag. Ändra dem endast om befintlig arkitektur tekniskt kräver det och verifiera då regressioner uttryckligen.

## Implementationsprinciper

- Inventera först befintlig `SiteHeader.astro`, global CSS och eventuell befintlig scroll/sticky-logik.
- Implementera centralt i den gemensamma headern; duplicera inte logik per sida.
- Återanvänd befintliga klasser/state där möjligt.
- Identifiera hero via faktisk DOM/selector/data-attribut eller observerad hero-botten; använd inte en hårdkodad pixelhöjd som antas passa alla sidor.
- `IntersectionObserver` kan användas för hero-tröskeln om det passar befintlig implementation; scrollriktning kan hanteras separat. Välj minsta robusta lösning.
- Undvik onödiga listeners och layout-thrashing. Scrollhantering ska vara lättviktig.
- Headern ska inte orsaka layout-hoppar när den visas/döljs.
- Behåll befintlig font, spacing, färger, höjder, dropdown-design och mobilnavigation.
- Inga nya features eller bred header-refactor i samma uppgift.

## Prompt att köra i Claude/Codex

```text
Du arbetar i AVAB:s Astro-repository.

Uppdraget är att implementera ett gemensamt auto-hide-beteende för AVAB:s huvudheader/navigation på hela webbplatsen.

VIKTIGT:
- Gör ingen redesign av headern.
- Ändra inte sidinnehåll.
- Ändra inte breadcrumb eller referenssidornas ankarmeny om det inte är tekniskt nödvändigt.
- Implementera centralt i den gemensamma headerlösningen, inte sida för sida.
- Läs först aktuell SiteHeader-komponent, global CSS och befintlig JS/sticky-logik innan du ändrar något.

BESLUTAT BETEENDE:

1. Headern ska alltid vara synlig från sidtoppen genom hela hero-sektionen.
2. Auto-hide aktiveras först när användaren har passerat hero-sektionens nederkant.
3. Efter hero:
   - tydlig scroll nedåt -> dölj headern
   - tydlig scroll uppåt -> visa headern
4. Använd en liten hysteresis/riktnings-tröskel, ungefär 10–20 px, så att headern inte fladdrar vid minimala scrollrörelser.
5. När användaren kommer tillbaka till hero-området/nära toppen -> visa headern och lås den synlig där.
6. Om en sida saknar hero ska implementationen ha en säker fallback baserad på ett litet scrollavstånd från toppen. Hårdkoda inte en antagen hero-höjd.
7. När en desktop-dropdown är öppen -> headern ska vara synlig och auto-hide pausas.
8. När mobilmenyn är öppen -> headern ska vara synlig och auto-hide pausas.
9. Visa/dölj med transform/translateY eller annan layoutstabil metod. Använd inte display:none för scrollbeteendet.
10. Respektera prefers-reduced-motion.

TEKNISKA KRAV:

- Undersök först hur hero-sektioner identifieras på olika sidtyper.
- Använd faktisk hero-botten som aktiveringsgräns, exempelvis via DOM-mätning eller IntersectionObserver där det passar arkitekturen.
- Undvik scroll-listeners som orsakar onödiga layoutberäkningar varje pixel.
- Undvik layout shift när headern döljs/visas.
- Behåll befintlig sticky/fixed-geometri om den redan fungerar; lägg inte blint på en ny position:fixed-regel.
- Behåll befintliga dropdowns, active states, mobilmeny, focus trap, body lock och tangentbordsnavigation.
- Ändra inte headerns design, typografi, spacing eller färger.
- Ingen bred refactor i samma uppgift.

TESTA MINST:

Desktop:
- startsida med hero
- miljösida
- tjänstesida
- referenssida
- Om oss/kontakt om hero-strukturen skiljer sig
- scroll ned efter hero
- scroll upp
- åter till hero
- öppen dropdown under scroll

Mobil:
- samma grundbeteende
- mobilmeny öppen under scroll
- korta och långa heroes
- touch-scroll med små riktningsändringar utan fladder

Sida utan identifierbar hero:
- verifiera fallback-beteendet

Tillgänglighet:
- prefers-reduced-motion
- tangentbord/focus
- ingen dold header medan navigationen används

Verifiera även att breadcrumb och eventuella ankarmenyer inte fått oavsiktligt nytt scrollbeteende.

Efter implementation:
1. Kör build och relevanta tester.
2. Visa exakt vilka filer som ändrats och varför.
3. Genomför faktisk browserkontroll om miljön tillåter det. Påstå inte visuell verifiering om browser inte användes.
4. Commit/push endast enligt projektets normala branch/PR-flöde.

STÄDNING EFTER GODKÄND IMPLEMENTATION:
När kunden/beställaren har godkänt scrollbeteendet och implementationen är mergead:
- radera `docs/workflows/TEMP-header-scroll-behavior.md`
- ta bort den tillfälliga header-scroll-uppgiften ur `TODO.md`
- lämna endast permanent dokumentation om implementationen faktiskt introducerar en generell standard som framtida utveckling behöver känna till
- gör städningen i samma avslutande PR/commit eller direkt efter godkänd merge enligt projektets normala arbetsflöde
```

## Klart-kriterier

- Header synlig genom hero på samtliga relevanta sidtyper.
- Efter hero döljs header vid nedscroll och visas vid uppscroll.
- Ingen nervös/fladdrig växling vid små scrollrörelser.
- Dropdown och mobilmeny låser headern synlig.
- Sidor utan hero har fungerande fallback.
- Ingen regression i breadcrumb, ankarmenyer, navigation, active state eller mobilmeny.
- Reduced motion respekteras.
- Build grön.
- Faktisk browser-QA genomförd eller tydligt markerad som kvarstående manuell kontroll.
- Efter godkännande: denna fil raderad och TODO-punkten bortstädad.
