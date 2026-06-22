<?php
// Returnér listen over aktuelle photo booth-billeder (dem der ikke er skjult).
declare(strict_types=1);
require __DIR__ . '/config.php';

$dir    = pb_live_dir();
$photos = [];
if (is_dir($dir)) {
    foreach (scandir($dir) ?: [] as $f) {
        if (pb_safe_name($f) !== null) $photos[] = $f;
    }
}
sort($photos, SORT_NATURAL);

pb_json_out(['photos' => $photos, 'base' => PB_PUBLIC_BASE]);
