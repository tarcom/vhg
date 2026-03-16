<?php

header('Content-Type: application/json; charset=utf-8');

function out_json($payload)
{
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

$method = isset($_SERVER['REQUEST_METHOD']) ? $_SERVER['REQUEST_METHOD'] : 'GET';
$allowGetRun = isset($_GET['run']) && (string) $_GET['run'] === '1';
if ($method === 'GET' && !$allowGetRun) {
    out_json(array(
        'ok' => true,
        'message' => 'Endpoint is alive. Use POST or GET ?run=1 to refresh.',
        'php_version' => PHP_VERSION,
    ));
}

if ($method !== 'POST' && $method !== 'GET') {
    http_response_code(405);
    out_json(array(
        'ok' => false,
        'error' => 'Method not allowed. Use POST or GET ?run=1.',
    ));
}

try {
    $scraperFile = __DIR__ . '/scripts/scrape_conventus_calendar.php';
    if (!file_exists($scraperFile)) {
        out_json(array(
            'ok' => false,
            'error' => 'Manglende scraper-fil på serveren: scripts/scrape_conventus_calendar.php',
            'php_version' => PHP_VERSION,
        ));
    }

    require_once $scraperFile;

    if (!function_exists('scrape_conventus_calendar_generate')) {
        out_json(array(
            'ok' => false,
            'error' => 'Scraper-funktionen blev ikke indlæst korrekt.',
            'php_version' => PHP_VERSION,
        ));
    }

    $outputFile = __DIR__ . '/assets/data/calendar-events.json';
    $result = scrape_conventus_calendar_generate($outputFile);

    out_json(array(
        'ok' => true,
        'message' => 'Kalender opdateret',
        'generated_at' => $result['generated_at'],
        'event_count' => $result['event_count'],
        'errors' => $result['errors'],
        'php_version' => PHP_VERSION,
    ));
} catch (Exception $e) {
    out_json(array(
        'ok' => false,
        'error' => $e->getMessage(),
        'php_version' => PHP_VERSION,
        'can_write_assets_data' => is_writable(__DIR__ . '/assets/data') ? 'yes' : 'no',
        'can_write_calendar_json' => file_exists(__DIR__ . '/assets/data/calendar-events.json')
            ? (is_writable(__DIR__ . '/assets/data/calendar-events.json') ? 'yes' : 'no')
            : 'missing',
    ));
} catch (Error $e) {
    out_json(array(
        'ok' => false,
        'error' => $e->getMessage(),
        'php_version' => PHP_VERSION,
    ));
}
