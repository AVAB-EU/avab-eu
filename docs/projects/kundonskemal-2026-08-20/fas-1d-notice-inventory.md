# Fas 1D – inventering av notice- och snippet-boxar

Status: Korrigerad efter förtydligat kundbeslut
Datum: 2026-08-24

## Beslut

AVAB-blixten är en selektiv uppmärksamhets-/varningssignal. Den ska inte användas som standardikon för informationsboxar, vanliga frågor eller definitioner. `NoticeBox` skiljer därför mellan neutral `info` utan ikon och uttryckligt motiverad `attention` med `/assets/avab-blixt-rodorange.png`.

## Tidigare migrerade boxar

Följande nio boxar behåller text och global komponent men använder neutral `info` utan blixt:

- `/tjanster/ljudsystem/`: `Vad är ett professionellt ljudsystem?`.
- `/tjanster/mikrofoner/`: `Vad är en mikrofonlösning?`.
- `/tjanster/styrsystem-integration/`: `Vad är styrsystem och integration?`.
- `/tjanster/talat-utrymningslarm/`: `Vad är ett talat utrymningslarm?`, `Räcker rastsignalen?`, `Komponentcertifikat är inte samma sak som en färdig anläggning.`, `När behöver vi inrymningslarm?` och `Kan den vanliga ljudanläggningen användas?`.
- `/kunskap/kablar-kontakter/`: `Hur väljer man rätt kabel?`.

## Selektiv attention-användning

- `/rastsignal/`: `Tydlig avgränsning` är uttryckligen godkänd för `attention`. Texten klargör att rastsignal är ett informationssystem och inte ersätter brandlarm, talat utrymningslarm eller inrymningslarm.
- `/tjanster/kameraovervakning/`: fem befintliga `snabbt-svar`-boxar inventerades. Fyra är vanliga definitioner eller kostnadsfrågor och ska vara utan ikon. `Är kameraövervakning tillåten?` anger juridiska villkor för användningen och bedöms därför ha samma avgränsande attention-funktion som Rastsignal. Texten behålls oförändrad eftersom den rör juridik och inga nya fakta ska införas i denna fas.

Den tidigare globala CSS-regeln som lade `⚡` före alla rubriker med `.snabbt-svar-title` tas bort. Därmed får neutral information inte en ikon genom en indirekt selector.

## Boxar som inte migreras automatiskt

- `/tjanster/horslinga/`: fem sammanfattnings-, jämförelse- och förklaringsboxar utan blixt. `Viktigt att säga ärligt` kan bedömas separat i senare sidspecifikt arbete.
- `/miljo/kopcentrum-galleria/`: en större `Kort svar`-sektion med egen rubrikstruktur och animation.
- Äldre, icke-kanoniska Astro-filer, preview-HTML och `.txt`-underlag ingår inte i publik migrering.

`.accent-rail` förekommer brett i aktiva filer och förblir en generell accentprimitiv.

## SEO- och läsbarhetsbedömning

| Route | Rubrik | Bedömning | Motivering |
| --- | --- | --- | --- |
| `/tjanster/ljudsystem/` | Vad är ett professionellt ljudsystem? | A. BEHÅLL | Tydlig sökintentsnära fråga; första meningen definierar systemet direkt och använder relevant terminologi naturligt. |
| `/tjanster/mikrofoner/` | Vad är en mikrofonlösning? | A. BEHÅLL | Besvarar frågan direkt och gör relevanta mikrofontyper skannbara utan onödig upprepning. |
| `/tjanster/styrsystem-integration/` | Vad är styrsystem och integration? | A. BEHÅLL | Tydlig definition med naturliga tjänstebegrepp och konkreta exempel på funktioner och status. |
| `/tjanster/talat-utrymningslarm/` | Vad är ett talat utrymningslarm? | A. BEHÅLL | Ger snabbt svar, förklarar UTM/TUL och skillnaden mot siren utan att bli svår att skanna. |
| `/tjanster/talat-utrymningslarm/` | Räcker rastsignalen? | A. BEHÅLL | Besvarar frågan omedelbart och avgränsar systemen med försiktig hänvisning till brandskyddsbeskrivning och riskanalys. |
| `/tjanster/talat-utrymningslarm/` | Komponentcertifikat är inte samma sak som en färdig anläggning. | A. BEHÅLL | Rubriken och texten klargör en viktig teknisk skillnad; formuleringen lämnas orörd eftersom den berör standarder och certifiering. |
| `/tjanster/talat-utrymningslarm/` | När behöver vi inrymningslarm? | A. BEHÅLL | Första meningen ger beslutskriteriet och resten beskriver användningen kort utan nya garantier. |
| `/tjanster/talat-utrymningslarm/` | Kan den vanliga ljudanläggningen användas? | A. BEHÅLL | Direkt och försiktigt svar med tydlig säkerhetsavgränsning; ingen omskrivning behövs. |
| `/kunskap/kablar-kontakter/` | Hur väljer man rätt kabel? | A. BEHÅLL | Sökintentsnära fråga och kompakt svar med relevanta urvalskriterier och kabeltyper. |

Ingen av de nio texterna behöver ändras för att bli tydligare. Internlänkning kan bedömas tillsammans med respektive sidas senare helhetsarbete, men motiverar inte en isolerad omskrivning i Fas 1D.

## Assetstatus

`public/assets/avab-blixt-rodorange.png` används endast av `NoticeBox`-variantens uttryckliga `attention`-semantik. Bilden har tom alt-text och är dold för hjälpmedel eftersom boxens rubrik och text bär betydelsen. `public/assets/avab-blixt-gron.png` används inte i standarden.
