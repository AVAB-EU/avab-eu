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
        expandedText: "Tydligt tal, musik och utrop i rätt nivå för hela lokalen. AVAB projekterar, installerar och driftsätter ljudlösningar anpassade efter verksamheten och miljön.",
        href: "/tjanster/ljudsystem/",
        image: "/assets/takhogtalare-installation-takvy.webp",
        imageAlt: "Installerade takhögtalare i en modern lokal",
      },
      {
        title: "Mikrofoner",
        group: "Ljud & kommunikation",
        shortText: "Mikrofonlösningar för tydlig och pålitlig kommunikation.",
        expandedText: "Rätt mikrofonlösning gör kommunikationen enklare och mer pålitlig. AVAB hjälper till med system för tal, presentation, undervisning och professionell användning.",
        href: "/tjanster/mikrofoner/",
        image: "/assets/mikrofoner-hero.webp",
        imageAlt: "Professionella mikrofoner för tal och presentation",
      },
      {
        title: "Taluppfattbarhet",
        group: "Ljud & kommunikation",
        shortText: "Mätning och projektering som gör tal tydligt där det ska nå fram.",
        expandedText: "När akustik och ljudsystem samverkar blir budskap lättare att uppfatta. AVAB mäter, analyserar och projekterar lösningar för tydligare tal i lokalen.",
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
        expandedText: "Tillgänglig kommunikation för personer med hörselnedsättning. AVAB projekterar, installerar och verifierar hörslingor för olika typer av lokaler.",
        href: "/tjanster/horslinga/",
        image: "/assets/horslinga-installation-golv.webp",
        imageAlt: "Installation av hörslinga i golv",
      },
      {
        title: "Talat utrymningslarm",
        group: "Tillgänglighet & säkerhet",
        shortText: "Tydliga röstmeddelanden som vägleder vid utrymning.",
        expandedText: "I en kritisk situation behöver informationen höras och förstås. AVAB levererar talade utrymningslarm med tydliga röstmeddelanden anpassade efter lokalen.",
        href: "/tjanster/talat-utrymningslarm/",
        image: "/assets/Talat-utrymmningslarm-hero.webp",
        imageAlt: "Teknik för talat utrymningslarm",
      },
      {
        title: "Rastsignal",
        group: "Tillgänglighet & säkerhet",
        shortText: "Tydliga, zonindelade signaler för skolans vardag.",
        expandedText: "Rätt signal på rätt plats skapar struktur utan att störa mer än nödvändigt. AVAB erbjuder flexibla rastsignalsystem med tydlig och enkel styrning.",
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
        expandedText: "Rätt kameralösning ger bättre överblick över de ytor som behöver bevakas. AVAB hjälper till med kameror, lagring och sökfunktioner anpassade efter platsens behov.",
        href: "/tjanster/kameraovervakning/",
        image: "/assets/overvakningskamera-fasad-hero.webp",
        imageAlt: "Övervakningskamera installerad på en fasad",
      },
      {
        title: "Bakgrundsmusik",
        group: "Kontroll & upplevelse",
        shortText: "Jämn ljudtäckning och enkel zonstyrning för rätt atmosfär.",
        expandedText: "Bakgrundsmusik ska skapa rätt känsla utan att ta över. AVAB utformar lösningar med jämn ljudtäckning och enkel styrning för lokalens olika zoner.",
        href: "/tjanster/bakgrundsmusik/",
        image: "/assets/Bakrundsmusik-restaurang-hundfjällscenter.webp",
        imageAlt: "Restaurangmiljö med integrerad bakgrundsmusik",
      },
      {
        title: "Styrsystem & integration",
        group: "Kontroll & upplevelse",
        shortText: "Samlad och användarvänlig styrning av lokalens teknik.",
        expandedText: "När tekniken samlas i ett tydligt gränssnitt blir den enklare att använda. AVAB integrerar styrning av ljud, bild, ljus och säkerhet efter verksamhetens behov.",
        href: "/tjanster/styrsystem-integration/",
        image: "/assets/styrpanel-pa-travagg.webp",
        imageAlt: "Styrpanel monterad på trävägg",
      },
    ],
  },
];
