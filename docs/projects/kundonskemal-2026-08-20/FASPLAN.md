# Fasplan – kundönskemål 2026-08-20

> **OBLIGATORISK BILDREGEL:** AI får byta ut bilder helt och lägga in nya befintliga bilder från `assets`. Andreas/kundteamet gör crop, focal point, retuschering och annan bearbetning av själva bildinnehållet. När en bildmappning finns (`sida/sektion -> asset-fil`) ska AI följa den exakt. Om ingen fil är angiven får AI välja den mest relevanta befintliga asseten när valet är tydligt; verklig tveksamhet ska flaggas.

## Fas 0 – Beslut, material och inventering
- [ ] Besluta header: endast `Kontakt` eller även telefonnummer.
- [ ] Besluta kanoniskt namn för restaurangmiljön.
- [ ] Besluta relationen mellan `Hur vi jobbar` och `Vår leverans`.
- [ ] Få verifierat nytt pris till startsidans aktuella erbjudande.
- [ ] Skapa om möjligt bildmappning för önskade kompletta bildbyten: sida/sektion -> fil i `assets`.
- [ ] Tolka `Lagom hantera dokument (Andreas)`.
- [x] Definiera global WOT-/läsbarhetsregel: struktur först, betoning sedan. Sidspecifik tillämpning görs i senare sidfaser.
- [ ] Inventera referenser med komplett text, bilder och färdigställandeår.
- [ ] Inventera befintliga tjänste- och miljökomponenter innan lokala CSS-fixar.

**Exit-kriterium:** blockerande beslut, materialstatus och eventuell bildmappning är dokumenterade.

---

## Fas 1 – Globala komponenter och designregler
- [ ] Gör footern till en sammanhållen global footer.
- [ ] Fixa responsiva dropdown-menyer så alla underrubriker nås även vid låg viewport-höjd.
- [ ] Säkerställ korrekt scroll/overflow när meny är öppen.
- [ ] Implementera beslutad header-kontaktlösning.
- [ ] Standardisera hero-pillers kontrast/opacitet.
- [ ] Ändra synlig rubrik `FAQ` till `Vanliga frågor` globalt.
- [ ] Ta bort prefixet `Tjänst:` globalt från tjänstesidor.
- [ ] Definiera gemensam spacing för rubrik -> ingress/brödtext.
- [ ] Definiera gridvarianter för 3+3, 3+2 och andra återkommande kortlayouter.
- [ ] Definiera klickbara helkort/helfält med korrekt hover, focus och semantik.
- [ ] Definiera gemensam sektionstandard för `Hur vi jobbar`/sifferpiller.
- [ ] Säkerställ att `Vanliga frågor` klarar flerradiga rubriker.
- [x] Fas 1D avslutad 2026-08-24: global `NoticeBox` är implementerad med neutral `info` utan blixt och selektiv `attention` med AVAB:s rödorange blixt. Vid Fas 1D-avslutet använde endast Rastsignal och Kameraövervakning `attention`; Hörslingas uttryckliga läckagebegränsning tillkom efter individuell bedömning i Fas 2A. De nio tidigare generella blixtboxarna är fortsatt neutrala `info`-boxar och deras texter är SEO-/läsbarhetsgranskade som A. BEHÅLL. WOT-/readability-standarden är dokumenterad. Teknisk QA samt manuell browser-QA på desktop och mobil är godkända 2026-08-24.
- [x] Fas 1D: dokumentera global WOT-/läsbarhetsstandard utan bred sidspecifik textredigering.

---

## Fas 2 – Tjänstesidestandard och tjänstesidor

### Fas 2A – standard och två piloter – avslutad 2026-08-25
- [x] Inventera samtliga faktiska tjänstesidor och dokumentera gemensamma mönster, lokal CSS och avvikelser.
- [x] Dokumentera tjänstesidans kanoniska struktur i `docs/standards/pages/service.md`.
- [x] Fastställ obligatoriska och valfria principer för hero, piller, sektioner, kortgrid, referenser, miljöer, arbetssätt och Vanliga frågor.
- [x] Använd Hörslinga som huvudpilot och Mikrofoner som generaliseringstest. Ljudsystem är inte pilot eller facit.
- [x] Konsolidera huvudpilotens och generaliseringstestets gemensamma kortstil och använd globala grid-, process-, FAQ-, NoticeBox- och CTA-primitiver utan att ta bort motiverade specialsektioner.
- [x] Godkänn teknisk QA för Hörslinga och Mikrofoner: build med 76 sidor, guardrails, byggd HTML, assets, UTF-8/CRLF och diffkontroll godkända 2026-08-25.
- [x] Godkänn manuell visuell QA på desktop och mobil för Hörslinga, Mikrofoner och Ljudsystem; godkänd 2026-08-25.
- [x] Säkerställ att FAQ är sista innehållssektion före slut-CTA på de tre granskade sidorna och att `Korta svar inför projektering` ligger före FAQ på Hörslinga.

**Exit-kriterium Fas 2A – uppfyllt 2026-08-25:** Standard, inventering, huvudpilot Hörslinga och generaliseringstest Mikrofoner är tekniskt och visuellt verifierade. Ljudsystems generella tekniska städning behålls som regression/teknisk kontroll men sidan är inte pilot. Ingen annan tjänst är markerad som migrerad genom att standarden finns.

### Fas 2B+ – bred migrering i separata delsteg

Nedanstående tjänster behåller sina egna öppna uppgifter och ska migreras senare. Fas 2A ändrar inte deras status.

### Ljus
- [ ] Bygg tjänstesidan Ljus.

### Bild/skärm
- [ ] Bygg Bild/skärm.
- [ ] Säkerställ korrekt relation till Skärmar/projektorer.
- [ ] Koppla Visuell kommunikation via korrekt internlänkning.

### Kamera
- [ ] Justera transparenta piller i hero.
- [ ] Ta bort/byta blixtgrafik. Komplett byte till annan asset får AI göra; retusch av befintlig grafik görs av Andreas.
- [ ] Hantera `Lagom hantera dokument` efter förtydligande.
- [ ] Ändra expanderande kort enligt ny standard.
- [ ] Sluta länka boxar i `Kameraövervakning anpassad för er miljö` om de inte representerar verkliga destinationer.
- [ ] Flytta/korrigera Vanliga frågor.

### Talat utrymningslarm
- [ ] Kontrollera långsam bild tekniskt: filstorlek, dimensioner, loading och LCP.
- [ ] Om kunden vill ha en helt annan hero får AI byta till angiven/lämplig asset.
- [ ] Eventuell crop/retusch av befintlig hero görs av Andreas.
- [ ] Bygg om sidan enligt tjänstestandard.
- [ ] Bygg om första stycket.

### Mikrofoner
- [ ] Byt hero till egen bild från `assets`; följ bildmappning om sådan finns.
- [ ] Lägg till Claessons där beslutat.
- [ ] Besluta/implementera eventuell WOT-fetmarkering.
- [ ] Uppdatera Mikrofonguiden: Ficksändare och headset.
- [ ] Använd 3+3-layout där specificerat.
- [ ] Kontrollera Radiolänken.
- [ ] Linjera vit ruta enligt gemensam grid/spacing.
- [ ] Löptext på samma höjd efter rubrik i miljösektionen.
- [ ] Öka luft mellan rubrik och text.
- [ ] Byt Fortnox mot Ekhagsskolan; AI får byta referenskort/bild till rätt asset.

### Ljudsystem
- [ ] Byt hero till rätt asset.
- [ ] Rätta länk för `Helheten`/kablar.
- [ ] `Miljöanpassning`: 3+3-layout.
- [ ] Byt Claessons-bild till angiven/rätt asset.
- [ ] Rätta internlänkning i `Hur vi jobbar`.

### Hörslinga
- [ ] `Svar direkt`: lägg förklarande text under bild.
- [ ] Bygg om text under Minnebergsskolan.
- [ ] Gör budgetkalkylator-CTA till helknapp och rätta länken.
- [ ] `Vanliga miljöer`: lägg till en miljö och kvalitetssäkra text.
- [ ] Rätta NTI, inte STI.
- [ ] `Tekniken bakom`: byt till rätt asset.
- [ ] `Portabel hörslinga`: liten bokstav i `hyrljud.nu`.
- [ ] `Auracast`: lägg till rätt bild från `assets`.
- [ ] Kontrollera ytterligare fellänkning till budgetkalkylatorn.
- [ ] Flytta/korrigera Vanliga frågor.

### Taluppfattbarhet
- [ ] Lägg till/korrigera referenser.
- [ ] Lägg till/korrigera miljöer.

### Styrsystem
- [ ] Ta bort/byta blixtgrafik enligt samma bildregel.
- [ ] Plattformar: 3+2-layout.
- [ ] `Smart styrning i praktiken`: gör hotell/restaurang-ruta klickbar där relevant.
- [ ] `Service och support`: rätta länk.

### Bakgrundsmusik
- [ ] Byt hero till rätt asset.
- [ ] Addera relevanta referenser.

---

## Fas 3 – Miljösidestandard och miljösidor

### Standard först
- [ ] Dokumentera miljösidans kanoniska struktur.
- [ ] Standardisera hero, lösningar, teknikområden, arbetssätt/leverans, referenser, budgetkalkylator och Vanliga frågor.

### Sporthall & arena
- [ ] Lägg in budgetkalkylator.
- [ ] Gör hela gröna CTA-fältet klickbart.
- [ ] Korrigera hero-rubrik.

### Simhall
- [ ] Byt herobild till rätt asset.
- [ ] Rätta `Spa, relax, ljus`-länk.
- [ ] Rätta `Infoskärmar` som går till Kontakt.
- [ ] Rätta Årjäng-referens som går till Kontakt.
- [ ] Rätta `Sälen` med stort S och felaktig text.

### Ishall
- [ ] Lägg in budgetkalkylator.
- [ ] Linjera `Det här får du` vertikalt.
- [ ] Öka avstånd mellan sifferpiller och rubriker i `Hur vi jobbar`.

### Kontor & Konferens
- [ ] Korrigera `Lösning – Därför projekterar vi systemet som en helhet`.
- [ ] Rätta fellänkning i skärmar.
- [ ] BYOM -> BYOD.
- [ ] Rätta bildlänken till Skärmar/projektorer; byt bild endast om kundpunkten faktiskt kräver det.

### Hotell
- [ ] Byt hero till högupplöst asset.
- [ ] Addera referenser.

### Restaurang / bar / klubb
- [ ] Lås kanoniskt namn i meny, H1 och internlänkar.
- [ ] Byt herobild till rätt asset.
- [ ] Addera Capri, Terrassen, Teburu och Pinchos när material är klart.
- [ ] Byt Claessons-bild mot Tempel med rätt asset.
- [ ] Linjera löptextens start.
- [ ] Säkerställ att Vanliga frågor klarar rubrik på tre rader.

### Butik & Retail
- [ ] Byt herobild och lägg in GB med rätt assets.
- [ ] Korrigera transparent piller.
- [ ] Byt övriga angivna bilder till rätt assets.

### Köpcentrum & Galleria
- [ ] Bygg om sidan efter miljöstandarden.
- [ ] Byt herobild till rätt asset.
- [ ] Skriv om första stycket.
- [ ] Gör stycke 2 med gemensam boxstandard.
- [ ] Rätta felplacerat grönt streck.
- [ ] Byt bilder i Lösningar till rätt assets.
- [ ] Ersätt avvikande lösningsboxar med gemensam standard.
- [ ] Besluta om `Arbetssätt` ska vara kvar eller flyttas till `Vår leverans`.
- [ ] Bygg om referenssektionen och byt referensbilder enligt bildmappning/assetval.

### Skola
- [ ] Rätta fel länk/bild i Lösning och informationsskärmar. Kompletta bildbyten får AI göra.
- [ ] Lägg till referenser.

### Vård & Sjukhus
- [ ] Byt herobild till rätt asset.
- [ ] Flytta/byta bilder som ligger på fel ställen med rätt assets.
- [ ] Utöka antal block/rutor i `Hur vi jobbar`.
- [ ] Bedöm relation till `Vår leverans`.

### Industri
- [ ] Bedöm eventuellt hero-byte; AI får utföra komplett byte till rätt asset.
- [ ] Rätta/byta bilder i teknikområden.
- [ ] Lägg till Bilparken, Hanza och Lesjöfors fjädrar som referenser.
- [ ] Byt ut `Hur vi jobbar` enligt beslutad standard.

### Parkering & garage
- [ ] Byt herobild till rätt asset.
- [ ] Byt bilder och rätta länkar i teknikområden.

---

## Fas 4 – Startsida
- [ ] Justera hero-piller enligt global standard.
- [ ] Hero-bilden ska flyttas/cropas så högtalaren syns bättre – **denna bildjustering gör Andreas manuellt**.
- [ ] Uppdatera aktuellt erbjudande med verifierat pris.

---

## Fas 5 – Referenser
### Globalt
- [ ] Lägg till färdigställandeår i referensmodellen och visa endast verifierade årtal.
- [ ] Fortsätt referensmigrering enligt `docs/standards/pages/reference.md` och TODO-beslut.

### Nya/ombyggda referenser
- [ ] Mullhyttan.
- [ ] Fortnox arena.
- [ ] STC Kil.
- [ ] STC Hammarö.
- [ ] Lesjöfors: själva retuschen/”dammsugningen” av golvet gör Andreas manuellt; AI får därefter använda den färdiga korrigerade asseten.
- [ ] Justera avstånd mellan `Hur vi jobbar`-piller och rubrik enligt standard.
- [ ] Bygg om Lundsberg; AI får göra kompletta bildbyten till rätt assets, Andreas gör eventuell crop/retusch.

**Beroende:** Tidigare paus för bred referensmigrering gäller tills materialet är komplett och verifierat.

---

## Fas 6 – Full QA och regressionstest
- [ ] Kör full internlänkskontroll på hela sajten.
- [ ] Kontrollera felaktiga Kontakt-fallbacks.
- [ ] Kontrollera navigation desktop/tablet/mobil inklusive låg viewport-höjd.
- [ ] Kontrollera footer på samtliga sidtyper.
- [ ] Kontrollera Vanliga frågor och schema.
- [ ] Kontrollera tjänste- och miljögrid vid 1440, 1024, 768, 390 och 375 px.
- [ ] Kontrollera att bildbyten pekar på avsedda assets.
- [ ] Kontrollera bilddimensioner, filstorlek, lazy loading och LCP.
- [ ] Flagga crop/retusch/focal-point-problem till Andreas i stället för att AI bearbetar bildinnehållet.
- [ ] Kontrollera alt-texter, kanoniska routes och referensår.
- [ ] Kör build och CI.
- [ ] Gör visuell kundgranskning före merge/publicering.

## Arbetsprincip
En fas ska normalt slutföras och verifieras innan nästa breda fas börjar. För bilder gäller: **AI sköter kompletta asset-byten; Andreas sköter bildbearbetning.**
