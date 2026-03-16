<?php

require_once __DIR__ . '/scripts/scrape_conventus_calendar.php';

header('Content-Type: application/json; charset=utf-8');

$method = isset($_SERVER['REQUEST_METHOD']) ? $_SERVER['REQUEST_METHOD'] : 'GET';
$allowGetRun = isset($_GET['run']) && (string) $_GET['run'] === '1';
if ($method === 'GET' && !$allowGetRun) {
    echo json_encode([
        'ok' => true,
        'message' => 'Endpoint is alive. Use POST or GET ?run=1 to refresh.',
        'php_version' => PHP_VERSION,
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

if ($method !== 'POST' && $method !== 'GET') {
    http_response_code(405);
    echo json_encode([
        'ok' => false,
        'error' => 'Method not allowed. Use POST or GET ?run=1.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

try {
    $outputFile = __DIR__ . '/assets/data/calendar-events.json';
    $result = scrape_conventus_calendar_generate($outputFile);

    echo json_encode([
        'ok' => true,
        'message' => 'Kalender opdateret',
        'generated_at' => $result['generated_at'],
        'event_count' => $result['event_count'],
        'errors' => $result['errors'],
    ], JSON_UNESCAPED_UNICODE);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'error' => $e->getMessage(),
    ], JSON_UNESCAPED_UNICODE);
} catch (Error $e) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'error' => $e->getMessage(),
    ], JSON_UNESCAPED_UNICODE);
}
