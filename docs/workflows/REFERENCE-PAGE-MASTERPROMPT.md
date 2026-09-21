# Masterprompt: bygg en standardreferens

**Status:** Active
**Owner:** AVAB-projektet
**Scope:** `reference` — återanvändbar prompt för att starta en ny standardreferens
**Last reviewed:** 2026-09-21
**Relation:** Instruerar Claude att köra `docs/workflows/REFERENCE-PAGE-WORKFLOW.md` från Fas 0 till Fas 7 i en sammanhängande körning. Läs det dokumentet för fullständiga regler — denna prompt är ett ifyllbart startkommando, inte en ersättning för workflowet.

## Så här används prompten

Kopiera blocket nedan, fyll i fälten inom `<>` och skicka som uppgift. Allt annat i prompten ska stå kvar oförändrat.

---

```
Vi bygger en ny standardreferens i AVAB-repot.

PROJEKT
- Projektnamn: <t.ex. "Mullhyttans sporthall">
- Slug: <t.ex. "mullhyttans-sporthall" → /referenser/mullhyttans-sporthall/>
- Sourcefil: <exakt lokal path, t.ex. "docs/source-material/Referens X.docx">
- Bildpaket: <exakt lista eller mapp, t.ex. "13 WebP-assets i public/assets, se lista nedan" eller "inga bilder ännu, ska tillhandahållas separat">
- Visuell referens (valfritt): <t.ex. "layoutmässigt likt Säffle simhall" — enbart som visuell inspiration, inte att kopiera blint>
- Feature-branch: <t.ex. "seo/referens-mullhyttans-sporthall">

INSTRUKTION

Följ docs/workflows/REFERENCE-PAGE-WORKFLOW.md i sin helhet, Fas 0 till Fas 7, i en
sammanhängande körning utan att stanna för bekräftelse mellan faserna, såvida inte
ett av workflowets stopp-villkor faktiskt inträffar.

Specifikt:

1. Arbeta på en ny branch från uppdaterad main enligt Fas 0. Om sourcefilen inte
   finns eller inte går att läsa: STOPPA och fråga var den finns. Bygg aldrig
   sidan eller en coverage-fil genom att gissa innehåll.

2. Läs originalsourcen direkt (hela dokumentet). Lita INTE på en eventuell
   tidigare coverage-fil som facit — den ska i så fall granskas som ett resultat
   som kan innehålla fel, inte som källa.

3. Extrahera och klassificera atomära sakuppgifter enligt Fas 1:
   REQUIRED SOURCE FACT / OPTIONAL PRODUCT CONTEXT / EXTERNAL FACT TO VERIFY /
   SEO TARGET / STRUCTURAL-COPY INPUT.

4. Avgör enligt Fas 2 om sidan kan byggas helt med befintlig reference-arkitektur
   (ReferencePage.astro, komponenter i src/components/references/, befintliga
   ratio/split/layout-kombinationer för mediaGroups). Default är INGEN NY
   KOMPONENT, INGEN NY LAYOUTVARIANT, INGEN SIDESPECIFIK CSS. Om ett verkligt
   arkitekturgap upptäcks: STOPPA före implementation och förklara exakt varför
   befintlig arkitektur inte räcker. Föreslå i så fall en generisk, återanvändbar
   lösning — inte en lösning döpt efter detta projekt.

5. Bygg sidan enligt Fas 3: src/content/references/<slug>.md, tunn route under
   src/pages/referenser/<slug>/index.astro, draft: true, seo.noindex: true.
   Använd bara tillhandahållna eller redan befintliga assets. Inga
   placeholderbilder. Ingen AI-genererad ersättningsbild utan uttryckligt
   godkännande.

6. Kör source-audit i båda riktningar enligt Fas 4:
   A. SOURCE → IMPLEMENTATION (gate: MISSING REQUIRED SOURCE FACTS: 0)
   B. IMPLEMENTATION → SOURCE, inklusive kontroll av påhittade projektpåståenden
      (gate: UNSUPPORTED PROJECT CLAIMS: 0) och semantisk förstärkning av källan,
      t.ex. "beräknad" → "uppmätt", "ska verifieras" → "är verifierad"
      (gate: MATERIAL SOURCE DEVIATIONS: 0)
   C. Verifiera extern produktfakta mot primärkälla (gate: UNVERIFIED CLAIMS: 0)
   D. Verifiera att alla assets faktiskt används (gate: MISSING REMOTE ASSETS: 0)

   Sätt aldrig en gate till 0 innan den faktiska jämförelsen är gjord.

7. Skapa/uppdatera coverage-filen enligt Fas 5, med SOURCE AUDIT INPUT-rad och en
   traceability matrix (Source fact | Classification | Implementation | Evidence
   | Status) för viktiga sakuppgifter, avslutad med samtliga slutgates.

8. Kör automatiserad verifiering enligt Fas 6: git diff --check, npm run build,
   npm run validate (eller motsvarande separata steg om ett känt orelaterat fel
   blockerar hela kedjan — rapportera det felet separat, dölj det inte, och
   ändra inte den orelaterade sidan). Kontrollera draft/noindex och assets.

9. STOPPA därefter för visuell review (Fas 7). Gör ingen commit, push eller merge
   före uttryckligt godkännande, om inte den här uppgiften uttryckligen säger
   något annat.

Rapportera kort men konkret efter Fas 6:
- antal REQUIRED SOURCE FACTS identifierade och hur många som initialt saknades
- eventuella OPTIONAL PRODUCT CONTEXT-punkter som medvetet inte lades till
- eventuella UNSUPPORTED PROJECT CLAIMS eller MATERIAL SOURCE DEVIATIONS som
  hittades och åtgärdades
- slutvärden för samtliga gates
- resultat av git diff --check, npm run build och validate
- vilka filer som skapades/ändrades
- bekräftelse att source-filen fortfarande är untracked och inte pushad
```

---

## Kommentar till användaren av denna prompt

- Fyll bara i fälten under `PROJEKT`. Resten av prompten ska inte skrivas om per referens — syftet är att den ska vara identisk varje gång, så att flödet blir förutsägbart.
- Om projektet faktiskt kräver en ny layoutvariant (Fas 2-stopp), förvänta dig att Claude stannar och rapporterar innan någon kod skrivs. Det är avsett beteende, inte ett fel i prompten.
- Om du redan vet att sidan kommer kräva ett arkitekturbeslut (ny komponentvariant, ändrad global CSS), säg det uttryckligen i uppgiften från start — då kan Fas 2 hanteras som en medveten avvikelse i stället för ett stopp.
- Visual gate (Fas 7) är alltid ett stopp, oavsett hur tydlig sourcen är. Fast path i workflowet gäller bara Fas 0–6.


## Layoutregel

Använd alltid `layout: extended`. `compact` och `standard` är avvecklade och får inte användas eller återinföras.
