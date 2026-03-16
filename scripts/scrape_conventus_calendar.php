<?php

$CONVENTUS_SOURCES = array(
    array('sport' => 'badminton', 'sport_label' => 'Badminton', 'url' => 'https://www.conventus.dk/dataudv/www/holdoversigt2.php?foreningsid=1212&afdelingsid=8191&kolone1_width=35&kolone2_width=25&min_height=250&handelsbetingelser=1&skjul_nyt_medlem=0&skjul_allerede_medlem=0'),
    array('sport' => 'bordtennis', 'sport_label' => 'Bordtennis', 'url' => 'https://www.conventus.dk/dataudv/www/holdoversigt2.php?foreningsid=1212&afdelingsid=8246&kolone1_width=35&kolone2_width=25&min_height=250&handelsbetingelser=1&skjul_nyt_medlem=0&skjul_allerede_medlem=0'),
    array('sport' => 'e-sport', 'sport_label' => 'E-sport', 'url' => 'https://www.conventus.dk/dataudv/www/holdoversigt2.php?foreningsid=1212&afdelingsid=6018&kolone1_width=35&kolone2_width=25&min_height=250&handelsbetingelser=1&skjul_nyt_medlem=0&skjul_allerede_medlem=0'),
    array('sport' => 'floorball', 'sport_label' => 'Floorball', 'url' => 'https://www.conventus.dk/dataudv/www/holdoversigt2.php?foreningsid=1212&afdelingsid=8247&kolone1_width=35&kolone2_width=25&min_height=250&handelsbetingelser=1&skjul_nyt_medlem=0&skjul_allerede_medlem=0'),
    array('sport' => 'gymnastik', 'sport_label' => 'Gymnastik', 'url' => 'https://www.conventus.dk/dataudv/www/holdoversigt2.php?foreningsid=1212&afdelingsid=7250&kolone1_width=35&kolone2_width=25&min_height=250&handelsbetingelser=1&skjul_nyt_medlem=0&skjul_allerede_medlem=0'),
    array('sport' => 'skateklub', 'sport_label' => 'Skateklub', 'url' => 'https://www.conventus.dk/dataudv/www/holdoversigt2.php?foreningsid=1212&afdelingsid=61583&kolone1_width=35&kolone2_width=25&min_height=250&handelsbetingelser=1&skjul_nyt_medlem=0&skjul_allerede_medlem=0'),
    array('sport' => 'disc-golf', 'sport_label' => 'Disc Golf', 'url' => 'https://www.conventus.dk/dataudv/www/holdoversigt2.php?foreningsid=1212&afdelingsid=8247&kolone1_width=35&kolone2_width=25&min_height=250&handelsbetingelser=1&skjul_nyt_medlem=0&skjul_allerede_medlem=0'),
    array('sport' => 'fodbold', 'sport_label' => 'Fodbold', 'url' => 'https://www.conventus.dk/dataudv/www/abonnement.php?foreningsid=1212&abonnementsgruppe=5395&abonnementsafdeling=&vis_abonnementer=1&vis_laengde=1&vis_holdnavne=1&layout=relativ'),
    array('sport' => 'fodbold', 'sport_label' => 'Fodbold', 'url' => 'https://www.conventus.dk/dataudv/www/abonnement.php?foreningsid=1212&abonnementsgruppe=5008&abonnementsafdeling=&vis_abonnementer=1&vis_laengde=1&vis_holdnavne=1&layout=relativ'),
    array('sport' => 'haandbold', 'sport_label' => 'Håndbold', 'url' => 'https://www.conventus.dk/dataudv/www/abonnement.php?foreningsid=1212&abonnementsgruppe=4931&abonnementsafdeling=&vis_abonnementer=1&vis_laengde=1&vis_holdnavne=1&layout=relativ'),
);

$WEEKDAY_WORDS = array(
    'monday' => 'monday', 'mondays' => 'monday',
    'tuesday' => 'tuesday', 'tuesdays' => 'tuesday',
    'wednesday' => 'wednesday', 'wednesdays' => 'wednesday',
    'thursday' => 'thursday', 'thursdays' => 'thursday',
    'friday' => 'friday', 'fridays' => 'friday',
    'saturday' => 'saturday', 'saturdays' => 'saturday',
    'sunday' => 'sunday', 'sundays' => 'sunday',
    'mandag' => 'monday', 'mandage' => 'monday',
    'tirsdag' => 'tuesday', 'tirsdage' => 'tuesday',
    'onsdag' => 'wednesday', 'onsdage' => 'wednesday',
    'torsdag' => 'thursday', 'torsdage' => 'thursday',
    'fredag' => 'friday', 'fredage' => 'friday',
    'lordag' => 'saturday', 'lordage' => 'saturday',
    'sondag' => 'sunday', 'sondage' => 'sunday',
);

$MANUAL_FALLBACK_TRAINING = array(
    'fodbold' => array(
        'sport_label' => 'Fodbold',
        'rows' => array(
            array('Herrer Serie 2', 'Tirsdag: Vester Hassing 19:00-20:30 · Torsdag: Gandrup 19:00-20:30'),
            array('Herrer Serie 4', 'Tirsdag: Vester Hassing 19:00-20:30 · Torsdag: Gandrup 19:00-20:30'),
            array('Kvinder 7-mands', 'Onsdag: Langholt 18:00-19:30'),
            array('U19 drenge (2008/2009)', 'Tirsdag: Vester Hassing 17:00-18:30 · Torsdag: Gandrup 17:00-18:30'),
            array('U16 drenge (2010/2011)', 'Tirsdag: Vester Hassing 17:00-18:30 · Torsdag: Gandrup 17:00-18:30'),
            array('U15 piger (2011-2013)', 'Mandag: Holtet 18:00-19:30 · Torsdag: Vester Hassing 18:00-19:30'),
            array('U14 drenge (2012)', 'Mandag: Gandrup 16:30-18:00 · Torsdag: Hals 16:30-18:00'),
            array('U13 drenge (2013)', 'Tirsdag: Vester Hassing 16:30-18:00 · Torsdag: Holtet 17:00-18:30'),
            array('U12 drenge (2014)', 'Tirsdag: Vester Hassing 16:30-18:00 · Torsdag: Hals 16:30-18:00'),
            array('U11 drenge (2015)', 'Tirsdag: Vester Hassing 16:30-18:00 · Torsdag: Hals 16:30-18:00'),
            array('U10 drenge (2016)', 'Mandag: Vester Hassing 17:30-18:30 · Onsdag: Hals 17:30-18:30'),
            array('U9 drenge (2017)', 'Mandag: Vester Hassing 17:30-18:30 · Onsdag: Hals 17:30-18:30'),
            array('U8 drenge (2018)', 'Onsdag: Vester Hassing 16:30-17:30'),
            array('U7 mix (2019)', 'Mandag: Vester Hassing 16:30-17:15'),
            array('Børnebold (2020-2022)', 'Tirsdag: Vester Hassing 16:30-17:15'),
        ),
    ),
    'haandbold' => array(
        'sport_label' => 'Håndbold',
        'rows' => array(
            array('Damesenior', 'Tirsdag 20:00-21:30 (Gandrup) · Torsdag 19:45-21:15 (V. Hassing)'),
            array('Herresenior', 'Tirsdag 20:00-21:30 (V. Hassing) · Torsdag 20:00-21:30 (Gandrup)'),
            array('U15 piger (2010-2011)', 'Tirsdag 19:00-20:00 (Gandrup) · Torsdag 18:15-19:45 (V. Hassing)'),
            array('U13 piger (2012-2013)', 'Tirsdag 18:30-20:00 (V. Hassing) · Torsdag 16:00-17:30 (Gandrup)'),
            array('U13 drenge (2012-2013)', 'Tirsdag 17:15-18:30 (V. Hassing) · Torsdag 18:45-20:00 (Gandrup)'),
            array('U11 piger (2014-2015)', 'Tirsdag 16:00-17:15 (V. Hassing) · Torsdag 17:30-18:45 (Gandrup)'),
            array('U11 drenge (2014-2015)', 'Tirsdag 17:45-19:00 (Gandrup) · Torsdag 17:00-18:15 (V. Hassing)'),
            array('U9 mix (2016-2017)', 'Tirsdag 16:45-17:45 (Gandrup) · Torsdag 16:00-17:00 (V. Hassing)'),
            array('U7 mix (2018-2019)', 'Tirsdag 16:00-17:00 (Gandrup) · Torsdag 16:00-17:00 (V. Hassing)'),
        ),
    ),
);

function conventus_lower($value)
{
    if (function_exists('mb_strtolower')) {
        return mb_strtolower($value, 'UTF-8');
    }
    return strtolower($value);
}

function conventus_starts_with($haystack, $needle)
{
    return substr($haystack, 0, strlen($needle)) === $needle;
}

function conventus_fetch_text($url)
{
    $ua = 'Mozilla/5.0';

    if (function_exists('curl_init')) {
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 30);
        curl_setopt($ch, CURLOPT_USERAGENT, $ua);
        $body = curl_exec($ch);
        if ($body === false) {
            $error = curl_error($ch);
            curl_close($ch);
            throw new Exception('curl fejl: ' . $error);
        }
        $httpCode = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        if ($httpCode >= 400) {
            throw new Exception('HTTP fejl: ' . $httpCode);
        }
        return $body;
    }

    $ctx = stream_context_create(array(
        'http' => array(
            'method' => 'GET',
            'header' => "User-Agent: {$ua}\r\n",
            'timeout' => 30,
        ),
    ));

    $body = @file_get_contents($url, false, $ctx);
    if ($body === false) {
        throw new Exception('Kunne ikke hente URL: ' . $url);
    }

    return $body;
}

function conventus_extract_document_write($raw)
{
    $marker = "document.write('";
    $start = strpos($raw, $marker);
    if ($start === false) {
        return $raw;
    }

    $start += strlen($marker);
    $end = strrpos($raw, "');");
    if ($end === false || $end <= $start) {
        return $raw;
    }

    $txt = substr($raw, $start, $end - $start);
    $txt = str_replace(array("\\'", '\\"', '\\/', '\\r', '\\n'), array("'", '"', '/', '', "\n"), $txt);

    return html_entity_decode($txt, ENT_QUOTES | ENT_HTML5, 'UTF-8');
}

function conventus_strip_tags_clean($value)
{
    $value = preg_replace('/<br\s*\/?\s*>/i', ' ', $value);
    $value = strip_tags($value);
    $value = html_entity_decode($value, ENT_QUOTES | ENT_HTML5, 'UTF-8');
    $value = preg_replace('/\s+/u', ' ', $value);
    return trim($value);
}

function conventus_parse_period($text)
{
    if (!preg_match('/(\d{2}-\d{2}-\d{4})\s*-\s*(\d{2}-\d{2}-\d{4})/', $text, $m)) {
        return array(null, null);
    }

    $d0 = DateTime::createFromFormat('d-m-Y', $m[1]);
    $d1 = DateTime::createFromFormat('d-m-Y', $m[2]);

    return array(
        $d0 ? $d0->format('Y-m-d') : null,
        $d1 ? $d1->format('Y-m-d') : null,
    );
}

function conventus_extract_weekday_and_times($text)
{
    global $WEEKDAY_WORDS;

    $low = conventus_lower($text);
    $low = str_replace(array('lørdag', 'lørdage', 'søndag', 'søndage'), array('lordag', 'lordage', 'sondag', 'sondage'), $low);

    $weekday = null;
    foreach ($WEEKDAY_WORDS as $token => $normalized) {
        if (preg_match('/\b' . preg_quote($token, '/') . '\b/u', $low)) {
            $weekday = $normalized;
            break;
        }
    }

    if (!preg_match('/(?:kl\.?\s*)?(\d{1,2}[:.]\d{2})\s*-\s*(\d{1,2}[:.]\d{2})/u', $low, $tm)) {
        return array($weekday, null, null);
    }

    $format = function ($value) {
        $parts = explode(':', str_replace('.', ':', $value), 2);
        $hh = str_pad((string) intval($parts[0]), 2, '0', STR_PAD_LEFT);
        return $hh . ':' . $parts[1];
    };

    return array($weekday, $format($tm[1]), $format($tm[2]));
}

function conventus_parse_events_from_html($source, $html)
{
    $events = array();
    $panels = preg_split('/<div\s+class=["\']panel\s+panel-default["\']>/i', $html);
    if (!$panels) {
        return $events;
    }
    array_shift($panels);

    foreach ($panels as $panel) {
        if (!preg_match('/<span\s+class=["\']pull-left["\']>(.*?)<\/span>/is', $panel, $titleMatch)) {
            continue;
        }
        $title = conventus_strip_tags_clean($titleMatch[1]);

        $price = null;
        if (preg_match('/<span\s+class=["\']pull-right["\']>(.*?)<\/span>/is', $panel, $priceMatch)) {
            $price = conventus_strip_tags_clean($priceMatch[1]);
        }

        preg_match_all('/<div\s+class=["\']field["\']>(.*?)<\/div>/is', $panel, $fieldMatches);
        $fields = isset($fieldMatches[1]) ? $fieldMatches[1] : array();

        $periodStart = null;
        $periodEnd = null;
        $available = null;
        $firstFields = array_slice($fields, 0, 3);
        foreach ($firstFields as $f) {
            $clean = conventus_strip_tags_clean($f);
            if ($periodStart === null || $periodEnd === null) {
                $period = conventus_parse_period($clean);
                if ($periodStart === null) {
                    $periodStart = $period[0];
                }
                if ($periodEnd === null) {
                    $periodEnd = $period[1];
                }
            }
            if (preg_match('/available spots|ledige pladser/i', $clean)) {
                $available = $clean;
            }
        }

        $weekday = null;
        $start = null;
        $end = null;
        $infoLines = array();

        foreach ($fields as $f) {
            $clean = conventus_strip_tags_clean($f);
            if ($clean === '') {
                continue;
            }

            $wtt = conventus_extract_weekday_and_times($clean);
            $wd = $wtt[0];
            $t0 = $wtt[1];
            $t1 = $wtt[2];

            if ($wd && $t0 && $t1 && !($weekday && $start && $end)) {
                $weekday = $wd;
                $start = $t0;
                $end = $t1;
                continue;
            }

            if (preg_match('/registration|betaling|payment|ledige pladser|available spots/i', $clean)) {
                continue;
            }

            $period = conventus_parse_period($clean);
            if ($period[0] !== null || $period[1] !== null) {
                continue;
            }

            $infoLines[] = $clean;
        }

        if (!($weekday && $start && $end)) {
            continue;
        }

        $signupUrl = null;
        if (preg_match('/window\.open\(\'([^\']*new_tilmelding\.php[^\']*)\'\)/', $panel, $signupMatch)) {
            $signupUrl = $signupMatch[1];
            if (conventus_starts_with($signupUrl, '/')) {
                $signupUrl = 'https://www.conventus.dk' . $signupUrl;
            }
        }

        $infoText = count($infoLines) ? implode(' | ', array_slice($infoLines, 0, 3)) : null;

        $events[] = array(
            'sport' => $source['sport'],
            'sport_label' => $source['sport_label'],
            'title' => $title,
            'weekday' => $weekday,
            'start_time' => $start,
            'end_time' => $end,
            'period_start' => $periodStart,
            'period_end' => $periodEnd,
            'price' => $price,
            'available_spots' => $available,
            'source_url' => $source['url'],
            'signup_url' => $signupUrl,
            'info_text' => $infoText,
        );
    }

    return $events;
}

function conventus_unique_events($events)
{
    $seen = array();
    $out = array();

    foreach ($events as $event) {
        $key = implode('|', array(
            isset($event['sport']) ? $event['sport'] : '',
            isset($event['title']) ? $event['title'] : '',
            isset($event['weekday']) ? $event['weekday'] : '',
            isset($event['start_time']) ? $event['start_time'] : '',
            isset($event['end_time']) ? $event['end_time'] : '',
            isset($event['period_start']) ? $event['period_start'] : '',
            isset($event['period_end']) ? $event['period_end'] : '',
        ));

        if (isset($seen[$key])) {
            continue;
        }

        $seen[$key] = true;
        $out[] = $event;
    }

    return $out;
}

function conventus_parse_manual_line($sport, $sportLabel, $hold, $line)
{
    $dayMap = array(
        'mandag' => 'monday',
        'tirsdag' => 'tuesday',
        'onsdag' => 'wednesday',
        'torsdag' => 'thursday',
        'fredag' => 'friday',
        'lørdag' => 'saturday',
        'søndag' => 'sunday',
    );

    $events = array();
    $parts = array_filter(array_map('trim', explode('·', $line)));

    foreach ($parts as $part) {
        if (!preg_match('/(Mandag|Tirsdag|Onsdag|Torsdag|Fredag|Lørdag|Søndag)\s*:?[^0-9]*(\d{1,2}[:.]\d{2})\s*-\s*(\d{1,2}[:.]\d{2})/iu', $part, $m)) {
            continue;
        }

        $token = conventus_lower($m[1]);
        $weekday = isset($dayMap[$token]) ? $dayMap[$token] : null;
        if (!$weekday) {
            continue;
        }

        $fmt = function ($value) {
            $parts = explode(':', str_replace('.', ':', $value), 2);
            $hh = str_pad((string) intval($parts[0]), 2, '0', STR_PAD_LEFT);
            return $hh . ':' . $parts[1];
        };

        $internalSignup = $sport === 'fodbold' ? '#/fodbold/kontingent' : '#/haandbold/kontingent';

        $events[] = array(
            'sport' => $sport,
            'sport_label' => $sportLabel,
            'title' => $hold,
            'weekday' => $weekday,
            'start_time' => $fmt($m[2]),
            'end_time' => $fmt($m[3]),
            'period_start' => null,
            'period_end' => null,
            'price' => null,
            'available_spots' => null,
            'source_url' => 'manual-fallback',
            'signup_url' => $internalSignup,
            'info_text' => 'Tider fra lokal fallback, da Conventus-kilden ikke udstiller træningstider direkte.',
        );
    }

    return $events;
}

function conventus_append_missing_manual_fallbacks($events)
{
    global $MANUAL_FALLBACK_TRAINING;

    $present = array();
    foreach ($events as $event) {
        $present[$event['sport']] = true;
    }

    $out = $events;
    foreach ($MANUAL_FALLBACK_TRAINING as $sport => $data) {
        if (isset($present[$sport])) {
            continue;
        }
        foreach ($data['rows'] as $row) {
            $out = array_merge($out, conventus_parse_manual_line($sport, $data['sport_label'], $row[0], $row[1]));
        }
    }

    return $out;
}

function scrape_conventus_calendar_generate($outputFile)
{
    global $CONVENTUS_SOURCES;

    $collected = array();
    $errors = array();

    foreach ($CONVENTUS_SOURCES as $source) {
        try {
            $raw = conventus_fetch_text($source['url']);
            $html = conventus_extract_document_write($raw);
            $collected = array_merge($collected, conventus_parse_events_from_html($source, $html));
        } catch (Exception $e) {
            $errors[] = array('url' => $source['url'], 'error' => $e->getMessage());
        }
    }

    // Fail fast on source errors so we do not overwrite the existing cache with partial data.
    if (!empty($errors)) {
        $lines = array();
        foreach ($errors as $row) {
            $lines[] = (isset($row['url']) ? $row['url'] : 'ukendt kilde') . ' :: ' . (isset($row['error']) ? $row['error'] : 'ukendt fejl');
        }
        throw new Exception("Kilde-fejl under kalender-opdatering:\n" . implode("\n", $lines));
    }

    $events = conventus_unique_events(conventus_append_missing_manual_fallbacks($collected));

    $dayOrder = array(
        'monday' => 1,
        'tuesday' => 2,
        'wednesday' => 3,
        'thursday' => 4,
        'friday' => 5,
        'saturday' => 6,
        'sunday' => 7,
    );

    usort($events, function ($a, $b) use ($dayOrder) {
        $ak = array(
            isset($dayOrder[$a['weekday']]) ? $dayOrder[$a['weekday']] : 99,
            isset($a['start_time']) ? $a['start_time'] : '',
            conventus_lower(isset($a['sport_label']) ? $a['sport_label'] : ''),
            conventus_lower(isset($a['title']) ? $a['title'] : ''),
        );

        $bk = array(
            isset($dayOrder[$b['weekday']]) ? $dayOrder[$b['weekday']] : 99,
            isset($b['start_time']) ? $b['start_time'] : '',
            conventus_lower(isset($b['sport_label']) ? $b['sport_label'] : ''),
            conventus_lower(isset($b['title']) ? $b['title'] : ''),
        );

        for ($i = 0; $i < count($ak); $i++) {
            if ($ak[$i] < $bk[$i]) {
                return -1;
            }
            if ($ak[$i] > $bk[$i]) {
                return 1;
            }
        }
        return 0;
    });

    $payload = array(
        'generated_at' => gmdate('c'),
        'event_count' => count($events),
        'errors' => $errors,
        'events' => $events,
    );

    $dir = dirname($outputFile);
    if (!is_dir($dir)) {
        if (!mkdir($dir, 0775, true) && !is_dir($dir)) {
            throw new Exception('Kunne ikke oprette mappe: ' . $dir);
        }
    }

    if (!is_writable($dir)) {
        throw new Exception('Ingen skriveadgang til mappe: ' . $dir);
    }

    $json = json_encode($payload, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    if ($json === false) {
        throw new Exception('Kunne ikke serialisere JSON');
    }

    if (file_put_contents($outputFile, $json . "\n") === false) {
        throw new Exception('Kunne ikke skrive fil: ' . $outputFile);
    }

    return $payload;
}

if (php_sapi_name() === 'cli' && isset($_SERVER['SCRIPT_FILENAME']) && realpath($_SERVER['SCRIPT_FILENAME']) === __FILE__) {
    $target = dirname(__DIR__) . '/assets/data/calendar-events.json';
    $result = scrape_conventus_calendar_generate($target);
    fwrite(STDOUT, 'Wrote ' . $result['event_count'] . ' events to ' . $target . PHP_EOL);
    if (!empty($result['errors'])) {
        fwrite(STDOUT, 'Completed with ' . count($result['errors']) . ' source errors' . PHP_EOL);
    }
}
