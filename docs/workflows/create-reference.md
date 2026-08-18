# Workflow: skapa eller uppdatera Referens

**Status:** Active  
**Owner:** AVAB-projektet  
**Scope:** `reference`  
**Last reviewed:** 2026-08-17

## Syfte

Detta workflow används av ChatGPT, Claude, Codex och andra AI-agenter när en ny referens ska skapas eller en befintlig referens ska uppdateras.

Referenser är första fullt implementerade standardsidtypen. Normal innehållsändring ska därför ske genom `references`-collectionen och den gemensamma referensrenderingen, inte genom en ny specialbyggd fullsidig Astro-fil.

## Läs före arbete

1. `AGENTS.md`
2. `docs/README.md`
3. `docs/standards/pages/reference.md`
4. `docs/workflows/ai-page-authoring.md`
5. `docs/architecture/content-model.md`
6. `docs/architecture/ai-write-scope.md`
7. aktuell `src/content.config.ts`
8. befintlig referens-entry om sidan redan finns

## 1. Klassificera uppgiften

Avgör om uppgiften är:

- skapa ny referens,
- ändra innehåll i befintlig referens,
- migrera en legacy-referens till content collection,
- ändra referensens designsystem/template.

De tre första är normalt contentarbete. Den sista är arkitekturarbete och får inte döljas som en vanlig innehållsuppgift.

## 2. Samla input

AI ska återanvända information som användaren redan har lämnat och bara efterfråga verkligt saknade kritiska fakta.

### Krävs för en publicerbar referens

- projektnamn/titel,
- publik plats,
- miljö/kategori,
- minst en relevant teknik/tjänst,
- kort sammanfattning,
- AVAB:s roll,
- omfattning,
- kundens behov,
- AVAB:s ansvar/lösning,
- verifierbart resultat,
- huvudbild och alt-text,
- SEO-titel och SEO-beskrivning,
- publiceringsstatus,
- kundens publika benämning och publiceringsgodkännande där kundidentifiering används.

### Fråga bara när informationen behövs

AI ska inte köra ett långt formulär om underlaget redan innehåller svaren. Frågor ska grupperas och fokusera på sådant som blockerar korrekt content.

## 3. Fakta AI aldrig får hitta på

AI får inte fabricera eller uppskatta som fakta:

- kundnamn,
- projektår,
- projektkostnad,
- antal zoner/produkter/rum,
- mätvärden,
- besparingar,
- certifieringar,
- kundcitat,
- entreprenadform,
- resultat eller effekter som inte kan stödjas av underlaget.

Om en uppgift är osäker ska den utelämnas, markeras för verifiering eller sidan hållas som `draft`.

## 4. Sådant AI får formulera

AI får, utan att ändra faktainnehållet:

- förbättra rubriker,
- korta och strukturera brödtext,
- formulera sammanfattning,
- föreslå SEO-title/description,
- formulera beskrivande alt-text utifrån känt bildinnehåll,
- föreslå relevanta interna länkar,
- strukturera befintlig fakta till facts/scope/detail/FAQ.

## 5. Content-entry

Normal målfil ligger under:

`src/content/references/<id>.json`

Det interna entry-ID:t och den publika routen är separata begrepp. Publik route ligger i contentfältet `slug` och ska följa:

`/referenser/<slug>/`

Canonical genereras från `https://avab.eu/` + route. `www` ska inte skrivas in i content.

AI ska följa det faktiska schemat i `src/content.config.ts`. Dokumenterade exempel får inte överstyra koden om schemat har ändrats.

## 6. Route och rendering

Vid en redan migrerad referens ska routefilen vara tunn och läsa rätt collection-entry. AI ska inte lägga sidspecifik layout eller CSS i routefilen för vanlig content.

Vid migrering av en legacy-referens:

1. bevara exakt publik URL,
2. extrahera verifierbart innehåll till collection-entry,
3. mappa befintligt innehåll till standardens struktur,
4. ersätt routefilen med tunn loader först när entry + renderer fungerar,
5. kontrollera att viktig legacy-information inte tappas,
6. kör build.

## 7. Bilder

För varje bild:

- använd befintlig korrekt asset när sådan finns,
- hitta inte på filnamn till en bild som inte finns,
- skriv alt-text som beskriver relevant motiv/funktion,
- använd inte SEO-sökordsstapling i alt-text,
- ange inte fotograf, plats eller teknisk detalj som inte är känd.

För projekt med flera bilder ska AI först gruppera materialet efter berättelsens delar, exempelvis uppdrag/projektering, styrning, ljud, tillgänglighet, installation och resultat. Bilder ska placeras i relevanta ankarkapitel genom den gemensamma content-modellen. Samla inte allt i ett slutgalleri när bilderna kan förklara innehållet löpande.

Varje ankarkapitel ska innehålla egen förklarande text. Skriv sökbart och konkret för inköpare och projektörer genom att beskriva verifierat behov, AVAB:s ansvar, tekniska val, genomförande och resultat. SEO-text får utveckla samband och förklara kompetens som faktiskt framgår av underlaget, men får inte lägga till nya projektfakta, effekter eller mätvärden.

Gör därefter en redaktionell genomgång av hela sidan:

1. utveckla relevant text där underlaget stödjer mer sammanhang,
2. kontrollera att miljö, tjänster, teknik, plats och AVAB:s ansvar uttrycks naturligt i rubriker och brödtext,
3. fördela text och bilder genom ankarkapitlen så sidan får rytm utan att frångå den gemensamma strukturen,
4. ta bort metatext om sidan, sektionerna, SEO-arbetet eller läsarens navigering,
5. ta bort AI-fluff, upprepningar och påståenden som inte hjälper en inköpare eller projektör,
6. korta hellre än att fylla ut när verifierat underlag saknas.

## 8. Relationer och index

En migrerad referens ska så långt möjligt vara samma datakälla för:

- individuell referenssida,
- referenskort/listing,
- miljö-/teknikfilter,
- SEO/schema,
- relaterade länkar.

Skapa inte en andra fristående registerpost om collection-data redan används för samma information.

## 9. Validering

Minst:

- collection/schema sync,
- `npm run build`,
- korrekt oförändrad route,
- canonical under `https://avab.eu/`,
- huvudbild existerar,
- alt-text finns,
- inga tomma standardsektioner renderas,
- FAQ-data används konsekvent där både synlig FAQ och schema finns,
- FAQ-rubrik och frågor linjerar mot samma vänsterkant, frågorna fyller hela containern och går från två kolumner på desktop till en kolumn på mobil,
- PR-check ska passera.

Visuell verifiering krävs innan en migrerad referens betraktas som fullständigt designgodkänd.

## 10. Branch och PR

Arbeta normalt i separat branch och PR, aldrig direkt i `main`.

PR-sammanfattningen ska ange:

- sidtyp: `reference`,
- skapad/ändrad route,
- om sidan är ny, uppdaterad eller migrerad,
- contentfiler som ändrats,
- om någon arkitekturfil ändrats,
- vilken verifiering som passerat,
- fakta eller visuella delar som fortfarande behöver mänsklig kontroll.

## Stopregler

Stoppa och klassificera som arkitekturarbete om normal referens kräver:

- ny global CSS,
- ändring av `ReferencePage.astro`,
- ändring av collection-schema,
- ny generell komponent,
- ändrad routekonvention,
- specialmarkup som sannolikt återkommer på fler referenser.

En innehållsagent får föreslå en sådan förändring men inte smyga in den som lokal lösning.

## Definition of Done

En normal referens är klar när den kan representeras av validerad content, återanvänder referenstemplaten, har korrekt URL/metadata/bilder, passerar build/PR-validering och inte kräver sidspecifik CSS eller duplicerad fullsidig markup.
