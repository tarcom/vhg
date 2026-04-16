# VHG Bestyrelsesportal — Login-oplysninger

Opdateret: April 2026

> Denne fil er KUN til intern brug. Send hvert login direkte til den pågældende person.
> Login-siden: https://vhg.dk/bestyrelsen/

## Brugernavn = registreret e-mail. Adgangskode = ét ord.

| Navn                            | Rolle                    | E-mail (brugernavn)                   | Adgangskode |
|---------------------------------|--------------------------|---------------------------------------|-------------|
| Allan Skov                      | Formand                  | formand@vhg.dk                        | Havblik    |
| Lars Jakobsen                   | Næstformand              | lkj@evt.dk                            | Bjergtak    |
| Jonas Bundgaard Kristensen      | Kasserer                 | jonsekristensen@hotmail.com           | Vindkast    |
| Anne-Britt Andersen             | Sekretær                 | annebrittandersenc@gmail.com          | Lynflugt    |
| Helle Marie Rønnov              | Suppleant                | hellemarieroennov@gmail.com           | Skovdis     |
| Berit Andersen                  | Formand håndbold         | beritandersen@hotmail.com             | Strandfod   |
| Marc Agerbo Jakobsen            | Formand fodbold          | agerbo100@gmail.com                   | Daggry      |
| Claus René Mikkelsen            | Formand badminton        | clmik8@gmail.com                      | Isfugl      |
| Nikolaj Søndergaard Sørensen    | Formand e-sport          | Nikolaj0299@gmail.com                 | Regnbue     |
| Mikael Ivan Vinther Christensen | Formand skateklub        | mikael.ivan.christensen@gmail.com     | Tidvand     |
| Jimmi Kildedal                  | Formand floorball        | helldorf@live.dk                      | Kystfugl    |
| Inger Marie Badsberg            | Formand gymnastik        | imbadsberg@gmail.com                  | Morgenry    |
| Per Kristensen                  | Formand bordtennis       | Murerper@hotmail.dk                   | Havblik     |

---

## Glemt adgangskode
Brugeren går til https://vhg.dk/bestyrelsen/forgot.php og indtaster sin e-mail.
Systemet sender automatisk en ny adgangskode til den registrerede adresse.

## Ændring af adgangskode manuelt
Åbn `bestyrelsen/auth.php` og erstat hashen. Generer ny hash:
```bash
php -r "echo password_hash('NytOrd', PASSWORD_DEFAULT);"
```
