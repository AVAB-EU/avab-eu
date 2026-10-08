# Source coverage – Kameraövervakning Industri

**Route:** `/kameraovervakning/industri/`  
**Jämförelsesida:** `/kameraovervakning/butik/`  
**Status:** Draft/noindex – ännu inte publiceringsgodkänd  
**Uppföljd:** 2026-10-08, efter PR #116–#118

## Underlag och genomfört arbete

- Tjänstesidan `/tjanster/kameraovervakning/` och fördjupningen `/tjanster/exakt-sokning-ai-analys/`.
- Miljösidan `/miljo/industri/`, befintlig camera-industry-modell och Butik-sidan.
- `docs/source-material/Kameraövervakning industri.docx` har jämförts med sidan i Codex lokala read-only-granskning. Själva Word-filen har inte hämtats via GitHub-anslutningen i denna uppföljning.
- PR #116: kortare H1 och separat underrubrik i hero, visuellt godkänd.
- PR #117: industrispecifikt innehåll om områdesgränser, lastzoner, lager, säkerhetsbevakning kontra processövervakning, sökning och arbetsplatsintegritet. Visuellt godkänd.
- PR #118: länkar till industri-/logistikmiljön och fördjupningen om exakt sökning och AI-analys. Visuellt godkänd och validering grön.

## Medvetna avgränsningar mot Word-underlaget

- ANPR, automatiserad AI-detektering, aktiv högtalarintervention, redundans/failover, termometri, ATEX och namngivna integrationer har inte lagts till som leveranslöften. Verifierat plattforms- och kundunderlag saknas för sådana påståenden.
- Hanza används inte som kamerareferens; tillgänglig beskrivning gäller annan teknik.
- Ingen projektspecifik industrireferens, kameraleverans eller teknikkompatibilitet påstås.
- Arbetsplatsbevakning beskrivs med avgränsat syfte, inte som rättslig garanti. Länk till IMY finns på sidan.

## Bilder

Befintliga filer behålls tills kundens bildbeslut:
- `/assets/overvakningskamera-fasad-hero.webp` används i hero och principsektionen.
- `/assets/Kameraovervakning-dahua-hero.webp` används längre ner på sidan.
- Alt-text för Dahua-bilden rättades i PR #117. Neutralisering av kvarvarande fasad-alttexter och eventuell bildvariation avvaktar bildgranskningen.

**Bildgodkännande: VÄNTAR PÅ KUND.** Kunden har fått fråga om hero-bild, den upprepade fasadbilden och lämpligt motiv i sök-/driftsektionen. Gör inga bildbyten, beskärningar eller fokalpunktsändringar innan besked.

## Återstående kontroller och beslut

- [ ] Invänta och dokumentera kundens bildbesked.
- [ ] Rätta eventuella kvarvarande bildbeskrivningar efter godkänt bildval.
- [ ] Bekräfta om processkameror ingår i AVAB:s etablerade erbjudande och vilka specifika integrationer/funktioner som kan styrkas, om sidan senare ska marknadsföra dem tydligare.
- [ ] Slutgranska publiceringstexternas juridiska formuleringar och faktastöd nära publiceringsbeslutet.
- [ ] Kör slutlig guardrail/build, internlänkskontroll och visuell QA på aktuell kod.
- [ ] Begär uttryckligt publiceringsgodkännande innan `draft`/`noindex` ändras.

## Claims och publiceringsgate

Ingen kundspecifik industrikameraleverans eller ogrundad specialfunktion har avsiktligt införts. Tidigare markeringen `MATERIAL SOURCE DEVIATIONS: 0` är inte en fullständig verifiering mot Word-underlaget; granskningen har i stället dokumenterat avsiktliga utelämnanden ovan.

**UNSUPPORTED PROJECT CLAIMS:** Inga identifierade i genomförd granskning; slutkontroll kvarstår.  
**MATERIAL SOURCE DEVIATIONS:** Medvetna utelämnanden dokumenterade; ingen total avvikelsefrihet påstås.  
**LOCAL SOURCE CHECK:** Utförd av Codex mot lokalt Word-underlag vid tidigare granskning.  
**PUBLICERING:** `draft: true`, `seo.noindex: true` ska behållas tills separat godkännande.
