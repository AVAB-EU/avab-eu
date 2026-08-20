# Kundönskemål – 2026-08-20

Detta projektunderlag samlar kundens återkoppling inför nästa förbättringsarbete på AVAB-webbplatsen.

## Dokument
- `ANALYS.md` – kritisk analys, rotorsaker, logiska luckor, beslut och prioritering.
- `FASPLAN.md` – genomförandeplan i faser med konkreta checkboxar och exit-kriterier.
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

## Blockerande kundbeslut
- Header: endast `Kontakt` eller även telefonnummer?
- Kanoniskt namn för restaurangmiljön.
- Skillnaden mellan `Hur vi jobbar` och `Vår leverans`.
- Verifierat pris för aktuellt erbjudande.
- Godkända ersättningsbilder.
- Förtydligande av `Lagom hantera dokument (Andreas)`.
- Exakt WOT-fetmarkering.

## Source of truth
Detta underlag kompletterar befintliga standards och workflows. Kundrepots aktuella kod och redan beslutade standarder har företräde vid konflikt. Referensarbete ska fortsatt följa `docs/standards/pages/reference.md` och befintliga beslut i `TODO.md`.