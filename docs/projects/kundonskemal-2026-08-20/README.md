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

## OBLIGATORISK REGEL – BILDER HANTERAS MANUELLT
**Alla kundönskemål som innebär att välja, byta, ersätta, lägga till, generera, retuschera eller på annat sätt ändra en bild ska utföras manuellt av Andreas/kundteamet. AI eller automatiserade arbetsflöden får inte genomföra sådana bildändringar.**

Det gäller bland annat:
- hero-bilder,
- bilder i kort, lösningar, teknikområden och referenssektioner,
- byte mellan namngivna referensbilder,
- tillägg av nya bilder,
- AI-retuschering eller generativ bildbearbetning, inklusive Lesjöfors-golvet.

AI får däremot:
- markera var kunden efterfrågat ett bildbyte,
- kontrollera tekniska egenskaper som filstorlek, dimensioner, lazy loading och LCP,
- rätta länkar som ligger på bild/kort utan att byta själva bilden,
- justera layout, crop/focal-position eller presentation av en redan vald bild när uppgiften uttryckligen gäller presentation och inte bildvalet.

Bildrelaterade punkter i fasplan och TODO ska därför ses som **manuella uppgifter**, inte uppgifter som en AI-agent får utföra själv.

## Blockerande kundbeslut
- Header: endast `Kontakt` eller även telefonnummer?
- Kanoniskt namn för restaurangmiljön.
- Skillnaden mellan `Hur vi jobbar` och `Vår leverans`.
- Verifierat pris för aktuellt erbjudande.
- Manuellt valda/godkända ersättningsbilder där kunden efterfrågat bildändring.
- Förtydligande av `Lagom hantera dokument (Andreas)`.
- Exakt WOT-fetmarkering.

## Source of truth
Detta underlag kompletterar befintliga standards och workflows. Kundrepots aktuella kod och redan beslutade standarder har företräde vid konflikt. Referensarbete ska fortsatt följa `docs/standards/pages/reference.md` och befintliga beslut i `TODO.md`.