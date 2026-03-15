# vhg


old_site indeholder: wget --mirror --page-requisites --convert-links --adjust-extension --domains vhg.dk --wait=1 https://www.vhg.dk/

python3 -m http.server 8000

## Kalenderdata (Conventus)

Kalendersiden bruger en cachet JSON-fil i stedet for live scrape ved hvert side-load.

- Kilde: Conventus holdoversigter/abonnementer
- Cache-fil: assets/data/calendar-events.json
- Frontend læser kun cache-filen

Opdater cache manuelt:

python3 scripts/scrape_conventus_calendar.py

Anbefaling:

- Scrap ikke ved hver sidevisning (langsommere, mere skrøbeligt, afhængigt af ekstern side)
- Kør scraperen periodisk (fx dagligt/ugentligt) og deploy den genererede JSON