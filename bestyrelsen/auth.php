<?php
// ============================================================
// VHG Bestyrelsesportal — auth.php
// Brugernøgle = e-mail (lowercase). Hashes er bcrypt.
// ============================================================

define('MAIL_FROM',      'no-reply@vhg.dk');
define('MAIL_FROM_NAME', 'VHG Bestyrelsesportal');
define('MAIL_REPLY_TO',  'formand@vhg.dk');
define('LOG_FILE',       __DIR__ . '/data/login_log.json');
define('OVERRIDE_FILE',  __DIR__ . '/data/password_overrides.json');

// Ordliste til nye passwords ved glemt adgangskode
const WORD_LIST = [
    'Solblink','Bjergtak','Vindkast','Lynflugt','Skovdis',
    'Strandfod','Daggry','Isfugl','Regnbue','Tidvand',
    'Kystfugl','Morgenry','Havblik','Fjordvind','Tagrende',
    'Birkeskov','Sandmark','Mosegron','Klitvej','Havskum',
    'Lynghede','Strandeng','Vildrose','Jordbund','Skovsti',
    'Bakkedrag','Kildevand','Fuglekald','Stenrev','Flodbred',
];

// Brugere — nøgle er email i lowercase
$USERS = [
    'formand@vhg.dk'                      => ['hash' => '$2b$12$mwVNM1of4riSxl4sDw0go.AwJxbF1gk7IxqlUSQe7rUFEZxalzXW2', 'name' => 'Allan Skov',                     'role' => 'Formand'],
    'lkj@evt.dk'                           => ['hash' => '$2b$12$lS/BbwmlEwJqOImrLw.9V.fLhcws.RHAKRmln24dmfHarjCiQf3V.', 'name' => 'Lars Jakobsen',                 'role' => 'Næstformand'],
    'jonsekristensen@hotmail.com'          => ['hash' => '$2b$12$n02YO7SfuMr8YUe9fT61VeKOZDpXN13f.XYuPHMyZ/XT84xZDlGzW', 'name' => 'Jonas Bundgaard Kristensen',  'role' => 'Kasserer'],
    'annebrittandersenc@gmail.com'         => ['hash' => '$2b$12$dczbyLT2Ockm69AwqJEzluUinQvPkzf5kGTeUjWEyQlakq1A1/nG2', 'name' => 'Anne-Britt Andersen',         'role' => 'Sekretær'],
    'hellemarieroennov@gmail.com'          => ['hash' => '$2b$12$Rg4qg7a2k8MQNYq6eVLRTuNoCsHG5qa/nqNecQoCD3Is8kWLMBKSO', 'name' => 'Helle Marie Rønnov',          'role' => 'Suppleant'],
    'beritandersen@hotmail.com'            => ['hash' => '$2b$12$TVBKjBgS1/t4xxpVjuKqxe/vkhDLH1Xi1T0czhsc7CGZOV7n.WRCm', 'name' => 'Berit Andersen',              'role' => 'Formand håndbold'],
    'agerbo100@gmail.com'                  => ['hash' => '$2b$12$/T4WOiYj60psz30F2PdbRuolQ8UhT0ztG4pA1qKZJzEqpo61dT7eS', 'name' => 'Marc Agerbo Jakobsen',        'role' => 'Formand fodbold'],
    'clmik8@gmail.com'                     => ['hash' => '$2b$12$dSkQ3MKdHUP.qZuWIrAi9.H7zSoNS5gP3JS8Eue30c3brYpqQF8TW', 'name' => 'Claus René Mikkelsen',        'role' => 'Formand badminton'],
    'nikolaj0299@gmail.com'                => ['hash' => '$2b$12$Aw63Iv10XrmVz6VupN032Oq/souuuBAdFv6s05p6RWMrKHsaeq07q', 'name' => 'Nikolaj Søndergaard Sørensen', 'role' => 'Formand e-sport'],
    'mikael.ivan.christensen@gmail.com'    => ['hash' => '$2b$12$0z5swkJJBOIRENMcBXwQ4OLrcKY7VfSEL3jMEcP.XqvrJVfBg1dPO', 'name' => 'Mikael Ivan Vinther Christensen', 'role' => 'Formand skateklub'],
    'helldorf@live.dk'                     => ['hash' => '$2b$12$apqXWrdlCXr/wREIX62v2.ScatZ3T1yTOLsG7xCxY78wwq4HCdBM.', 'name' => 'Jimmi Kildedal',              'role' => 'Formand floorball'],
    'imbadsberg@gmail.com'                 => ['hash' => '$2b$12$nd..udxs8FMSVsWrUeWZ2.3ktTP.LFc5fXD2AERGkiZvKGKo/Mu5y', 'name' => 'Inger Marie Badsberg',         'role' => 'Formand gymnastik'],
    'murerper@hotmail.dk'                  => ['hash' => '$2b$12$Z8IAgfXWZfaSTTaBSA3yP.krG0nsYUkk/Ktf8heyrQAuOT8aYcChO', 'name' => 'Per Kristensen',              'role' => 'Formand bordtennis'],
];

// ---- Hjælpefunktioner ----

function getUserByEmail(string $email): ?array {
    global $USERS;
    $key = strtolower(trim($email));

    // Tjek password-overrides først
    $overrides = loadJson(OVERRIDE_FILE);
    $hash = $overrides[$key] ?? null;

    if (isset($USERS[$key])) {
        $user = $USERS[$key];
        if ($hash) $user['hash'] = $hash;
        $user['email'] = $key;
        return $user;
    }
    return null;
}

function requireLogin(): void {
    if (session_status() === PHP_SESSION_NONE) session_start();
    if (empty($_SESSION['vhg_user'])) {
        header('Location: /bestyrelsen/login.php');
        exit;
    }
}

function currentUser(): array {
    if (session_status() === PHP_SESSION_NONE) session_start();
    return $_SESSION['vhg_user_data'] ?? [];
}

// ---- Login-log ----

function appendLoginLog(array $user): void {
    $log = loadJson(LOG_FILE);
    array_unshift($log, [
        'time'  => date('d.m.Y H:i'),
        'email' => $user['email'],
        'name'  => $user['name'],
        'role'  => $user['role'],
    ]);
    $log = array_slice($log, 0, 50); // behold maks 50 posteringer
    saveJson(LOG_FILE, $log);
}

function getLoginLog(int $limit = 10): array {
    return array_slice(loadJson(LOG_FILE), 0, $limit);
}

// ---- Password-reset ----

function generatePassword(): string {
    $words = WORD_LIST;
    return $words[array_rand($words)];
}

function resetPassword(string $email): bool {
    $user = getUserByEmail($email);
    if (!$user) return false;

    $newPassword = generatePassword();
    $hash        = password_hash($newPassword, PASSWORD_DEFAULT);

    // Gem override
    $overrides = loadJson(OVERRIDE_FILE);
    $overrides[strtolower($email)] = $hash;
    saveJson(OVERRIDE_FILE, $overrides);

    $subject = 'Din adgangskode til VHG Bestyrelsesportal';
    $body    = "Hej {$user['name']},\n\n"
             . "Din adgangskode til VHG Bestyrelsesportal er blevet nulstillet.\n\n"
             . "Ny adgangskode: {$newPassword}\n\n"
             . "Log ind på: https://vhg.dk/bestyrelsen/\n"
             . "Brugernavn: {$email}\n\n"
             . "Med venlig hilsen\n"
             . "VHG Bestyrelsesportal";

    return sendSmtpMail($email, $user['name'], $subject, $body);
}

// ---- SMTP mail ----

function sendSmtpMail(string $to, string $toName, string $subject, string $body): bool {
    $encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
    $headers = implode("\r\n", [
        'From: ' . MAIL_FROM_NAME . ' <' . MAIL_FROM . '>',
        'Reply-To: ' . MAIL_REPLY_TO,
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: base64',
    ]);
    $encodedBody = base64_encode($body);
    return (bool) mail($to, $encodedSubject, $encodedBody, $headers);
}

// ---- JSON-hjælpere ----

function loadJson(string $file): array {
    if (!file_exists($file)) return [];
    $data = json_decode(file_get_contents($file), true);
    return is_array($data) ? $data : [];
}

function saveJson(string $file, array $data): void {
    file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), LOCK_EX);
}
