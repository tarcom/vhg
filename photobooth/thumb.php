<?php
// Lever et cachet thumbnail af et photo booth-billede.
// Genereres on-the-fly med GD og gemmes i cache/. Falder tilbage til
// originalen hvis GD ikke er tilgængelig.
declare(strict_types=1);
require __DIR__ . '/config.php';

$name = pb_safe_name($_GET['f'] ?? '');
if ($name === null) { http_response_code(400); exit('bad request'); }

$src = pb_live_dir() . '/' . $name;
if (!is_file($src)) { http_response_code(404); exit('not found'); }

$cache = pb_cache_dir() . '/' . $name;

// Brug cache hvis den er mindst lige så ny som kilden.
if (is_file($cache) && filemtime($cache) >= filemtime($src)) {
    pb_stream_jpeg($cache);
}

if (function_exists('imagecreatefromjpeg')) {
    $thumb = pb_make_thumb($src, PB_THUMB_MAX);
    if ($thumb) {
        imagejpeg($thumb, $cache, 82);
        imagedestroy($thumb);
        pb_stream_jpeg($cache);
    }
}

// Fallback: lever originalen.
pb_stream_jpeg($src);

function pb_stream_jpeg(string $path): void {
    header('Content-Type: image/jpeg');
    header('Cache-Control: public, max-age=86400');
    header('Content-Length: ' . filesize($path));
    readfile($path);
    exit;
}

function pb_make_thumb(string $src, int $max) {
    $info = @getimagesize($src);
    if (!$info) return null;
    [$w, $h] = $info;
    $img = @imagecreatefromjpeg($src);
    if (!$img) return null;
    $scale = min(1, $max / max($w, $h));
    $nw  = max(1, (int) round($w * $scale));
    $nh  = max(1, (int) round($h * $scale));
    $dst = imagecreatetruecolor($nw, $nh);
    imagecopyresampled($dst, $img, 0, 0, 0, 0, $nw, $nh, $w, $h);
    imagedestroy($img);
    return $dst;
}
