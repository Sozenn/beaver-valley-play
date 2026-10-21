import * as THREE from '../vendor/three.module.js';
import { createBadi } from './badi.js';
import { createWorld, isWater } from './world.js';
import { createInput } from './input.js';
import * as store from './save.js';

const LODGE_COST = 8;
const WALK = 5.2;
const $ = (id) => document.getElementById(id);

// ---- Durum ----
const saved = store.load();
const state = {
  wood: saved?.wood ?? 0,
  lodge: saved?.lodge ?? null,
  cut: new Set(saved?.cut ?? []),
  paused: true,
};
const player = { x: saved?.pos?.x ?? 0, z: saved?.pos?.z ?? 0, yaw: saved?.pos?.yaw ?? 0, swimming: false, speed: 0 };
const cam = { yaw: saved?.cam?.yaw ?? 0, pitch: 0.62, dist: 10, tx: player.x, tz: player.z };
const chop = { t: -1, hit: false, tree: null };

// ---- Sahne ----
const canvas = $('c');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
const touch = matchMedia('(pointer: coarse)').matches;
renderer.setPixelRatio(Math.min(devicePixelRatio, touch ? 1.75 : 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

const scene = new THREE.Scene();
const SKY = 0xbfe3f2;
scene.background = new THREE.Color(SKY);
scene.fog = new THREE.Fog(SKY, 32, 78);

const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 200);
scene.add(new THREE.HemisphereLight(0xdff1ff, 0x9a8a5a, 1.7));
const sun = new THREE.DirectionalLight(0xfff0d2, 2.4);
sun.castShadow = true;
sun.shadow.mapSize.set(touch ? 1024 : 2048, touch ? 1024 : 2048);
const sc = sun.shadow.camera;
sc.left = sc.bottom = -24; sc.right = sc.top = 24; sc.near = 1; sc.far = 90;
sun.shadow.bias = -0.0005;
sun.shadow.normalBias = 0.04;
scene.add(sun, sun.target);

const world = createWorld(scene, state.cut);
const badi = createBadi();
scene.add(badi.group);
if (state.lodge) world.buildLodge(state.lodge.x, state.lodge.z, state.lodge.yaw, false);

// Seçili ağaç göstergesi
const marker = new THREE.Mesh(new THREE.RingGeometry(0.85, 1.1, 28).rotateX(-Math.PI / 2),
  new THREE.MeshBasicMaterial({ color: 0xffd34d, transparent: true, opacity: 0.9, depthWrite: false }));
marker.position.y = 0.09;
marker.visible = false;
scene.add(marker);

// Kıymık / toz parçacıkları
const chips = [];
const chipGeo = new THREE.BoxGeometry(0.14, 0.09, 0.2);
function burst(x, y, z, color, n) {
  for (let i = 0; i < n; i++) {
    const m = new THREE.Mesh(chipGeo, new THREE.MeshLambertMaterial({ color }));
    m.position.set(x, y, z);
    scene.add(m);
    chips.push({ m, vx: (Math.random() - 0.5) * 4, vy: 2 + Math.random() * 3, vz: (Math.random() - 0.5) * 4, life: 0.7 });
  }
}
function updateChips(dt) {
  for (let i = chips.length - 1; i >= 0; i--) {
    const c = chips[i];
    c.life -= dt; c.vy -= 12 * dt;
    c.m.position.x += c.vx * dt; c.m.position.y += c.vy * dt; c.m.position.z += c.vz * dt;
    c.m.rotation.x += dt * 9; c.m.rotation.z += dt * 7;
    if (c.life <= 0 || c.m.position.y < 0) { scene.remove(c.m); c.m.material.dispose(); chips.splice(i, 1); }
  }
}

// ---- Arayüz ----
let toastTimer = 0;
function toast(msg) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}
function floatText(x, y, z, text) {
  const v = new THREE.Vector3(x, y, z).project(camera);
  const el = document.createElement('div');
  el.className = 'floater';
  el.textContent = text;
  el.style.left = ((v.x + 1) / 2 * innerWidth) + 'px';
  el.style.top = ((1 - v.y) / 2 * innerHeight) + 'px';
  $('app').appendChild(el);
  setTimeout(() => el.remove(), 1000);
}
function refreshHud() {
  $('wood-n').textContent = state.wood;
  const buildBtn = $('btn-build');
  buildBtn.style.display = state.lodge ? 'none' : 'block';
  buildBtn.classList.toggle('ready', state.wood >= LODGE_COST);
  $('objective').textContent = state.lodge
    ? 'Yuvan hazır! Vadi keşfi yakında.'
    : state.wood >= LODGE_COST ? 'Yeterli odun var! "Yuva Kur"a bas.'
    : `Ağaçları kes: ${state.wood}/${LODGE_COST} odun`;
}

// ---- Kayıt ----
function persist() {
  store.save({
    wood: state.wood, lodge: state.lodge, cut: [...state.cut],
    pos: { x: +player.x.toFixed(2), z: +player.z.toFixed(2), yaw: +player.yaw.toFixed(2) },
    cam: { yaw: +cam.yaw.toFixed(2) },
  });
}
setInterval(() => { if (!state.paused) persist(); }, 4000);
addEventListener('pagehide', persist);

// ---- Duraklatma / menü ----
function setPaused(p) {
  state.paused = p;
  $('menu').classList.toggle('hidden', !p);
  input.reset();
  if (p) { persist(); $('m-play').textContent = started ? 'Devam Et' : (saved ? 'Devam Et' : 'Oyna'); }
  else started = true;
}
let started = false;
document.addEventListener('visibilitychange', () => { if (document.hidden && !state.paused) setPaused(true); });

let resetArmed = false;
$('m-play').addEventListener('click', () => setPaused(false));
$('m-reset').addEventListener('click', () => {
  const b = $('m-reset');
  if (!resetArmed) {
    resetArmed = true; b.textContent = 'Emin misin? Tekrar bas'; b.classList.add('warn');
    setTimeout(() => { resetArmed = false; b.textContent = 'Yeni Oyun'; b.classList.remove('warn'); }, 3000);
    return;
  }
  store.clear();
  location.reload();
});

// ---- Eylemler ----
function nearestTree() {
  let best = null, bd = 2.6;
  for (const t of world.trees) {
    if (!t.alive) continue;
    const d = Math.hypot(t.x - player.x, t.z - player.z) - t.radius;
    if (d < bd) { bd = d; best = t; }
  }
  return best;
}

function tryBuild() {
  if (state.paused || state.lodge) return;
  if (state.wood < LODGE_COST) { toast(`Yuva için ${LODGE_COST} odun lazım (şu an ${state.wood})`); return; }
  const fx = Math.sin(player.yaw), fz = Math.cos(player.yaw);
  const spot = world.lodgeSpot(player.x, player.z, fx, fz);
  if (!spot) { toast('Burası dar. Açık bir yere git ve tekrar dene.'); return; }
  const yaw = Math.atan2(player.x - spot.x, player.z - spot.z);
  world.buildLodge(spot.x, spot.z, yaw, true);
  state.lodge = { x: spot.x, z: spot.z, yaw };
  state.wood -= LODGE_COST;
  burst(spot.x, 0.6, spot.z, 0xc9a26a, 24);
  toast('Yuvan kuruldu! 🏠');
  refreshHud();
  persist();
}

const input = createInput(canvas, {
  onPause: () => setPaused(!state.paused),
  onBuild: tryBuild,
});

// ---- Güncelleme ----
const wrap = (a) => Math.atan2(Math.sin(a), Math.cos(a));
const tmp = { x: 0, z: 0 };

function step(dt, time) {
  // Kamera girişi
  const c = input.consumeCam();
  cam.yaw -= c.dx * 0.0055;
  cam.pitch = Math.min(1.1, Math.max(0.22, cam.pitch + c.dy * 0.004));
  cam.dist = Math.min(16, Math.max(5, cam.dist + c.zoom * 0.8));

  // Yürüme
  const mv = input.move();
  const fx = -Math.sin(cam.yaw), fz = -Math.cos(cam.yaw);
  const rx = Math.cos(cam.yaw), rz = -Math.sin(cam.yaw);
  let dx = fx * mv.y + rx * mv.x, dz = fz * mv.y + rz * mv.x;
  let mag = Math.min(1, Math.hypot(dx, dz));
  if (chop.t >= 0) mag = 0;

  player.swimming = isWater(player.x, player.z);
  const speed = WALK * mag * (player.swimming ? 0.6 : 1);
  if (mag > 0.01) {
    const l = Math.hypot(dx, dz);
    dx /= l; dz /= l;
    player.x += dx * speed * dt;
    player.z += dz * speed * dt;
    const target = Math.atan2(dx, dz);
    player.yaw += wrap(target - player.yaw) * Math.min(1, dt * 14);
  }
  tmp.x = player.x; tmp.z = player.z;
  const hitEdge = world.resolve(tmp, 0.45);
  player.x = tmp.x; player.z = tmp.z;
  if (hitEdge && mag > 0.01 && !step.edgeToast) {
    toast('Vadinin ötesi henüz keşfedilmedi…');
    step.edgeToast = true; setTimeout(() => { step.edgeToast = false; }, 5000);
  }
  player.speed = mag * (player.swimming ? 0.7 : 1);

  // Kesme
  const target = nearestTree();
  marker.visible = !!target && chop.t < 0;
  if (target) {
    marker.position.x = target.x; marker.position.z = target.z;
    const s = target.scale * (1 + Math.sin(time * 6) * 0.06);
    marker.scale.set(s, 1, s);
  }
  const actBtn = $('btn-act');
  actBtn.classList.toggle('ready', !!target);
  actBtn.querySelector('small').textContent = target ? 'bas ve tut' : 'yakında ağaç yok';

  if (chop.t < 0) {
    if (input.actHeld() && target) {
      chop.t = 0; chop.hit = false; chop.tree = target;
      player.yaw = Math.atan2(target.x - player.x, target.z - player.z);
    }
  } else {
    chop.t += dt / 0.5;
    if (!chop.hit && chop.t > 0.45) {
      chop.hit = true;
      const t = chop.tree;
      if (t && t.alive) {
        const felled = world.hitTree(t, player.x, player.z);
        const gain = felled ? 2 : 1;
        state.wood += gain;
        burst(t.x, 1.2, t.z, 0xb98a55, felled ? 14 : 7);
        floatText(t.x, 2.6, t.z, `+${gain} 🪵`);
        if (felled) { state.cut.add(t.id); persist(); }
        refreshHud();
      }
    }
    if (chop.t >= 1) { chop.t = -1; chop.tree = null; }
  }

  badi.group.position.set(player.x, 0, player.z);
  badi.group.rotation.y = player.yaw;
  badi.update(dt, player.speed, player.swimming, chop.t, time);

  world.update(dt, time);
  updateChips(dt);
}

function updateCamera(dt) {
  const k = 1 - Math.exp(-dt * 9);
  cam.tx += (player.x - cam.tx) * k;
  cam.tz += (player.z - cam.tz) * k;
  const cp = Math.cos(cam.pitch), sp = Math.sin(cam.pitch);
  const ox = Math.sin(cam.yaw) * cp, oz = Math.cos(cam.yaw) * cp;
  const d = cam.dist;
  camera.position.set(cam.tx + ox * d, sp * d + 0.8, cam.tz + oz * d);
  // Kamera ile Badi arasına giren ağaçların yaprakları saydamlaşır
  for (const t of world.trees) {
    t.fadeTarget = 1;
    if (!t.alive) continue;
    for (let s = 1.2; s < d + 1; s += 0.6) {
      const py = sp * s + 0.8;
      if (py < 5.8 * t.scale && Math.hypot(t.x - (cam.tx + ox * s), t.z - (cam.tz + oz * s)) < 2.3 * t.scale) {
        t.fadeTarget = 0.18; break;
      }
    }
  }
  camera.lookAt(cam.tx, 1.0, cam.tz);
  sun.position.set(player.x + 16, 30, player.z + 10);
  sun.target.position.set(player.x, 0, player.z);
}

function resize() {
  const w = innerWidth, h = innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.fov = w / h < 1 ? 64 : 50;
  camera.updateProjectionMatrix();
}
addEventListener('resize', resize);
resize();

// ---- Döngü ----
let last = performance.now(), time = 0;
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  if (!state.paused) { time += dt; step(dt, time); }
  else badi.update(dt, 0, false, -1, now / 1000);
  updateCamera(dt);
  renderer.render(scene, camera);
  requestAnimationFrame(frame);
}

refreshHud();
setPaused(true);
$('m-play').textContent = saved ? 'Devam Et' : 'Oyna';
$('boot').remove();
requestAnimationFrame(frame);

if (location.search.includes('debug')) {
  window.__bv = { state, player, cam, world, chop, camera, scene, step, refreshHud, setPaused, tryBuild };
}
