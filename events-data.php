<?php
// ============================================================
// Public events API for forsiden af vhg.dk
// Returnerer kun events der skal promoveres på dette tidspunkt.
// ============================================================

require_once __DIR__ . '/bestyrelsen/event-helpers.php';

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: public, max-age=60');

$now    = new DateTimeImmutable('now');
$events = loadEvents();

$active = [];
foreach ($events as $e) {
    if (!eventIsActive($e, $now)) continue;
    $active[] = [
        'id'                 => $e['id']                ?? '',
        'titel'              => $e['titel']             ?? '',
        'beskrivelse'        => $e['beskrivelse']       ?? '',
        'start_dato'         => $e['start_dato']        ?? '',
        'start_tid'          => $e['start_tid']         ?? '',
        'slut_dato'          => $e['slut_dato']         ?? '',
        'slut_tid'           => $e['slut_tid']          ?? '',
        'ekstra_promovering' => !empty($e['ekstra_promovering']),
        'billeder'           => array_map('eventImageUrl', $e['billeder'] ?? []),
        'dato_label'         => formatEventDateRange($e),
        'oprettet_af_navn'   => $e['oprettet_af_navn']  ?? '',
        'oprettet_af_rolle'  => $e['oprettet_af_rolle'] ?? '',
        'oprettet_af_email'  => $e['oprettet_af_email'] ?? '',
        'link'               => $e['link'] ?? '',
    ];
}

// Sorter efter starttidspunkt (tidligste først)
usort($active, fn($a, $b) =>
    strcmp(($a['start_dato'] . ' ' . $a['start_tid']), ($b['start_dato'] . ' ' . $b['start_tid']))
);

echo json_encode([
    'generated_at' => $now->format('c'),
    'count'        => count($active),
    'events'       => $active,
], JSON_UNESCAPED_UNICODE);
