# Kundönskemål – 2026-08-20

Detta projektunderlag samlar kundens återkoppling inför nästa förbättringsarbete på AVAB-webbplatsen.

## Dokument
- `ANALYS.md` – kritisk analys, rotorsaker, logiska luckor, beslut och prioritering.
- `FASPLAN.md` – genomförandeplan i faser med konkreta checkboxar och exit-kriterier.
- `fas-1d-notice-inventory.md` – klassificering, korrigerat kundbeslut och textbedömning för notice-/snippet-boxar.
- `TODO.md` i reporoten – kanonisk projektlista med sammanfattade faser och länk till detta underlag.

## Rekommenderad arbetsordning
1. Fas 0: beslut, material och inventering.
2. Fas 1: globala komponenter och designregler.
3. Fas 2: tjänstestandard och tjänstesidor.
4. Fas 3: miljöstandard och miljösidor.
5. Fas 4: startsida och riktade innehållsfixar.
6. Fas 5: referenser.
7. Fas 6: full QA och regressionstest.

## Viktig princip
Undvik att lösa återkommande fel med lokal CSS eller sidspecifika undantag. När samma symptom finns på flera sidor ska shared component, design-token eller sidstandard granskas först.

## OBLIGATORISK REGEL – ANSVARSFÖRDELNING FÖR BILDER
Bildarbete delas upp i två tydliga kategorier.

### Andreas/kundteamet gör manuellt
- crop/beskärning av befintlig bild,
- focal point/positionering när motivet behöver justeras visuellt,
- retuschering eller korrigering av en befintlig bild,
- annan bildbearbetning där själva bildinnehållet förändras, exempelvis Lesjöfors-golvet.

### AI får göra
- byta ut en bild helt mot en annan befintlig bild i `assets`,
- lägga in en ny befintlig bild från `assets`,
- uppdatera bildreferenser i kod/content,
- välja rätt bild i `assets` när uppgiften är entydig.

### Föredragen arbetsmetod
När det är möjligt ska Andreas/kundteamet före körning ange exakt vilken bildfil i `assets` som ska användas på vilken plats. Då ska AI följa den bildmappningen och inte göra ett eget kreativt bildval.

Om bildbyte efterfrågas men ingen bildfil är angiven får AI inventera `assets` och välja den mest relevanta befintliga bilden utifrån sidans innehåll och filernas användning. Vid verklig tveksamhet ska uppgiften flaggas som osäker i stället för att ett godtyckligt val görs.

Teknisk optimering som filstorlek, dimensioner, loading, lazy loading, LCP och länkar runt bilder får också hanteras av AI så länge det inte innebär retuschering/crop av själva bildinnehållet.

## Blockerande kundbeslut
- Header: endast `Kontakt` eller även telefonnummer?
- Kanoniskt namn för restaurangmiljön.
- Skillnaden mellan `Hur vi jobbar` och `Vår leverans`.
- Verifierat pris för aktuellt erbjudande.
- Bildmappning för de bildbyten där Andreas/kundteamet vill styra exakt vilken asset som ska användas.
- Förtydligande av `Lagom hantera dokument (Andreas)`.
- WOT-regeln är beslutad globalt; sidspecifik tillämpning görs kontrollerat i senare sidfaser.

## Source of truth
Detta underlag kompletterar befintliga standards och workflows. Kundrepots aktuella kod och redan beslutade standarder har företräde vid konflikt. Referensarbete ska fortsatt följa `docs/standards/pages/reference.md` och befintliga beslut i `TODO.md`.