# Source coverage – Kameraövervakning Skola

**Route:** `/kameraovervakning/skola/`  
**Sidtyp:** Camera industry page  
**Pilot/facit:** `/kameraovervakning/butik/`  
**Status:** Draft/noindex. Innehållsgranskning pågår; publicering ej godkänd.  
**Uppdaterad:** 2026-10-10

## Source audit input

Källor som har granskats:

- Kundens `Kameraövervakning skola.docx` (21 sidor, uppladdad i arbetschatten och genomgången 2026-10-10).
- `src/pages/tjanster/kameraovervakning/index.astro`.
- `src/content/service-pages/exakt-sokning-ai-analys.md`.
- `src/pages/miljo/skola/index.astro` och historiska `index.txt` / `Avab-hub-skola.txt`.
- IMY:s vägledning om kamerabevakning i skola och av anställda, samt tidigare IMY-kontroller i projektet.
- `src/content/camera-industry-pages/skola.md` och gemensamma `src/layouts/CameraIndustryPage.astro`.
- Befintligt bildasset `/assets/skola-flyg-vy-hero.webp`.

**LOCAL SOURCE CHECK: GENOMFÖRD VIA UPPLADDAT DOCX.** Kundens dokument har lästs och jämförts med den aktuella webbtexten. Originalfilen finns inte versionerad i GitHub-katalogen `docs/source-material/`; jämförelsen är dokumenterad här, men den uppladdade filen kan inte antas finnas för andra utvecklare i repot.

## Genomfört och källtäckning

| Ämne | Kundens underlag | Implementering och status |
| --- | --- | --- |
| Hero och behov | Projektering utifrån skolans faktiska riskbild | PR #124, mergead. H1, underrubrik och ingress förbättrade. |
| Konkreta incidenter | Skadegörelse, intrång, hot och andra dokumenterade problem | PR #125, mergead. Texten förklarar att behovet ska klarläggas före installation. |
| Kameraplan och bildkvalitet | Synfält, optik, ljus, monteringshöjd, detaljnivå | PR #125, mergead. Tekniskt användbar men inte alltför detaljerad fördjupning. |
| Sökning och analys | Exakt sökning och incidentuppföljning | PR #125, mergead. Sökmöjligheter villkoras av faktisk videoplattform, kameror och licenser. Automatisk identifiering lovas inte. |
| Samordnad säkerhet | Kamera, tillträde, larm och beredskap | PR #125, mergead. Integrationsstöd anges inte utan verifiering. |
| Juridiskt ansvar och DPIA | Huvudmannens ansvar, laglig grund, konsekvensbedömning, integritet | PR #126, mergead. AVAB:s tekniska roll skiljs från verksamhetens juridiska ansvar. |
| FAQ | Tillstånd, mobbning, lagring, behörighet m.m. | PR #126, mergead. FAQ utökad till 12 frågor. |
| Miljölänkar | Skolmiljö samt fördjupning om Exakt sökning | Föreslaget i PR #128 (öppen, visuell kontroll och merge väntar). |
| Relaterade länkar – gemensam rubrik | Internlänkning utan fel sidtypsrubrik | PR #127 (öppen), ändrar hårdkodad industrirubrik till `Läs vidare`. |

## Redaktionella avgränsningar och ej införda uppgifter

- Kundunderlaget föreslår `/tjanster/kameraovervakning-skola/`, men etablerad och kanonisk route är `/kameraovervakning/skola/`. Byt inte URL utan separat beslut och redirectanalys.
- Den längre tekniska genomgången av NVR, kamerateknik, AI och generell lagring hör hemma på kamera-huvudsidan eller sidan om Exakt sökning. Skolsidan ska fokusera på skolans behov och begränsningar.
- Underlagets avsnitt om skolattack/PDV, mobbning och säkerhetsåtgärder är delvis täckta genom avsnittet om samordnat säkerhetsarbete samt FAQ om kränkningar. Inga påståenden om att kameror förebygger eller löser skolattacker får läggas till utan underlag.
- Statsbidrag nämns i originalet, men 2026 års utbetalningsperiod har passerat. Eventuellt nytt avsnitt bör vara tidlöst och länka till aktuella bidragsvillkor hos Skolverket.
- Dokumentets mer långtgående formuleringar om att automatiskt följa en person mellan kameror och biometrisk identifiering överförs inte som generella funktionslöften.
- Ingen separat kamerareferens till **Galleria Duvan** har lagts in: kundunderlaget nämner Exakt sökning där, men strukturerat referensunderlag i repot styrker för närvarande endast digital signage. Kameraleveransen måste verifieras innan den används som bevis/referens.
- Ingen **Stjerneskolan, Torsby**-referens eller projektspecifik bild har lagts in: originaldokumentet uppger att AVAB har installerat kameror där, men projektomfattning, bildkoppling och publiceringsgodkännande behöver bekräftas.

## Juridisk granskning

Projektets tidigare IMY-kontroll daterades 2026-09-21. Under arbetet med PR #126 har följande punkter förtydligats:

- Skolor och förskolor har ett högt integritetsintresse, särskilt när barn berörs.
- Tillståndsplikten för kamerabevakning upphörde 2025-04-01, men tillämpliga dataskyddskrav kvarstår.
- Huvudmannen eller annan faktiskt personuppgiftsansvarig verksamhet ansvarar för bedömning av ändamål, rättslig grund, proportionalitet och eventuellt behov av DPIA.
- Kamerabevakning får inte användas för att kontrollera anställdas arbetsprestationer.
- Tre dygn nämns som generell tumregel för lagring, inte som ovillkorlig gräns.

**KVARSTÅR:** Förnyad juridisk färskhetskontroll mot IMY:s då aktuella vägledning inför eventuell publicering, särskilt av lagringstid, DPIA, bedömningar av skolgård/korridorer och FAQ. Inga juridiska texter ska utges för att vara individuell rättslig rådgivning.

## Bilder och tillgänglighet

- `/assets/skola-flyg-vy-hero.webp`, 2032 × 770, används i hero, principsektionen och avsnittet om natt/fasad.
- Upprepat motiv behöver granskas visuellt. Ingen crop, focal point, alt-text eller bildfil har ändrats under PR #124–#128.
- Verifiera att varje befintlig alt-text beskriver den faktiska bilden och inte påstår en verifierad kamerainstallation som inte syns.
- Vänta på kundens bildbeslut och verifierad koppling mellan bild, plats och leverans före bildbyte.

## Gates och blockerare

- **LOKAL KUNDKÄLLA:** GRANSKAD (uppladdad DOCX; inte versionerad i repot).
- **PROJEKTSPECIFIKA PÅSTÅENDEN:** Ej införda utan separat verifiering.
- **PUBLIKA BILDVAL / PROJEKTBILDER:** PENDING kundgodkännande och visuell bildgranskning.
- **JURIDISK SLUTKONTROLL:** PENDING nära publicering.
- **INTERNLÄNKAR:** PENDING PR #127/#128, CI och gemensam visuell kontroll.
- **VISUELL SLUTKONTROLL:** PENDING för helsidan efter alla godkända innehållsändringar.
- **REFERENSER:** Stjerneskolan och Galleria Duvan blockeras av otillräckligt verifierad projektspecifik information.

## Publiceringsgate

- `draft: true`.
- `seo.noindex: true`.

**Ingen publicering eller indexering utan uttryckligt godkännande och lösta blockerare.** Värdena får inte ändras genom denna coverage-PR.

## Uppföljning i projektets TODO

`TODO.md` ska spegla ovanstående när checkpoint-PR #123 är hanterad. Denna PR ändrar inte TODO för att undvika konflikt med den äldre öppna dokumentations-PR:en.
