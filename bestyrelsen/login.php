<?php
require_once __DIR__ . '/auth.php';
if (session_status() === PHP_SESSION_NONE) session_start();

// Allerede logget ind?
if (!empty($_SESSION['vhg_user'])) {
    header('Location: /bestyrelsen/');
    exit;
}

$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email    = strtolower(trim($_POST['email'] ?? ''));
    $password = $_POST['password'] ?? '';
    $user     = getUserByEmail($email);

    if ($user && password_verify($password, $user['hash'])) {
        $_SESSION['vhg_user']      = $email;
        $_SESSION['vhg_user_data'] = $user;
        appendLoginLog($user);
        header('Location: /bestyrelsen/');
        exit;
    } else {
        $error = 'Forkert e-mail eller adgangskode.';
    }
}
?>
<!DOCTYPE html>
<html lang="da">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login — VHG Bestyrelsesportal</title>
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
      background: #fff;
      border-radius: 12px;
      padding: 2.5rem 2rem;
      width: 100%;
      max-width: 400px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.4);
    }
    .logo { text-align: center; margin-bottom: 1.75rem; }
    .logo img { height: 64px; width: auto; }
    h1 { font-size: 1.25rem; font-weight: 700; color: #0a1628; text-align: center; margin-bottom: 0.25rem; }
    .subtitle { text-align: center; font-size: 0.875rem; color: #666; margin-bottom: 2rem; }
    label { display: block; font-size: 0.85rem; font-weight: 600; color: #333; margin-bottom: 0.35rem; }
    input[type="email"], input[type="password"] {
      width: 100%; padding: 0.7rem 0.9rem; border: 1.5px solid #ddd;
      border-radius: 8px; font-size: 1rem; margin-bottom: 1rem;
      transition: border-color 0.2s; outline: none;
    }
    input:focus { border-color: #F1DC4D; }
    .btn {
      width: 100%; padding: 0.8rem; background: #F1DC4D; color: #0a1628;
      font-size: 1rem; font-weight: 700; border: none; border-radius: 8px;
      cursor: pointer; transition: background 0.2s, transform 0.1s;
    }
    .btn:hover { background: #D4C136; transform: translateY(-1px); }
    .error {
      background: #fee2e2; color: #b91c1c; border-radius: 8px;
      padding: 0.7rem 1rem; font-size: 0.9rem; margin-bottom: 1.25rem;
    }
    .links { display: flex; justify-content: space-between; margin-top: 1.25rem; font-size: 0.85rem; }
    .links a { color: #555; text-decoration: none; }
    .links a:hover { color: #0a1628; text-decoration: underline; }
    .links a.gold { color: #b8a500; }
  </style>
</head>
<body>
  <div class="card">
    <div class="logo">
      <img src="/assets/images/logo.png" alt="VHG logo">
    </div>
    <h1>Bestyrelsesportal</h1>
    <p class="subtitle">Vester Hassing Gymnastik &amp; Idrætsforening</p>

    <?php if ($error): ?>
      <div class="error"><?= htmlspecialchars($error) ?></div>
    <?php endif; ?>

    <form method="POST" action="/bestyrelsen/login.php">
      <label for="email">E-mail</label>
      <input type="email" id="email" name="email"
             value="<?= htmlspecialchars($_POST['email'] ?? '') ?>"
             autocomplete="email" required autofocus placeholder="din@email.dk">

      <label for="password">Adgangskode</label>
      <input type="password" id="password" name="password"
             autocomplete="current-password" required>

      <button type="submit" class="btn">Log ind</button>
    </form>

    <div class="links">
      <a href="/">&larr; Tilbage til vhg.dk</a>
      <a href="/bestyrelsen/forgot.php" class="gold">Glemt adgangskode?</a>
    </div>
  </div>
</body>
</html>
