export interface ServiceOverviewItem {
  title: string;
  group: string;
  shortText: string;
  expandedText: string;
  href: string;
  image: string;
  imageAlt: string;
}

export interface ServiceOverviewGroup {
  title: string;
  services: ServiceOverviewItem[];
  desktopColumns?: number;
}

export const serviceOverviewGroups: ServiceOverviewGroup[] = [
  {
    title: "Ljud & kommunikation",
    desktopColumns: 3,
    services: [
      {
        title: "Ljudsystem",
        group: "Ljud & kommunikation",
        shortText: "Tydligt tal, musik och utrop i rätt nivå för hela lokalen.",
        expandedText: "Tydligt ljud där det behövs. AVAB projekterar och installerar ljudsystem för tal, musik och utrop – anpassade efter lokalen, verksamheten och hur systemet ska användas.",
        href: "/tjanster/ljudsystem/",
        image: "/assets/takhogtalare-installation-takvy.webp",
        imageAlt: "Installerade takhögtalare i en modern lokal",
      },
      {
        title: "Mikrofoner",
        group: "Ljud & kommunikation",
        shortText: "Mikrofonlösningar för tydlig och pålitlig kommunikation.",
        expandedText: "Rätt mikrofon för rätt situation. Från presentation och undervisning till träning och större anläggningar hjälper AVAB till att skapa en stabil och lättanvänd lösning.",
        href: "/tjanster/mikrofoner/",
        image: "/assets/mikrofoner-hero.webp",
        imageAlt: "Professionella mikrofoner för tal och presentation",
      },
      {
        title: "Taluppfattbarhet",
        group: "Ljud & kommunikation",
        shortText: "Mätning och projektering som gör tal tydligt där det ska nå fram.",
        expandedText: "När varje ord måste gå fram. AVAB hjälper till att skapa tydlig kommunikation i miljöer där akustik, bakgrundsljud och avstånd annars gör tal svårt att uppfatta.",
        href: "/tjanster/taluppfattbarhet/",
        image: "/assets/STI-matning-hero.webp",
        imageAlt: "Mätutrustning för kontroll av taluppfattbarhet",
      },
    ],
  },
  {
    title: "Tillgänglighet & säkerhet",
    desktopColumns: 3,
    services: [
      {
        title: "Hörslinga",
        group: "Tillgänglighet & säkerhet",
        shortText: "Tillgänglig kommunikation för personer med hörselnedsättning.",
        expandedText: "Tillgängligt ljud för fler. AVAB projekterar och installerar hörslingor som gör tal och information tydligare för personer med hörselnedsättning.",
        href: "/tjanster/horslinga/",
        image: "/assets/horslinga-installation-golv.webp",
        imageAlt: "Installation av hörslinga i golv",
      },
      {
        title: "Talat utrymningslarm",
        group: "Tillgänglighet & säkerhet",
        shortText: "Tydliga röstmeddelanden som vägleder vid utrymning.",
        expandedText: "Tydliga instruktioner när det verkligen gäller. AVAB hjälper till med talade utrymningslarm där viktig information snabbt behöver nå människorna i lokalen.",
        href: "/tjanster/talat-utrymningslarm/",
        image: "/assets/Talat-utrymmningslarm-hero.webp",
        imageAlt: "Teknik för talat utrymningslarm",
      },
      {
        title: "Rastsignal",
        group: "Tillgänglighet & säkerhet",
        shortText: "Tydliga, zonindelade signaler för skolans vardag.",
        expandedText: "Mer än bara en skolklocka. AVAB projekterar och installerar rastsignalsystem som hanterar signaler, utrop och zoner för en smidigare vardag i skolan.",
        href: "/rastsignal/",
        image: "/assets/skola-flyg-vy-hero.webp",
        imageAlt: "Skolbyggnad där rastsignal skapar struktur i vardagen",
      },
    ],
  },
  {
    title: "Bild & möten",
    desktopColumns: 3,
    services: [
      {
        title: "Konferensteknik",
        group: "Bild & möten",
        shortText: "Mötesrum där ljud, bild, kamera och styrning fungerar som en helhet.",
        expandedText: "Konferensteknik som är enkel i vardagen. AVAB projekterar och installerar mötesrum med skärmar, kameror, mikrofoner, DSP, BYOM, presentation och styrning.",
        href: "/tjanster/konferensteknik/",
        image: "/assets/konferensrum-stor-skarm-bord.webp",
        imageAlt: "Modernt konferensrum med stor skärm och integrerad AV-teknik",
      },
      {
        title: "Skärmar & projektorer",
        group: "Bild & möten",
        shortText: "Rätt bildyta, placering och signalväg för lokalen och användningen.",
        expandedText: "AVAB hjälper till att välja och installera professionella skärmar, projektorer och bildlösningar utifrån siktlinjer, ljusförhållanden, bildstorlek och hur lokalen faktiskt används.",
        href: "/tjanster/skarmar-projektorer/",
        image: "/assets/konferensrum-stor-skarm-bord.webp",
        imageAlt: "Stor bildskärm i professionell mötesmiljö",
      },
      {
        title: "Digital signage",
        group: "Bild & möten",
        shortText: "Informationsskärmar och digital kommunikation för publika miljöer.",
        expandedText: "Digital signage samlar skärmar, innehåll, signaldistribution och central hantering i en lösning för information, orientering och kommunikation.",
        href: "/tjanster/digital-signage/",
        image: "/assets/digital-signage.webp",
        imageAlt: "Digital signage och informationsskärm i publik miljö",
      },
    ],
  },
  {
    title: "Kontroll & upplevelse",
    desktopColumns: 3,
    services: [
      {
        title: "Kameraövervakning",
        group: "Kontroll & upplevelse",
        shortText: "Överblick och sökbar dokumentation anpassad efter platsen.",
        expandedText: "Bättre överblick och tryggare miljöer. AVAB hjälper till med kameraövervakning, lagring och sökfunktioner anpassade efter platsen och verksamhetens behov.",
        href: "/tjanster/kameraovervakning/",
        image: "/assets/overvakningskamera-fasad-hero.webp",
        imageAlt: "Övervakningskamera installerad på en fasad",
      },
      {
        title: "Exakt sökning & AI",
        group: "Kontroll & upplevelse",
        shortText: "Sök snabbare i inspelat material med analys som stödjer utredningen.",
        expandedText: "AI-stödd analys och metadata hjälper användaren att filtrera videomaterial och hitta relevanta personer, fordon eller händelser snabbare.",
        href: "/tjanster/exakt-sokning-ai-analys/",
        image: "/assets/Kameraovervakning-dahua-hero.webp",
        imageAlt: "Gränssnitt för kameraövervakning med flera kameravyer",
      },
      {
        title: "Bakgrundsmusik",
        group: "Kontroll & upplevelse",
        shortText: "Jämn ljudtäckning och enkel zonstyrning för rätt atmosfär.",
        expandedText: "Rätt känsla i rätt zon. AVAB utformar bakgrundsmusik med ljudnivå, innehåll och styrning anpassade efter verksamhetens olika delar.",
        href: "/tjanster/bakgrundsmusik/",
        image: "/assets/Bakrundsmusik-restaurang-hundfjällscenter.webp",
        imageAlt: "Restaurangmiljö med integrerad bakgrundsmusik",
      },
      {
        title: "Nätverk, switchar & fiber",
        group: "Kontroll & upplevelse",
        shortText: "Nätverk för AV med PoE, Dante, AV-over-IP, VLAN och fiber.",
        expandedText: "När ljud, bild, kamera och styrning går över nätverket behöver infrastrukturen vara en del av AV-projekteringen. AVAB hjälper till med switchkrav, PoE, VLAN, Dante, AV-over-IP, koppar och fiber.",
        href: "/tjanster/natverk-switchar-router-fiber/",
        image: "/assets/sorby-sporthall-teknikrack.webp",
        imageAlt: "Teknikrack med nätverksswitchar och AV-utrustning",
      },
      {
        title: "Styrsystem & integration",
        group: "Kontroll & upplevelse",
        shortText: "Samlad och användarvänlig styrning av lokalens teknik.",
        expandedText: "Flera system – en enklare användning. AVAB samlar teknik och funktioner i tydliga styrsystem så att användaren slipper hantera flera separata gränssnitt.",
        href: "/tjanster/styrsystem-integration/",
        image: "/assets/styrpanel-pa-travagg.webp",
        imageAlt: "Styrpanel monterad på trävägg",
      },
      {
        title: "Ljus",
        group: "Kontroll & upplevelse",
        shortText: "Ljusscenarier, RGB, DMX och styrning för verksamhet och upplevelse.",
        expandedText: "Ljus som följer verksamheten. AVAB projekterar och installerar ljuslösningar för gym, spa, restaurang, scen, skola och andra publika miljöer – med scenarier, RGB, DMX och integration med övrig teknik.",
        href: "/tjanster/ljus/",
        image: "/assets/gym-interior-bla-ledbelysning.webp",
        imageAlt: "Träningsmiljö med blå LED-belysning",
      },
    ],
  },
];
