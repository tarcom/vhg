<?php
// Gendan et skjult billede via det token-link, der blev sendt på mail.
// GET viser en bekræftelsesknap; selve gendannelsen sker først ved POST,
// så automatiske link-scannere ikke kan gendanne billedet ved et uheld.
declare(strict_types=1);
require __DIR__ . '/config.php';

header('Content-Type: text/html; charset=utf-8');

$token   = preg_replace('/[^a-f0-9]/', '', (string) ($_GET['token'] ?? $_POST['token'] ?? ''));
$logFile = pb_data_dir() . '/deleted.json';
$log     = pb_load_json($logFile);
$isPost  = ($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'POST';

if (!$token || !isset($log[$token])) {
    pb_page('<h1>Ugyldigt link</h1><p>Linket er udløbet, eller billedet er allerede håndteret.</p>', '⚠️');
}

$entry = $log[$token];
$safeName = htmlspecialchars($entry['name'], ENT_QUOTES);

if (!empty($entry['restored'])) {
    pb_page("<h1>Allerede gendannet</h1><p>Billedet <strong>$safeName</strong> er offentligt igen.</p>", '✅');
}

if (!$isPost) {
    // Trin 1: vis bekræftelsesknap.
    pb_page(
        "<h1>Gendan billede?</h1>" .
        "<p>Vil du gøre billedet <strong>$safeName</strong> offentligt igen i photo booth-galleriet?</p>" .
        "<form method='post' style='margin-top:1.5rem'>" .
        "<input type='hidden' name='token' value='" . htmlspecialchars($token, ENT_QUOTES) . "'>" .
        "<button type='submit' style='background:#ffd34d;color:#111;border:0;border-radius:.6rem;" .
        "padding:.8rem 1.6rem;font-size:1rem;font-weight:700;cursor:pointer'>Ja, gendan billedet</button>" .
        "</form>",
        '↩️'
    );
}

// Trin 2 (POST): udfør gendannelsen.
$qpath = pb_quarantine_dir() . '/' . basename($entry['quarantine']);
$live  = pb_live_dir() . '/' . $entry['name'];

if (!is_file($qpath)) {
    pb_page('<h1>Filen findes ikke</h1><p>Billedet kan ikke gendannes automatisk.</p>', '⚠️');
}
if (!@rename($qpath, $live)) {
    pb_page('<h1>Kunne ikke gendanne</h1><p>Prøv igen senere.</p>', '⚠️');
}

$log[$token]['restored']    = true;
$log[$token]['restored_at'] = date('c');
pb_save_json($logFile, $log);

pb_page("<h1>Billedet er gendannet</h1><p><strong>$safeName</strong> er nu offentligt igen i photo booth-galleriet.</p>", '✅');

function pb_page(string $msg, string $emoji = '📸'): void {
    echo "<!doctype html><html lang=da><head><meta charset=utf-8>"
       . "<meta name=viewport content='width=device-width,initial-scale=1'>"
       . "<title>VHG photo booth</title>"
       . "<style>body{font-family:system-ui,Arial,sans-serif;background:#0f1115;color:#f4f4f5;"
       . "display:flex;min-height:100vh;align-items:center;justify-content:center;margin:0;padding:1.5rem}"
       . ".card{max-width:32rem;background:#1b1f27;border:1px solid #2a2f3a;border-radius:1rem;"
       . "padding:2rem;text-align:center;box-shadow:0 10px 40px rgba(0,0,0,.4)}"
       . "a{color:#ffd34d}h1{margin:.2rem 0 1rem;font-size:1.4rem}p{line-height:1.5}</style></head>"
       . "<body><div class=card><div style='font-size:3rem'>$emoji</div>$msg"
       . "<p style='margin-top:1.5rem'><a href='" . PB_SITE_BASE . "/#/byfest/2026'>← Til byfest-siden</a></p>"
       . "</div></body></html>";
    exit;
}
