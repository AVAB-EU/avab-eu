# Global standard för innehållsläsbarhet och WOT

Status: Active
Owner: AVAB
Last reviewed: 2026-08-24

Den här standarden gäller textinnehåll på tjänste-, miljö-, referens-, kunskaps- och specialsidor. WOT betyder **Wall of Text** och är AVAB:s interna term för textblock som är svåra att skanna på grund av längd, täthet eller svag visuell hierarki.

## Grundregel

**Struktur först, betoning sedan.**

1. Bedöm först om ett långt innehåll naturligt bör delas upp.
2. Använd underrubrik, lista, kort, box eller grid endast när innehållets betydelse och relationer motiverar det.
3. Använd därefter selektiv `<strong>` för viktiga ord eller korta fraser.

En notice-box är inte en generell lösning på WOT. Den används bara när innehållet uppfyller notice-kriterierna i `layout.md`.

## Struktur

- Behåll ett sammanhängande stycke när resonemanget behöver läsas som en helhet.
- Dela vid verkliga ämnes-, process- eller beslutsgränser, inte efter ett godtyckligt antal meningar.
- Använd lista när innehållet faktiskt består av jämförbara punkter eller steg.
- Använd underrubrik när ett nytt delämne behöver kunna hittas självständigt.
- Använd kort eller grid när posterna är parallella och begripliga var för sig.
- Flytta inte text till box enbart för att sidan ska se mer varierad ut.

## Selektiv betoning

Fetstil ska hjälpa läsaren att hitta meningsbärande ord eller korta fraser.

- Undvik hela meningar i fetstil.
- Upprepa inte samma betoning genom ett helt avsnitt.
- Använd inte fetstil dekorativt eller för keyword stuffing.
- Som riktvärde används normalt cirka 1–3 meningsbärande betoningar per vanligt stycke. Det är en heuristik, inte ett hårt krav.
- Betoning får inte förändra betydelsen eller få osäker information att framstå som ett verifierat faktum.

## Kontrollerad tillämpning

Standarden innebär inte att alla befintliga sidor ska skrivas om i Fas 1D. Befintligt innehåll bedöms och migreras i respektive senare sidfas. Ändra inte fakta, budskap eller innehållsmängd utan underlag, och skapa inte lokal special-CSS för att lösa läsbarhetsproblem som täcks av befintliga globala primitiver.

Vid granskning ska följande kunna besvaras:

- Har texten en begriplig läsordning utan visuell styling?
- Speglar eventuell uppdelning innehållets verkliga struktur?
- Hjälper varje betoning skanning?
- Har listor, kort och notice-boxar rätt semantisk roll?
- Fungerar resultatet utan horisontell overflow och med naturlig textbrytning på mobil?
