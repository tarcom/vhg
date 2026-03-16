<?php

declare(strict_types=1);

require_once __DIR__ . '/scripts/scrape_conventus_calendar.php';

header('Content-Type: application/json; charset=utf-8');

$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$allowGetRun = isset($_GET['run']) && (string) $_GET['run'] === '1';
if ($method !== 'POST' && !($method === 'GET' && $allowGetRun)) {
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
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'error' => $e->getMessage(),
    ], JSON_UNESCAPED_UNICODE);
}
