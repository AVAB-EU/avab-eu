# Checkpoint 2026-09-15 – Tjänster och nästa fas

## Status nu

### /tjanster/

- Den tidigare mörka bildheron är borttagen.
- Hero är nu ren och neutral utan bakgrundsbild.
- Breadcrumb ligger ovanför hero.
- Hero har ljusgrå bakgrund.
- Tjänstegrid ligger i en separat vit sektion.
- Hero-text:
  - Eyebrow: `VÅRA TJÄNSTER`
  - H1: `Teknik som fungerar tillsammans`
  - Ingress: `Vi projekterar, installerar och integrerar ljud, bild, säkerhet och styrning – från första idé till färdig anläggning.`
- Gridsektionen börjar med H2 `Hitta rätt lösning`.
- Ingen extra eyebrow ska ligga ovanför `Hitta rätt lösning`.
- Befintlig tjänstegrid och expandable cards ska behållas.
- Hero-designen är medvetet neutral tills kunden bestämt slutlig riktning.

### Tjänstegrid

- Den återanvändbara expandable-card-lösningen är implementerad.
- Desktop använder tre kort per rad med isolerad expansion.
- Tablet använder två kolumner.
- Mobil använder en kolumn.
- Lösningen återanvänds även på kameraövervakningssidan.

### Kameraövervakning

- `/tjanster/kameraovervakning/` har grid för:
  - Butik
  - Skola
  - Parkering
  - Industri
  - Galleria
  - Boka rådgivning
- `/kameraovervakning/butik/` är byggd och publicerad.
- Skola, Parkering, Industri och Galleria är ännu inte byggda.

### Referenser

- Go Banana Bergvik är publicerad och indexerbar.
- Referensen visas automatiskt i `/referenser/`.
- Go Banana använder content collection och ska inte hårdkodas i referensarkivet.
- `/referenser/` används tills vidare som visuell referens för rena intro/herosektioner.
- Startsidan/factbandets mobilkant är korrigerad.

### Viktigt kring stashes

Gamla stashes finns kvar och ska inte appliceras utan separat granskning.

Särskilt stashen med äldre startsida/factband-arbete har tidigare återinfört gammal/felaktig layout och ska inte användas i nästa arbetsfas.

## Nästa fas

Nästa större arbete är inventering och modernisering av undersidor.

### Prioritet 1 – Kameraövervakningens branschsidor

Bygg:
1. Skola
2. Parkering
3. Industri
4. Galleria

Utgå från den färdiga Butik-sidan och återanvänd gemensamma komponenter/data där det är möjligt.

### Prioritet 2 – Uppdatera Butik efter Go Banana-publicering

Granska:

`/kameraovervakning/butik/`

Text som säger att Go Banana-referensen kommer "inom kort" ska tas bort eller skrivas om eftersom referensen nu är publicerad.

Lägg naturlig internlänk till:

`/referenser/go-banana-bergvik/`

### Prioritet 3 – Inventera alla tjänsteundersidor

Inventera samtliga undersidor som länkas från `/tjanster/`.

För varje undersida, dokumentera:

- Finns sidan?
- Är innehållet komplett?
- Följer sidan nuvarande AVAB-standard?
- Behöver hero moderniseras?
- Används rätt PageCTA?
- Följs FAQ-regeln?
- Finns relevanta interna länkar?
- Fungerar mobilvy?
- Finns föråldrad copy eller gamla designmönster?

Skapa sedan en prioriterad lista:

- Klar
- Mindre justering
- Behöver moderniseras
- Saknas

Ändra inga undersidor innan inventeringen är godkänd.

## Permanenta regler att komma ihåg

- FAQ ska ligga direkt före slutlig PageCTA.
- FAQ: 2 kolumner desktop, 1 kolumn mobil.
- PageCTA ska vara konsekvent mellan sidor.
- Referenskort ska skapas via content/data-flödet, inte hårdkodas i `/referenser/`.
- `https://avab.eu/` är canonical.
- `www` är endast alias.
- Ändra inte global design i samband med en enskild undersida utan uttryckligt godkännande.
- Gamla stashes ska inte appliceras utan separat granskning.
