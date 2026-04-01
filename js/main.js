/* ============================================================
   ByteUGS – Main JavaScript
   ============================================================ */

'use strict';

/* ── Games Data ─────────────────────────────────────────── */
const CDN = 'https://cdn.jsdelivr.net/gh/bubbls/UGS-Assets@main/';

const GAMES = [
  // Action / Shooter
  { name: 'Bullet Force',        folder: 'bullet-force-multiplayer', tag: 'shooter',    emoji: '🔫' },
  { name: 'Blockpost',           folder: 'blockpost',                tag: 'shooter',    emoji: '🔫' },
  { name: 'Leader Strike',       folder: 'leader strike',            tag: 'shooter',    emoji: '🔫' },
  { name: 'Pixel Combat 2',      folder: 'pixel combat 2',           tag: 'shooter',    emoji: '🔫' },
  { name: 'Forward Assault',     folder: 'forward-assault',          tag: 'shooter',    emoji: '🔫' },
  { name: 'Recoil',              folder: 'recoil',                   tag: 'shooter',    emoji: '🔫' },
  { name: 'Lolshooter 2',        folder: 'lolshooter2-main',         tag: 'shooter',    emoji: '🔫' },
  { name: 'Roof Snipe 2',        folder: 'roof snipe 2',             tag: 'shooter',    emoji: '🎯' },
  { name: 'Rooftop Snipers 2',   folder: 'rooftop snipers 2',        tag: 'shooter',    emoji: '🎯' },
  { name: 'Superhot',            folder: 'superhot',                 tag: 'shooter',    emoji: '🔫' },
  { name: 'Quake',               folder: 'quake',                    tag: 'shooter',    emoji: '🔫' },
  // Racing
  { name: 'Drift Hunters',       folder: 'drift-hunters',            tag: 'racing',     emoji: '🏎️' },
  { name: 'Poly Track',          folder: 'poly track',               tag: 'racing',     emoji: '🏎️' },
  { name: 'Madalin Stunt Cars 2',folder: 'madalin-stunt-cars-2-main',tag: 'racing',     emoji: '🚗' },
  { name: 'Blumgi Racers',       folder: 'blumgi racers',            tag: 'racing',     emoji: '🏎️' },
  { name: 'Kart Bros',           folder: 'kart bros',                tag: 'racing',     emoji: '🏎️' },
  { name: 'Moto Road Rash',      folder: 'moto road rash',           tag: 'racing',     emoji: '🏍️' },
  { name: 'Speed Stars',         folder: 'speed stars',              tag: 'racing',     emoji: '⚡' },
  { name: 'Highway Racer 2',     folder: 'highway racer 2',          tag: 'racing',     emoji: '🚗' },
  { name: 'Crazy Cars',          folder: 'crazy cars',               tag: 'racing',     emoji: '🚗' },
  // Sports
  { name: 'Retro Bowl',          folder: 'retro bowl',               tag: 'sports',     emoji: '🏈' },
  { name: 'Basketball Superstars',folder:'basketball-superstars',     tag: 'sports',     emoji: '🏀' },
  { name: 'Basket Stars',        folder: 'basket stars',             tag: 'sports',     emoji: '🏀' },
  { name: 'Soccer Bros',         folder: 'soccer bros',              tag: 'sports',     emoji: '⚽' },
  { name: 'Baseball Bros',       folder: 'baseball bros',            tag: 'sports',     emoji: '⚾' },
  { name: 'Football Bros',       folder: 'football bros',            tag: 'sports',     emoji: '🏈' },
  { name: 'Bounce Back',         folder: 'bounce back',              tag: 'sports',     emoji: '🏀' },
  { name: 'Bouncy Basketball',   folder: 'bouncy basketball',        tag: 'sports',     emoji: '🏀' },
  { name: 'Head Soccer',         folder: 'head soccer',              tag: 'sports',     emoji: '⚽' },
  { name: 'Volleyball Challenge',folder: 'volleyball challenge',      tag: 'sports',     emoji: '🏐' },
  { name: 'Table Tennis World Tour', folder: 'table tennis world tour', tag: 'sports', emoji: '🏓' },
  { name: 'Wrestle Bros',        folder: 'wrestle bros',             tag: 'sports',     emoji: '🤼' },
  { name: 'Golf Orbit',          folder: 'golf orbit',               tag: 'sports',     emoji: '⛳' },
  // Idle / Clicker
  { name: 'Cookie Clicker',      folder: 'cookieclicker',            tag: 'idle',       emoji: '🍪' },
  { name: 'Doge Miner 2',        folder: 'doge miner 2',             tag: 'idle',       emoji: '⛏️' },
  { name: 'Adventure Capitalist',folder: 'adventure-capitalist',      tag: 'idle',       emoji: '💰' },
  { name: 'Monkey Mart v6.3',    folder: 'monkey mart v6.3',         tag: 'idle',       emoji: '🐵' },
  { name: 'Capybara Clicker',    folder: 'capybara clicker',          tag: 'idle',       emoji: '🐾' },
  { name: 'Dandys World Clicker',folder: 'dandys-world-clicker',      tag: 'idle',       emoji: '🎠' },
  { name: 'Space Company',       folder: 'space company',            tag: 'idle',       emoji: '🚀' },
  { name: 'Idle Bee Factory',    folder: 'idle bee factory',          tag: 'idle',       emoji: '🐝' },
  { name: 'Mr. Mine',            folder: 'mr-mine',                  tag: 'idle',       emoji: '⛏️' },
  { name: 'Grindcraft',          folder: 'grindcraft',               tag: 'idle',       emoji: '⚒️' },
  // Platformer
  { name: 'Stickman Hook',       folder: 'stickman hook',            tag: 'platformer', emoji: '🕴️' },
  { name: 'Eggy Car',            folder: 'eggy car',                 tag: 'platformer', emoji: '🥚' },
  { name: 'Doodle Jump',         folder: 'doodle jump',              tag: 'platformer', emoji: '📱' },
  { name: 'Lil Runmo',           folder: 'lil runmo',                tag: 'platformer', emoji: '👾' },
  { name: 'SM63 Redux',          folder: 'sm63redux',                tag: 'platformer', emoji: '🍄' },
  { name: 'Flappy Tower',        folder: 'flappy-tower',             tag: 'platformer', emoji: '🐦' },
  { name: 'Big Flappy Tower',    folder: 'big flappy tower',         tag: 'platformer', emoji: '🐦' },
  { name: 'Cat Mario',           folder: 'cat mario',                tag: 'platformer', emoji: '🐱' },
  { name: 'Level Devil',         folder: 'level devil',              tag: 'platformer', emoji: '😈' },
  { name: 'Slope 3',             folder: 'slope 3',                  tag: 'platformer', emoji: '⬇️' },
  { name: '3 Dash',              folder: '3dash',                    tag: 'platformer', emoji: '💨' },
  { name: 'Poor Bunny',          folder: 'poor bunny',               tag: 'platformer', emoji: '🐰' },
  { name: 'Rolling Sky',         folder: 'rolling-sky',              tag: 'platformer', emoji: '🌌' },
  { name: 'Geometry Dash Lite',  folder: 'gdlite',                   tag: 'platformer', emoji: '🎮' },
  { name: 'Geometry Dash SubZero',folder:'gd-subzero',               tag: 'platformer', emoji: '❄️' },
  // Survival / RPG
  { name: 'Evade',               folder: 'evade',                    tag: 'survival',   emoji: '🏃' },
  { name: '10 Minutes Till Dawn',folder: '10minutestilldawn',         tag: 'survival',   emoji: '🌙' },
  { name: 'Blightborne',         folder: 'Blightborne',              tag: 'survival',   emoji: '⚔️' },
  { name: 'Die in the Dungeon',  folder: 'die in the dungeon',        tag: 'survival',   emoji: '🃏' },
  { name: 'Astro Survivors',     folder: 'astro survivors',          tag: 'survival',   emoji: '🚀' },
  { name: 'Mindustry',           folder: 'mindustry',                tag: 'survival',   emoji: '⚙️' },
  { name: 'They Are Coming',     folder: 'they-are-coming',          tag: 'survival',   emoji: '🧟' },
  { name: 'Spelunky',            folder: 'spelunky',                 tag: 'survival',   emoji: '🗺️' },
  { name: 'Bounty of One',       folder: 'bounty of one',            tag: 'survival',   emoji: '🔫' },
  // Puzzle / Strategy
  { name: 'Antimatter Dimensions',folder:'Antimatter Dimensions',    tag: 'puzzle',     emoji: '🔢' },
  { name: 'Trace',               folder: 'trace',                    tag: 'puzzle',     emoji: '🔍' },
  { name: 'Big 2048',            folder: 'big 2048',                 tag: 'puzzle',     emoji: '🔢' },
  { name: 'Strands',             folder: 'strands',                  tag: 'puzzle',     emoji: '🧩' },
  { name: 'Megachess',           folder: 'megachess',                tag: 'puzzle',     emoji: '♟️' },
  { name: 'Linerider',           folder: 'linerider',                tag: 'puzzle',     emoji: '✏️' },
  { name: 'Townscraper',         folder: 'townscraper',              tag: 'puzzle',     emoji: '🏗️' },
  { name: 'Orb Farm',            folder: 'orb farm',                 tag: 'puzzle',     emoji: '🌿' },
  { name: 'Orb of Creation',     folder: 'orb of creation',          tag: 'puzzle',     emoji: '🔮' },
  { name: 'Plinko',              folder: 'plinko',                   tag: 'puzzle',     emoji: '🎯' },
  { name: 'Silk',                folder: 'silk',                     tag: 'puzzle',     emoji: '🌸' },
  { name: 'Sort Court',          folder: 'sort-court',               tag: 'puzzle',     emoji: '⚖️' },
  // Multiplayer / Social
  { name: 'Table Tanks',         folder: 'table tanks',              tag: 'multiplayer',emoji: '🎮' },
  { name: 'Slope 2 Player',      folder: 'slope 2 player',           tag: 'multiplayer',emoji: '🎮' },
  { name: '2-3-4 Player Games',  folder: '2-3-4-player-game',        tag: 'multiplayer',emoji: '👥' },
  { name: 'Madalin Car Multi',   folder: 'madalincarmulti',          tag: 'multiplayer',emoji: '🚗' },
  { name: 'Drunken Duel',        folder: 'drunken duel',             tag: 'multiplayer',emoji: '🥊' },
  { name: 'Slender Multiplayer', folder: 'slender multiplayer',       tag: 'multiplayer',emoji: '👻' },
  // Misc / Fun
  { name: 'Stickman Parkour',    folder: 'stickman parkour island',   tag: 'misc',       emoji: '🏃' },
  { name: 'Ragdoll Drop',        folder: 'ragdoll-drop',             tag: 'misc',       emoji: '🪆' },
  { name: 'Ragdoll Hit',         folder: 'ragdoll-hit',              tag: 'misc',       emoji: '🪆' },
  { name: 'Ragdoll Runners',     folder: 'ragdoll-runners',          tag: 'misc',       emoji: '🏃' },
  { name: 'Elastic Man',         folder: 'elasticman',               tag: 'misc',       emoji: '😮' },
  { name: 'Happy Room',          folder: 'happy room',               tag: 'misc',       emoji: '😁' },
  { name: 'Jelly Mario',         folder: 'jelly-mario',              tag: 'misc',       emoji: '🍄' },
  { name: 'Kanye Zone',          folder: 'kanye-zone',               tag: 'misc',       emoji: '🎤' },
  { name: 'We Become What We Behold', folder: 'we become what we behold', tag: 'misc', emoji: '📺' },
  { name: 'Pom Gets WiFi',       folder: 'pom-gets-wifi',            tag: 'misc',       emoji: '📶' },
  { name: 'Ztype',               folder: 'ztype',                    tag: 'misc',       emoji: '⌨️' },
  { name: 'FNF 0.7.5',           folder: 'fnf0.7.5',                 tag: 'misc',       emoji: '🎵' },
  { name: 'Duck Life Battle',     folder: 'duck life battle',         tag: 'misc',       emoji: '🦆' },
  { name: 'Sprunked',            folder: 'sprunked',                 tag: 'misc',       emoji: '🎶' },
  { name: 'Iron Snout',          folder: 'iron snout',               tag: 'misc',       emoji: '🐷' },
  { name: 'Stick Slasher',       folder: 'stick slasher',            tag: 'misc',       emoji: '⚔️' },
  { name: 'Going Balls',         folder: 'going balls',              tag: 'misc',       emoji: '⚽' },
];

/* dedupe by folder */
const seenFolders = new Set();
const GAMES_DEDUPED = GAMES.filter(g => {
  if (seenFolders.has(g.folder)) return false;
  seenFolders.add(g.folder);
  return true;
});

/* ── State ──────────────────────────────────────────────── */
let currentPage    = 'home';
let activeTag      = 'all';
let searchQuery    = '';
let currentGame    = null;

/* ── DOM helpers ────────────────────────────────────────── */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ── Navigation ─────────────────────────────────────────── */
function navigate(pageId) {
  $$('.page').forEach(p => p.classList.remove('active'));
  $$('.nav-links a').forEach(a => a.classList.remove('active'));

  const pg = $(`#page-${pageId}`);
  if (pg) pg.classList.add('active');

  const link = $(`.nav-links a[data-page="${pageId}"]`);
  if (link) link.classList.add('active');

  currentPage = pageId;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // close mobile nav
  $('.nav-links').classList.remove('open');

  // Update URL hash
  history.pushState(null, '', `#${pageId}`);
}

/* ── Build Game Grid ────────────────────────────────────── */
function buildGameGrid() {
  const grid = $('#game-grid');
  if (!grid) return;

  grid.innerHTML = '';

  const q   = searchQuery.toLowerCase();
  const tag = activeTag;

  let shown = 0;

  GAMES_DEDUPED.forEach((game, idx) => {
    if (tag !== 'all' && game.tag !== tag) return;
    if (q && !game.name.toLowerCase().includes(q)) return;

    shown++;

    const card = document.createElement('div');
    card.className = 'game-card';
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Play ${game.name}`);
    card.tabIndex = 0;
    card.dataset.idx = idx;

    card.innerHTML = `
      <div class="game-thumb">
        <span class="thumb-placeholder">${game.emoji}</span>
        <div class="play-overlay">▶</div>
      </div>
      <div class="game-info">
        <div class="game-name">${escHtml(game.name)}</div>
        <div class="game-tag">${escHtml(game.tag)}</div>
      </div>`;

    card.addEventListener('click', () => openGame(game));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openGame(game); });

    grid.appendChild(card);
  });

  const noResults = $('#no-results');
  if (noResults) noResults.style.display = shown === 0 ? 'block' : 'none';
}

/* ── Open Game Modal ────────────────────────────────────── */
function openGame(game) {
  currentGame = game;

  const overlay  = $('#game-modal');
  const title    = $('#modal-game-title');
  const frame    = $('#game-frame');
  const loading  = $('#modal-loading');

  overlay.classList.remove('hidden');
  title.textContent = `> ${game.name}`;
  frame.src = 'about:blank';
  loading.style.display = 'flex';
  frame.style.opacity   = '0';

  document.body.style.overflow = 'hidden';

  frame.onload = () => {
    loading.style.display = 'none';
    frame.style.opacity   = '1';
  };

  // Build CDN URL
  const encodedFolder = game.folder.replace(/ /g, '%20');
  frame.src = `${CDN}${encodedFolder}/index.html`;
}

function closeModal() {
  const overlay = $('#game-modal');
  const frame   = $('#game-frame');

  overlay.classList.add('hidden');
  frame.src = 'about:blank';
  document.body.style.overflow = '';
  currentGame = null;
}

function fullscreenModal() {
  const wrap = $('.modal-iframe-wrap');
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    wrap.requestFullscreen().catch(() => {});
  }
}

/* ── Escape HTML ────────────────────────────────────────── */
function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* ── Boot Animation ─────────────────────────────────────── */
function runBoot() {
  const lines = [
    { text: '[  OK  ] Started ByteUGS kernel modules.', cls: 'boot-ok' },
    { text: `[  OK  ] Mounted game filesystem (${GAMES_DEDUPED.length} games).`, cls: 'boot-ok' },
    { text: '[  OK  ] Loaded proxy subsystem (Ultraviolet).', cls: 'boot-ok' },
    { text: '[ WARN ] Ad-blocker recommended for best experience.', cls: 'boot-info' },
    { text: '[  OK  ] Terminal theme initialized.', cls: 'boot-ok' },
    { text: '[  OK  ] ByteUGS ready.  Welcome.', cls: 'boot-ok' },
  ];

  const container = $('#boot-lines');
  if (!container) return;

  lines.forEach((l, i) => {
    const el = document.createElement('div');
    el.className = `boot-line ${l.cls}`;
    el.textContent = l.text;
    el.style.animationDelay = `${i * 200}ms`;
    container.appendChild(el);
  });
}

/* ── Proxy Form ─────────────────────────────────────────── */
function initProxy() {
  const form = $('#proxy-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const url = $('#proxy-url').value.trim();
    if (!url) return;

    const banner = $('#proxy-coming-soon');
    if (banner) {
      banner.style.display = 'block';
    }
  });
}

/* ── Init ───────────────────────────────────────────────── */
function init() {
  /* Navigation links */
  $$('.nav-links a[data-page]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      navigate(a.dataset.page);
    });
  });

  /* Quick nav buttons */
  $$('[data-nav]').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      navigate(btn.dataset.nav);
    });
  });

  /* Hamburger */
  const ham = $('#hamburger');
  if (ham) {
    ham.addEventListener('click', () => {
      const nav = $('.nav-links');
      nav.classList.toggle('open');
      ham.setAttribute('aria-expanded', nav.classList.contains('open') ? 'true' : 'false');
    });
  }

  /* Hash routing */
  const hash = window.location.hash.replace('#', '');
  const validPages = ['home', 'games', 'apps', 'tools', 'proxy'];
  navigate(validPages.includes(hash) ? hash : 'home');

  /* Boot screen */
  runBoot();

  /* Game grid */
  buildGameGrid();

  /* Search */
  const searchInput = $('#game-search');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      searchQuery = searchInput.value;
      buildGameGrid();
    });
  }

  /* Tag filters */
  $$('.filter-btn[data-tag]').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTag = btn.dataset.tag;
      buildGameGrid();
    });
  });

  /* Modal close */
  const closeBtn = $('#modal-close');
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  const fsBtn = $('#modal-fullscreen');
  if (fsBtn) fsBtn.addEventListener('click', fullscreenModal);

  /* Close on overlay click outside modal */
  const overlay = $('#game-modal');
  if (overlay) {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeModal();
    });
  }

  /* Escape key */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  /* Proxy */
  initProxy();

  /* Update game count stat */
  const countEl = $('#game-count');
  if (countEl) countEl.textContent = GAMES_DEDUPED.length + '+';
}

document.addEventListener('DOMContentLoaded', init);
