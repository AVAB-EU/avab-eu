# Standard för AVAB:s referensprojekt

## Syfte

Detta dokument definierar hur AVAB:s referensprojekt ska struktureras, skrivas och kvalitetssäkras.

Målet är att:

- alla projektsidor får samma grundstruktur och visuella uppbyggnad
- varje projekt kan ha unikt innehåll utan att layouten behöver byggas om
- projekten blir sökbara och filtrerbara
- internlänkning, SEO, tillgänglighet och bildhantering följer samma standard
- nya projekt kan publiceras utan att någon behöver skriva HTML eller kopiera sidkomponenter

---

## Viktig arkitekturprincip

En projektsida ska **inte** byggas som en komplett fristående sida direkt i Markdown-filen.

Markdown-filen ska innehålla:

1. projektets metadata i frontmatter
2. projektets redaktionella brödtext
3. hänvisningar till bilder, tjänster och relaterade projekt

En gemensam Astro-layout eller projektsidekomponent ska ansvara för:

- sidhuvud och brödsmulor
- H1-rubrik
- hero-bild
- projektfakta
- bildgalleri
- relaterade tjänster
- relaterade projekt
- kontaktsektion
- strukturerad data
- SEO-taggar
- visuellt utseende och responsivitet

Det innebär att en framtida designändring kan göras på ett ställe och automatiskt slå igenom på alla projektsidor.

---

## Rekommenderad filstruktur

Exakt placering anpassas efter projektets Astro-version och nuvarande innehållsstruktur.

```text
src/
├── content/
│   └── projects/
│       ├── industriportar-logistikfastighet-karlstad.md
│       ├── staldorrar-skolfastighet-arvika.md
│       └── lastkaj-industrianlaggning-kristinehamn.md
│
├── components/
│   └── projects/
│       ├── ProjectHero.astro
│       ├── ProjectFacts.astro
│       ├── ProjectGallery.astro
│       ├── RelatedServices.astro
│       ├── RelatedProjects.astro
│       └── ProjectContact.astro
│
└── pages/
    └── referensprojekt/
        ├── index.astro
        └── [...id].astro
```

Projektens frontmatter ska valideras genom en gemensam content collection-schema. Då upptäcks saknade eller felaktiga fält redan vid utveckling eller build.

---

# Sidans fasta ordning

Alla projektsidor ska byggas i följande ordning.

## 1. Brödsmulor

Exempel:

```text
Start / Referensprojekt / Nya industriportar till logistikfastighet
```

Brödsmulorna skapas automatiskt av layouten.

## 2. Projekthuvud

Ska innehålla:

- projekttyp eller kategori
- projektsidans H1
- kort sammanfattning
- ort eller region
- genomförandeår
- huvudbild

H1 ska skapas från frontmatterfältet `title`. Brödtexten ska därför inte innehålla ytterligare en H1.

## 3. Projektfakta

Layouten visar de fakta som finns tillgängliga, exempelvis:

- kund eller anonymiserad kundtyp
- ort
- projekttyp
- byggnadstyp
- genomförande
- omfattning
- levererade tjänster
- entreprenadform
- projektnummer, när det är relevant

Tomma fält ska döljas automatiskt. Redaktören ska aldrig behöva skriva exempelvis ”Ej angivet”.

## 4. Kundens behov

Beskriv situationen innan AVAB:s insats:

- Vad behövde kunden?
- Vilket verksamhetsproblem skulle lösas?
- Vilka krav fanns på funktion, säkerhet, drift eller tidplan?

## 5. Utmaningen

Beskriv de viktigaste tekniska eller praktiska begränsningarna:

- pågående verksamhet
- snäv tidplan
- befintliga konstruktioner
- måttanpassning
- arbetsmiljö
- samordning med andra entreprenörer
- krav på säkerhet, energi eller tillgänglighet

Avsnittet ska inte överdriva svårighetsgraden. Det ska förklara varför lösningen behövde anpassas.

## 6. AVAB:s lösning

Beskriv:

- vad AVAB levererade
- varför lösningen valdes
- vilka produkter, material eller arbetssätt som användes
- hur lösningen mötte kundens krav

Texten ska fokusera på kundnytta, inte bara produktnamn.

## 7. Genomförandet

Beskriv vid behov:

- projektering och förberedelser
- leverans
- montage
- samordning
- säkerhet
- provning och överlämning
- service eller uppföljning

För mindre projekt kan detta avsnitt vara kort. Det ska inte fyllas ut med innehåll som saknar värde.

## 8. Resultatet

Beskriv konkreta effekter, exempelvis:

- förbättrad funktion
- säkrare arbetsmiljö
- minskade driftstopp
- bättre energieffektivitet
- förbättrad tillgänglighet
- modernare eller mer hållbar lösning
- enklare framtida service

Använd inte obestyrkta formuleringar som ”kunden blev mycket nöjd” eller exakta besparingssiffror utan underlag.

## 9. Bildgalleri

Bildgalleriet skapas automatiskt från frontmatterfältet `gallery`.

Bilder kan visa:

- före arbetet
- pågående montage
- färdig installation
- tekniska detaljer
- helhetsmiljö

## 10. Kundcitat

Kundcitat är valfritt och ska bara visas när:

- citatet är äkta
- kunden har godkänt publicering
- namn, företag och befattning får visas enligt överenskommelse

## 11. Relaterade tjänster

Layouten länkar automatiskt till de tjänstesidor som anges i `relatedServices`.

Varje projekt ska normalt länka till en till tre relevanta tjänstesidor.

## 12. Relaterade projekt

Layouten visar automatiskt relevanta projekt baserat på exempelvis:

- tjänst
- projekttyp
- byggnadstyp
- region
- manuellt angivna projekt

Manuellt angivna relaterade projekt ska prioriteras framför automatiska träffar.

## 13. Kontaktsektion

Alla projektsidor avslutas med en gemensam kontaktsektion, exempelvis:

> Har du ett liknande projekt?

Kontaktsektionen ska ligga i Astro-layouten och inte kopieras in i varje Markdown-fil.

---

# Mall för en ny projektfil

Kopiera mallen nedan och ersätt exempelvärdena.

```markdown
---
# PUBLICERING
draft: true
publishedDate: 2026-08-03
updatedDate:
completedDate: 2026-06-15

# IDENTITET
title: "Nya industriportar till logistikfastighet i Karlstad"
shortTitle: "Industriportar till logistikfastighet"
summary: "AVAB levererade och monterade fyra måttanpassade industriportar i en logistikfastighet med pågående verksamhet."
projectNumber: ""

# ARKIV OCH SORTERING
featured: false
featuredPriority: 0
projectType: "Industri och logistik"
buildingType: "Logistikfastighet"
services:
  - "Industriportar"
  - "Montage"
  - "Service"
tags:
  - "portbyte"
  - "måttanpassning"
  - "pågående verksamhet"

# PLATS
location:
  city: "Karlstad"
  municipality: "Karlstad"
  county: "Värmland"
  publicDisplay: "Karlstad"

# KUND OCH GODKÄNNANDE
customer:
  name: ""
  publicDisplay: "Fastighetsägare inom logistik"
  showName: false
  publicationApproved: false

# PROJEKTFAKTA
facts:
  scope: "Leverans och montage av fyra industriportar"
  projectPeriod: "Våren 2026"
  deliveryForm: "Underentreprenad"
  status: "Slutfört"
  products:
    - "Måttanpassade industriportar"
    - "Tillhörande styrning och säkerhetsutrustning"

# HUVUDBILD
heroImage:
  src: "/images/referensprojekt/industriportar-logistikfastighet-karlstad/industriportar-logistikfastighet-karlstad-hero.webp"
  alt: "Fyra nyinstallerade industriportar på en logistikfastighet i Karlstad"
  caption: ""

# BILDGALLERI
gallery:
  - src: "/images/referensprojekt/industriportar-logistikfastighet-karlstad/industriport-fore-montering.webp"
    alt: "Befintlig portöppning före montering av den nya industriporten"
    caption: "Portöppningen före installation."
  - src: "/images/referensprojekt/industriportar-logistikfastighet-karlstad/montering-industriport.webp"
    alt: "Montörer installerar en måttanpassad industriport"
    caption: "Montering under pågående verksamhet."
  - src: "/images/referensprojekt/industriportar-logistikfastighet-karlstad/fardiga-industriportar.webp"
    alt: "Färdigmonterade industriportar på logistikfastigheten"
    caption: "Den färdiga leveransen."

# KUNDCITAT – LÄMNA TOMT NÄR DET SAKNAS
testimonial:
  quote: ""
  name: ""
  role: ""
  company: ""
  approved: false

# INTERNLÄNKNING
relatedServices:
  - "/tjanster/industriportar/"
  - "/tjanster/service-och-underhall/"
relatedProjects: []

# SEO
seo:
  title: "Industriportar till logistikfastighet i Karlstad | AVAB"
  description: "Se hur AVAB levererade och monterade fyra måttanpassade industriportar i en logistikfastighet i Karlstad."
  noindex: false
---

## Kundens behov

Beskriv kundens ursprungliga behov och vad verksamheten behövde få löst. Börja med problemet eller målet, inte med AVAB:s företagsbeskrivning.

## Utmaningen

Beskriv projektets viktigaste tekniska, praktiska eller tidsmässiga förutsättningar. Förklara vad som krävde planering eller anpassning.

## AVAB:s lösning

Beskriv den valda lösningen, vad AVAB levererade och varför lösningen passade projektets krav. Koppla tekniken till kundens nytta.

## Genomförandet

Beskriv kort hur projektering, leverans, montage, samordning och överlämning genomfördes. Ta bara med sådant som hjälper läsaren att förstå AVAB:s arbetsinsats.

## Resultatet

Beskriv de konkreta förbättringarna efter genomfört projekt. Använd verifierbara effekter och undvik obestyrkta påståenden.
```

---

# Obligatoriska och valfria delar

## Obligatoriskt för publicering

Följande ska finnas innan `draft` ändras till `false`:

- `title`
- `summary`
- `publishedDate`
- `completedDate`
- `projectType`
- minst en tjänst i `services`
- `location.publicDisplay`
- `customer.publicDisplay`
- bekräftat publiceringsgodkännande
- huvudbild med beskrivande alt-text
- avsnittet Kundens behov
- avsnittet AVAB:s lösning
- avsnittet Resultatet
- minst en relaterad tjänst
- SEO-titel
- SEO-beskrivning

## Valfritt

Följande visas bara när relevant innehåll finns:

- projektnummer
- exakt kundnamn
- Utmaningen
- Genomförandet
- bildgalleri
- kundcitat
- manuellt valda relaterade projekt
- exakt projektperiod
- entreprenadform
- produktlista

Valfria avsnitt ska tas bort helt när de saknar meningsfullt innehåll. Rubriker får inte lämnas kvar med tom text.

---

# Regler för rubriker och text

## Rubriker

- Sidans H1 hämtas från `title` och skapas av layouten.
- Markdown-innehållet börjar därför på H2-nivå med `##`.
- Rubrikernas grundordning ska behållas.
- Nya specialavsnitt kan läggas till före Resultatet när projektet kräver det.
- Använd inte rubriker som enbart består av produktnamn utan sammanhang.

## Textlängd

Riktvärde för en normal projektsida:

- sammanfattning: 20–35 ord
- varje huvudavsnitt: 60–180 ord
- total brödtext: ungefär 400–900 ord

Kvalitet går före längd. Ett mindre projekt ska inte fyllas ut till en lång artikel.

## Ton

Texten ska vara:

- professionell
- konkret
- saklig
- lätt att förstå
- tekniskt korrekt
- fokuserad på kundens behov och resultat

Undvik:

- onödigt reklamspråk
- upprepningar av AVAB:s namn
- sökordsstapling
- påståenden utan underlag
- interna förkortningar som kunden inte förstår
- generiska formuleringar som kan passa vilket projekt som helst

---

# Regler för bilder

## Filnamn

Använd:

```text
projekttyp-motiv-ort.webp
```

Exempel:

```text
industriport-montering-karlstad.webp
```

Undvik:

```text
IMG_4837.jpg
bild1-final-ny.jpg
```

## Mapp

Varje projekt ska ha en egen bildmapp:

```text
/public/images/referensprojekt/projektets-slug/
```

## Alt-text

Alt-texten ska beskriva bildens relevanta innehåll.

Bra:

```text
Montör installerar säkerhetslist på en industriport i Karlstad
```

Svagt:

```text
AVAB industriport Karlstad bästa port företag
```

Dekorativa bilder kan ha tom alt-text när layouten stödjer det. Informativa projektbilder ska normalt ha beskrivande alt-text.

## Publiceringskontroll

Kontrollera att bilderna inte visar:

- personer utan lämpligt godkännande
- registreringsskyltar som bör döljas
- känsliga säkerhetsinstallationer
- kundinformation på skyltar, ritningar eller skärmar
- material som AVAB saknar rätt att publicera

---

# SEO-standard

## Sidtitel

Skriv för människa först och sökmotor därefter.

Rekommenderat mönster:

```text
[Leverans eller lösning] till [byggnadstyp] i [ort] | AVAB
```

## Metabeskrivning

- beskriv projektets viktigaste leverans
- nämn ort när den är relevant
- skriv unikt för varje projekt
- lova inte mer än sidan visar

## URL

Filnamnet bör skapa en kort och begriplig slug:

```text
industriportar-logistikfastighet-karlstad.md
```

Önskad URL:

```text
/referensprojekt/industriportar-logistikfastighet-karlstad/
```

Undvik datum, interna projektnummer och onödiga småord i URL:en.

## Indexering

- publicerade kvalitetsprojekt ska normalt vara indexerbara
- utkast ska inte byggas som publika sidor
- tunna eller tillfälliga projekt ska inte publiceras enbart för att öka antalet sidor
- filterkombinationer i projektarkivet ska hanteras separat så att de inte skapar mängder av duplicerade söksidor

---

# Internlänkning

Varje projekt ska länka till minst en relevant tjänstesida.

När det är naturligt ska en tjänstesida även länka tillbaka till relevanta referensprojekt.

Rekommenderat flöde:

```text
Tjänstesida
    ↕
Referensprojekt
    ↕
Relaterade projekt
    ↓
Kontakt eller offertförfrågan
```

Länktexten ska beskriva målsidan.

Bra:

```text
Läs mer om AVAB:s industriportar
```

Svagt:

```text
Klicka här
```

---

# Publiceringsflöde

1. Kopiera projektmallen.
2. Döp filen med en tydlig slug.
3. Lägg projektbilderna i projektets egen bildmapp.
4. Fyll i frontmatter.
5. Skriv projektets berättelse i den fasta rubrikordningen.
6. Kontrollera kundens och fotografens publiceringsgodkännande.
7. Kontrollera interna länkar.
8. Förhandsgranska sidan på mobil och dator.
9. Kör build och schema-validering.
10. Kontrollera stavning, alt-texter, SEO-data och bildstorlekar.
11. Ändra `draft: true` till `draft: false`.
12. Publicera genom projektets normala Git- och granskningsflöde.

---

# Kvalitetskontroll före publicering

## Innehåll

- [ ] Rubriken beskriver vad projektet handlar om.
- [ ] Sammanfattningen fungerar även på projektkortet i arkivet.
- [ ] Kundens behov framgår tydligt.
- [ ] AVAB:s lösning förklaras konkret.
- [ ] Resultatet innehåller verklig kundnytta.
- [ ] Texten är unik och inte kopierad från en tjänstesida.
- [ ] Tekniska uppgifter är kontrollerade.
- [ ] Tomma eller irrelevanta avsnitt har tagits bort.

## Godkännande och integritet

- [ ] Kunden har godkänt publiceringen.
- [ ] Det är beslutat om kundnamnet får visas.
- [ ] Bilderna får publiceras.
- [ ] Personer, registreringsskyltar och känslig information är kontrollerade.
- [ ] Kundcitatet är godkänt.

## Bilder

- [ ] Huvudbild finns.
- [ ] Bilderna har beskrivande filnamn.
- [ ] Bilderna är komprimerade och rätt dimensionerade.
- [ ] Informativa bilder har relevanta alt-texter.
- [ ] Bildtexter används där de tillför sammanhang.
- [ ] Bilderna ligger i rätt projektmapp.

## SEO och länkar

- [ ] SEO-titeln är unik.
- [ ] Metabeskrivningen är unik.
- [ ] URL:en är kort och begriplig.
- [ ] Minst en relevant tjänstesida är länkad.
- [ ] Relaterade projekt fungerar.
- [ ] Alla interna länkar fungerar.
- [ ] Projektet visas i rätt kategorier och filter.
- [ ] Projektets datum ger rätt sortering i arkivet.

## Teknik och layout

- [ ] Content collection-schemat godkänner filen.
- [ ] Sidan har endast en H1.
- [ ] Rubriknivåerna ligger i rätt ordning.
- [ ] Sidan fungerar på mobil.
- [ ] Galleriet fungerar med tangentbord.
- [ ] Bilder orsakar inte stora layoutförskjutningar.
- [ ] Projektet syns inte publikt när `draft: true`.

---

# Kritisk bedömning av lösningen

En gemensam Markdown-mall är en bra redaktionell grund, men den kan inte ensam garantera att alla sidor blir lika.

Följande skydd behövs också:

1. **Gemensam Astro-layout**  
   Visuell struktur och återkommande sektioner ska ligga i komponenter, inte kopieras mellan filer.

2. **Validerat schema**  
   Obligatoriska fält, datum, listor och bilddata ska kontrolleras automatiskt.

3. **Fasta kategorier**  
   Tjänster, projekttyper och regioner ska hämtas från kontrollerade värden. Annars uppstår varianter som `Industri`, `industri` och `Industrifastighet`, vilket försämrar filtreringen.

4. **Stöd för valfria avsnitt**  
   Mallen får inte tvinga redaktören att hitta på innehåll. Tomma avsnitt ska döljas eller tas bort.

5. **Publiceringsgodkännande som process**  
   Ett booleskt fält är inte i sig ett juridiskt godkännande. Själva godkännandet bör också dokumenteras på en bestämd plats.

6. **Separata datum**  
   Genomförandedatum och publiceringsdatum måste hållas isär. Annars kan ett äldre projekt framstå som nyligen genomfört.

7. **Arkivets sökning ska bygga på strukturerad data**  
   Sökning och filter bör använda titel, sammanfattning, ort, tjänster, projekttyp, byggnadstyp och brödtext. Manuella SEO-nyckelord ska inte vara den primära lösningen.

8. **Kvalitetsgräns för publicering**  
   Alla utförda arbeten behöver inte bli publika referensprojekt. Projektet ska bidra med tydlig information, visuellt material eller kommersiellt värde.

---

# Rekommenderad förbättrad lösning

Den färdiga lösningen bör bestå av fyra lager:

```text
1. Content collection-schema
   Säkrar att informationen är komplett och korrekt formaterad.

2. Markdown-mall
   Ger redaktören en enhetlig berättarstruktur.

3. Gemensam Astro-layout och komponenter
   Säkrar samma visuella uppbyggnad på samtliga projektsidor.

4. Publiceringschecklista
   Säkrar kvalitet, godkännanden, SEO, bilder och interna länkar.
```

Detta är starkare än att enbart kopiera en tidigare projektsida. Kopierade hela sidor tenderar med tiden att få olika markup, gamla komponenter, brutna länkar och motstridiga metadata.
