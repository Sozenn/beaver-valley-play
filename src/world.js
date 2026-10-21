import * as THREE from '../vendor/three.module.js';

export const LIMIT = 38;          // başlangıç alanı yarıçapı; ötesi henüz keşfedilmedi
const HALF_RIVER = 3.0;

export const riverX = (z) => 17 + 6 * Math.sin(z * 0.07) + 2.5 * Math.sin(z * 0.19 + 1);
export const isWater = (x, z) => Math.abs(x - riverX(z)) < HALF_RIVER;

function rng(seed) {
  return () => {
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const matCache = new Map();
const lambert = (color, opts = {}) => {
  const key = color + JSON.stringify(opts);
  if (!matCache.has(key)) matCache.set(key, new THREE.MeshLambertMaterial({ color, ...opts }));
  return matCache.get(key);
};

const FOLIAGE = [0x5c9e3f, 0x6aae45, 0x4f8f3a, 0x8fb23a, 0xd9a03a, 0xc9722e];
const pickFoliage = (r) => {
  const v = r();
  return v < 0.28 ? FOLIAGE[0] : v < 0.52 ? FOLIAGE[1] : v < 0.7 ? FOLIAGE[2]
    : v < 0.82 ? FOLIAGE[3] : v < 0.92 ? FOLIAGE[4] : FOLIAGE[5];
};

const trunkGeo = new THREE.CylinderGeometry(0.24, 0.36, 2.2, 7).translate(0, 1.1, 0);
const cone1Geo = new THREE.ConeGeometry(1.5, 2.5, 8).translate(0, 3.0, 0);
const cone2Geo = new THREE.ConeGeometry(1.1, 2.1, 8).translate(0, 4.2, 0);
const stumpGeo = new THREE.CylinderGeometry(0.28, 0.38, 0.45, 8).translate(0, 0.22, 0);

function makeTree(scale, foliageColor) {
  const g = new THREE.Group();
  const trunk = new THREE.Mesh(trunkGeo, lambert(0x70482a));
  // Yaprak malzemesi ağaca özel: kamerayı kapatınca saydamlaşır
  const leaf = new THREE.MeshLambertMaterial({ color: foliageColor, flatShading: true });
  const f1 = new THREE.Mesh(cone1Geo, leaf);
  const f2 = new THREE.Mesh(cone2Geo, leaf);
  for (const m of [trunk, f1, f2]) { m.castShadow = true; g.add(m); }
  g.userData.leaf = leaf;
  g.scale.setScalar(scale);
  return g;
}

function makeLodge() {
  const g = new THREE.Group();
  const R = 2.4;
  const domeGeo = new THREE.SphereGeometry(R, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2);
  const dome = new THREE.Mesh(domeGeo, lambert(0x84552d, { flatShading: true }));
  dome.scale.y = 0.85;
  g.add(dome);
  const r = rng(77);
  const stickGeo = new THREE.CylinderGeometry(0.07, 0.07, 1.7, 5);
  const up = new THREE.Vector3(0, 1, 0);
  for (let i = 0; i < 70; i++) {
    const phi = r() * Math.PI * 2;
    const theta = 0.12 + r() * 1.35;
    const n = new THREE.Vector3(Math.sin(theta) * Math.cos(phi), Math.cos(theta), Math.sin(theta) * Math.sin(phi));
    const pos = n.clone().multiplyScalar(R * 1.02);
    pos.y *= 0.85;
    const rand = new THREE.Vector3(r() - 0.5, r() - 0.5, r() - 0.5);
    const tangent = new THREE.Vector3().crossVectors(n, rand).normalize();
    const shade = [0x6b4423, 0x8a5a30, 0xa4733f, 0x5a3a1c][Math.floor(r() * 4)];
    const stick = new THREE.Mesh(stickGeo, lambert(shade));
    stick.position.copy(pos);
    stick.quaternion.setFromUnitVectors(up, tangent);
    stick.castShadow = true;
    g.add(stick);
  }
  const door = new THREE.Mesh(new THREE.CircleGeometry(0.62, 14, 0, Math.PI), lambert(0x24150b));
  door.position.set(0, 0.02, R + 0.03);
  g.add(door);
  const mud = new THREE.Mesh(new THREE.CylinderGeometry(2.75, 2.95, 0.22, 20), lambert(0x6b4a2b));
  mud.position.y = 0.1;
  mud.receiveShadow = true;
  g.add(mud);
  return g;
}

export function createWorld(scene, cutIds) {
  const r = rng(1337);

  // Zemin
  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(95, 56).rotateX(-Math.PI / 2),
    lambert(0x86b858));
  ground.receiveShadow = true;
  scene.add(ground);

  for (let i = 0; i < 46; i++) {
    const a = r() * Math.PI * 2, d = r() * 62;
    const patch = new THREE.Mesh(
      new THREE.CircleGeometry(2 + r() * 3.5, 14).rotateX(-Math.PI / 2),
      lambert(r() < 0.5 ? 0x78ab4e : 0x96c460));
    patch.position.set(Math.cos(a) * d, 0.015 + i * 0.0004, Math.sin(a) * d);
    patch.receiveShadow = true;
    scene.add(patch);
  }

  // Nehir (kıyı kumu + su)
  const ribbon = (half, y, material) => {
    const pos = [], idx = [];
    const zs = [];
    for (let z = -100; z <= 100; z += 2) zs.push(z);
    zs.forEach((z, i) => {
      const x = riverX(z);
      pos.push(x - half, y, z, x + half, y, z);
      if (i > 0) { const b = i * 2; idx.push(b - 2, b - 1, b, b - 1, b + 1, b); }
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    geo.setIndex(idx);
    geo.computeVertexNormals();
    const m = new THREE.Mesh(geo, material);
    m.receiveShadow = true;
    scene.add(m);
    return m;
  };
  ribbon(HALF_RIVER + 0.9, 0.03, new THREE.MeshLambertMaterial({ color: 0xe6d3a0, side: THREE.DoubleSide }));
  const water = ribbon(HALF_RIVER, 0.06, new THREE.MeshLambertMaterial({
    color: 0x4ba6d8, transparent: true, opacity: 0.88, side: THREE.DoubleSide }));

  // Seçilebilir ağaçlar (deterministik; id = sıra)
  const trees = [];
  const near = (x, z, list, d) => list.some((o) => Math.hypot(o.x - x, o.z - z) < d);
  let tries = 0;
  while (trees.length < 56 && tries++ < 2000) {
    const a = r() * Math.PI * 2, d = 6 + r() * 30;
    const x = Math.cos(a) * d, z = Math.sin(a) * d;
    const scale = 0.85 + r() * 0.4;
    const color = pickFoliage(r);
    const rot = r() * Math.PI * 2;
    if (Math.abs(x - riverX(z)) < HALF_RIVER + 2.5) continue;
    if (Math.hypot(x, z) < 6.5 || near(x, z, trees, 3)) continue;
    const tree = { id: trees.length, x, z, scale, hp: 3, alive: !cutIds.has(trees.length),
      state: 'standing', t: 0, shake: 0, fadeTarget: 1, fx: 0, fz: 0, group: null, radius: 0.55 * scale };
    if (tree.alive) {
      tree.group = makeTree(scale, color);
      tree.group.position.set(x, 0, z);
      tree.group.rotation.y = rot;
      scene.add(tree.group);
    } else {
      tree.state = 'stump';
      const s = new THREE.Mesh(stumpGeo, lambert(0x70482a));
      s.position.set(x, 0, z); s.scale.setScalar(scale); s.receiveShadow = true;
      scene.add(s);
    }
    trees.push(tree);
  }

  // Kayalar
  const rocks = [];
  tries = 0;
  while (rocks.length < 16 && tries++ < 800) {
    const a = r() * Math.PI * 2, d = 5 + r() * 34;
    const x = Math.cos(a) * d, z = Math.sin(a) * d;
    const s = 0.5 + r() * 0.9;
    const rot = r() * 6;
    if (isWater(x, z) || Math.hypot(x, z) < 5 || near(x, z, trees, 2.2) || near(x, z, rocks, 2.5)) continue;
    const m = new THREE.Mesh(new THREE.IcosahedronGeometry(1, 0), lambert(0x9d9b92, { flatShading: true }));
    m.scale.set(s, s * 0.65, s * 0.9);
    m.position.set(x, s * 0.3, z);
    m.rotation.y = rot;
    m.castShadow = m.receiveShadow = true;
    scene.add(m);
    rocks.push({ x, z, radius: s * 0.85 });
  }

  // Sınırdaki orman duvarı (örnekli çizim, gölge yok)
  const ringN = 80;
  const ring = [new THREE.InstancedMesh(trunkGeo, lambert(0x70482a), ringN),
    new THREE.InstancedMesh(cone1Geo, lambert(0xffffff, { flatShading: true }), ringN),
    new THREE.InstancedMesh(cone2Geo, lambert(0xffffff, { flatShading: true }), ringN)];
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), col = new THREE.Color();
  let ri = 0;
  for (let i = 0; i < ringN * 3 && ri < ringN; i++) {
    const a = (i / (ringN * 3)) * Math.PI * 2 * 1 + r() * 0.05;
    const d = LIMIT + 3 + r() * 9;
    const x = Math.cos(a * 3) * d, z = Math.sin(a * 3) * d;
    const s = 1 + r() * 0.7;
    const c = pickFoliage(r);
    if (isWater(x, z) || ri >= ringN) continue;
    m4.compose(new THREE.Vector3(x, 0, z), q, new THREE.Vector3(s, s, s));
    col.set(c);
    ring.forEach((im, k) => { im.setMatrixAt(ri, m4); if (k) im.setColorAt(ri, col); });
    ri++;
  }
  ring.forEach((im) => { im.count = ri; im.instanceMatrix.needsUpdate = true;
    if (im.instanceColor) im.instanceColor.needsUpdate = true; scene.add(im); });

  // Çiçekler
  const fN = 160;
  const flowers = new THREE.InstancedMesh(new THREE.SphereGeometry(0.13, 6, 5), lambert(0xffffff), fN);
  const fcols = [0xfff4c2, 0xffd34d, 0xff9ec2, 0xffffff, 0xf08a5d];
  let fi = 0;
  for (let i = 0; i < 600 && fi < fN; i++) {
    const a = r() * Math.PI * 2, d = r() * (LIMIT + 6);
    const x = Math.cos(a) * d, z = Math.sin(a) * d;
    const c = fcols[Math.floor(r() * fcols.length)];
    if (Math.abs(x - riverX(z)) < HALF_RIVER + 1.2) continue;
    m4.compose(new THREE.Vector3(x, 0.13, z), q, new THREE.Vector3(1, 1, 1));
    flowers.setMatrixAt(fi, m4);
    flowers.setColorAt(fi, col.set(c));
    fi++;
  }
  flowers.count = fi;
  scene.add(flowers);

  // Bulutlar
  const clouds = new THREE.Group();
  const cloudMat = new THREE.MeshBasicMaterial({ color: 0xffffff, fog: false });
  for (let i = 0; i < 9; i++) {
    const c = new THREE.Group();
    for (let k = 0; k < 4; k++) {
      const b = new THREE.Mesh(new THREE.SphereGeometry(2.2 + r() * 1.6, 10, 8), cloudMat);
      b.position.set(k * 2.6 - 4, r() * 0.8, r() * 1.5);
      b.scale.y = 0.55;
      c.add(b);
    }
    const a = r() * Math.PI * 2, d = 25 + r() * 35;
    c.position.set(Math.cos(a) * d, 30 + r() * 8, Math.sin(a) * d);
    clouds.add(c);
  }
  scene.add(clouds);

  // Yuva
  let lodge = null;       // { x, z, group, buildT, radius }
  const lodgeRadius = 2.7;

  function lodgeSpot(px, pz, fx, fz) {
    const base = Math.atan2(fx, fz);
    const offs = [0, 0.6, -0.6, 1.2, -1.2, 1.9, -1.9, Math.PI];
    for (const d of [5.2, 6.4, 7.6]) {
      for (const o of offs) {
        const x = px + Math.sin(base + o) * d, z = pz + Math.cos(base + o) * d;
        if (Math.hypot(x, z) > LIMIT - 4) continue;
        if (Math.abs(x - riverX(z)) < HALF_RIVER + 3.2) continue;
        if (trees.some((t) => t.alive && Math.hypot(t.x - x, t.z - z) < lodgeRadius + t.radius + 0.6)) continue;
        if (rocks.some((k) => Math.hypot(k.x - x, k.z - z) < lodgeRadius + k.radius + 0.4)) continue;
        return { x, z };
      }
    }
    return null;
  }

  function buildLodge(x, z, faceYaw, animate) {
    const group = makeLodge();
    group.position.set(x, 0, z);
    group.rotation.y = faceYaw;
    scene.add(group);
    lodge = { x, z, yaw: faceYaw, group, buildT: animate ? 0 : 1, radius: lodgeRadius };
    if (animate) group.scale.setScalar(0.01);
    return lodge;
  }

  // Ağaca vuruş. true dönerse ağaç devrildi.
  function hitTree(tree, fromX, fromZ) {
    tree.hp--;
    tree.shake = 0.3;
    if (tree.hp > 0) return false;
    const dx = tree.x - fromX, dz = tree.z - fromZ, l = Math.hypot(dx, dz) || 1;
    tree.fx = dx / l; tree.fz = dz / l;
    tree.alive = false;
    tree.state = 'falling';
    tree.t = 0;
    return true;
  }

  const axis = new THREE.Vector3();
  function update(dt, time) {
    water.material.opacity = 0.84 + Math.sin(time * 1.6) * 0.04;
    clouds.children.forEach((c, i) => {
      c.position.x += dt * (0.6 + (i % 3) * 0.25);
      if (c.position.x > 70) c.position.x = -70;
    });
    for (const t of trees) {
      if (t.group) {
        const leaf = t.group.userData.leaf;
        const target = t.state === 'standing' ? t.fadeTarget : 1;
        if (Math.abs(leaf.opacity - target) > 0.01) {
          leaf.opacity += (target - leaf.opacity) * Math.min(1, dt * 10);
          leaf.transparent = leaf.opacity < 0.99;
        }
      }
      if (t.state === 'standing' && t.shake > 0) {
        t.shake -= dt;
        t.group.rotation.z = Math.sin(t.shake * 70) * 0.06 * Math.max(0, t.shake / 0.3);
        if (t.shake <= 0) t.group.rotation.z = 0;
      } else if (t.state === 'falling') {
        t.t += dt / 1.1;
        const k = Math.min(1, t.t);
        axis.set(t.fz, 0, -t.fx);
        t.group.quaternion.setFromAxisAngle(axis, k * k * (Math.PI / 2) * 0.96);
        if (t.t > 1.5) {
          scene.remove(t.group);
          t.group = null;
          t.state = 'stump';
          const s = new THREE.Mesh(stumpGeo, lambert(0x70482a));
          s.position.set(t.x, 0, t.z); s.scale.setScalar(t.scale); s.receiveShadow = true;
          scene.add(s);
        } else if (t.t > 1) {
          t.group.scale.setScalar(t.scale * (1 - (t.t - 1) * 2));
        }
      }
    }
    if (lodge && lodge.buildT < 1) {
      lodge.buildT = Math.min(1, lodge.buildT + dt / 0.8);
      const k = lodge.buildT;
      const e = 1 + 2.2 * Math.pow(k - 1, 3) + 1.2 * Math.pow(k - 1, 2); // geri tepmeli büyüme
      lodge.group.scale.setScalar(Math.max(0.01, e));
    }
  }

  // Daire çarpışması: p = {x, z} yerinde düzeltilir
  function resolve(p, rad) {
    for (const t of trees) {
      if (!t.alive) continue;
      push(p, t.x, t.z, t.radius + rad);
    }
    for (const k of rocks) push(p, k.x, k.z, k.radius + rad);
    if (lodge) push(p, lodge.x, lodge.z, lodge.radius + rad);
    const d = Math.hypot(p.x, p.z);
    if (d > LIMIT) { p.x *= LIMIT / d; p.z *= LIMIT / d; return true; }
    return false;
  }
  function push(p, cx, cz, min) {
    const dx = p.x - cx, dz = p.z - cz, d = Math.hypot(dx, dz);
    if (d < min && d > 1e-4) { p.x = cx + (dx / d) * min; p.z = cz + (dz / d) * min; }
  }

  return { trees, rocks, get lodge() { return lodge; }, lodgeSpot, buildLodge, hitTree, update, resolve };
}
