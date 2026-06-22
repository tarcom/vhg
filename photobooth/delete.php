<?php
// Blød sletning: flyt et billede til karantæne og send mail med gendan-link.
// Kræver POST med korrekt bekræftelse ("SLET") og er rate-limited pr. IP.
declare(strict_types=1);
require __DIR__ . '/config.php';

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    pb_json_out(['ok' => false, 'error' => 'method'], 405);
}

$name    = pb_safe_name($_POST['file'] ?? '');
$confirm = trim((string) ($_POST['confirm'] ?? ''));

if ($name === null)                        pb_json_out(['ok' => false, 'error' => 'bad_name'], 400);
if (strtoupper($confirm) !== 'SLET')       pb_json_out(['ok' => false, 'error' => 'confirm'], 400);

$src = pb_live_dir() . '/' . $name;
if (!is_file($src))                        pb_json_out(['ok' => false, 'error' => 'not_found'], 404);
if (!pb_rate_ok())                         pb_json_out(['ok' => false, 'error' => 'rate_limited'], 429);

// Flyt til karantæne (undgå at overskrive en tidligere skjult fil).
$qdir = pb_quarantine_dir();
$dest = $qdir . '/' . $name;
if (file_exists($dest)) {
    $dest = $qdir . '/' . pathinfo($name, PATHINFO_FILENAME) . '-' . time() . '.jpg';
}
if (!@rename($src, $dest)) {
    pb_json_out(['ok' => false, 'error' => 'move_failed'], 500);
}

// Gem log + gendan-token.
$token   = bin2hex(random_bytes(16));
$logFile = pb_data_dir() . '/deleted.json';
$log     = pb_load_json($logFile);
$log[$token] = [
    'name'       => $name,
    'quarantine' => basename($dest),
    'deleted_at' => date('c'),
    'ip'         => pb_client_ip(),
    'restored'   => false,
];
pb_save_json($logFile, $log);

$restoreUrl = PB_SITE_BASE . '/photobooth/restore.php?token=' . $token;
pb_mail_deleted($name, $dest, $restoreUrl);

pb_json_out(['ok' => true]);
