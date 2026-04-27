<?php
require_once __DIR__ . '/event-helpers.php';
requireLogin();
$user = currentUser();

$flash = $_GET['msg'] ?? '';
$now   = new DateTimeImmutable('now');

$events = loadEvents();

// Sorter: aktive først, derefter kommende efter dato, derefter udløbne nyeste først
usort($events, function ($a, $b) use ($now) {
    $bucket = function (array $e) use ($now): int {
        if (eventIsActive($e, $now))   return 0;
        if (eventIsUpcoming($e, $now)) return 1;
        return 2;
    };
    $ba = $bucket($a); $bb = $bucket($b);
    if ($ba !== $bb) return $ba - $bb;
    if ($ba === 2) return strcmp($b['start_dato'] ?? '', $a['start_dato'] ?? '');
    return strcmp($a['start_dato'] ?? '', $b['start_dato'] ?? '');
});

function statusBadge(array $e, DateTimeImmutable $now): array {
    if (eventIsActive($e, $now))   return ['Promoveres nu', '#166534', '#dcfce7'];
    if (eventIsUpcoming($e, $now)) return ['Kommende',      '#92400e', '#fef3c7'];
    return ['Udløbet', '#6b7280', '#f3f4f6'];
}
?>
<!DOCTYPE html>
<html lang="da">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Special events — VHG Bestyrelsesportal</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --navy: #0a1628; --navy-light: #112240;
      --gold: #F1DC4D; --gold-dark: #D4C136;
      --white: #fff; --text: #1a1a2e; --muted: #666; --radius: 10px;
    }
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #f5f6fa; color: var(--text); min-height: 100vh; }
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

    .layout { max-width: 1100px; margin: 0 auto; padding: 2rem 1.5rem 4rem; }

    .breadcrumb { font-size: 0.85rem; color: var(--muted); margin-bottom: 1rem; }
    .breadcrumb a { color: var(--gold-dark); text-decoration: none; }
    .breadcrumb a:hover { text-decoration: underline; }

    .page-header { display: flex; align-items: center; justify-content: space-between; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.5rem; }
    .page-header h1 { font-size: 1.5rem; }
    .btn-primary {
      display: inline-flex; align-items: center; gap: 0.5rem;
      background: var(--gold); color: var(--navy);
      border: none; border-radius: 8px;
      padding: 0.7rem 1.2rem; font-size: 0.95rem; font-weight: 700;
      text-decoration: none; cursor: pointer; transition: background 0.2s;
    }
    .btn-primary:hover { background: var(--gold-dark); }

    .flash { background: #dcfce7; color: #166534; padding: 0.85rem 1.1rem; border-radius: 8px; margin-bottom: 1.5rem; font-size: 0.9rem; }

    .empty {
      background: var(--white); border-radius: var(--radius); padding: 2.5rem 1.5rem;
      text-align: center; color: var(--muted); box-shadow: 0 2px 8px rgba(0,0,0,0.07);
    }
    .empty h2 { font-size: 1.05rem; color: var(--text); margin-bottom: 0.5rem; }

    .event-list { display: flex; flex-direction: column; gap: 1rem; }
    .event-row {
      background: var(--white); border-radius: var(--radius);
      box-shadow: 0 2px 8px rgba(0,0,0,0.07);
      display: grid; grid-template-columns: 90px 1fr auto; gap: 1.25rem;
      padding: 1rem; align-items: center;
    }
    .event-thumb {
      width: 90px; height: 90px; border-radius: 8px; background: #e5e7eb;
      object-fit: cover; display: block;
    }
    .event-thumb-empty {
      width: 90px; height: 90px; border-radius: 8px; background: #f3f4f6;
      display: flex; align-items: center; justify-content: center; font-size: 1.8rem; color: #cbd5e1;
    }
    .event-body h3 { font-size: 1.05rem; margin-bottom: 0.3rem; }
    .event-meta { font-size: 0.85rem; color: var(--muted); line-height: 1.6; }
    .event-meta strong { color: var(--text); font-weight: 600; }
    .event-status {
      display: inline-block; font-size: 0.72rem; font-weight: 700; text-transform: uppercase;
      padding: 0.2rem 0.55rem; border-radius: 4px; letter-spacing: 0.04em;
      margin-right: 0.5rem;
    }
    .event-extra-flag {
      display: inline-block; background: #fef9c3; color: #854d0e;
      font-size: 0.72rem; font-weight: 700; padding: 0.2rem 0.55rem;
      border-radius: 4px; text-transform: uppercase; letter-spacing: 0.04em;
    }
    .event-actions { display: flex; flex-direction: column; gap: 0.4rem; align-items: flex-end; }
    .btn-action {
      font-size: 0.82rem; padding: 0.4rem 0.8rem; border-radius: 6px;
      border: 1px solid #d1d5db; background: var(--white); color: var(--text);
      cursor: pointer; text-decoration: none;
    }
    .btn-action:hover { background: #f9fafb; }
    .btn-action.danger { color: #b91c1c; border-color: #fecaca; }
    .btn-action.danger:hover { background: #fef2f2; }

    @media (max-width: 600px) {
      .event-row { grid-template-columns: 70px 1fr; }
      .event-thumb, .event-thumb-empty { width: 70px; height: 70px; }
      .event-actions { grid-column: 1 / -1; flex-direction: row; justify-content: flex-end; }
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
    <div class="user-badge"><strong><?= htmlspecialchars($user['name']) ?></strong> &mdash; <?= htmlspecialchars($user['role']) ?></div>
    <a href="/bestyrelsen/logout.php" class="logout-btn">Log ud</a>
  </div>
</header>

<div class="layout">
  <div class="breadcrumb"><a href="/bestyrelsen/">Bestyrelsesportal</a> &rsaquo; Special events</div>

  <div class="page-header">
    <div>
      <h1>Special events</h1>
      <p style="font-size:0.9rem;color:var(--muted);margin-top:0.25rem">Stævner, kampe og andre store aktiviteter der skal promoveres på forsiden af vhg.dk.</p>
    </div>
    <a href="/bestyrelsen/event-form.php" class="btn-primary">+ Nyt event</a>
  </div>

  <?php if ($flash === 'saved'): ?>
    <div class="flash">Eventet er gemt.</div>
  <?php elseif ($flash === 'deleted'): ?>
    <div class="flash">Eventet er slettet.</div>
  <?php endif; ?>

  <?php if (empty($events)): ?>
    <div class="empty">
      <h2>Ingen events endnu</h2>
      <p>Tryk på <strong>+ Nyt event</strong> for at oprette det første.</p>
    </div>
  <?php else: ?>
    <div class="event-list">
      <?php foreach ($events as $e):
        [$statusText, $statusColor, $statusBg] = statusBadge($e, $now);
        $firstImage = $e['billeder'][0] ?? null;
      ?>
        <div class="event-row">
          <?php if ($firstImage): ?>
            <img class="event-thumb" src="<?= htmlspecialchars(eventImageUrl($firstImage)) ?>" alt="">
          <?php else: ?>
            <div class="event-thumb-empty">📷</div>
          <?php endif; ?>
          <div class="event-body">
            <h3><?= htmlspecialchars($e['titel']) ?></h3>
            <div class="event-meta">
              <span class="event-status" style="color:<?= $statusColor ?>;background:<?= $statusBg ?>"><?= $statusText ?></span>
              <?php if (!empty($e['ekstra_promovering'])): ?>
                <span class="event-extra-flag">⭐ Ekstra promovering</span>
              <?php endif; ?>
              <br>
              <strong><?= htmlspecialchars(formatEventDateRange($e)) ?></strong>
              <?php if (!empty($e['start_dato'])): ?>· Promoveres <?= (int) ($e['promover_dage_for'] ?? 3) ?> dage før<?php endif; ?><br>
              <small>Oprettet af <?= htmlspecialchars($e['oprettet_af_navn'] ?? '?') ?> (<?= htmlspecialchars($e['oprettet_af_rolle'] ?? '?') ?>)</small>
            </div>
          </div>
          <div class="event-actions">
            <a class="btn-action" href="/bestyrelsen/event-form.php?id=<?= urlencode($e['id']) ?>">Rediger</a>
            <form method="POST" action="/bestyrelsen/event-actions.php" style="display:inline" onsubmit="return confirm('Er du sikker på at du vil slette &quot;<?= htmlspecialchars(addslashes($e['titel'])) ?>&quot;?')">
              <input type="hidden" name="action" value="delete">
              <input type="hidden" name="id" value="<?= htmlspecialchars($e['id']) ?>">
              <button class="btn-action danger" type="submit">Slet</button>
            </form>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  <?php endif; ?>
</div>

</body>
</html>
