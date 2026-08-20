# Analys av kundönskemål – 2026-08-20

## Syfte
Detta dokument tolkar kundens samlade återkoppling och skiljer på symptom, rotorsaker, globala standardfrågor, sidunika ändringar och rena innehållsbeslut. Målet är att undvika att samma problem löses manuellt på många sidor.

## OBLIGATORISK REGEL – ANSVARSFÖRDELNING FÖR BILDER
Tidigare formulering att alla bildändringar skulle göras manuellt är fel och ersätts av denna regel.

### Andreas/kundteamet ansvarar för bildbearbetning
Följande ska göras manuellt:
- crop/beskärning av befintlig bild,
- focal point/visuell positionering när motivet behöver justeras,
- retuschering eller korrigering av befintlig bild,
- generativ eller annan bearbetning av själva bildinnehållet, exempelvis Lesjöfors-golvet.

### AI ansvarar för kompletta bildbyten och nya befintliga assets
AI får:
- byta en befintlig bild mot en annan bild i `assets`,
- lägga till en ny befintlig bild från `assets`,
- uppdatera bildreferenser i kod/content,
- välja relevant asset när uppgiften är tydlig och ingen exakt fil har angetts.

Föredragen metod är att Andreas/kundteamet innan implementation skapar en enkel bildmappning: `sida/sektion -> fil i assets`. AI ska då följa mappningen exakt. Detta minskar risken att en tekniskt korrekt men innehållsmässigt fel bild används.

Om ingen bildfil är förutbestämd får AI inventera `assets` och välja den mest relevanta befintliga filen. Om flera kandidater är rimliga och valet påverkar budskapet ska osäkerheten dokumenteras i stället för att ett godtyckligt val görs.

AI får även hantera teknisk bildprestanda, dimensioner, loading/lazy loading, LCP och länkar runt bilder så länge själva bildinnehållet inte beskärs eller retuscheras.

## Huvudslutsats
Kundens lista ska **inte** genomföras sida för sida i den ordning den skrevs. Flera önskemål återkommer och bör lösas som gemensamma komponenter eller standards först.

De viktigaste återkommande problemen är:
1. Header, dropdown-menyer och footer beter sig inte som en färdig global designstandard.
2. Miljösidor och tjänstesidor saknar tillräckligt strikt gemensam sidstandard.
3. Många kort, piller, FAQ-sektioner, rubrikavstånd och textlinjering avviker mellan sidor.
4. Internlänkning är inkonsekvent och ibland felaktig.
5. Bildansvaret måste hållas isär: AI hanterar kompletta byten/nya assets, Andreas hanterar crop/retusch/bildbearbetning.
6. Referenser används som innehåll på många sidor men underlaget är inte färdigställt överallt.
7. Terminologi är inkonsekvent, exempelvis `FAQ`/`Vanliga frågor`, `Restaurang, bar & klubb`/`Bar & Restaurang`, `Hur vi jobbar`/`Vår leverans` och `BYOM`/`BYOD`.

---

## Kritisk granskning av kundens önskemål

### 1. “Hel footer och inte två block”
**Bedömning:** Rimligt önskemål, men detta bör definieras som en global komponentändring och inte justeras per sida.

**Risk:** Om footerutseendet ändras utan att kontrollera spacing mot sista innehållssektionen kan glapp eller dubbla bakgrunder uppstå.

**Rekommendation:** Definiera en enda `SiteFooter`-standard med tydlig övergång från sidans sista sektion.

### 2. Dropdown-menyer går inte att scrolla
**Bedömning:** Funktionell bugg och hög prioritet.

**Rekommendation:** Dropdownen ska få egen scroll vid behov och aldrig göra nedersta menyalternativ oåtkomliga. Verifiera desktop, mobil och låg viewport-höjd.

### 3. Förenkla headern till “Kontakt”
**Bedömning:** Informationsarkitekturbeslut, inte bara kosmetik.

**Rekommendation:** Testa en tydlig `Kontakt`-CTA och behåll telefonnummer på kontaktsida/footer om kunden godkänner det.

### 4. År för färdigställande på referenssidor
**Bedömning:** Bra metadata som bör in i structured content/schema.

**Rekommendation:** Lägg till fält för färdigställandeår och visa endast verifierade värden.

### 5. Hero-piller är för genomskinliga
**Bedömning:** Återkommande designproblem.

**Rekommendation:** Lös globalt med gemensam pill/token-standard.

### 6. Bildbyten, crop och långsamma bilder
**Bedömning:** Här finns tre olika typer av arbete som inte ska blandas ihop.

- **Komplett bildbyte eller ny bild:** AI får välja/koppla in befintlig fil från `assets`.
- **Crop, retusch, focal point eller korrigering av själva bilden:** Andreas/kundteamet gör detta manuellt.
- **Prestanda:** AI får analysera och optimera tekniskt.

**Rekommendation:** Skapa om möjligt en bildmappning före implementering så AI vet exakt vilken asset som ska användas var.

### 7. 3+3, 3+2 och linjering av boxar
**Bedömning:** Kunden efterfrågar egentligen ett gridsystem, inte enskilda sidfixar.

**Rekommendation:** Definiera standardvarianter för grid och gemensam textstart/spacing.

### 8. “Löptext på samma höjd efter rubrik” och mer luft
**Bedömning:** Återkommande typografi-/spacingproblem.

**Rekommendation:** Lägg detta i tjänste- och miljösidornas gemensamma sektionstandard.

### 9. “FAQ ligger fel” och “FAQ -> Vanliga frågor”
**Bedömning:** Global ändring.

**Rekommendation:** Visa `Vanliga frågor` på alla sidor men behåll FAQ-schema internt för SEO.

### 10. “TA BORT TJÄNST: på alla tjänstersidor”
**Bedömning:** Tydlig global regel.

**Rekommendation:** Ändra i gemensam hero/eyebrow-rendering.

### 11. “Hur vi jobbar” kontra “Vår leverans”
**Bedömning:** Semantiken behöver låsas innan sektioner flyttas.

**Rekommendation:** `Hur vi jobbar` = process/metodik. `Vår leverans` = vad kunden faktiskt får.

### 12. Restaurangnamn i meny och sidrubrik
**Bedömning:** Inkonsekvent informationsarkitektur.

**Rekommendation:** Välj ett kanoniskt namn och använd samma i navigation, breadcrumb, H1, metadata och internlänkar.

### 13. Referenser behöver byggas/läggas till på många sidor
**Bedömning:** Beroende av referensmigrering och materialstatus.

**Rekommendation:** Inventera material först. AI får koppla in rätt referensbilder från `assets`; crop/retusch lämnas till Andreas.

### 14. Budgetkalkylator på flera miljösidor
**Bedömning:** Bör implementeras som återanvändbar CTA/komponent.

### 15. Felaktiga internlänkar
**Bedömning:** Hög prioritet eftersom det påverkar användbarhet, SEO och förtroende.

**Rekommendation:** Kör full länkinventering efter globala komponentändringar.

### 16. Startsida – aktuellt erbjudande/pris
**Bedömning:** Innehållsändring med affärsrisk.

**Rekommendation:** Använd endast kundverifierat aktuellt pris.

### 17. Större ombyggnader
`Ljus`, `Bild/skärm`, `Köpcentrum & Galleria` och `Talat utrymningslarm` bör ligga i egna arbetsbatcher efter att sidstandarderna är låsta.

---

## Globala regler som bör fastställas
1. `FAQ` visas som `Vanliga frågor` överallt.
2. Prefixet `Tjänst:` tas bort på samtliga tjänstesidor.
3. Hero-piller använder samma kontrast/opacitet.
4. Kort-/gridlayout styrs av gemensamma komponentvarianter.
5. Rubrik-, ingress- och brödtextavstånd standardiseras.
6. Klickbara kort/CTA-fält får korrekt semantik, hover och keyboard-focus.
7. Internlänkar ska peka mot kanoniska routes, inte Kontakt som fallback.
8. Referenser hämtas från strukturerad referensdata där möjligt.
9. **AI får välja och byta till befintliga bilder i `assets` samt lägga in nya befintliga assets.**
10. **Andreas/kundteamet gör crop, retusch, focal point och annan bearbetning av själva bildinnehållet.**
11. När en bildmappning finns ska AI följa den exakt.
12. Miljö- och tjänstenamn ska ha kanonisk terminologi.

---

## Frågor som måste beslutas innan implementation
### Kundbeslut krävs
- Ska headern bara visa `Kontakt`, eller även telefonnummer?
- Vilket restaurangnamn är kanoniskt?
- Hur ska `Hur vi jobbar` respektive `Vår leverans` användas?
- Vilket nytt pris ska visas i `Aktuellt erbjudande`?
- Finns en önskad bildmappning för de större bildbytena?
- Ska WOT-text fetmarkeras, och exakt vilka delar?
- Vad betyder `Lagom hantera dokument (Andreas)`?

### Kan lösas tekniskt utan nytt kundbeslut
- Dropdown-scroll.
- Sammanhållen footer.
- BYOM -> BYOD.
- `FAQ` -> `Vanliga frågor`.
- Ta bort `Tjänst:`.
- Rätta kända fellänkar.
- Gemensam spacing/grid-standard.
- Tekniska bildprestandafrågor.
- Kompletta bildbyten där målfil i `assets` är angiven eller entydig.

---

## Prioritering
### Kritisk / först
1. Navigation där innehåll inte går att nå.
2. Trasiga/felaktiga internlänkar.
3. Globala komponentstandarder.
4. Terminologi och ansvarsfördelning.

### Därefter
5. Tjänste- och miljösidestandard.
6. Sidspecifika layout- och innehållsfixar.
7. AI-drivna kompletta bildbyten från `assets`.
8. Manuella crop/retusch-uppgifter hos Andreas.
9. Nya/ombyggda sidor och referenser.
10. Slutlig visuell QA och länk-QA.

## Rekommenderad princip
**Fix the system before fixing the pages.** Om ett fel återkommer på fler än en sida ska första frågan vara om komponenten eller standarden är fel, inte hur respektive sida kan specialjusteras.