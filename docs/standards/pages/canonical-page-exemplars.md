# AVAB-standard – kanoniska sidfacit

**Status:** Active  
**Owner:** AVAB-projektet  
**Scope:** Visuell och strukturell riktning för standardiserade undersidor  
**Last reviewed:** 2026-09-21

## Syfte

AVAB har tre kanoniska sidor som fungerar som **facit för hur respektive sidtyp ska byggas och upplevas**.

| Sidtyp | Kanoniskt facit | URL |
|---|---|---|
| Referens | Säffle simhall | https://avab.eu/referenser/saffle-simhall/ |
| Miljö | Simhall | https://avab.eu/miljo/simhall/ |
| Tjänst | Hörslinga | https://avab.eu/tjanster/horslinga/ |

Dessa tre sidor är primära visuella och strukturella referenser när nya komponenter, layouts och undersidor tas fram för respektive sidtyp.

## Vad "facit" betyder

Facit gäller framför allt:

- informationshierarki och ordningen mellan sidans huvuddelar,
- hero-princip och relationen mellan rubrik, ingress, bild och CTA,
- sektionernas rytm och växling,
- containerbredd, linjering och spacing,
- hur text och verkliga projekt-/miljöbilder kombineras,
- hur faktaytor, kort, tekniska fördjupningar, FAQ och CTA presenteras när de är relevanta,
- mobilbeteende och hur desktop-layouten bryts ned,
- den övergripande visuella känslan för sidtypen.

En ny sida av samma typ ska därför kännas som **samma system**, även när innehållet kräver färre eller fler sektioner.

## Facit är inte kopiera-klistra-in

De kanoniska sidorna ska **inte** kopieras som fullsidig Astro-markup eller lokal CSS.

Rätt arbetssätt är:

1. identifiera mönstret i facit-sidan,
2. kontrollera om mönstret redan finns som delad komponent/layout,
3. återanvänd befintlig komponent när den räcker,
4. om mönstret saknas: bygg eller förbättra en generell återanvändbar komponent för sidtypen,
5. använd komponenten på den nya sidan och regressionstesta mot facit-sidan.

Sidspecifika selectors, special-CSS döpt efter ett projekt eller kopierade hela sidblock är inte acceptabla sätt att "följa facit".

## Innehåll styr mängden

Facit definierar **presentationen**, inte en skyldighet att fylla varje sektion.

- Källunderlaget styr vilka fakta och sektioner som kan finnas.
- Tomma eller obestyrkta sektioner ska inte skapas bara för att facit-sidan har dem.
- En tunnare sida ska fortfarande använda samma visuella språk och komponentprinciper.
- Projektfakta får aldrig fabriceras för att efterlikna facit.

För referenser gäller dessutom publiceringskraven i `docs/standards/pages/reference.md`.

## Avvikelse från facit

En avvikelse är tillåten när innehållet eller funktionen faktiskt kräver det, men ska då vara medveten.

Om en ny sida inte går att bygga inom facit-riktningen med befintliga komponenter:

- klassificera det som ett arkitektur-/komponentbehov,
- förklara varför facit-komponenten eller befintliga primitives inte räcker,
- föreslå en generell lösning,
- regressionstesta mot facit-sidan och minst en annan relevant sida.

En AI får inte välja en äldre sida som alternativ mall bara för att den är enklare att kopiera.

## Prioritet och konflikter

Dessa facit-sidor är den visuella och strukturella sanningskällan för respektive sidtyp.

De överstyr äldre pilot-/legacy-sidor som designreferens.

De överstyr däremot inte:

- verifierade projektfakta eller kundsource,
- globala tillgänglighets- och mobilkrav,
- säkerhets-/publiceringsregler,
- faktisk schema- och komponentkod när dokumentation beskriver något som ännu inte är implementerat.

Om facit-sidan och den gemensamma implementationen skiljer sig ska skillnaden behandlas som ett konkret arkitektur-/regressionsärende, inte lösas genom lokal kopiering.

## Sidtyper utan facit

För `knowledge`, `listing` och `special` finns inget nytt kanoniskt facit definierat i detta beslut.

AI får inte själv utse en sådan sida till facit. Ett nytt facit kräver uttryckligt beslut och uppdatering av detta dokument.
