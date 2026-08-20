# Analys av kundönskemål – 2026-08-20

## Syfte
Detta dokument tolkar kundens samlade återkoppling och skiljer på symptom, rotorsaker, globala standardfrågor, sidunika ändringar och rena innehållsbeslut. Målet är att undvika att samma problem löses manuellt på många sidor.

## OBLIGATORISK REGEL – BILDER HANTERAS MANUELLT
**Alla önskemål som innebär att välja, byta, ersätta, lägga till, generera, retuschera eller på annat sätt ändra en bild ska utföras manuellt av Andreas/kundteamet. AI får inte genomföra dessa bildändringar.**

Detta gäller samtliga hero-bilder, kortbilder, referensbilder, bilder i lösningar/teknikområden och AI-bearbetning av befintliga bilder. Lesjöfors-punkten om att dammsuga golvet med AI är därför också en manuell uppgift och får inte utföras automatiskt av en AI-agent.

AI får endast hjälpa till runt bilderna genom att exempelvis:
- dokumentera att en manuell bildändring återstår,
- kontrollera teknisk prestanda, dimensioner, lazy loading och LCP,
- rätta länkar som är kopplade till en bild eller ett kort utan att byta bildfil,
- justera layout/crop/focal-position för en redan manuellt vald bild när uppgiften uttryckligen gäller presentation.

Denna regel har företräde framför formuleringar som `byt bild`, `byt hero`, `lägg till bild`, `ändra bilder` eller liknande i kundens ursprungliga anteckningar.

## Huvudslutsats
Kundens lista ska **inte** genomföras sida för sida i den ordning den skrevs. Flera önskemål återkommer och bör lösas som gemensamma komponenter eller standards först.

De viktigaste återkommande problemen är:

1. Header, dropdown-menyer och footer beter sig inte som en färdig global designstandard.
2. Miljösidor och tjänstesidor saknar tillräckligt strikt gemensam sidstandard.
3. Många kort, piller, FAQ-sektioner, rubrikavstånd och textlinjering avviker mellan sidor.
4. Internlänkning är inkonsekvent och ibland felaktig.
5. Bildval och bildändringar är manuellt ägda uppgifter; teknisk bildprestanda kan däremot analyseras separat.
6. Referenser används som innehåll på många sidor men underlaget är inte färdigställt överallt.
7. Terminologi är inkonsekvent, exempelvis `FAQ`/`Vanliga frågor`, `Restaurang, bar & klubb`/`Bar & Restaurang`, `Hur vi jobbar`/`Vår leverans` och `BYOM`/`BYOD`.

---

## Kritisk granskning av kundens önskemål

### 1. “Hel footer och inte två block”
**Bedömning:** Rimligt önskemål, men detta bör definieras som en global komponentändring och inte justeras per sida.

**Risk:** Om footerutseendet ändras utan att kontrollera spacing mot sista innehållssektionen kan glapp eller dubbla bakgrunder uppstå.

**Rekommendation:** Definiera en enda `SiteFooter`-standard med tydlig övergång från sidans sista sektion.

### 2. Dropdown-menyer går inte att scrolla
**Bedömning:** Detta är en funktionell bugg och ska prioriteras högt.

**Logisk lucka:** Kundens beskrivning anger inte om problemet gäller desktop, mobil eller båda. Lösningen bör verifiera viewport-höjd, overflow och låsning av sidscroll.

**Rekommendation:** Dropdownen ska få egen scroll vid behov och aldrig göra nedersta menyalternativ oåtkomliga.

### 3. Förenkla headern till “Kontakt”
**Bedömning:** Potentiellt bättre, men är ett informationsarkitekturbeslut och inte bara kosmetik.

**Trade-off:** Telefonnummer direkt i headern ger kortare väg till samtal. En enda kontaktlänk ger renare header men ett extra klick.

**Rekommendation:** Testa en tydlig `Kontakt`-CTA och behåll telefonnumret på kontaktsida/footer. Beslut bör tas globalt innan implementation.

### 4. År för färdigställande på referenssidor
**Bedömning:** Bra metadata som bör in i structured content/schema, inte skrivas manuellt i layouten.

**Risk:** Alla referenser kanske inte har verifierat årtal.

**Rekommendation:** Lägg till fält för färdigställandeår med möjlighet att lämna okänt värde, och visa bara när data finns.

### 5. Hero-piller är för genomskinliga
**Bedömning:** Återkommande designproblem på flera sidor.

**Rekommendation:** Lös globalt med gemensam pill/token-standard istället för separata CSS-fixar per sida.

### 6. Bildbyten och långsamma bilder
**Bedömning:** Här blandas två separata ansvarsområden: manuellt bildval/bildbyte och teknisk bildprestanda.

**Viktig regel:** Alla bildbyten, nya bilder och bildbearbetningar görs manuellt av Andreas/kundteamet. AI får inte välja eller ersätta bilder.

**Rekommendation:** Bildönskemål markeras som `MANUELL BILDUPPGIFT`. Prestandaproblem får analyseras tekniskt utan att AI byter bildfil. Om en optimering skulle kräva att bildfilen ersätts ska den lämnas till den manuella bilduppgiften.

### 7. 3+3, 3+2 och linjering av boxar
**Bedömning:** Kunden efterfrågar egentligen ett gridsystem, inte enskilda sidfixar.

**Rekommendation:** Definiera standardvarianter för grid: 3+3, 3+2, 2+2 osv. Kort i samma visuella grupp ska ha förutsägbara höjder och textstart, men inte tvingas till onödigt tomrum om innehållet skiljer sig mycket.

### 8. “Löptext på samma höjd efter rubrik” och mer luft
**Bedömning:** Återkommande spacing-/typografiproblem.

**Rekommendation:** Lägg detta i tjänste- och miljösidornas gemensamma sektionstandard. Undvik lokal margin-CSS.

### 9. “FAQ ligger fel” och “FAQ -> Vanliga frågor”
**Bedömning:** Detta bör lösas globalt.

**Rekommendation:** Använd `Vanliga frågor` som visuell rubrik på samtliga sidor. Behåll eventuell FAQ-schema internt för SEO.

### 10. “TA BORT TJÄNST: på alla tjänstersidor”
**Bedömning:** Tydlig global regel.

**Rekommendation:** Ändra i tjänstesidans gemensamma hero/eyebrow-rendering så att prefixet inte kan återkomma på nya sidor.

### 11. “Hur vi jobbar” kontra “Vår leverans”
**Bedömning:** Kundens anteckningar visar osäkerhet om vilken sektion som ska finnas var.

**Logisk lucka:** Att flytta block utan innehållsmodell riskerar dubblerad information.

**Rekommendation:** Definiera semantiken först:
- `Hur vi jobbar` = process/metodik.
- `Vår leverans` = vad kunden faktiskt får.
Sektioner ska inte användas som visuella behållare för samma innehåll.

### 12. Restaurangnamn i meny och sidrubrik
**Bedömning:** `Restaurang, bar & klubb` och `Bar & Restaurang` är inkonsekvent informationsarkitektur.

**Rekommendation:** Välj ett kanoniskt namn och använd samma i navigation, breadcrumb, H1, metadata och internlänkar. Befintlig URL bör normalt bevaras och vid behov redirectas om slug ändras.

### 13. Referenser behöver byggas/ad­deras på många sidor
**Bedömning:** Detta är beroende av referensmigreringen och kundens material.

**Risk:** Att addera provisoriska referenskort innan referensdata är färdig skapar länkar till halvfärdiga eller noindex-sidor.

**Rekommendation:** Gör materialinventering först och koppla sedan färdigställda referenser via strukturerad data. Eventuella bildval inom referenserna görs manuellt.

### 14. Budgetkalkylator på flera miljösidor
**Bedömning:** Bör implementeras som återanvändbar CTA/komponent.

**Rekommendation:** Samma komponent, samma länk och samma klickyta överallt. “Hela gröna fältet ska bli länk” är en rimlig tillgänglighetsförbättring om fokus- och hover-state blir tydliga.

### 15. Felaktiga internlänkar
**Bedömning:** Hög prioritet eftersom det påverkar användbarhet, SEO och förtroende.

**Rekommendation:** Kör en fullständig länkinventering efter globala komponentändringar, inte bara de länkar kunden råkat hitta.

### 16. Startsida – aktuellt erbjudande/pris
**Bedömning:** Innehållsändring med affärsrisk.

**Rekommendation:** Pris ska inte gissas från äldre innehåll. Kräver kundverifierat aktuellt pris innan publicering.

### 17. “Ljus”, “Bild/skärm”, “Köpcentrum & Galleria”, “Talat utrymningslarm” behöver byggas/byggas om
**Bedömning:** Dessa är större innehållsprojekt och ska inte blandas in i en bugfixfas.

**Rekommendation:** Lägg dem i egna arbetsbatcher efter att sidstandarderna är låsta. Bildmaterial i dessa ombyggnader väljs och ändras manuellt.

---

## Globala regler som bör fastställas

1. `FAQ` visas som `Vanliga frågor` överallt.
2. Prefixet `Tjänst:` tas bort på samtliga tjänstesidor.
3. Hero-piller använder samma kontrast/opacitet på alla relevanta sidor.
4. Kort-/gridlayout styrs av gemensamma komponentvarianter.
5. Rubrik-, ingress- och brödtextavstånd standardiseras.
6. Hela klickbara kort/CTA-fält ska ha korrekt semantik, hover och keyboard-focus.
7. Internlänkar ska peka mot kanoniska routes, inte kontakt som fallback om en riktig destinationssida finns.
8. Referenser hämtas från strukturerad referensdata när det är möjligt.
9. **Alla bildval, bildbyten, nytillagda bilder och bildretuscheringar görs manuellt av Andreas/kundteamet och får inte utföras av AI.**
10. AI får kontrollera bildprestanda och presentation utan att själv välja eller ersätta bildmaterial.
11. Miljö- och tjänstenamn ska ha en kanonisk terminologi.

---

## Frågor som måste beslutas innan implementation

### Kundbeslut krävs
- Ska headern bara visa `Kontakt`, eller även telefonnummer?
- Vilket namn är kanoniskt: `Restaurang, bar & klubb` eller `Bar & Restaurang`?
- Ska `Hur vi jobbar` finnas kvar som egen sektion, eller ersättas/flyttas till `Vår leverans` på vissa sidtyper?
- Vilket nytt pris ska visas i `Aktuellt erbjudande`?
- Vilka bilder ska Andreas/kundteamet manuellt välja där kunden skrivit `byt bild` eller motsvarande?
- Ska WOT-text fetmarkeras, och exakt vilka delar?
- Vad betyder anteckningen `Lagom hantera dokument (Andreas)`? Detta behöver tolkas innan implementation.

### Kan lösas tekniskt utan nytt kundbeslut
- Dropdown-scroll.
- Footer som en sammanhållen global komponent.
- BYOM -> BYOD.
- `FAQ` -> `Vanliga frågor`.
- Ta bort `Tjänst:`.
- Rätta kända fellänkar.
- Gemensam spacing och grid-standard.
- Teknisk kontroll av långsam bild utan automatiskt bildbyte.

---

## Prioritering

### Kritisk / först
1. Navigation där innehåll inte går att nå.
2. Trasiga eller felaktiga internlänkar.
3. Globala komponentstandarder som påverkar många sidor.
4. Terminologi som annars skapar fler avvikelser.

### Därefter
5. Tjänste- och miljösidestandard.
6. Sidspecifika layout- och innehållsfixar.
7. Nya/ombyggda sidor.
8. Referenskomplettering när materialet är verifierat.
9. Manuella bildändringar genomförs separat av Andreas/kundteamet.
10. Slutlig visuell QA och länk-QA.

## Rekommenderad princip
**Fix the system before fixing the pages.** Om ett fel återkommer på fler än en sida ska första frågan vara om komponenten eller standarden är fel, inte hur respektive sida kan specialjusteras.