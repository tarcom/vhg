<?php
require_once __DIR__ . '/event-helpers.php';
requireLogin();
$user = currentUser();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /bestyrelsen/events.php');
    exit;
}

$action = $_POST['action'] ?? '';

try {
    if ($action === 'delete') {
        handleDelete($_POST['id'] ?? '');
    } elseif ($action === 'save') {
        handleSave($user, $_POST, $_FILES);
    }
} catch (Throwable $err) {
    $id  = $_POST['id'] ?? '';
    $msg = 'Serverfejl: ' . $err->getMessage();
    $url = $id ? "/bestyrelsen/event-form.php?id=" . urlencode($id) : "/bestyrelsen/event-form.php";
    header('Location: ' . $url . (str_contains($url, '?') ? '&' : '?') . 'err=' . urlencode($msg));
    exit;
}

header('Location: /bestyrelsen/events.php');
exit;

// ----------------------------------------------------------------

function handleDelete(string $id): void {
    if (!$id) return;
    $events = loadEvents();
    $remaining = [];
    foreach ($events as $e) {
        if (($e['id'] ?? '') === $id) {
            foreach (($e['billeder'] ?? []) as $img) deleteEventImage($img);
        } else {
            $remaining[] = $e;
        }
    }
    saveEvents($remaining);
    header('Location: /bestyrelsen/events.php?msg=deleted');
    exit;
}

function handleSave(array $user, array $post, array $files): void {
    $id        = $post['id'] ?? '';
    $existing  = $id ? findEventById($id) : null;

    $titel       = trim($post['titel'] ?? '');
    $beskrivelse = trim($post['beskrivelse'] ?? '');
    $startDato   = trim($post['start_dato'] ?? '');
    $startTid    = $post['start_tid']  ?? '00:00';
    $slutDato    = $post['slut_dato']  ?? '';
    $slutTid     = $post['slut_tid']   ?? '';
    $promoverDageFor   = (int) ($post['promover_dage_for'] ?? 3);
    $ekstraPromovering = !empty($post['ekstra_promovering']);
    $link              = trim($post['link'] ?? '');

    // Validering
    $errors = [];
    if ($titel === '')       $errors[] = 'Titel mangler.';
    if ($beskrivelse === '') $errors[] = 'Beskrivelse mangler.';
    if ($startDato !== '' && !preg_match('/^\d{4}-\d{2}-\d{2}$/', $startDato)) $errors[] = 'Ugyldig startdato.';
    if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $slutDato))  $errors[] = 'Ugyldig slutdato.';
    if ($startDato !== '' && ($promoverDageFor < 0 || $promoverDageFor > 365)) $errors[] = 'Promoveringsperiode skal være 0–365 dage.';

    try {
        $end = new DateTimeImmutable($slutDato . ' ' . ($slutTid ?: '23:59'));
        if ($startDato !== '' && $slutTid !== '') {
            $start = new DateTimeImmutable($startDato . ' ' . ($startTid ?: '00:00'));
            if ($end <= $start) $errors[] = 'Sluttidspunkt skal være efter starttidspunkt.';
        }
    } catch (Exception $e) {
        $errors[] = 'Ugyldig dato/tid.';
    }

    if ($errors) {
        $url = $id ? "/bestyrelsen/event-form.php?id=" . urlencode($id) : "/bestyrelsen/event-form.php";
        header('Location: ' . $url . '&err=' . urlencode(implode(' ', $errors)));
        exit;
    }

    // Eksisterende billeder, minus dem markeret til sletning
    $billeder    = $existing['billeder'] ?? [];
    $slettes     = $post['slet_billeder'] ?? [];
    if (!is_array($slettes)) $slettes = [];
    $billeder = array_values(array_filter($billeder, function ($img) use ($slettes) {
        if (in_array($img, $slettes, true)) {
            deleteEventImage($img);
            return false;
        }
        return true;
    }));

    // Nye billeder
    $nye = $files['nye_billeder'] ?? null;
    if ($nye && is_array($nye['name'])) {
        $count = count($nye['name']);
        for ($i = 0; $i < $count; $i++) {
            if (count($billeder) >= EVENT_MAX_IMAGES) break;
            $entry = [
                'name'     => $nye['name'][$i],
                'tmp_name' => $nye['tmp_name'][$i],
                'error'    => $nye['error'][$i],
                'size'     => $nye['size'][$i],
                'type'     => $nye['type'][$i],
            ];
            $saved = processEventImageUpload($entry);
            if ($saved) $billeder[] = $saved;
        }
    }

    $event = [
        'id'                  => $id ?: generateEventId(),
        'titel'               => $titel,
        'beskrivelse'         => $beskrivelse,
        'start_dato'          => $startDato,
        'start_tid'           => $startTid,
        'slut_dato'           => $slutDato,
        'slut_tid'            => $slutTid,
        'promover_dage_for'   => $promoverDageFor,
        'ekstra_promovering'  => $ekstraPromovering,
        'link'                => $link,
        'billeder'            => $billeder,
        'oprettet_af_email'   => $existing['oprettet_af_email'] ?? ($user['email'] ?? ''),
        'oprettet_af_navn'    => $existing['oprettet_af_navn']  ?? ($user['name']  ?? ''),
        'oprettet_af_rolle'   => $existing['oprettet_af_rolle'] ?? ($user['role']  ?? ''),
        'oprettet_at'         => $existing['oprettet_at']       ?? date('c'),
        'opdateret_af_navn'   => $user['name']  ?? '',
        'opdateret_af_rolle'  => $user['role']  ?? '',
        'opdateret_at'        => date('c'),
    ];

    $events = loadEvents();
    $found = false;
    foreach ($events as &$e) {
        if (($e['id'] ?? '') === $event['id']) { $e = $event; $found = true; break; }
    }
    unset($e);
    if (!$found) $events[] = $event;
    saveEvents($events);

    header('Location: /bestyrelsen/events.php?msg=saved');
    exit;
}
