# Prompt till Codex – Gör navigerbara kort helt klickbara

Gå igenom hela AVAB-projektet och gör alla kort och boxar som representerar en navigerbar destination helt klickbara.

Det gäller exempelvis:

- referenskort
- tjänstekort
- miljökort
- projektkort
- nyhets- eller artikelkort
- andra återkommande kort som redan innehåller en tydlig huvudlänk, exempelvis ”Läs mer”, ”Se referensprojekt” eller motsvarande

Gör däremot inte rena informationsblock klickbara, exempelvis:

- fact-band och faktarutor
- FAQ-rutor
- formulär
- CTA-sektioner med flera olika knappar
- processkort utan egen destinationssida
- dekorativa boxar
- boxar som saknar en tydlig URL

## Arbetsgång

1. Sök igenom hela projektet, särskilt:

```text
src/components/
src/layouts/
src/pages/
src/styles/avab.css
```

2. Identifiera alla kortkomponenter och återkommande CSS-klasser, exempelvis:

```text
.ref-card
.value-card
.service-card
.environment-card
.project-card
.card
```

Kontrollera även andra klassnamn som används för klickbara kort.

3. Använd samma huvudlänk som redan finns inne i respektive kort. Hela kortytan ska aktivera denna länk.

4. Implementera detta semantiskt och tillgängligt:

- använd riktiga `<a>`-element
- använd inte `onclick` på `<div>` eller `<article>`
- kortet ska kunna nås och aktiveras med tangentbord
- Enter ska öppna länken
- fokus ska synas tydligt
- skärmläsare ska få ett korrekt länknamn
- undvik ogiltiga nästlade länkar

## Rekommenderad metod

När ett kort redan innehåller en huvudlänk tillsammans med text och bild ska du inte linda hela kortet i en ny `<a>` om det skulle skapa nästlade länkar.

Använd i stället en så kallad stretched-link-lösning:

- kortets container får `position: relative`
- kortets huvudlänk får en klass, exempelvis `card-primary-link`
- länken får ett `::after`-element som täcker hela kortet
- andra riktiga knappar eller länkar inne i kortet ska ligga ovanför overlay-länken med högre `z-index`

Exempel på princip:

```css
.clickable-card {
  position: relative;
  cursor: pointer;
}

.clickable-card .card-primary-link::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
}

.clickable-card a,
.clickable-card button {
  position: relative;
  z-index: 2;
}
```

Anpassa lösningen så att huvudlänkens overlay täcker kortet, samtidigt som eventuella andra interaktiva element fortfarande fungerar.

## Visuell återkoppling

Lägg till en konsekvent hover- och fokusbehandling för alla klickbara kort:

- diskret lyft med `transform`
- något tydligare skugga eller kant
- eventuell bildzoom om den redan används på webbplatsen
- pil eller länktext kan röra sig lätt åt höger
- tydlig `:focus-visible`
- respektera `prefers-reduced-motion`

Exempel:

```css
.clickable-card {
  transition:
    transform 180ms ease,
    box-shadow 180ms ease,
    border-color 180ms ease;
}

.clickable-card:hover,
.clickable-card:focus-within {
  transform: translateY(-3px);
}

.clickable-card:focus-within {
  outline: 3px solid var(--avab-green);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .clickable-card {
    transition: none;
  }

  .clickable-card:hover,
  .clickable-card:focus-within {
    transform: none;
  }
}
```

Återanvänd projektets befintliga färger, variabler, skuggor och rörelsemönster i `avab.css`. Skapa inte ett nytt visuellt designsystem.

## Viktiga begränsningar

- Ändra inte kortens texter eller länkmål.
- Ändra inte sidornas innehåll eller ordning.
- Förstör inte befintlig responsiv layout.
- Skapa inte duplicerade länkar.
- Lägg inte JavaScript på korten om en ren HTML- och CSS-lösning fungerar.
- Kort som öppnar externa länkar ska behålla befintliga attribut.
- Befintliga knappar och sekundära länkar inne i kort ska fortsätta fungera separat.
- Säkerställ att markören visar att kortet är klickbart.
- Lägg gemensam styling centralt i `src/styles/avab.css` där det är möjligt.
- Uppdatera återanvändbara komponenter i första hand, i stället för att duplicera kod på varje sida.

## Referenskorten

Kontrollera särskilt alla kort med klassen:

```text
.ref-card
```

På dessa kort ska hela ytan, inklusive bild, rubrik och beskrivning, öppna samma URL som länken ”Se referensprojekt”.

## Kontroll efter ändringarna

När arbetet är klart:

1. Kör:

```powershell
npm run build
```

2. Åtgärda eventuella Astro-, HTML- eller CSS-fel.

3. Kontrollera minst:

- startsidan
- tjänstesidor
- miljösidor
- gymsidan
- referensöversikten
- mobil layout
- tangentbordsnavigering

4. Redovisa:

- vilka filer som ändrades
- vilka korttyper som blev helt klickbara
- vilka boxar som medvetet inte gjordes klickbara och varför
- resultatet från `npm run build`

Gör ändringarna direkt i projektet, men commit och push ska inte göras förrän jag uttryckligen ber om det.
