# vhg


old_site indeholder: wget --mirror --page-requisites --convert-links --adjust-extension --domains vhg.dk --wait=1 https://www.vhg.dk/

python3 -m http.server 8000
php -S 0.0.0.0:8000 -t /workspaces/vhg

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

## FTP deploy

Automatisk upload via curl-script:

bash scripts/deploy_vhg_ftp.sh

Sæt host og remote mappe med miljøvariabler:

FTP_HOST=ftp.vhg.dk bash scripts/deploy_vhg_ftp.sh

Default remote mappe er `/public_html/ny`.

Brugernavn default er allan@vhg.dk.
Password kan sættes i miljøvariabel eller indtastes ved prompt:

FTP_PASSWORD='DIN_KODE' FTP_HOST=ftp.vhg.dk bash scripts/deploy_vhg_ftp.sh

Hvis serveren kræver FTPS i stedet for FTP:

FTP_PROTOCOL=ftps FTP_HOST=ftp.vhg.dk bash scripts/deploy_vhg_ftp.sh

Test uden at uploade (dry run):

DEPLOY_DRY_RUN=1 FTP_HOST=ftp.vhg.dk bash scripts/deploy_vhg_ftp.sh

Hvis du vil overskrive remote mappe manuelt:

FTP_HOST=ftp.vhg.dk FTP_REMOTE_DIR=/public_html/ny bash scripts/deploy_vhg_ftp.sh

## GitHub Actions auto deploy til /public_html/ny

Workflow-fil:

.github/workflows/deploy-ftp.yml

Trigger:

- Ved push til main
- Kan også køres manuelt via workflow_dispatch

Sæt denne repository secret i GitHub:

- FTP_PASSWORD

Server og brugernavn er hardcoded i workflowen:

- server: ftp.vhg.dk
- username: allan@vhg.dk

Når secrets er sat, vil hver push til main automatisk uploade siden til:

/public_html/ny/