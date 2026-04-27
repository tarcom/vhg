<?php
// ============================================================
// VHG Bestyrelsesportal — event-helpers.php
// Datamodel + I/O + billed-upload til special events
// ============================================================

require_once __DIR__ . '/auth.php';

define('EVENTS_FILE',     __DIR__ . '/data/events.json');
define('EVENT_IMAGE_DIR', dirname(__DIR__) . '/assets/events');
define('EVENT_IMAGE_URL', '/assets/events');
define('EVENT_IMAGE_MAX_WIDTH', 1600);
define('EVENT_IMAGE_QUALITY', 85);
define('EVENT_MAX_IMAGES', 1);

// ---- I/O ----

function loadEvents(): array {
    return loadJson(EVENTS_FILE);
}

function saveEvents(array $events): void {
    saveJson(EVENTS_FILE, $events);
}

function findEventById(string $id): ?array {
    foreach (loadEvents() as $e) {
        if (($e['id'] ?? '') === $id) return $e;
    }
    return null;
}

function generateEventId(): string {
    return bin2hex(random_bytes(8));
}

// ---- Aktiv-logik (samme regel bruges af frontend API) ----

function eventHasStart(array $e): bool {
    return !empty($e['start_dato']);
}

function eventStartDateTime(array $e): DateTimeImmutable {
    return new DateTimeImmutable($e['start_dato'] . ' ' . ($e['start_tid'] ?? '00:00'));
}

function eventEndDateTime(array $e): DateTimeImmutable {
    return new DateTimeImmutable($e['slut_dato'] . ' ' . ($e['slut_tid'] ?? '23:59'));
}

function eventPromoStart(array $e): DateTimeImmutable {
    if (!eventHasStart($e)) return new DateTimeImmutable('@0'); // altid i fortiden
    $dage = max(0, (int) ($e['promover_dage_for'] ?? 3));
    return eventStartDateTime($e)->modify("-{$dage} days")->setTime(0, 0);
}

function eventIsActive(array $e, ?DateTimeImmutable $now = null): bool {
    $now = $now ?? new DateTimeImmutable('now');
    return $now >= eventPromoStart($e) && $now <= eventEndDateTime($e);
}

function eventIsUpcoming(array $e, ?DateTimeImmutable $now = null): bool {
    if (!eventHasStart($e)) return false;
    $now = $now ?? new DateTimeImmutable('now');
    return $now < eventPromoStart($e);
}

function eventIsExpired(array $e, ?DateTimeImmutable $now = null): bool {
    $now = $now ?? new DateTimeImmutable('now');
    return $now > eventEndDateTime($e);
}

// ---- Billed-upload ----

function ensureEventImageDir(): void {
    if (!is_dir(EVENT_IMAGE_DIR)) {
        mkdir(EVENT_IMAGE_DIR, 0775, true);
    }
}

/**
 * Tager et $_FILES-element, validerer at det er et billede, og gemmer det.
 * Hvis GD er tilgængeligt resizer/komprimerer vi server-side; ellers gemmer
 * vi originalen (klient-side resize i browseren har allerede gjort arbejdet).
 * Returnerer det gemte filnavn (uden sti) eller null ved fejl.
 */
function processEventImageUpload(array $fileEntry): ?string {
    if (($fileEntry['error'] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_OK) return null;

    $tmp = $fileEntry['tmp_name'] ?? '';
    if (!is_uploaded_file($tmp)) return null;

    $info = @getimagesize($tmp);
    if (!$info) return null;

    [$origW, $origH] = $info;
    $type = $info[2];

    ensureEventImageDir();

    // Fallback hvis GD-modulet ikke er tilgængeligt: gem originalfilen
    if (!function_exists('imagecreatefromjpeg')) {
        return saveOriginalEventImage($tmp, $type);
    }

    $src = match ($type) {
        IMAGETYPE_JPEG => @imagecreatefromjpeg($tmp),
        IMAGETYPE_PNG  => @imagecreatefrompng($tmp),
        IMAGETYPE_WEBP => function_exists('imagecreatefromwebp') ? @imagecreatefromwebp($tmp) : false,
        IMAGETYPE_GIF  => @imagecreatefromgif($tmp),
        default        => false,
    };
    if (!$src) return saveOriginalEventImage($tmp, $type);

    if ($origW > EVENT_IMAGE_MAX_WIDTH) {
        $newW = EVENT_IMAGE_MAX_WIDTH;
        $newH = (int) round($origH * (EVENT_IMAGE_MAX_WIDTH / $origW));
        $dst  = imagecreatetruecolor($newW, $newH);
        $white = imagecolorallocate($dst, 255, 255, 255);
        imagefilledrectangle($dst, 0, 0, $newW, $newH, $white);
        imagecopyresampled($dst, $src, 0, 0, 0, 0, $newW, $newH, $origW, $origH);
        imagedestroy($src);
        $src = $dst;
    } elseif ($type === IMAGETYPE_PNG) {
        $dst = imagecreatetruecolor($origW, $origH);
        $white = imagecolorallocate($dst, 255, 255, 255);
        imagefilledrectangle($dst, 0, 0, $origW, $origH, $white);
        imagecopy($dst, $src, 0, 0, 0, 0, $origW, $origH);
        imagedestroy($src);
        $src = $dst;
    }

    $filename = bin2hex(random_bytes(8)) . '.jpg';
    $path     = EVENT_IMAGE_DIR . '/' . $filename;
    $ok = imagejpeg($src, $path, EVENT_IMAGE_QUALITY);
    imagedestroy($src);

    return $ok ? $filename : null;
}

function saveOriginalEventImage(string $tmpPath, int $imageType): ?string {
    $ext = match ($imageType) {
        IMAGETYPE_JPEG => 'jpg',
        IMAGETYPE_PNG  => 'png',
        IMAGETYPE_WEBP => 'webp',
        IMAGETYPE_GIF  => 'gif',
        default        => null,
    };
    if (!$ext) return null;
    $filename = bin2hex(random_bytes(8)) . '.' . $ext;
    $dest     = EVENT_IMAGE_DIR . '/' . $filename;
    return move_uploaded_file($tmpPath, $dest) ? $filename : null;
}

function deleteEventImage(string $filename): void {
    if (!$filename) return;
    $path = EVENT_IMAGE_DIR . '/' . basename($filename);
    if (is_file($path)) @unlink($path);
}

function eventImageUrl(string $filename): string {
    return EVENT_IMAGE_URL . '/' . rawurlencode($filename);
}

// ---- Hjælp til skabelon ----

function formatEventDateRange(array $e): string {
    $months = ['', 'jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
    $end = eventEndDateTime($e);
    $ed  = $end->format('j') . '. ' . $months[(int) $end->format('n')];
    if (!eventHasStart($e)) {
        return 'Løbende — vises indtil ' . $ed;
    }
    $start  = eventStartDateTime($e);
    $sd     = $start->format('j') . '. ' . $months[(int) $start->format('n')];
    $sTid   = !empty($e['start_tid']) ? ' kl. ' . $start->format('H:i') : '';
    $endTid = !empty($e['slut_tid'])  ? '–' . $end->format('H:i')       : '';
    return $sd . $sTid . $endTid;
}
