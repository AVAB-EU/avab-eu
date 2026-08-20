# Fasplan – kundönskemål 2026-08-20

> **OBLIGATORISK BILDREGEL:** Alla uppgifter som innebär att välja, byta, ersätta, lägga till, generera, retuschera eller på annat sätt ändra en bild är **MANUELLA BILDUPPGIFTER** och ska utföras av Andreas/kundteamet. AI får inte genomföra dem. AI får endast dokumentera dem, kontrollera teknisk bildprestanda, rätta länkar runt bilder och justera presentation/crop/focal-position för redan manuellt vald bild när det uttryckligen efterfrågas.

## Fas 0 – Beslut, material och inventering
Målet är att låsa sådant som annars orsakar omarbete.

- [ ] Besluta header: endast `Kontakt` eller även telefonnummer.
- [ ] Besluta kanoniskt namn för restaurangmiljön.
- [ ] Besluta relationen mellan `Hur vi jobbar` och `Vår leverans`.
- [ ] Få verifierat nytt pris till startsidans aktuella erbjudande.
- [ ] **MANUELL BILDUPPGIFT:** Andreas/kundteamet samlar, väljer och godkänner ersättningsbilder för alla punkter märkta `byt bild`, `byt hero`, `lägg till bild`, `ändra bilder` eller motsvarande.
- [ ] Tolka anteckningen `Lagom hantera dokument (Andreas)` innan arbete startar.
- [ ] Klargör exakt WOT-fetmarkering.
- [ ] Inventera vilka referenser som har komplett text, bilder och färdigställandeår. Inventeringen får inte innebära automatiska bildbyten.
- [ ] Inventera befintliga tjänste- och miljökomponenter innan lokala CSS-fixar görs.

**Exit-kriterium:** blockerande innehållsbeslut och materialstatus är dokumenterade.

---

## Fas 1 – Globala komponenter och designregler
Målet är att rätta problem som påverkar många sidor på en gång.

- [ ] Gör footern till en sammanhållen global footer, inte två visuellt separata block.
- [ ] Fixa responsiva dropdown-menyer så alla underrubriker kan nås även vid låg viewport-höjd.
- [ ] Säkerställ korrekt scroll/overflow när meny är öppen.
- [ ] Implementera beslutad header-kontaktlösning.
- [ ] Standardisera hero-pillers kontrast/opacitet.
- [ ] Ändra visuell rubrik `FAQ` till `Vanliga frågor` globalt.
- [ ] Ta bort prefixet `Tjänst:` globalt från tjänstesidor.
- [ ] Definiera gemensam spacing för rubrik -> ingress/brödtext.
- [ ] Definiera gridvarianter för 3+3, 3+2 och andra återkommande kortlayouter.
- [ ] Definiera klickbara helkort/helfält med korrekt hover, focus och semantik.
- [ ] Definiera gemensam sektionstandard för `Hur vi jobbar`/sifferpiller.
- [ ] Säkerställ att global FAQ-komponent kan hantera rubriker på flera rader utan layoutbrott.

**Exit-kriterium:** återkommande visuella regler kan användas utan sidspecifik CSS.

---

## Fas 2 – Tjänstesidestandard och tjänstesidor

### Standard först
- [ ] Dokumentera tjänstesidans kanoniska struktur.
- [ ] Fastställ hero, piller, sektioner, kortgrid, referenser, miljöer, arbetssätt och Vanliga frågor.
- [ ] Säkerställ att nya tjänstesidor återanvänder shared components.

### Ljus
- [ ] Bygg tjänstesidan Ljus.

### Bild/skärm
- [ ] Bygg Bild/skärm.
- [ ] Säkerställ korrekt relation till Skärmar/projektorer.
- [ ] Koppla Visuell kommunikation via korrekt internlänkning.

### Kamera
- [ ] Justera transparenta piller i hero.
- [ ] Ta bort/byta blixtgrafik. Om detta innebär bild-/grafikbyte: **MANUELL BILDUPPGIFT**.
- [ ] Hantera oklar punkt `Lagom hantera dokument` först efter förtydligande.
- [ ] Ändra expanderande kort enligt ny standard.
- [ ] På `Kameraövervakning anpassad för er miljö`: sluta länka boxar om de inte representerar verkliga destinationer.
- [ ] Flytta/korrigera Vanliga frågor.

### Talat utrymningslarm
- [ ] Kontrollera långsam bild tekniskt: filstorlek, dimensioner, loading och LCP. AI får inte ersätta bilden.
- [ ] Bygg om sidan enligt tjänstestandard.
- [ ] **MANUELL BILDUPPGIFT:** Andreas/kundteamet bedömer och byter eventuell herobild.
- [ ] Bygg om första stycket.

### Mikrofoner
- [ ] **MANUELL BILDUPPGIFT:** byt hero till egen bild.
- [ ] Lägg till Claessons som relevant referens/innehåll där beslutat.
- [ ] Besluta och implementera eventuell fetmarkering i WOT.
- [ ] Uppdatera Mikrofonguiden: Ficksändare och headset, texten `flera bör märkas...`.
- [ ] Använd 3+3-layout där specificerat.
- [ ] Kontrollera Radiolänken.
- [ ] Linjera vit ruta enligt gemensam grid/spacing.
- [ ] På miljösektionen: löptext på samma höjd efter rubrik.
- [ ] Öka luft mellan rubrik och text enligt standard.
- [ ] Byt Fortnox mot Ekhagsskolan. Om detta avser bild: **MANUELL BILDUPPGIFT**; om det avser referenskort/data kan AI uppdatera text/länk efter verifiering.

### Ljudsystem
- [ ] **MANUELL BILDUPPGIFT:** byt hero.
- [ ] Rätta länk för `Helheten`/kablar.
- [ ] `Miljöanpassning`: 3+3-layout.
- [ ] **MANUELL BILDUPPGIFT:** referenser – byt bild för Claessons.
- [ ] Rätta internlänkning i `Hur vi jobbar`.

### Hörslinga
- [ ] `Svar direkt`: lägg förklarande text under bild.
- [ ] Bygg om text under Minnebergsskolan.
- [ ] Gör budgetkalkylator-CTA till korrekt helknapp och rätta länken.
- [ ] `Vanliga miljöer`: lägg till en miljö och kvalitetssäkra text.
- [ ] Rätta text/namn till NTI, inte STI. Om kundens punkt även kräver bildbyte är det **MANUELL BILDUPPGIFT**.
- [ ] **MANUELL BILDUPPGIFT:** `Tekniken bakom` – byt bild.
- [ ] `Portabel hörslinga`: liten bokstav i `hyrljud.nu`.
- [ ] **MANUELL BILDUPPGIFT:** `Auracast` – lägg till en bild.
- [ ] Kontrollera ytterligare fellänkning till budgetkalkylatorn.
- [ ] Flytta/korrigera Vanliga frågor.

### Taluppfattbarhet
- [ ] Lägg till/korrigera referenser.
- [ ] Lägg till/korrigera miljöer.

### Styrsystem
- [ ] Ta bort blixtgrafik. Om detta innebär bild-/grafikändring: **MANUELL BILDUPPGIFT**.
- [ ] Plattformar: 3+2-layout.
- [ ] `Smart styrning i praktiken`: gör hotell/restaurang-ruta klickbar om den ska representera destination.
- [ ] `Service och support`: rätta länk.

### Bakgrundsmusik
- [ ] **MANUELL BILDUPPGIFT:** byt hero.
- [ ] Addera relevanta referenser.

**Exit-kriterium:** samtliga tjänstesidor följer samma standard och inga kända tjänstelänkar är fel. Manuella bildpunkter behöver inte vara utförda av AI för att kod-/strukturfasen ska kunna verifieras, men de ska vara tydligt kvarmarkerade.

---

## Fas 3 – Miljösidestandard och miljösidor

### Standard först
- [ ] Dokumentera miljösidans kanoniska struktur.
- [ ] Standardisera hero, lösningar, teknikområden, arbetssätt/leverans, referenser, budgetkalkylator och Vanliga frågor.

### Sporthall & arena
- [ ] Lägg in budgetkalkylator.
- [ ] Gör hela gröna CTA-fältet klickbart.
- [ ] Korrigera hero-rubrik till beslutad terminologi för Sporthall & arena.

### Simhall
- [ ] **MANUELL BILDUPPGIFT:** byt herobild.
- [ ] Rätta `Spa, relax, ljus`-länk som går till Säffle simhall.
- [ ] Rätta `Infoskärmar` som går till Kontakt.
- [ ] Rätta Årjäng-referens som går till Kontakt.
- [ ] Rätta versalisering `Sälen`.
- [ ] Kontrollera texten där `Sälen` står fel trots korrekt länk.

### Ishall
- [ ] Lägg in budgetkalkylator.
- [ ] `Det här får du`: linjera styckets vertikala start med övriga.
- [ ] `Hur vi jobbar`: öka avstånd mellan sifferpiller och rubriker.

### Kontor & Konferens
- [ ] Korrigera avsnittet `Lösning – Därför projekterar vi systemet som en helhet`.
- [ ] Rätta fellänkning i skärmar.
- [ ] BYOM -> BYOD.
- [ ] Rätta länken på befintlig bild så den går till Skärmar/projektorer istället för projektering. Bildfilen ska inte bytas av AI.

### Hotell
- [ ] **MANUELL BILDUPPGIFT:** byt hero till bild med högre upplösning.
- [ ] Addera referenser.

### Restaurang / bar / klubb
- [ ] Lås kanoniskt namn och använd samma i meny, H1 och internlänkar.
- [ ] **MANUELL BILDUPPGIFT:** byt herobild.
- [ ] Addera Capri, Terrassen, Teburu och Pinchos när referensmaterial är klart.
- [ ] **MANUELL BILDUPPGIFT:** byt Claessons-bild mot Tempel där specificerat.
- [ ] Linjera löptextens start.
- [ ] Säkerställ att Vanliga frågor klarar rubrik på tre rader.

### Butik & Retail
- [ ] **MANUELL BILDUPPGIFT:** byt herobild och lägg in GB enligt manuellt valt/godkänt material.
- [ ] Korrigera transparent piller.
- [ ] **MANUELL BILDUPPGIFT:** ändra angivna bilder.

### Köpcentrum & Galleria
- [ ] Bygg om sidan efter att miljöstandarden är fastställd.
- [ ] **MANUELL BILDUPPGIFT:** byt herobild.
- [ ] Skriv om första stycket.
- [ ] Gör stycke 2 med samma boxstandard som övriga miljösidor.
- [ ] Rätta felplacerat grönt streck.
- [ ] **MANUELL BILDUPPGIFT:** ändra bilder i Lösningar.
- [ ] Ersätt avvikande lösningsboxar med gemensam standard.
- [ ] Besluta om `Arbetssätt` ska vara kvar eller flyttas till `Vår leverans`.
- [ ] Bygg om referenssektionens struktur. **Bildbyten i referenssektionen är MANUELLA BILDUPPGIFTER.**

### Skola
- [ ] Rätta fel länk i Lösning och informationsskärmar. Om kundens punkt även avser fel bild är bilddelen **MANUELL BILDUPPGIFT**.
- [ ] Lägg till referenser.

### Vård & Sjukhus
- [ ] **MANUELL BILDUPPGIFT:** byt herobild.
- [ ] **MANUELL BILDUPPGIFT:** rätta bilder som ligger på fel sektioner.
- [ ] `Hur vi jobbar`: utöka antal block/rutor enligt beslutad standard.
- [ ] Bedöm om innehåll bör länka/flyttas till `Vår leverans`.

### Industri
- [ ] **MANUELL BILDUPPGIFT:** bedöm eventuellt byte av hero.
- [ ] **MANUELL BILDUPPGIFT:** rätta bilder i teknikområden.
- [ ] Lägg till Bilparken, Hanza och Lesjöfors fjädrar som referenser när materialet är färdigt.
- [ ] Byt ut `Hur vi jobbar` enligt beslutad standard.

### Parkering & garage
- [ ] **MANUELL BILDUPPGIFT:** byt herobild.
- [ ] **MANUELL BILDUPPGIFT:** byt bilder i teknikområden. AI får separat rätta länkarna i teknikområden.

**Exit-kriterium:** alla miljösidor följer gemensam struktur och kända kod-/länkfel är rättade. Manuella bildpunkter ligger kvar tills Andreas/kundteamet utfört dem.

---

## Fas 4 – Startsida och riktade innehållsfixar

### Startsida
- [ ] Justera hero-piller enligt global standard.
- [ ] Justera hero-bildens focal position så högtalaren syns bättre. Detta ändrar presentationen av befintlig bild och innebär inte att AI väljer eller byter bildfil.
- [ ] Uppdatera aktuellt erbjudande med verifierat pris.

**Exit-kriterium:** startsidan använder samma globala regler och innehållet är kundverifierat.

---

## Fas 5 – Referenser

### Globalt
- [ ] Lägg till färdigställandeår i referensmodellen och visa endast verifierade årtal.
- [ ] Fortsätt befintlig referensmigrering enligt `docs/standards/pages/reference.md` och TODO-beslut.

### Nya/ombyggda referenser
- [ ] Mullhyttan.
- [ ] Fortnox arena.
- [ ] STC Kil.
- [ ] STC Hammarö.
- [ ] **MANUELL BILDUPPGIFT:** Lesjöfors – städa/dammsug golv i bild. AI-agenten får inte utföra retuscheringen eller generativ bildbearbetning.
- [ ] Justera avstånd mellan `Hur vi jobbar`-piller och rubrik enligt referensstandard.
- [ ] Bygg om Lundsberg. Alla bildval/bildbyten inom ombyggnaden är manuella.

**Beroende:** Den tidigare pausen för bred referensmigrering gäller tills materialet är komplett. Kundens nya lista kan vara signal om att material börjar bli tillgängligt, men detta ska verifieras innan pausen hävs.

**Exit-kriterium:** referenser med komplett material är migrerade och metadata är korrekt. Bildändringar genomförs separat manuellt.

---

## Fas 6 – Full QA och regressionstest

- [ ] Kör full kontroll av internlänkar på hela sajten.
- [ ] Kontrollera att inga kort av misstag länkar till Kontakt som fallback.
- [ ] Kontrollera navigation på desktop, tablet och mobil inklusive låg viewport-höjd.
- [ ] Kontrollera footer på samtliga sidtyper.
- [ ] Kontrollera `Vanliga frågor` och schema.
- [ ] Kontrollera tjänste- och miljögrid vid 1440, 1024, 768, 390 och 375 px.
- [ ] Kontrollera crop/focal point för de bilder som redan valts manuellt; QA får inte byta bildmaterial.
- [ ] Kontrollera bilddimensioner, filstorlek, lazy loading och LCP-kandidater. Om åtgärden kräver ny/ersatt bildfil ska den lämnas som manuell bilduppgift.
- [ ] Kontrollera alt-texter och kanoniska routes.
- [ ] Kontrollera referensår och att okända år inte visas som gissningar.
- [ ] Kör build och befintlig CI.
- [ ] Gör visuell kundgranskning innan merge/publicering.

## Arbetsprincip
En fas ska i normalfallet slutföras och verifieras innan nästa breda fas börjar. Sidunika småfixar får göras parallellt endast när de inte riskerar att skrivas över av pågående standardisering.

**Bildregeln gäller genom hela projektet och får inte kringgås av en AI-agent, även om en äldre punkt eller kundanteckning uttryckligen säger `byt bild`.**