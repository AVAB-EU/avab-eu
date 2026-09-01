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
}

export const serviceOverviewGroups: ServiceOverviewGroup[] = [
  {
    title: "Ljud & kommunikation",
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
    title: "Kontroll & upplevelse",
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
        title: "Bakgrundsmusik",
        group: "Kontroll & upplevelse",
        shortText: "Jämn ljudtäckning och enkel zonstyrning för rätt atmosfär.",
        expandedText: "Rätt känsla i rätt zon. AVAB utformar bakgrundsmusik med ljudnivå, innehåll och styrning anpassade efter verksamhetens olika delar.",
        href: "/tjanster/bakgrundsmusik/",
        image: "/assets/Bakrundsmusik-restaurang-hundfjällscenter.webp",
        imageAlt: "Restaurangmiljö med integrerad bakgrundsmusik",
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
    ],
  },
];
