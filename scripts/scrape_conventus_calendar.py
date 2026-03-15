#!/usr/bin/env python3
"""Scrape Conventus hold pages and write cached calendar events JSON.

The frontend calendar reads assets/data/calendar-events.json.
Run this script manually when you want to refresh data.
"""

from __future__ import annotations

import datetime as dt
import html
import json
import re
import urllib.request
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable

OUT_FILE = Path(__file__).resolve().parents[1] / "assets" / "data" / "calendar-events.json"

SOURCES = [
    {
        "sport": "badminton",
        "sport_label": "Badminton",
        "url": "https://www.conventus.dk/dataudv/www/holdoversigt2.php?foreningsid=1212&afdelingsid=8191&kolone1_width=35&kolone2_width=25&min_height=250&handelsbetingelser=1&skjul_nyt_medlem=0&skjul_allerede_medlem=0",
    },
    {
        "sport": "bordtennis",
        "sport_label": "Bordtennis",
        "url": "https://www.conventus.dk/dataudv/www/holdoversigt2.php?foreningsid=1212&afdelingsid=8246&kolone1_width=35&kolone2_width=25&min_height=250&handelsbetingelser=1&skjul_nyt_medlem=0&skjul_allerede_medlem=0",
    },
    {
        "sport": "e-sport",
        "sport_label": "E-sport",
        "url": "https://www.conventus.dk/dataudv/www/holdoversigt2.php?foreningsid=1212&afdelingsid=6018&kolone1_width=35&kolone2_width=25&min_height=250&handelsbetingelser=1&skjul_nyt_medlem=0&skjul_allerede_medlem=0",
    },
    {
        "sport": "floorball",
        "sport_label": "Floorball",
        "url": "https://www.conventus.dk/dataudv/www/holdoversigt2.php?foreningsid=1212&afdelingsid=8247&kolone1_width=35&kolone2_width=25&min_height=250&handelsbetingelser=1&skjul_nyt_medlem=0&skjul_allerede_medlem=0",
    },
    {
        "sport": "gymnastik",
        "sport_label": "Gymnastik",
        "url": "https://www.conventus.dk/dataudv/www/holdoversigt2.php?foreningsid=1212&afdelingsid=7250&kolone1_width=35&kolone2_width=25&min_height=250&handelsbetingelser=1&skjul_nyt_medlem=0&skjul_allerede_medlem=0",
    },
    {
        "sport": "skateklub",
        "sport_label": "Skateklub",
        "url": "https://www.conventus.dk/dataudv/www/holdoversigt2.php?foreningsid=1212&afdelingsid=61583&kolone1_width=35&kolone2_width=25&min_height=250&handelsbetingelser=1&skjul_nyt_medlem=0&skjul_allerede_medlem=0",
    },
    {
        "sport": "disc-golf",
        "sport_label": "Disc Golf",
        "url": "https://www.conventus.dk/dataudv/www/holdoversigt2.php?foreningsid=1212&afdelingsid=8247&kolone1_width=35&kolone2_width=25&min_height=250&handelsbetingelser=1&skjul_nyt_medlem=0&skjul_allerede_medlem=0",
    },
    {
        "sport": "fodbold",
        "sport_label": "Fodbold",
        "url": "https://www.conventus.dk/dataudv/www/abonnement.php?foreningsid=1212&abonnementsgruppe=5395&abonnementsafdeling=&vis_abonnementer=1&vis_laengde=1&vis_holdnavne=1&layout=relativ",
    },
    {
        "sport": "fodbold",
        "sport_label": "Fodbold",
        "url": "https://www.conventus.dk/dataudv/www/abonnement.php?foreningsid=1212&abonnementsgruppe=5008&abonnementsafdeling=&vis_abonnementer=1&vis_laengde=1&vis_holdnavne=1&layout=relativ",
    },
    {
        "sport": "haandbold",
        "sport_label": "Handbold",
        "url": "https://www.conventus.dk/dataudv/www/abonnement.php?foreningsid=1212&abonnementsgruppe=4931&abonnementsafdeling=&vis_abonnementer=1&vis_laengde=1&vis_holdnavne=1&layout=relativ",
    },
]

WEEKDAY_WORDS = {
    "monday": "monday",
    "mondays": "monday",
    "tuesday": "tuesday",
    "tuesdays": "tuesday",
    "wednesday": "wednesday",
    "wednesdays": "wednesday",
    "thursday": "thursday",
    "thursdays": "thursday",
    "friday": "friday",
    "fridays": "friday",
    "saturday": "saturday",
    "saturdays": "saturday",
    "sunday": "sunday",
    "sundays": "sunday",
    "mandag": "monday",
    "mandage": "monday",
    "tirsdag": "tuesday",
    "tirsdage": "tuesday",
    "onsdag": "wednesday",
    "onsdage": "wednesday",
    "torsdag": "thursday",
    "torsdage": "thursday",
    "fredag": "friday",
    "fredage": "friday",
    "lordag": "saturday",
    "lordage": "saturday",
    "sondag": "sunday",
    "sondage": "sunday",
}

MANUAL_FALLBACK_TRAINING = {
    "fodbold": {
        "sport_label": "Fodbold",
        "rows": [
            ("Herrer Serie 2", "Tirsdag: Vester Hassing 19:00-20:30 · Torsdag: Gandrup 19:00-20:30"),
            ("Herrer Serie 4", "Tirsdag: Vester Hassing 19:00-20:30 · Torsdag: Gandrup 19:00-20:30"),
            ("Kvinder 7-mands", "Onsdag: Langholt 18:00-19:30"),
            ("U19 drenge (2008/2009)", "Tirsdag: Vester Hassing 17:00-18:30 · Torsdag: Gandrup 17:00-18:30"),
            ("U16 drenge (2010/2011)", "Tirsdag: Vester Hassing 17:00-18:30 · Torsdag: Gandrup 17:00-18:30"),
            ("U15 piger (2011-2013)", "Mandag: Holtet 18:00-19:30 · Torsdag: Vester Hassing 18:00-19:30"),
            ("U14 drenge (2012)", "Mandag: Gandrup 16:30-18:00 · Torsdag: Hals 16:30-18:00"),
            ("U13 drenge (2013)", "Tirsdag: Vester Hassing 16:30-18:00 · Torsdag: Holtet 17:00-18:30"),
            ("U12 drenge (2014)", "Tirsdag: Vester Hassing 16:30-18:00 · Torsdag: Hals 16:30-18:00"),
            ("U11 drenge (2015)", "Tirsdag: Vester Hassing 16:30-18:00 · Torsdag: Hals 16:30-18:00"),
            ("U10 drenge (2016)", "Mandag: Vester Hassing 17:30-18:30 · Onsdag: Hals 17:30-18:30"),
            ("U9 drenge (2017)", "Mandag: Vester Hassing 17:30-18:30 · Onsdag: Hals 17:30-18:30"),
            ("U8 drenge (2018)", "Onsdag: Vester Hassing 16:30-17:30"),
            ("U7 mix (2019)", "Mandag: Vester Hassing 16:30-17:15"),
            ("Børnebold (2020-2022)", "Tirsdag: Vester Hassing 16:30-17:15"),
        ],
    },
    "haandbold": {
        "sport_label": "Håndbold",
        "rows": [
            ("Damesenior", "Tirsdag 20:00-21:30 (Gandrup) · Torsdag 19:45-21:15 (V. Hassing)"),
            ("Herresenior", "Tirsdag 20:00-21:30 (V. Hassing) · Torsdag 20:00-21:30 (Gandrup)"),
            ("U15 piger (2010-2011)", "Tirsdag 19:00-20:00 (Gandrup) · Torsdag 18:15-19:45 (V. Hassing)"),
            ("U13 piger (2012-2013)", "Tirsdag 18:30-20:00 (V. Hassing) · Torsdag 16:00-17:30 (Gandrup)"),
            ("U13 drenge (2012-2013)", "Tirsdag 17:15-18:30 (V. Hassing) · Torsdag 18:45-20:00 (Gandrup)"),
            ("U11 piger (2014-2015)", "Tirsdag 16:00-17:15 (V. Hassing) · Torsdag 17:30-18:45 (Gandrup)"),
            ("U11 drenge (2014-2015)", "Tirsdag 17:45-19:00 (Gandrup) · Torsdag 17:00-18:15 (V. Hassing)"),
            ("U9 mix (2016-2017)", "Tirsdag 16:45-17:45 (Gandrup) · Torsdag 16:00-17:00 (V. Hassing)"),
            ("U7 mix (2018-2019)", "Tirsdag 16:00-17:00 (Gandrup) · Torsdag 16:00-17:00 (V. Hassing)"),
        ],
    },
}


@dataclass
class CalendarEvent:
    sport: str
    sport_label: str
    title: str
    weekday: str
    start_time: str
    end_time: str
    period_start: str | None
    period_end: str | None
    price: str | None
    available_spots: str | None
    source_url: str
    signup_url: str | None
    info_text: str | None


def fetch_text(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=30) as resp:
        return resp.read().decode("utf-8", errors="ignore")


def extract_document_write(raw: str) -> str:
    marker = "document.write('"
    start = raw.find(marker)
    if start == -1:
        return raw
    start += len(marker)
    end = raw.rfind("');")
    if end <= start:
        return raw
    txt = raw[start:end]
    txt = txt.replace("\\'", "'")
    txt = txt.replace('\\"', '"')
    txt = txt.replace("\\/", "/")
    txt = txt.replace("\\r", "")
    txt = txt.replace("\\n", "\n")
    return html.unescape(txt)


def strip_tags(s: str) -> str:
    s = re.sub(r"<br\s*/?>", " ", s, flags=re.I)
    s = re.sub(r"<[^>]+>", "", s)
    s = html.unescape(s)
    return " ".join(s.split())


def parse_period(s: str) -> tuple[str | None, str | None]:
    m = re.search(r"(\d{2}-\d{2}-\d{4})\s*-\s*(\d{2}-\d{2}-\d{4})", s)
    if not m:
        return None, None

    def to_iso(v: str) -> str:
        d = dt.datetime.strptime(v, "%d-%m-%Y").date()
        return d.isoformat()

    return to_iso(m.group(1)), to_iso(m.group(2))


def extract_weekday_and_times(text: str) -> tuple[str | None, str | None, str | None]:
    low = text.lower()
    low = low.replace("lørdag", "lordag").replace("lørdage", "lordage")
    low = low.replace("søndag", "sondag").replace("søndage", "sondage")

    weekday = None
    for token, normalized in WEEKDAY_WORDS.items():
        if re.search(rf"\b{token}\b", low):
            weekday = normalized
            break

    tm = re.search(r"(?:kl\.?\s*)?(\d{1,2}[:.]\d{2})\s*-\s*(\d{1,2}[:.]\d{2})", low)
    if not tm:
        return weekday, None, None

    start = tm.group(1).replace(".", ":")
    end = tm.group(2).replace(".", ":")

    def pad(v: str) -> str:
        hh, mm = v.split(":", 1)
        return f"{int(hh):02d}:{int(mm):02d}"

    return weekday, pad(start), pad(end)


def parse_events_from_html(source: dict[str, str], html_text: str) -> list[CalendarEvent]:
    events: list[CalendarEvent] = []
    panels = re.split(r"<div\s+class=['\"]panel\s+panel-default['\"]>", html_text, flags=re.I)[1:]

    for panel in panels:
        title_match = re.search(r"<span\s+class=['\"]pull-left['\"]>(.*?)</span>", panel, flags=re.S | re.I)
        if not title_match:
            continue
        title = strip_tags(title_match.group(1))

        price_match = re.search(r"<span\s+class=['\"]pull-right['\"]>(.*?)</span>", panel, flags=re.S | re.I)
        price = strip_tags(price_match.group(1)) if price_match else None

        start_fields = re.findall(r"<div\s+class=['\"]field['\"]>(.*?)</div>", panel, flags=re.S | re.I)
        period_start = period_end = None
        available = None
        if start_fields:
            for f in start_fields[:3]:
                clean = strip_tags(f)
                if not (period_start and period_end):
                    p0, p1 = parse_period(clean)
                    period_start = period_start or p0
                    period_end = period_end or p1
                if "available spots" in clean.lower() or "ledige pladser" in clean.lower():
                    available = clean

        info_fields = re.findall(r"<div\s+class=['\"]field['\"]>(.*?)</div>", panel, flags=re.S | re.I)
        weekday = start_time = end_time = None
        info_lines: list[str] = []
        for f in info_fields:
            clean = strip_tags(f)
            if not clean:
                continue
            wd, t0, t1 = extract_weekday_and_times(clean)
            if wd and t0 and t1 and not (weekday and start_time and end_time):
                weekday, start_time, end_time = wd, t0, t1
                continue
            if re.search(r"registration|betaling|payment|ledige pladser|available spots", clean, re.I):
                continue
            if parse_period(clean) != (None, None):
                continue
            info_lines.append(clean)

        if not (weekday and start_time and end_time):
            continue

        signup_match = re.search(r"window\.open\('([^']*new_tilmelding\.php[^']*)'\)", panel)
        signup_url = None
        if signup_match:
            signup_url = signup_match.group(1)
            if signup_url.startswith("/"):
                signup_url = "https://www.conventus.dk" + signup_url

        info_text = " | ".join(info_lines[:3]) if info_lines else None

        events.append(
            CalendarEvent(
                sport=source["sport"],
                sport_label=source["sport_label"],
                title=title,
                weekday=weekday,
                start_time=start_time,
                end_time=end_time,
                period_start=period_start,
                period_end=period_end,
                price=price,
                available_spots=available,
                source_url=source["url"],
                signup_url=signup_url,
                info_text=info_text,
            )
        )

    return events


def unique_events(events: Iterable[CalendarEvent]) -> list[CalendarEvent]:
    seen: set[tuple[str, str, str, str, str, str | None, str | None]] = set()
    out: list[CalendarEvent] = []
    for e in events:
        key = (e.sport, e.title, e.weekday, e.start_time, e.end_time, e.period_start, e.period_end)
        if key in seen:
            continue
        seen.add(key)
        out.append(e)
    return out


def parse_manual_line(sport: str, sport_label: str, hold: str, line: str) -> list[CalendarEvent]:
    day_map = {
        "mandag": "monday",
        "tirsdag": "tuesday",
        "onsdag": "wednesday",
        "torsdag": "thursday",
        "fredag": "friday",
        "lørdag": "saturday",
        "søndag": "sunday",
    }
    events: list[CalendarEvent] = []
    for part in [p.strip() for p in line.split("·") if p.strip()]:
        m = re.search(
            r"(Mandag|Tirsdag|Onsdag|Torsdag|Fredag|Lørdag|Søndag)\s*:?[^0-9]*(\d{1,2}[:.]\d{2})\s*-\s*(\d{1,2}[:.]\d{2})",
            part,
            re.I,
        )
        if not m:
            continue
        weekday = day_map.get(m.group(1).lower())
        if not weekday:
            continue

        def fmt(v: str) -> str:
            hh, mm = v.replace(".", ":").split(":", 1)
            return f"{int(hh):02d}:{mm}"

        internal_signup = "#/fodbold/kontingent" if sport == "fodbold" else "#/haandbold/kontingent"
        events.append(
            CalendarEvent(
                sport=sport,
                sport_label=sport_label,
                title=hold,
                weekday=weekday,
                start_time=fmt(m.group(2)),
                end_time=fmt(m.group(3)),
                period_start=None,
                period_end=None,
                price=None,
                available_spots=None,
                source_url="manual-fallback",
                signup_url=internal_signup,
                info_text="Tider fra lokal fallback, da Conventus-kilden ikke udstiller træningstider direkte.",
            )
        )
    return events


def append_missing_manual_fallbacks(events: list[CalendarEvent]) -> list[CalendarEvent]:
    present = {e.sport for e in events}
    out = list(events)
    for sport, data in MANUAL_FALLBACK_TRAINING.items():
        if sport in present:
            continue
        for hold, tider in data["rows"]:
            out.extend(parse_manual_line(sport, data["sport_label"], hold, tider))
    return out


def main() -> None:
    collected: list[CalendarEvent] = []
    errors: list[dict[str, str]] = []

    for source in SOURCES:
        try:
            raw = fetch_text(source["url"])
            html_text = extract_document_write(raw)
            collected.extend(parse_events_from_html(source, html_text))
        except Exception as exc:  # noqa: BLE001
            errors.append({"url": source["url"], "error": str(exc)})

    events = unique_events(append_missing_manual_fallbacks(collected))

    day_order = {
        "monday": 1,
        "tuesday": 2,
        "wednesday": 3,
        "thursday": 4,
        "friday": 5,
        "saturday": 6,
        "sunday": 7,
    }

    def sort_key(e: CalendarEvent) -> tuple[int, str, str, str]:
        return (day_order.get(e.weekday, 99), e.start_time, e.sport_label.lower(), e.title.lower())

    events.sort(key=sort_key)

    payload = {
        "generated_at": dt.datetime.now(dt.UTC).isoformat(),
        "event_count": len(events),
        "errors": errors,
        "events": [e.__dict__ for e in events],
    }

    OUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    OUT_FILE.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {len(events)} events to {OUT_FILE}")
    if errors:
        print(f"Completed with {len(errors)} source errors")


if __name__ == "__main__":
    main()
