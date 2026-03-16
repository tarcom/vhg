<?php

header('Content-Type: application/json; charset=utf-8');

echo json_encode(array(
    'ok' => true,
    'message' => 'PHP virker',
    'php_version' => PHP_VERSION,
    'sapi' => php_sapi_name(),
    'curl_loaded' => extension_loaded('curl') ? 'yes' : 'no',
    'openssl_loaded' => extension_loaded('openssl') ? 'yes' : 'no',
), JSON_UNESCAPED_UNICODE);
