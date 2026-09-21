---
draft: false
slug: /tjanster/natverk-switchar-router-fiber/
service: Nätverk, switchar & fiber

seo:
  title: Nätverk, switchar & fiber för AV-system | AVAB
  description: AVAB projekterar nätverk för AV-teknik med PoE, Dante, AES67, AV-over-IP, switchar, VLAN och fiber för kamera, ljud, styrning och bilddistribution.
  noindex: false

h1: "Nätverk för AV-system som är byggda för drift"

hero:
  eyebrow: "Tjänst: Nätverk, switchar & fiber"
  lead: AVAB projekterar och samordnar nätverk för AV-teknik där kamera, ljud, styrning, digital signage och bilddistribution behöver stabil bandbredd, rätt switchfunktioner och tydlig dokumentation.
  image:
    src: /assets/sorby-sporthall-teknikrack.webp
    alt: Teknikrack med nätverksswitchar och AV-utrustning
    width: 1200
    height: 795
  primaryLabel: Skicka ritningar eller boka genomgång
  primaryHref: /kontakt/
  secondaryLabel: Läs om projektering
  secondaryHref: /tjanster/projektering/

facts:
  - label: Nätverk
    value: Koppar, fiber och switchar
  - label: AV
    value: Dante, AES67 och AV-over-IP
  - label: Ström
    value: PoE för kameror och AV-enheter
  - label: Struktur
    value: VLAN, multicast och tydlig segmentering
  - label: Samordning
    value: AVAB tillsammans med kundens IT
  - label: Leverans
    value: Projektering, test och dokumentation

principle:
  eyebrow: Svar direkt
  title: AV-nätverk måste planeras som en del av systemet
  text: När ljud, kamera, styrning och bild går över nätverket blir switchar, kabelvägar, bandbredd och PoE en del av själva AV-funktionen. Ett nätverk som är tillräckligt för vanlig kontorsdata är inte automatiskt rätt dimensionerat för AV-over-IP eller många PoE-enheter.
  bullets:
    - Bandbredd dimensionerad efter verklig trafik
    - PoE-budget för anslutna enheter
    - VLAN och segmentering där det behövs
    - Multicast planerat för AV-over-IP
    - Fiber där avstånd eller störmiljö kräver det
  image:
    src: /assets/Kameraovervakning-dahua-hero.webp
    alt: Professionellt videohanteringssystem i nätverksbaserad kameraanläggning
    width: 2032
    height: 770

sections:
  - id: koppar-och-fiber
    eyebrow: Koppar & fiber
    title: Rätt överföringsmedia beror på avstånd och funktion
    paragraphs:
      - För kopparnätverk är 100 meter normal maximal kanallängd. Längre sträckor eller behov av galvanisk separation löses ofta bättre med fiber.
      - Cat5e kan räcka för enklare gigabitbehov, medan Cat6 och Cat6a ger mer marginal beroende på hastighet, installation och framtida krav. Exakt val ska göras efter systemets trafik och den fysiska miljön.
    bullets:
      - Koppar för kortare strukturerade nätverkssträckor
      - Fiber för längre avstånd och störkänsliga miljöer
      - Dokumenterade patch- och kabelvägar
      - Rätt kontakt och terminering för vald lösning

  - id: poe
    eyebrow: PoE
    title: Switchens effektbudget är lika viktig som antalet portar
    paragraphs:
      - Kameror, touchpaneler, accesspunkter och andra AV-enheter kan strömförsörjas via PoE. Då måste switchens totala effektbudget räcka för samtliga anslutna enheter, inte bara antalet nätverksportar.
      - Kabelkvalitet, temperatur och buntning påverkar också installationen när mycket effekt distribueras över nätverkskabel.
    bullets:
      - Inventera varje enhets PoE-klass och effektbehov
      - Dimensionera total PoE-budget med marginal
      - Kontrollera kabelkvalitet och installation
      - Dokumentera vilka portar som försörjer kritiska enheter

  - id: av-over-ip
    eyebrow: AV-over-IP
    title: Bild och ljud över nätverk ställer högre krav på designen
    paragraphs:
      - AV-over-IP distribuerar ljud och bild som nätverkstrafik över switchar. Det gör systemet skalbart, men innebär samtidigt att nätverket måste hantera rätt bandbredd och trafikflöden.
      - I större system behöver multicast, VLAN och switchkonfiguration planeras tillsammans med kundens IT så att AV-trafiken inte skapar problem för övriga delar av nätverket.
    bullets:
      - Bandbredd efter antal källor och mottagare
      - Multicast där plattformen kräver det
      - VLAN och logisk segmentering
      - Switchar med funktioner som matchar AV-plattformen
    image:
      src: /assets/konferensrum-stor-skarm-bord.webp
      alt: Konferensrum där bild och ljud kan distribueras över nätverk
      width: 1200
      height: 900

  - id: dante
    eyebrow: Dante & nätverksljud
    title: Nätverksljud kräver konsekvent struktur
    paragraphs:
      - Dante och AES67 används för att transportera ljud över IP i många professionella AV-system. Fördelen är flexibel routing mellan enheter, men stabil drift kräver att nätverket är korrekt konfigurerat.
      - Switchar, adressering, VLAN och dokumentation behöver därför behandlas som en del av ljudsystemet, inte som en separat eftertanke.
    bullets:
      - Nätverksljud mellan DSP, förstärkare och andra enheter
      - Logisk segmentering och tydlig namnstandard
      - Dokumentation av signalvägar och nätverksstruktur
      - Samordning med övrig AV- och IT-infrastruktur

  - id: samordning
    eyebrow: IT-samordning
    title: AVAB och kundens IT behöver arbeta från samma nätverksplan
    paragraphs:
      - I projekt där AV-system använder kundens befintliga nätverk behöver ansvar, VLAN, IP-plan, switchkapacitet och behörigheter definieras tidigt.
      - AVAB kan ta fram kravbild och AV-underlag, medan kundens IT eller nätverksleverantör ansvarar för den del av infrastrukturen som ligger utanför AV-leveransen.
    bullets:
      - Tydlig gränsdragning mellan AV och IT
      - IP- och VLAN-planering
      - Switch- och portkrav
      - Test, märkning och dokumentation före överlämning

proof:
  eyebrow: Referens
  title: Lesjöfors AB – Dante och Q-SYS i konferenssystem
  text: På Lesjöfors AB används Q-SYS tillsammans med AEC och Dante i konferensrummet. Det är ett konkret exempel på hur nätverksbaserat ljud och AV-system blir en del av samma tekniska plattform.
  image:
    src: /assets/lesjofors-ab.webp
    alt: Lesjöfors AB konferensrum med Q-SYS, Dante och integrerad AV-teknik
    width: 1200
    height: 900
  linkLabel: Se referensen Lesjöfors AB
  linkHref: /referenser/lesjofors-ab/

faq:
  title: Vanliga frågor om nätverk för AV
  lead: Korta svar om PoE, fiber, switchar och nätverksbaserad AV.
  items:
    - question: Hur lång får en nätverkskabel vara?
      answer: För kopparnätverk är 100 meter normal maximal kanallängd. Behövs längre sträckor används ofta fiber eller aktiv nätverksutrustning.
    - question: När behövs fiber?
      answer: Fiber är särskilt relevant vid längre avstånd, behov av galvanisk separation eller miljöer där elektriska störningar gör koppar mindre lämpligt.
    - question: Vad är PoE?
      answer: PoE innebär att nätverkskabeln även levererar ström till enheten. Switchens PoE-budget måste dimensioneras efter den totala effekten för alla anslutna enheter.
    - question: Vad är AV-over-IP?
      answer: AV-over-IP innebär att ljud och bild distribueras som nätverkstrafik över switchar i stället för genom enbart traditionella punkt-till-punkt-kablar.
    - question: Vad är Dante?
      answer: Dante är en nätverksbaserad teknik för professionell ljuddistribution över IP och används i många moderna AV-system.
    - question: Behöver AV-system eget VLAN?
      answer: Inte alltid, men i större eller mer komplexa installationer används ofta VLAN för att separera och strukturera AV-trafik. Lösningen ska samordnas med kundens IT.
    - question: Kan AVAB arbeta med vår befintliga IT-avdelning?
      answer: Ja. AVAB kan ta fram AV-krav, portbehov och nätverksunderlag och samordna lösningen med kundens IT eller nätverksleverantör.

cta:
  eyebrow: Planerar ni nätverksbaserad AV?
  title: Ska nätverket bära ljud, bild, kamera och styrning?
  text: Vi hjälper er att definiera bandbredd, PoE, switchfunktioner, fiber och nätverksstruktur så att AV-systemet fungerar stabilt över tid.
  primaryLabel: Boka kostnadsfri genomgång
  primaryHref: /kontakt/
  secondaryLabel: Läs om projektering
  secondaryHref: /tjanster/projektering/
  points:
    - PoE, VLAN och switchkrav
    - Dante, AES67 och AV-over-IP
    - Koppar, fiber och dokumenterade signalvägar
---
