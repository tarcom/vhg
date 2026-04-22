# vhg

php -S localhost:8000 -t .

old_site indeholder: wget --mirror --page-requisites --convert-links --adjust-extension --domains vhg.dk --wait=1 https://www.vhg.dk/

## DNS-opsætning og hosting (vigtigt at forstå)

### Nuværende setup (før go-live)

Domænet `vhg.dk` er registreret og hosted hos **Netgiganten** (`web2.netgiganten.dk`, IP: `195.242.130.12`).

DNS Zone Editor hos Netgiganten viser:

| Record | Type | Peger på |
|--------|------|----------|
| `vhg.dk` | A | `195.242.130.12` (Netgiganten) |
| `*.vhg.dk` | CNAME | `dns.umbraco.io` (DBU's CMS) |
| `www.vhg.dk` | *(ingen specifik — falder igennem til wildcard)* | `dns.umbraco.io` |

Det betyder at `www.vhg.dk` rammer **DBU's Umbraco CMS-platform**, som hoster den gamle VHG-side.
Flowet er: `vhg.dk` → Netgiganten → `.htaccess` redirect → `www.vhg.dk` → DBU/Umbraco.

Den gamle side er **ikke** en fil på Netgiganten — den kører fuldstændigt på DBU's servere.
En lokal kopi er gemt under `old_site/www.vhg.dk/` (hentet med wget).

`public_html/` på Netgiganten indeholder kun:
- `.htaccess` (www-redirect + 3 short URL redirects + PHP-handler)
- `index.html` (tom testfil — vises aldrig da .htaccess redirecter til www)

### Go-live: sådan skifter du til den nye side

1. Upload den nye sides filer til `public_html/` på Netgiganten (via FTP eller deploy-script)
2. Upload `bestyrelsen/` mappen til `public_html/bestyrelsen/`
3. Tilføj en specifik `www` A-record i Zone Editor:
   - Navn: `www.vhg.dk`
   - Type: `A`
   - Værdi: `195.242.130.12`
4. Den specifikke A-record overskriver wildcarden — `www.vhg.dk` peger nu på Netgiganten
5. Vent op til 1 time (TTL = 3600s) på at DNS propagerer

### Rollback til DBU-siden

Hvis noget går galt efter go-live, kan du rulle tilbage:

1. Gå til Zone Editor hos Netgiganten
2. Slet `www.vhg.dk` A-recorden du tilføjede
3. Wildcarden `*.vhg.dk → dns.umbraco.io` tager automatisk over igen
4. Vent op til 1 time — herefter vises DBU-siden igen

Rollback er altså fuldt reversibelt så længe DBU holder siden kørende.

### Bestyrelsesportal (/bestyrelsen/)

Mappen `bestyrelsen/` skal ligge i `public_html/bestyrelsen/` (ikke inde i `ny/`).
PHP-filer kræver PHP 8.1+ — cPanel-handleren i `.htaccess` sørger for det.
Login-dokumentation: `documentation/bestyrelse_logins.md`

python3 -m http.server 8000

## Kalenderdata (Conventus)

Kalendersiden bruger en cachet JSON-fil i stedet for live scrape ved hvert side-load.

- Kilde: Conventus holdoversigter/abonnementer
- Cache-fil: assets/data/calendar-events.json
- Frontend læser kun cache-filen

Opdater cache manuelt:

php scripts/scrape_conventus_calendar.php

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