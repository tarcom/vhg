<?php
require_once __DIR__ . '/event-helpers.php';
requireLogin();
$user = currentUser();

$id      = $_GET['id'] ?? '';
$event   = $id ? findEventById($id) : null;
$isEdit  = $event !== null;
$error   = $_GET['err'] ?? '';

// Default-værdier
$titel              = $event['titel']               ?? '';
$beskrivelse        = $event['beskrivelse']         ?? '';
$startDato          = $event['start_dato']          ?? '';
$startTid           = $event['start_tid']           ?? '';
$slutDato           = $event['slut_dato']           ?? date('Y-m-d');
$slutTid            = $event['slut_tid']            ?? '';
$promoverDageFor    = $event['promover_dage_for']   ?? 3;
$ekstraPromovering  = !empty($event['ekstra_promovering']);
$link               = $event['link']                ?? '';
$billeder           = $event['billeder']            ?? [];
?>
<!DOCTYPE html>
<html lang="da">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= $isEdit ? 'Rediger' : 'Nyt' ?> event — VHG Bestyrelsesportal</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --navy: #0a1628; --gold: #F1DC4D; --gold-dark: #D4C136;
      --white: #fff; --text: #1a1a2e; --muted: #666; --radius: 10px;
    }
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #f5f6fa; color: var(--text); min-height: 100vh; }
    .header {
      background: var(--navy); padding: 0 1.5rem;
      display: flex; align-items: center; justify-content: space-between;
      height: 64px; box-shadow: 0 2px 12px rgba(0,0,0,0.3); position: sticky; top: 0; z-index: 10;
    }
    .header-left { display: flex; align-items: center; gap: 1rem; }
    .header img { height: 40px; }
    .header-title { color: var(--white); font-size: 1rem; font-weight: 700; }
    .header-title span { color: var(--gold); }
    .logout-btn {
      background: rgba(241,220,77,0.15); color: var(--gold);
      border: 1px solid rgba(241,220,77,0.3); border-radius: 6px;
      padding: 0.4rem 0.9rem; font-size: 0.85rem; font-weight: 600; text-decoration: none;
    }

    .layout { max-width: 760px; margin: 0 auto; padding: 2rem 1.5rem 4rem; }
    .breadcrumb { font-size: 0.85rem; color: var(--muted); margin-bottom: 1rem; }
    .breadcrumb a { color: var(--gold-dark); text-decoration: none; }
    h1 { font-size: 1.5rem; margin-bottom: 1.5rem; }

    .form-card {
      background: var(--white); border-radius: var(--radius);
      box-shadow: 0 2px 8px rgba(0,0,0,0.07); padding: 2rem;
    }
    .field { margin-bottom: 1.25rem; }
    .field label { display: block; font-size: 0.85rem; font-weight: 700; color: var(--text); margin-bottom: 0.4rem; }
    .field .hint { display: block; font-size: 0.78rem; color: var(--muted); margin-top: 0.3rem; }
    .field input[type="text"], .field input[type="date"], .field input[type="time"], .field input[type="number"],
    .field textarea, .field select {
      width: 100%; padding: 0.65rem 0.8rem; border: 1.5px solid #ddd;
      border-radius: 8px; font-size: 0.95rem; font-family: inherit;
      transition: border-color 0.2s; outline: none;
    }
    .field input:focus, .field textarea:focus, .field select:focus { border-color: var(--gold); }
    .field textarea { resize: vertical; min-height: 100px; }

    .row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }

    .checkbox-row { display: flex; align-items: flex-start; gap: 0.7rem; padding: 0.85rem 1rem; background: #fef9c3; border-radius: 8px; border: 1px solid #fde68a; }
    .checkbox-row input { margin-top: 0.15rem; flex-shrink: 0; }
    .checkbox-row label { font-weight: 600; cursor: pointer; }
    .checkbox-row .hint { color: #854d0e; }

    .images-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin-top: 0.5rem; }
    .image-slot {
      position: relative; aspect-ratio: 4/3; background: #f3f4f6; border-radius: 8px;
      overflow: hidden; display: flex; align-items: center; justify-content: center;
    }
    .image-slot img { width: 100%; height: 100%; object-fit: cover; }
    .image-slot .remove {
      position: absolute; top: 6px; right: 6px;
      background: rgba(0,0,0,0.6); color: white; border: none;
      width: 24px; height: 24px; border-radius: 50%;
      cursor: pointer; font-size: 0.85rem; line-height: 1;
    }
    .image-slot .remove:hover { background: rgba(0,0,0,0.8); }

    .actions { display: flex; gap: 0.75rem; justify-content: space-between; margin-top: 2rem; flex-wrap: wrap; }
    .btn-primary {
      background: var(--gold); color: var(--navy); border: none; border-radius: 8px;
      padding: 0.8rem 1.6rem; font-size: 0.95rem; font-weight: 700; cursor: pointer;
    }
    .btn-primary:hover { background: var(--gold-dark); }
    .btn-secondary {
      background: var(--white); color: var(--text); border: 1.5px solid #d1d5db; border-radius: 8px;
      padding: 0.8rem 1.4rem; font-size: 0.95rem; font-weight: 600; cursor: pointer; text-decoration: none;
    }

    .error { background: #fee2e2; color: #b91c1c; border-radius: 8px; padding: 0.7rem 1rem; font-size: 0.9rem; margin-bottom: 1.25rem; }

    @media (max-width: 600px) {
      .row { grid-template-columns: 1fr; }
      .form-card { padding: 1.25rem; }
      .images-grid { grid-template-columns: repeat(2, 1fr); }
    }
  </style>
</head>
<body>

<header class="header">
  <div class="header-left">
    <img src="/assets/images/logo.png" alt="VHG">
    <div class="header-title">VHG <span>Bestyrelsesportal</span></div>
  </div>
  <a href="/bestyrelsen/logout.php" class="logout-btn">Log ud</a>
</header>

<div class="layout">
  <div class="breadcrumb">
    <a href="/bestyrelsen/">Bestyrelsesportal</a> &rsaquo;
    <a href="/bestyrelsen/events.php">Special events</a> &rsaquo;
    <?= $isEdit ? 'Rediger' : 'Nyt' ?>
  </div>

  <h1><?= $isEdit ? 'Rediger event' : 'Opret nyt event' ?></h1>

  <?php if ($error): ?>
    <div class="error"><?= htmlspecialchars($error) ?></div>
  <?php endif; ?>

  <form class="form-card" method="POST" action="/bestyrelsen/event-actions.php" enctype="multipart/form-data">
    <input type="hidden" name="action" value="save">
    <?php if ($isEdit): ?><input type="hidden" name="id" value="<?= htmlspecialchars($event['id']) ?>"><?php endif; ?>

    <div class="field">
      <label for="titel">Titel</label>
      <input type="text" id="titel" name="titel" value="<?= htmlspecialchars($titel) ?>" required maxlength="120" placeholder="Fx 'Håndboldturnering U16'">
    </div>

    <div class="field">
      <label for="beskrivelse">Beskrivelse</label>
      <textarea id="beskrivelse" name="beskrivelse" required maxlength="2000" placeholder="Hvad sker der? Hvem kan komme? Hvad koster det?"><?= htmlspecialchars($beskrivelse) ?></textarea>
    </div>

    <div class="field">
      <label for="link">Link (valgfrit)</label>
      <input type="url" id="link" name="link" value="<?= htmlspecialchars($link) ?>" maxlength="500" placeholder="https://…">
      <span class="hint">Vises som klikbart link på titlen og i ekstra promovering-banneret.</span>
    </div>

    <input type="hidden" id="slut_dato" name="slut_dato" value="<?= htmlspecialchars($slutDato) ?>">

    <div class="row">
      <div class="field">
        <label for="start_dato">Dato <span style="font-weight:400;color:var(--muted)">(valgfrit)</span></label>
        <input type="date" id="start_dato" name="start_dato" value="<?= htmlspecialchars($startDato) ?>">
        <span class="hint">Lad stå blank for at vise opslaget med det samme.</span>
      </div>
      <div class="field" id="vises-indtil-wrap">
        <label for="vises_indtil">Vises indtil dato</label>
        <input type="date" id="vises_indtil" value="<?= htmlspecialchars($slutDato) ?>" required>
        <span class="hint">Opslaget vises frem til og med denne dato.</span>
      </div>
    </div>

    <div class="row">
      <div class="field">
        <label for="start_tid">Fra kl. <span style="font-weight:400;color:var(--muted)">(valgfrit)</span></label>
        <input type="time" id="start_tid" name="start_tid" value="<?= htmlspecialchars($startTid) ?>">
      </div>
      <div class="field">
        <label for="slut_tid">Til kl. <span style="font-weight:400;color:var(--muted)">(valgfrit)</span></label>
        <input type="time" id="slut_tid" name="slut_tid" value="<?= htmlspecialchars($slutTid) ?>">
      </div>
    </div>

    <div class="field" id="promover-field">
      <label for="promover_dage_for">Promover dette event på vhg.dk i antal dage inden start tidspunkt</label>
      <input type="number" id="promover_dage_for" name="promover_dage_for" value="<?= (int) $promoverDageFor ?>" min="0" max="365">
      <span class="hint">Sæt højt for fx byfest, der skal promoveres længe i forvejen.</span>
    </div>

    <div class="field">
      <div class="checkbox-row">
        <input type="checkbox" id="ekstra_promovering" name="ekstra_promovering" value="1" <?= $ekstraPromovering ? 'checked' : '' ?>>
        <div>
          <label for="ekstra_promovering">⭐ Ekstra promovering</label>
          <span class="hint">Vis også som stort banner i toppen af forsiden (over hero-videoen).</span>
        </div>
      </div>
    </div>

    <div class="field">
      <label>Billede</label>
      <?php if (!empty($billeder)): ?>
        <div class="images-grid">
          <?php foreach ($billeder as $idx => $img): ?>
            <div class="image-slot">
              <img src="<?= htmlspecialchars(eventImageUrl($img)) ?>" alt="">
              <label class="remove" style="cursor:pointer">
                <input type="checkbox" name="slet_billeder[]" value="<?= htmlspecialchars($img) ?>" style="display:none">
                <span>×</span>
              </label>
            </div>
          <?php endforeach; ?>
        </div>
        <span class="hint">Klik × for at markere billedet til sletning når du gemmer.</span>
      <?php endif; ?>
      <input type="file" id="nye_billeder" name="nye_billeder[]" accept="image/*" style="margin-top:0.75rem">
      <span class="hint">Vælg ét billede. Det skaleres automatisk til max <?= EVENT_IMAGE_MAX_WIDTH ?>px bredde inden upload.</span>
      <div id="image-resize-status" class="hint" style="display:none"></div>
    </div>

    <div class="actions">
      <a href="/bestyrelsen/events.php" class="btn-secondary">Annuller</a>
      <button type="submit" id="submit-btn" class="btn-primary"><?= $isEdit ? 'Gem ændringer' : 'Opret event' ?></button>
    </div>
  </form>
</div>

<script>
const startDatoInput   = document.getElementById('start_dato');
const slutDatoHidden   = document.getElementById('slut_dato');
const visesIndtilWrap  = document.getElementById('vises-indtil-wrap');
const visesIndtilInput = document.getElementById('vises_indtil');
const promoverField    = document.getElementById('promover-field');

function syncSlutDato() {
  const hasStart = !!startDatoInput.value;
  // Slut dato = startdato for enkelt-dags events, ellers "vises indtil"
  slutDatoHidden.value = hasStart ? startDatoInput.value : visesIndtilInput.value;
  // Vis/skjul felterne
  visesIndtilWrap.style.display = hasStart ? 'none' : '';
  promoverField.style.display   = hasStart ? '' : 'none';
  // "Vises indtil" er kun required for løbende opslag
  visesIndtilInput.required = !hasStart;
}

startDatoInput.addEventListener('input', syncSlutDato);
visesIndtilInput.addEventListener('input', () => {
  if (!startDatoInput.value) slutDatoHidden.value = visesIndtilInput.value;
});
syncSlutDato();

// Klik × markerer billede til sletning visuelt
document.querySelectorAll('.image-slot .remove').forEach(label => {
  label.addEventListener('click', () => {
    const cb = label.querySelector('input[type=checkbox]');
    cb.checked = !cb.checked;
    const slot = label.closest('.image-slot');
    slot.style.opacity = cb.checked ? '0.3' : '1';
    label.querySelector('span').textContent = cb.checked ? '↺' : '×';
  });
});

// Klient-side billed-resize: skalerer billeder ned før upload
// så vi undgår 413-fejl fra proxy/PHP og slipper for langsomme uploads.
const MAX_WIDTH = 1400;
const JPEG_QUALITY = 0.78;
const MAX_IMAGES = <?= EVENT_MAX_IMAGES ?>;

function resizeImageFile(file) {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) { resolve(file); return; }
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      const ratio = img.width > MAX_WIDTH ? MAX_WIDTH / img.width : 1;
      const w = Math.round(img.width * ratio);
      const h = Math.round(img.height * ratio);
      const canvas = document.createElement('canvas');
      canvas.width = w; canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, w, h);
      ctx.drawImage(img, 0, 0, w, h);
      canvas.toBlob(blob => {
        if (!blob) { reject(new Error('Resize fejlede')); return; }
        const baseName = (file.name || 'billede').replace(/\.[^.]+$/, '') + '.jpg';
        resolve(new File([blob], baseName, { type: 'image/jpeg', lastModified: Date.now() }));
      }, 'image/jpeg', JPEG_QUALITY);
    };
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Kunne ikke læse billede')); };
    img.src = url;
  });
}

const fileInput = document.getElementById('nye_billeder');
const status    = document.getElementById('image-resize-status');
const submitBtn = document.getElementById('submit-btn');
let processedFiles = null;

fileInput.addEventListener('change', async () => {
  const selected = Array.from(fileInput.files).slice(0, MAX_IMAGES);
  if (!selected.length) { processedFiles = null; status.style.display = 'none'; return; }

  status.style.display = 'block';
  status.textContent = `Forbereder ${selected.length} billede(r)…`;
  submitBtn.disabled = true;

  try {
    const resized = await Promise.all(selected.map(resizeImageFile));
    const dt = new DataTransfer();
    resized.forEach(f => dt.items.add(f));
    fileInput.files = dt.files;
    processedFiles = resized;
    const totalKb = Math.round(resized.reduce((s, f) => s + f.size, 0) / 1024);
    status.textContent = `Klar: ${resized.length} billede(r), ${totalKb} KB samlet.`;
  } catch (err) {
    console.error(err);
    status.textContent = 'Fejl ved billedbehandling: ' + err.message;
  } finally {
    submitBtn.disabled = false;
  }
});
</script>

</body>
</html>
