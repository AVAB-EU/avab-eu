# AVAB-standard – Referenser

**Status:** Active  
**Owner:** AVAB-projektet  
**Scope:** Alla publika sidor under `/referenser/`  
**Last reviewed:** 2026-08-18  
**Replaces:** `src/docs/AVAB-standard-referensprojekt.md` samt relevanta delar av `src/docs/avab-design-referenssida-inkopare.md`

## Terminologi

Den publika termen är alltid **Referenser**. URL-strukturen är alltid `/referenser/`. Använd inte `/referensprojekt/` i nya filer, länkar, metadata eller dokumentation.

## Syfte

En referens ska fungera som ett **digitalt referensblad med möjlighet till fördjupning**. Besökaren ska snabbt kunna bedöma om AVAB har gjort något jämförbart, vad AVAB ansvarade för, omfattningen, resultatet och hur leveransen kan verifieras.

## Arkitekturprincip

En referens ska inte byggas som en komplett fristående sida där layout, metadata, schema och återkommande sektioner kopieras in för hand.

Innehåll/data ska beskriva projektet. Delade komponenter/templates ska ansvara för återkommande presentation, exempelvis:

- header och breadcrumbs
- H1/hero
- fakta
- galleri
- relaterade tjänster/referenser
- CTA/kontakt
- SEO och strukturerad data
- responsivitet

Normal skapande av en referens får inte kräva ändring i global CSS eller delade komponenter.

Den exakta content-modellen definieras i `docs/architecture/content-model.md` och implementeras först efter verifiering mot aktuell Astro-arkitektur.

## Tre läsnivåer

### Nivå 1 – skanna på cirka 10 sekunder
Besökaren ska direkt se:

- miljö/kategori
- kund eller offentlig kundtyp
- plats och år
- AVAB:s roll/ansvar
- omfattning
- viktigaste resultatet

### Nivå 2 – utvärdera på 1–2 minuter
Besökaren ska förstå:

- kundens behov
- AVAB:s leveransomfattning
- teknisk/praktisk komplexitet
- genomförande
- verifierade resultat
- relevans för det egna projektet

### Nivå 3 – verifiera och gå vidare
Besökaren ska kunna:

- läsa tekniska detaljer där de tillför värde
- se verkliga projektbilder
- läsa godkänt kundcitat om det finns
- hitta relaterade referenser och tjänster
- kontakta AVAB eller skicka underlag
- använda eventuellt referensblad/PDF när sådan funktion är etablerad

## Visuell riktning

Referensen ska kännas som ett professionellt kundcase och tekniskt projektblad, inte som en tung säljsida.

Använd:

- tydlig typografisk hierarki
- verklig huvudbild av hög kvalitet
- luft och konsekvent grid
- grönt som accent
- diskreta faktaytor
- få tydliga CTA:er
- växlande sektionsbakgrunder när de hjälper läsbarheten
- konsekventa överkanter och linjering av rubriker, text, bilder och kort på desktop

Undvik:

- många tunga mörka helbreddssektioner
- flera likvärdiga CTA:er
- upprepade säljbudskap
- långa stycken utan prioritering
- onödig teknik som kortifieras bara för att fylla layouten
- tomma kort eller påtvingad höjd som skapar stora tomrum
- en ensam normal bildkort på en desktop-rad med ett stort tomt gridutrymme bredvid

## Sidstruktur

### 1. Breadcrumbs

Exempel: `Start / Referenser / Minnebergsskolan Arvika`.

Breadcrumbs ska på sikt renderas av delad komponent/template, inte skrivas om manuellt i varje referens.

### 2. Hero

Hero ska normalt visa:

- etikett/kategori
- projektnamn som H1
- nyttobaserad underrubrik eller kort sammanfattning
- sammanfattning på högst cirka 40 ord
- verklig projektbild
- högst en eller två tydliga CTA:er

Tre eller fler starka CTA:er i hero ska undvikas.

### 3. Referensen i ett nötskal

Visa endast relevanta och godkända fakta, exempelvis:

- kund/beställare
- plats
- färdigställt/år
- miljö
- AVAB:s roll
- omfattning
- entreprenadform
- status
- service/support

Tomma fält ska döljas automatiskt.

### 4. Uppdraget på 30 sekunder

Den viktigaste sektionen efter hero ska normalt sammanfatta:

- **Kundens behov**
- **AVAB:s ansvar**
- **Resultatet**

Varje del ska vara kort, konkret och skannbar. På mobil visas innehållskorten normalt **en per rad**.

### 5. Leveransomfattning

Gör det tydligt vad AVAB faktiskt ansvarade för, t.ex. projektering, systemdesign, leverans, installation, programmering, driftsättning, dokumentation och utbildning.

Vid behov skiljs mellan:

- ingick i AVAB:s uppdrag
- ingick inte i AVAB:s uppdrag
- samordnades med annan entreprenör

### 6. Fördjupning

Fördjupande sektioner används när de tillför verkligt värde:

- utmaning/förutsättningar
- lösning och tekniska val
- genomförande
- tekniska detaljer
- verifiering/mätning/dokumentation

Mindre projekt ska inte fyllas ut till långa artiklar.

För referenser med flera tydliga delar ska fördjupningen byggas som **berättande kapitel**. Varje länk i ankarnavigeringen ska leda till ett faktiskt innehållsavsnitt med:

- en fråge- eller nyttobaserad H2,
- ett kort direkt svar,
- minst ett förklarande brödtextstycke,
- relevanta projektbilder när sådana finns,
- tydlig koppling till AVAB:s verifierade ansvar, arbetssätt eller leverans.

Ankarlänkar får inte endast leda till en ensam kortgrid, faktaruta eller rubrik utan förklarande text. Texten ska ge inköpare och projektörer underlag för att förstå behov, tekniska val, samordning, installation och resultat utan att fabricera projektfakta.

### 7. Resultat och verifiering

Resultatet ska beskrivas konkret. Använd inte obestyrkta påståenden som exakta besparingar eller att kunden är mycket nöjd utan underlag.

När relevant kan verifiering inkludera:

- driftsättning
- mätresultat
- dokumentation
- överlämning
- godkänt kundcitat
- fortsatt service/support

### 8. Bildgalleri och bildkomposition

Bilder ska vara verkliga projektbilder när sådana finns och kan visa helhetsmiljö, installation, detaljer och färdigt resultat. Alla informativa bilder ska ha relevant alt-text.

När ett projekt har ett rikt bildmaterial ska bilderna normalt **fördelas över sidans berättande kapitel** i stället för att samlas i ett enda stort galleri. Målet är att varje bild ska förklara den text som ligger närmast och skapa rytm genom hela referensen. Ett separat galleri används främst för kompletterande motiv som inte naturligt hör hemma i ett kapitel.

Använd så många relevanta och publicerbara projektbilder som stärker inköparens förståelse, men undvik nära dubbletter om de inte visar olika placeringar, installationssteg eller funktioner. Varje bild ska ha en egen meningsfull alt-text och förklarande bildtext.

Bildlayout väljs efter **berättelsens samband**, inte enbart efter hur många bilder som råkar finnas:

- En bild som berättar en egen del av projektet ska normalt visas som en **liggande bild+text-komposition**, med bilden och förklaringen bredvid varandra på desktop.
- Bilder som tydligt hör ihop och beskriver samma miljö, fas eller tekniska moment får visas som ett gemensamt kortgrid.
- Tre sammanhörande bilder visas normalt som **tre jämna kort på samma rad** på bred desktop.
- Två eller fyra sammanhörande bilder ska balanseras i tvåkolumnsrader.
- Fem bilder kan balanseras som `3 + 2`; sju som `3 + 2 + 2`; åtta som `3 + 3 + 2`.
- En vanlig bildkort får **inte** lämnas ensam på en desktop-rad med en tom kolumn eller ett stort tomt fält bredvid.
- Bilder ska inte grupperas tillsammans enbart för att fylla ett grid. Om motiven inte hör ihop ska de delas upp i separata berättelseblock.
- På mobil staplas bildkompositionerna naturligt till en kolumn.

Den delade bildkomponenten ska i första hand upprätthålla dessa balansregler automatiskt. AI ska fortfarande avgöra om bilderna semantiskt hör ihop innan de placeras i samma bildgrupp.

### 9. FAQ

FAQ-sektionen ska använda samma huvudcontainer som sidans övriga innehåll:

- eyebrow, rubrik och ingress ska linjera med containerns vänsterkant,
- frågelistan ska fylla hela containerbredden utan extra centrerad maxbredd eller inre sidindrag,
- på bred desktop visas frågorna normalt i två balanserade kolumner,
- på mobil visas frågorna i en kolumn,
- avdelare och öppningsikoner ska följa respektive frågerads hela tillgängliga bredd.

Regeln gäller alla migrerade referenser och ska lösas i den gemensamma FAQ-komponenten eller globala referensstilen, inte med sidspecifik CSS.

### 10. Kundcitat

Kundcitat visas endast när citatet är äkta och publicering är godkänd. Namn, företag och roll får bara visas enligt godkännande.

### 11. Relaterade tjänster och referenser

Varje referens ska normalt länka till relevanta tjänster och kan länka till närliggande referenser. Relationerna ska på sikt komma från strukturerad data, inte manuellt kopierade kort.

### 12. CTA/kontakt

Sidan avslutas med gemensam CTA/kontaktsektion. Den ska inte kopieras som unik markup i varje referens.

## Redaktionella krav

Texten ska vara:

- professionell
- konkret
- saklig
- lätt att förstå
- tekniskt korrekt
- fokuserad på kundens behov, AVAB:s ansvar och resultat

Undvik sökordsstapling, generiska säljklyschor, interna förkortningar utan förklaring och påståenden utan underlag.

### Innehållsdjup, SEO och en levande sida

AI ska utveckla referensen med så mycket **relevant och verifierad text** som projektunderlaget medger. Målet är att både besökare och sökmotorer tydligt ska förstå:

- vilken typ av projekt och miljö det gäller,
- vilket behov eller problem som skulle lösas,
- vad AVAB ansvarade för,
- vilka system, tjänster och tekniska val som ingick,
- hur projektering, samordning, installation eller driftsättning genomfördes när det finns underlag,
- hur lösningen används och vilket verifierbart resultat som uppnåddes,
- vilken konkret kompetens projektet visar för liknande behov.

Texten ska skrivas för den externa besökaren, särskilt inköpare, projektörer och beställare. Publicerad text får inte tala om hur sidan är byggd, varför en sektion finns, hur SEO ska fungera eller att läsaren kan “öppna en sammanfattning vid behov”. Undvik AI-fluff, metatext, tomma övergångar och generella påståenden som inte tillför projektinformation.

Sidan ska kännas levande genom att berättande text, verkliga projektbilder, bildtexter, tekniska detaljer och verifierade resultat fördelas genom de gemensamma ankarkapitlen. Den visuella variationen får inte bryta den beslutade referensstrukturen eller skapa sidspecifik fullsidemarkup.

AI får förklara samband och utveckla språk kring kända fakta, men får aldrig skapa nya fakta enbart för att göra sidan längre. Om underlaget är tunt ska texten vara kortare och konkret i stället för utfylld med antaganden.

## Publiceringskrav

En referens ska som minimum ha:

- unik slug under `/referenser/`
- title/H1
- kort summary
- miljö/kategori
- plats eller offentlig platsangivelse
- AVAB:s ansvar/leveransomfattning
- kundens behov eller motsvarande problemformulering
- verifierbart resultat
- huvudbild med alt-text när bild används
- SEO-title och description
- minst en relevant intern relation där det finns en sådan
- klarhet kring vad som får publiceras om kund/beställare

Valfria uppgifter ska inte renderas som tomma rubriker eller tomma kort.

## SEO och metadata

- Canonical och absoluta webbplats-URL:er ska använda **`https://avab.eu/`**, aldrig `www` som canonical källa.
- SEO-title och description ska vara unika och sakliga.
- Viktiga sökbegrepp ska uppstå naturligt genom konkreta beskrivningar av miljö, leverans, teknik, tjänster och ort; samma fras får inte staplas för ranking.
- Rubriker och brödtext ska tillsammans ge semantisk täckning av projektets verifierade behov, AVAB:s arbete och resultat, inte endast en kort sammanfattning följd av bilder.
- Strukturerad data ska centraliseras i template/layout när referensmodellen implementeras.
- Metadata ska inte kräva handkopierade URL-varianter i varje ny referens.

## Bilder

- Följ projektets gällande bildstruktur; skapa inte ny parallell bildmapp utan beslut.
- Filnamn ska vara generiska och beskrivande enligt projektets bildbeslut.
- Ortsnamn behöver inte pressas in i filnamn; relevant ort kan finnas i alt-text när den hjälper beskrivningen.
- Undvik filnamn som `IMG_1234`, `final`, `ny`, `version2`.

## Mobil

Följ `docs/standards/global/mobile.md`.

För referenskort och fakta-/innehållskort gäller som default:

- en kolumn på mobil
- bilder får gå kant i kant inom sitt kort/definierade bildområde när komponenten är byggd för det
- text, rubriker och bilder ska ha konsekvent alignment
- lika höjd får användas när den förbättrar gridens läsbarhet, men ska inte skapa stora tomma bottenytor; innehållsdriven höjd prioriteras när möjligt

## AI-regel

Vid normal ny referens ska AI:

1. läsa denna standard
2. läsa `docs/workflows/ai-page-authoring.md`
3. följa `docs/architecture/ai-write-scope.md`
4. samla endast saknade uppgifter
5. ändra innehåll/data i första hand
6. stoppa och klassificera arbetet som arkitekturändring om shared components/CSS måste ändras för att sidan ska fungera

## Definition of Done

En referens är standardmässigt klar när:

- rätt route och terminologi används
- innehållet följer informationshierarkin ovan
- inga obligatoriska fakta saknas
- metadata använder `https://avab.eu/`
- bilder och alt-texter är korrekta
- bildkompositioner lämnar inte ensamma bildkort med tomma desktop-kolumner
- layouten använder delade primitives enligt aktuell implementation
- mobilstandarden är uppfylld
- build/validering passerar
- visuell verifiering är genomförd när design/presentation ändrats
