<?php
// Photo booth backend — fælles konfiguration og hjælpefunktioner.
// Bruges af list.php, thumb.php, delete.php og restore.php.
//
// Billederne ligger i assets/images/byfest2026/photoBooth/.
// "Sletning" er en blød sletning: filen flyttes til quarantine/ (uden for
// den offentlige liste) og der sendes mail med billedet + et gendan-link.

declare(strict_types=1);

const PB_PUBLIC_BASE    = 'assets/images/byfest2026/photoBooth'; // web-sti til billeder
const PB_NAME_RE        = '/^booth-\d{3,4}\.jpg$/';              // tilladte filnavne
const PB_MAIL_TO        = 'allan.noergaard.skov@gmail.com';
const PB_MAIL_FROM      = 'no-reply@vhg.dk';
const PB_MAIL_FROM_NAME = 'VHG Photo booth';
const PB_SITE_BASE      = 'https://www.vhg.dk';
const PB_RATE_MAX       = 5;     // max antal sletninger ...
const PB_RATE_WINDOW    = 3600;  // ... pr. IP pr. time (sekunder)
const PB_THUMB_MAX      = 600;   // længste kant på thumbnail (px)

function pb_dir(string $sub): string {
    $path = __DIR__ . '/' . $sub;
    if (!is_dir($path)) @mkdir($path, 0775, true);
    return $path;
}

function pb_live_dir(): string       { return __DIR__ . '/../' . PB_PUBLIC_BASE; }
function pb_quarantine_dir(): string { return pb_dir('quarantine'); }
function pb_cache_dir(): string      { return pb_dir('cache'); }
function pb_data_dir(): string       { return pb_dir('data'); }

// Returnér et sikkert filnavn (kun basename + whitelist), ellers null.
function pb_safe_name(string $name): ?string {
    $name = basename(trim($name));
    return preg_match(PB_NAME_RE, $name) ? $name : null;
}

function pb_json_out(array $data, int $status = 200): void {
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function pb_load_json(string $file): array {
    if (!is_file($file)) return [];
    $d = json_decode((string) file_get_contents($file), true);
    return is_array($d) ? $d : [];
}

function pb_save_json(string $file, array $data): void {
    file_put_contents(
        $file,
        json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
        LOCK_EX
    );
}

function pb_client_ip(): string {
    return $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
}

// Rate-limit: returnér true hvis handlingen er tilladt (og registrér den).
function pb_rate_ok(): bool {
    $file = pb_data_dir() . '/ratelimit.json';
    $all  = pb_load_json($file);
    $ip   = pb_client_ip();
    $now  = time();
    $hits = array_values(array_filter($all[$ip] ?? [], fn($t) => $t > $now - PB_RATE_WINDOW));
    if (count($hits) >= PB_RATE_MAX) {
        $all[$ip] = $hits;
        pb_save_json($file, $all);
        return false;
    }
    $hits[]   = $now;
    $all[$ip] = $hits;
    // Ryd gamle IP-poster op, så filen ikke vokser ubegrænset.
    foreach ($all as $k => $ts) {
        $all[$k] = array_values(array_filter($ts, fn($t) => $t > $now - PB_RATE_WINDOW));
        if (!$all[$k]) unset($all[$k]);
    }
    pb_save_json($file, $all);
    return true;
}

// Send mail med vedhæftet billede (multipart/mixed). Returnér bool.
function pb_mail_deleted(string $name, string $imagePath, string $restoreUrl): bool {
    $when = date('d-m-Y H:i');
    $ip   = pb_client_ip();
    $subject = "VHG photo booth: et billede er blevet skjult ($name)";
    $text =
        "Et billede fra photo booth-galleriet er blevet skjult af en bruger på vhg.dk.\n\n" .
        "Fil:        $name\n" .
        "Tidspunkt:  $when\n" .
        "IP:         $ip\n\n" .
        "Billedet er IKKE slettet permanent — det ligger nu i karantæne på serveren\n" .
        "og er fjernet fra den offentlige side. Billedet er vedhæftet denne mail.\n\n" .
        "Vil du gendanne det (gøre det offentligt igen), så klik her:\n" .
        "$restoreUrl\n\n" .
        "Hvis sletningen er i orden, behøver du ikke gøre noget.\n";

    $boundary = 'pb_' . bin2hex(random_bytes(8));
    $headers  = implode("\r\n", [
        'From: ' . PB_MAIL_FROM_NAME . ' <' . PB_MAIL_FROM . '>',
        'MIME-Version: 1.0',
        'Content-Type: multipart/mixed; boundary="' . $boundary . '"',
    ]);

    $body  = "--$boundary\r\n";
    $body .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
    $body .= chunk_split(base64_encode($text)) . "\r\n";

    if (is_file($imagePath)) {
        $data  = chunk_split(base64_encode((string) file_get_contents($imagePath)));
        $body .= "--$boundary\r\n";
        $body .= "Content-Type: image/jpeg; name=\"$name\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n";
        $body .= "Content-Disposition: attachment; filename=\"$name\"\r\n\r\n";
        $body .= $data . "\r\n";
    }
    $body .= "--$boundary--";

    $encSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
    return @mail(PB_MAIL_TO, $encSubject, $body, $headers);
}
