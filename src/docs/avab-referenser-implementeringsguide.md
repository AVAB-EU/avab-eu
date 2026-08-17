# Implementeringsguide för AVAB-referenser

Denna guide är ett operativt arbetsflöde under [`avab-standard-referenser.md`](./avab-standard-referenser.md), som ensam är designens source of truth. Guiden får inte användas för att införa nya visuella regler.

## 1. Inventera befintligt innehåll

- Läs aktuell route och motsvarande innehållsfil.
- Notera URL, draft-status, publiceringsdatum, befintlig metadata och internlänkar.
- Markera påståenden som saknar verifierbar källa.
- Kontrollera bildrättigheter, lokal/extern källa och saknade original.

## 2. Identifiera textsektioner

Gruppera text efter användarens frågor och projektets logiska förlopp. Stryk inte verifierat innehåll av layoutskäl, men skapa inte kapitel utan egen funktion. Bestäm H2-rubriker och vilken text som hör hemma som ingress, brödtext, resultat eller teknisk detalj.

## 3. Identifiera bilder

Lista hero-bild och innehållsbilder med motiv, alt-text, dimensioner, orientering och viktig beskärningspunkt. Separera dekorativa bilder från innehållsbärande bilder.

## 4. Gruppera bilder efter innehåll

Koppla varje bild till texten den faktiskt bevisar eller förklarar. Gruppindela jämförbara motiv; använd inte en grid bara för att bilder råkar finnas.

## 5. Välj komponent

- 0 bilder: textsektion.
- 1 bild: normalt `ReferenceFeatureSplit` eller `ReferenceMediaGrid` med split.
- 2 bilder: tvåkolumns `ReferenceMediaGrid`.
- 3 bilder: tre kolumner på bred desktop, två på tablet, en på mobil.
- 4+: balanserade grupper efter hierarki.
- Citat, teknik, FAQ och relaterat: befintlig valfri komponent när underlag finns.

## 6. Bygg hero

Använd `ReferenceHero`. Kontrollera titel, ingress, eyebrow, full bleed-bild, CTA och metadata. Skapa inte en ny hero-variant för en enskild sida utan ett separat systembeslut.

## 7. Bygg fakta

Skicka endast verifierade, ifyllda faktapunkter till `ReferenceFacts`. Kontrollera 3, 5 eller 6 celler på desktop och exakt en cell per rad på mobil.

## 8. Bygg sektioner

Varje logiskt kapitel får fullbreddssektion med innehåll i `.avab-container`. Växla vitt/ljus per kapitel. Följ H1–H2–H3, använd gemensamma tokens och undvik sidunika stilkopior.

## 9. Avgör om ankarmeny behövs

Använd den bara när sidan har flera långa, tydligt namngivna kapitel. En normal sida med 2–4 korta sektioner ska inte ha ankarmeny. Om den används ska alla mål-ID:n vara unika och aktiva statusen testas med scroll, klick och tangentbord.

## 10. QA desktop, tablet och mobil

Kontrollera 1440, 1024, 768, 390 och 375 px. Granska bildbeskärning, grid, textlinjering, header, fakta, eventuell ankarmeny, CTA, fokus, touchytor och horisontell overflow. Kör `npm run build` och `git diff --check`.

## 11. Jämför med Minnebergspiloten

Jämför designsystem, spacing, containrar, medieytor, kortpadding, rubrikhierarki och responsivt beteende mot `src/pages/referenser/minnebergsskolan-arvika/index.astro`. Jämför inte antal ord, bilder, kort eller kapitel.

## Leveransgräns

Före commit ska acceptance checklist i standarddokumentet vara ifylld, diffen endast omfatta beslutad sida och gemensam kod, och inga provisoriska publiceringspåståenden ha introducerats. Commit och push görs endast efter uttryckligt godkännande.
