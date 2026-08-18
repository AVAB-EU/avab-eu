# Fas 7 – Referenser i gemensamt repo

**Status:** In progress – reconciliation and migration pilot  
**Owner:** AVAB-projektet  
**Repo:** `AVAB-EU/avab-eu`  
**Branch:** `agent/ai-content-system`  
**Last reviewed:** 2026-08-18

## Mål

Göra kundrepots befintliga referenssystem till den gemensamma, AI-styrda standarden för `/referenser/` utan att ersätta nyare kundkod med en äldre parallell implementation.

## Viktig nulägeskorrigering

Den tidigare AI Content-branchen byggdes i `KodAiDeas/avab-eu` från en äldre bas. Kundrepot `AVAB-EU/avab-eu` hade samtidigt utvecklats kraftigt och är nu gemensam source of truth.

Kundrepot innehåller redan structured content för samtliga 14 aktiva referenser under `src/content/references/` samt en rikare content model och ett större gemensamt `Reference*`-komponentlager.

Fas 7 handlar därför inte längre om att först skapa content entries för 8 återstående sidor. Arbetet är nu att:

1. försona dokumentation/regler med faktisk implementation,
2. reducera kvarvarande sidspecifik presentation där det är rimligt,
3. verifiera designparitet,
4. bevisa migrationsflödet med Säffle,
5. därefter standardisera resten i kontrollerade batcher.

## Pilotroller

### Minnebergsskolan – designpilot

Godkänd visuell baseline:

`https://test2.avab.eu/referenser/minnebergsskolan-arvika/`

Minneberg definierar visuellt språk, informationsdjup och vilka generella presentationsmönster referenssystemet behöver stödja.

Kundrepots aktuella Minneberg-route och projektbilder ska bevaras under reconciliation. Den äldre `ReferenceCaseStudy`-lösningen från det separata arbetsrepot ska inte kopieras in som parallell standard.

### Säffle simhall – första migrationspilot

Efter att Minneberg och arkitekturen är försonade används **Säffle simhall som första riktiga migrationspilot**.

Säffle ska bevisa att:

- samma content model och komponentfamilj fungerar i en annan miljö,
- route och SEO kan bevaras,
- verifierade fakta och riktiga projektbilder kan användas,
- ingen ny fullsidig lokal CSS behöver skapas,
- desktop och mobil följer referensstandarden,
- en AI kan genomföra samma migration deterministiskt från reglerna i repo.

Ingen bred massmigrering görs före godkänd Säffle-pilot.

## Faktisk teknisk baseline

`src/content.config.ts` är implementationens sanningskälla. Den nuvarande modellen använder bland annat layouts:

- `compact`
- `standard`
- `extended`

och har strukturer för bland annat hero, archive-data, fakta, brief, scope, projektfakta, evidence/verifiering, media, CTA och fördjupning.

Gemensamma referenskomponenter finns redan i `src/components/references/`, bland annat hero, facts, brief, scope, scale, media, gallery, FAQ, quote, related references och anchor navigation.

Nya komponenter eller schemafält får därför endast läggas till när ett verkligt återkommande behov saknas i denna implementation.

## Fas 7A – designförsoning

Detaljer finns i `phase-7a-reference-design-reconciliation.md`.

Arbetsordning:

1. Inventera Minnebergs route mot structured content och befintliga `Reference*`-komponenter.
2. Identifiera kvarvarande sidspecifik markup/data som bör centraliseras.
3. Behåll projektspecifika berättande sektioner när de faktiskt är unika; standardisera endast återkommande mönster.
4. Säkerställ canonical `https://avab.eu/`, metadata/schema och publiceringsregler.
5. Validera desktop och mobil mot test2-baslinjen.
6. Kör build/tekniska kontroller.
7. Starta därefter Säffle-piloten.

## Migreringsprincip

- Behåll route `/referenser/<slug>/`.
- GitHub-kundrepot är source of truth.
- Structured content ska bära fakta och återkommande content fields.
- Gemensamma `Reference*`-komponenter ska bära återkommande presentation.
- Skapa inte en andra parallell reference-renderer om befintlig komponent löser behovet.
- Sidspecifik markup är tillåten endast för verkligt projektspecifika berättande block som ännu inte motiverar en generell komponent.
- Ingen ny lokal CSS för standardsidor utan arkitekturbeslut.
- Gissa aldrig fakta, kundgodkännande eller bildmappning.
- Riktiga kundbilder i kundrepot ska prioriteras framför äldre/generiska assets från arbetsrepot.
- Grön build/CI ersätter inte visuell kontroll.

## Aktuell status

### Klart som baseline

- 14 structured reference entries finns i kundrepot.
- Gemensam Zod/content model finns.
- Ett omfattande `Reference*`-komponentlager finns.
- Minneberg är utsedd och godkänd som visuell designpilot.
- AI-regler, workflows och fasdokument har flyttats till kundrepots `agent/ai-content-system`.
- `AVAB-EU/avab-eu` är beslutad gemensam source of truth.

### Pågår

- Reconciliation mellan importerade AI-dokument och kundrepots faktiska implementation.
- Verifiering av vilka Minneberg-delar som redan är gemensamma respektive fortfarande sidspecifika.

### Nästa gate

1. Minneberg reconciliation + visuell kontroll.
2. Säffle simhall migrationspilot.
3. Valideringsstopp.
4. Först därefter nästa referens/batch.

## Exit criterion Fas 7

Fas 7 är klar när:

- referensstandarden och faktisk kod beskriver samma arkitektur,
- Minneberg är visuellt godkänd med rätt structured-content-koppling,
- Säffle är godkänd migrationspilot,
- övriga aktiva referenser använder den beslutade modellen utan onödig layoutdrift,
- canonical/SEO/schema/bilder/internlänkar är verifierade,
- desktop och mobil är regressionstestade,
- build/CI/guardrails passerar.
