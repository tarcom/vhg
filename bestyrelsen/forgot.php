<?php
require_once __DIR__ . '/auth.php';

$sent      = false;
$mailError = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = strtolower(trim($_POST['email'] ?? ''));
    $user  = getUserByEmail($email);

    if ($user) {
        $ok = resetPassword($email);
        if ($ok) {
            $sent = true;
        } else {
            $mailError = 'Mail-afsendelse fejlede for ' . htmlspecialchars($email) . '. '
                       . 'PHP mail() returnerede false — tjek at serveren tillader udgående mail (cPanel → Email Deliverability).';
        }
    } else {
        // Ukendt e-mail — vis samme succesbesked (afslør ikke om adressen er registreret)
        $sent = true;
    }
}
?>
<!DOCTYPE html>
<html lang="da">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Glemt adgangskode — VHG Bestyrelsesportal</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Segoe UI', Arial, sans-serif;
      background: #0a1628;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1rem;
    }
    .card {
      background: #fff; border-radius: 12px; padding: 2.5rem 2rem;
      width: 100%; max-width: 400px; box-shadow: 0 20px 60px rgba(0,0,0,0.4);
    }
    .logo { text-align: center; margin-bottom: 1.75rem; }
    .logo img { height: 64px; width: auto; }
    h1 { font-size: 1.2rem; font-weight: 700; color: #0a1628; text-align: center; margin-bottom: 0.4rem; }
    p.desc { text-align: center; font-size: 0.875rem; color: #666; margin-bottom: 2rem; line-height: 1.5; }
    label { display: block; font-size: 0.85rem; font-weight: 600; color: #333; margin-bottom: 0.35rem; }
    input[type="email"] {
      width: 100%; padding: 0.7rem 0.9rem; border: 1.5px solid #ddd;
      border-radius: 8px; font-size: 1rem; margin-bottom: 1rem;
      transition: border-color 0.2s; outline: none;
    }
    input:focus { border-color: #F1DC4D; }
    .btn {
      width: 100%; padding: 0.8rem; background: #F1DC4D; color: #0a1628;
      font-size: 1rem; font-weight: 700; border: none; border-radius: 8px;
      cursor: pointer; transition: background 0.2s;
    }
    .btn:hover { background: #D4C136; }
    .success {
      background: #dcfce7; color: #166534; border-radius: 8px;
      padding: 1rem; font-size: 0.9rem; line-height: 1.5; text-align: center;
    }
    .mail-error {
      background: #fef2f2; color: #991b1b; border: 1px solid #fca5a5;
      border-radius: 8px; padding: 1rem; font-size: 0.85rem; line-height: 1.6;
      margin-bottom: 1.25rem;
    }
    .mail-error strong { display: block; margin-bottom: 0.4rem; }
    .mail-error code { font-size: 0.8rem; word-break: break-all; }
    .back { text-align: center; margin-top: 1.5rem; font-size: 0.85rem; }
    .back a { color: #555; text-decoration: none; }
    .back a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">
      <img src="/assets/images/logo.png" alt="VHG logo">
    </div>
    <h1>Glemt adgangskode</h1>

    <?php if ($sent): ?>
      <div class="success">
        Hvis e-mailen er registreret i systemet, er en ny adgangskode nu sendt.<br><br>
        Tjek din indbakke — og evt. spam-mappen.
      </div>
      <div class="back"><a href="/bestyrelsen/login.php">&larr; Tilbage til login</a></div>
    <?php else: ?>
      <?php if ($mailError): ?>
        <div class="mail-error">
          <strong>Mail kunne ikke sendes — kontakt webmaster.</strong>
          <code><?= $mailError ?></code>
        </div>
      <?php endif; ?>
      <p class="desc">Indtast din registrerede e-mail. Du modtager en ny adgangskode med det samme.</p>
      <p class="desc" style="font-size:0.8rem;color:#999;margin-top:-1.25rem;margin-bottom:1.5rem;">Bemærk: Adgang er forbeholdt VHG's hovedbestyrelse.</p>
      <form method="POST" action="/bestyrelsen/forgot.php">
        <label for="email">E-mail</label>
        <input type="email" id="email" name="email"
               value="<?= htmlspecialchars($_POST['email'] ?? '') ?>"
               autocomplete="email" autocapitalize="none" autocorrect="off" spellcheck="false"
               required autofocus placeholder="din@email.dk">
        <button type="submit" class="btn">Send ny adgangskode</button>
      </form>
      <div class="back"><a href="/bestyrelsen/login.php">&larr; Tilbage til login</a></div>
    <?php endif; ?>
  </div>
</body>
</html>
