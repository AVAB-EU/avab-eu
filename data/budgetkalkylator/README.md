# AVAB:s budgetkalkylator – prisuppdatering

Excel-filen är den interna mastern. Den får inte flyttas till `public/` eller på annat sätt publiceras.

## Ändra ett pris

1. Öppna `data/budgetkalkylator/AVAB-budgetkalkyl-master.xlsx`.
2. Ändra intern kalkyl eller manuellt webbpris på rätt områdesflik.
3. Kontrollera att den avsedda raden visas korrekt i fliken `Webbexport`.
4. Spara Excel-filen.
5. Kör från projektroten:

   `python scripts/build_budgetkalkyl_data.py`

6. Kontrollera `src/data/budgetkalkylator/priser.generated.json`.
7. Kör:

   `npm run build`

8. Kontrollera kalkylatorn på `/budgetkalkylator-av-teknik/`.

Pythonmiljön behöver paketet `openpyxl`. Exportscriptet läser endast `Webbexport` och skriver aldrig tillbaka till Excel. Interna komponenter, inköpspriser, marginaler, leverantörer och produktmodeller exporteras inte.

Sporthall innehåller de befintliga startvärdena. Simhall, Konferens, Restaurang och Gym är teststartvärden tills AVAB har granskat och ersatt dem.
