<?php
require_once __DIR__ . '/auth.php';
requireLogin();
$user    = currentUser();
$logList = getLoginLog(10);
?>
<!DOCTYPE html>
<html lang="da">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bestyrelsesportal — VHG</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --navy: #0a1628; --navy-light: #112240;
      --gold: #F1DC4D; --gold-dark: #D4C136;
      --white: #fff; --text: #1a1a2e; --muted: #666; --radius: 10px;
    }
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #f5f6fa; color: var(--text); min-height: 100vh; }

    /* Header */
    .header {
      background: var(--navy); padding: 0 1.5rem;
      display: flex; align-items: center; justify-content: space-between;
      height: 64px; box-shadow: 0 2px 12px rgba(0,0,0,0.3); position: sticky; top: 0; z-index: 10;
    }
    .header-left { display: flex; align-items: center; gap: 1rem; }
    .header img { height: 40px; width: auto; }
    .header-title { color: var(--white); font-size: 1rem; font-weight: 700; }
    .header-title span { color: var(--gold); }
    .header-right { display: flex; align-items: center; gap: 1rem; }
    .user-badge { color: rgba(255,255,255,0.7); font-size: 0.85rem; }
    .user-badge strong { color: var(--white); }
    .logout-btn {
      background: rgba(241,220,77,0.15); color: var(--gold);
      border: 1px solid rgba(241,220,77,0.3); border-radius: 6px;
      padding: 0.4rem 0.9rem; font-size: 0.85rem; font-weight: 600;
      text-decoration: none; transition: background 0.2s;
    }
    .logout-btn:hover { background: rgba(241,220,77,0.25); }

    /* Layout */
    .layout {
      max-width: 1200px; margin: 0 auto; padding: 2rem 1.5rem 4rem;
      display: grid; grid-template-columns: 1fr 300px; gap: 2rem; align-items: start;
    }

    /* Main content */
    .welcome {
      background: var(--navy); color: var(--white); border-radius: var(--radius);
      padding: 1.5rem 2rem; margin-bottom: 2rem;
      display: flex; align-items: center; gap: 1rem;
    }
    .welcome-icon { font-size: 2rem; }
    .welcome h2 { font-size: 1.1rem; margin-bottom: 0.2rem; }
    .welcome p { font-size: 0.9rem; color: rgba(255,255,255,0.7); }
    .welcome strong { color: var(--gold); }

    .section-label {
      font-size: 0.78rem; font-weight: 700; text-transform: uppercase;
      letter-spacing: 0.08em; color: var(--muted); margin: 2rem 0 0.75rem;
      padding-bottom: 0.4rem; border-bottom: 2px solid var(--gold); display: inline-block;
    }
    .cards { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1rem; }
    .card {
      background: var(--white); border-radius: var(--radius); padding: 1.25rem 1.5rem;
      text-decoration: none; color: var(--text);
      box-shadow: 0 2px 8px rgba(0,0,0,0.07); border: 1.5px solid transparent;
      transition: border-color 0.2s, box-shadow 0.2s, transform 0.15s;
      display: flex; align-items: flex-start; gap: 1rem;
    }
    .card:hover { border-color: var(--gold); box-shadow: 0 6px 20px rgba(0,0,0,0.12); transform: translateY(-2px); }
    .card-icon { font-size: 1.6rem; line-height: 1; margin-top: 0.1rem; flex-shrink: 0; }
    .card-body h3 { font-size: 0.975rem; font-weight: 700; margin-bottom: 0.25rem; }
    .card-body p { font-size: 0.85rem; color: var(--muted); line-height: 1.5; }
    .card-ext { font-size: 0.75rem; color: var(--gold-dark); font-weight: 600; margin-top: 0.3rem; }
    .card.wip { opacity: 0.6; pointer-events: none; cursor: default; }
    .card.wip:hover { transform: none; box-shadow: 0 2px 8px rgba(0,0,0,0.07); border-color: transparent; }
    .badge-wip {
      display: inline-block; font-size: 0.7rem; font-weight: 700;
      background: #fef3c7; color: #92400e; border-radius: 4px;
      padding: 0.15rem 0.45rem; margin-top: 0.35rem; text-transform: uppercase; letter-spacing: 0.04em;
    }

    /* Login log sidebar */
    .sidebar { position: sticky; top: 80px; }
    .log-box {
      background: var(--white); border-radius: var(--radius);
      box-shadow: 0 2px 8px rgba(0,0,0,0.07); overflow: hidden;
    }
    .log-header {
      background: var(--navy); color: var(--white);
      padding: 0.85rem 1.1rem; font-size: 0.85rem; font-weight: 700;
      display: flex; align-items: center; gap: 0.5rem;
    }
    .log-header .dot {
      width: 8px; height: 8px; background: var(--gold);
      border-radius: 50%; display: inline-block;
    }
    .log-list { list-style: none; }
    .log-item {
      padding: 0.75rem 1.1rem; border-bottom: 1px solid #f0f0f0;
      font-size: 0.82rem; line-height: 1.4;
    }
    .log-item:last-child { border-bottom: none; }
    .log-name { font-weight: 700; color: var(--text); }
    .log-role { color: var(--muted); font-size: 0.78rem; }
    .log-time { color: var(--gold-dark); font-size: 0.78rem; font-weight: 600; margin-top: 0.15rem; }
    .log-empty { padding: 1.5rem 1.1rem; text-align: center; color: var(--muted); font-size: 0.85rem; }

    /* Footer */
    .portal-footer {
      grid-column: 1 / -1; text-align: center; font-size: 0.8rem;
      color: var(--muted); padding-top: 1.5rem; border-top: 1px solid #e0e0e0;
    }
    .portal-footer a { color: var(--gold-dark); text-decoration: none; }

    @media (max-width: 768px) {
      .layout { grid-template-columns: 1fr; }
      .sidebar { position: static; }
      .user-badge { display: none; }
    }
  </style>
</head>
<body>

<header class="header">
  <div class="header-left">
    <img src="/assets/images/logo.png" alt="VHG">
    <div class="header-title">VHG <span>Bestyrelsesportal</span></div>
  </div>
  <div class="header-right">
    <div class="user-badge">
      <strong><?= htmlspecialchars($user['name']) ?></strong>
      &mdash; <?= htmlspecialchars($user['role']) ?>
    </div>
    <a href="/bestyrelsen/logout.php" class="logout-btn">Log ud</a>
  </div>
</header>

<div class="layout">

  <!-- Hovedindhold -->
  <main>
    <div class="welcome">
      <div class="welcome-icon">👋</div>
      <div>
        <h2>Velkommen, <strong><?= htmlspecialchars($user['name']) ?></strong></h2>
        <p>Du er logget ind som <?= htmlspecialchars($user['role']) ?>.</p>
      </div>
    </div>

    <div class="section-label">Referater</div>
    <div class="cards">
      <div class="card wip">
        <div class="card-icon">📄</div>
        <div class="card-body">
          <h3>FU-møde referater</h3>
          <p>Referater fra forretningsudvalgsmøder.</p>
          <div class="badge-wip">Under construction</div>
        </div>
      </div>
      <div class="card wip">
        <div class="card-icon">📋</div>
        <div class="card-body">
          <h3>HO-møde referater</h3>
          <p>Referater fra hovedbestyrelsesmøder.</p>
          <div class="badge-wip">Under construction</div>
        </div>
      </div>
    </div>

    <div class="section-label">Google Drive</div>
    <div class="cards">
      <div class="card wip">
        <div class="card-icon">📁</div>
        <div class="card-body">
          <h3>VHG Google Drive</h3>
          <p>Fælles drev med alle dokumenter, billeder og filer.</p>
          <div class="badge-wip">Under construction</div>
        </div>
      </div>
      <div class="card wip">
        <div class="card-icon">💰</div>
        <div class="card-body">
          <h3>Økonomi</h3>
          <p>Regnskaber, budgetter og bilag.</p>
          <div class="badge-wip">Under construction</div>
        </div>
      </div>
    </div>

    <div class="section-label">Administration</div>
    <div class="cards">
      <div class="card" id="kalender-card" style="cursor:pointer" onclick="opdaterKalender()">
        <div class="card-icon" id="kalender-icon">🗓️</div>
        <div class="card-body">
          <h3>Opdater kalender</h3>
          <p>Henter nye aktiviteter fra Conventus og opdaterer ugekalenderen på forsiden.</p>
          <div id="kalender-status" class="card-ext"></div>
        </div>
      </div>
    </div>

    <div class="section-label">Nyttige links</div>
    <div class="cards">
      <a class="card" href="https://www.conventus.dk" target="_blank" rel="noopener">
        <div class="card-icon">👥</div>
        <div class="card-body">
          <h3>Conventus</h3>
          <p>Medlemsadministration og holdoversigter.</p>
          <div class="card-ext">Åbner conventus.dk ↗</div>
        </div>
      </a>
      <a class="card" href="https://www.dgi.dk" target="_blank" rel="noopener">
        <div class="card-icon">🏅</div>
        <div class="card-body">
          <h3>DGI</h3>
          <p>Danmarks Gymnastik og Idrætsforeninger.</p>
          <div class="card-ext">Åbner dgi.dk ↗</div>
        </div>
      </a>
      <a class="card" href="/">
        <div class="card-icon">🌐</div>
        <div class="card-body">
          <h3>vhg.dk</h3>
          <p>Tilbage til den offentlige hjemmeside.</p>
        </div>
      </a>
      <a class="card" href="/old/" target="_blank" rel="noopener">
        <div class="card-icon">🗂️</div>
        <div class="card-body">
          <h3>Gammel hjemmeside</h3>
          <p>Statisk kopi af den tidligere hjemmeside. Bemærk: siden fungerer ikke 100% — den var originalt hostet af DBU, og dynamisk indhold (login, søgning m.m.) virker ikke i denne kopi.</p>
          <div class="card-ext">Åbner vhg.dk/old/ ↗</div>
        </div>
      </a>
    </div>
  </main>

  <!-- Login-log sidebar -->
  <aside class="sidebar">
    <div class="log-box">
      <div class="log-header">
        <span class="dot"></span> Seneste logins
      </div>
      <?php if (empty($logList)): ?>
        <div class="log-empty">Ingen logins registreret endnu.</div>
      <?php else: ?>
        <ul class="log-list">
          <?php foreach ($logList as $entry): ?>
            <li class="log-item">
              <div class="log-name"><?= htmlspecialchars($entry['name']) ?></div>
              <div class="log-role"><?= htmlspecialchars($entry['role']) ?></div>
              <div class="log-time"><?= htmlspecialchars($entry['time']) ?></div>
            </li>
          <?php endforeach; ?>
        </ul>
      <?php endif; ?>
    </div>
  </aside>

  <footer class="portal-footer">
    VHG Bestyrelsesportal &mdash; kun til bestyrelsesmedlemmer &mdash;
    <a href="/bestyrelsen/logout.php">Log ud</a>
  </footer>

</div>
<script>
async function opdaterKalender() {
  const card   = document.getElementById('kalender-card');
  const status = document.getElementById('kalender-status');
  const icon   = document.getElementById('kalender-icon');

  card.style.pointerEvents = 'none';
  icon.textContent = '⏳';
  status.style.color = '';
  status.textContent = 'Opdaterer…';

  try {
    const res  = await fetch('/update-calendar.php', { method: 'POST', headers: { Accept: 'application/json' } });
    const data = await res.json();
    if (data.ok) {
      icon.textContent = '✅';
      status.style.color = '#166534';
      status.textContent = `Opdateret — ${data.event_count} aktiviteter (${data.generated_at})`;
    } else {
      throw new Error(data.error || 'Ukendt fejl');
    }
  } catch (e) {
    icon.textContent = '❌';
    status.style.color = '#b91c1c';
    status.textContent = 'Fejl: ' + e.message;
  } finally {
    card.style.pointerEvents = '';
  }
}
</script>
</body>
</html>
