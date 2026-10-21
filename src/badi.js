import * as THREE from '../vendor/three.module.js';

const mat = (color) => new THREE.MeshLambertMaterial({ color });

function ball(r, material, sx = 1, sy = 1, sz = 1) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, 20, 14), material);
  m.scale.set(sx, sy, sz);
  m.castShadow = true;
  return m;
}

// Badi: prosedürel, düşük poligonlu sevimli kunduz. Burnu +Z yönüne bakar.
export function createBadi() {
  const fur = mat(0x9a6130);
  const furDark = mat(0x6e4220);
  const belly = mat(0xe3bf8c);
  const tailMat = mat(0x4f3220);
  const black = mat(0x1d1410);
  const white = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const toothMat = mat(0xfff6dd);

  const root = new THREE.Group();   // dünya konumu + yön
  const rig = new THREE.Group();    // zıplama / eğilme
  root.add(rig);

  const body = ball(0.6, fur, 0.95, 0.8, 1.25);
  body.position.set(0, 0.7, 0);
  rig.add(body);
  const tummy = ball(0.5, belly, 0.85, 0.7, 1.0);
  tummy.position.set(0, 0.56, 0.2);
  rig.add(tummy);

  // Baş
  const head = new THREE.Group();
  head.position.set(0, 1.0, 0.78);
  rig.add(head);
  const skull = ball(0.46, fur, 1, 0.92, 1);
  skull.position.set(0, 0.05, 0.2);
  head.add(skull);
  const muzzle = ball(0.22, belly, 1.15, 0.8, 1);
  muzzle.position.set(0, -0.1, 0.58);
  head.add(muzzle);
  const nose = ball(0.09, black);
  nose.position.set(0, -0.02, 0.8);
  head.add(nose);
  for (const s of [-1, 1]) {
    const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.13, 0.04), toothMat);
    tooth.position.set(s * 0.045, -0.25, 0.74);
    head.add(tooth);
    const eye = ball(0.075, black);
    eye.position.set(s * 0.21, 0.2, 0.5);
    head.add(eye);
    const glint = new THREE.Mesh(new THREE.SphereGeometry(0.028, 8, 6), white);
    glint.position.set(s * 0.19, 0.24, 0.57);
    head.add(glint);
    const ear = ball(0.11, furDark, 1, 1, 0.6);
    ear.position.set(s * 0.3, 0.46, 0.05);
    head.add(ear);
  }

  // Kürek gibi kuyruk
  const tail = new THREE.Group();
  tail.position.set(0, 0.45, -0.8);
  rig.add(tail);
  const paddle = ball(0.5, tailMat, 0.85, 0.12, 1.25);
  paddle.position.set(0, -0.02, -0.68);
  paddle.rotation.x = -0.18;
  tail.add(paddle);

  // Kollar ve ayaklar
  const limbs = [];
  for (const s of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(s * 0.4, 0.62, 0.42);
    const armMesh = ball(0.12, furDark, 1, 2.2, 1);
    armMesh.position.set(0, -0.2, 0);
    arm.add(armMesh);
    rig.add(arm);
    limbs.push({ pivot: arm, side: s, kind: 'arm' });

    const leg = new THREE.Group();
    leg.position.set(s * 0.36, 0.3, -0.32);
    const foot = ball(0.19, furDark, 0.9, 0.7, 1.5);
    foot.position.set(0, -0.14, 0.1);
    leg.add(foot);
    rig.add(leg);
    limbs.push({ pivot: leg, side: s, kind: 'leg' });
  }

  let phase = 0;
  let bobSmooth = 0;

  // speed: 0..1 hız oranı, swimming: suda mı, chop: 0..1 kesme animasyonu (<0 = yok)
  function update(dt, speed, swimming, chop, time) {
    phase += dt * (swimming ? 9 : 13) * speed;
    const moving = speed > 0.05;
    for (const l of limbs) {
      const dir = (l.kind === 'leg' ? 1 : -1) * l.side;
      l.pivot.rotation.x = moving ? Math.sin(phase) * 0.75 * dir : l.pivot.rotation.x * 0.8;
    }
    const bob = moving ? Math.abs(Math.sin(phase)) * 0.09 : Math.sin(time * 2) * 0.012;
    bobSmooth += (bob - bobSmooth) * Math.min(1, dt * 18);
    const sink = swimming ? -0.38 : 0;
    rig.position.y += (sink + bobSmooth - rig.position.y) * Math.min(1, dt * 10);
    rig.rotation.z = moving ? Math.sin(phase) * 0.05 : rig.rotation.z * 0.85;

    tail.rotation.y = Math.sin(time * (moving ? 7 : 2.2)) * (moving ? 0.35 : 0.14);
    tail.rotation.x = swimming ? 0.3 : 0;

    if (chop >= 0) {
      const k = Math.sin(Math.min(1, chop) * Math.PI);
      head.rotation.x = k * 0.85;
      rig.rotation.x = k * 0.14;
    } else {
      head.rotation.x += (Math.sin(time * 1.3) * 0.03 - head.rotation.x) * Math.min(1, dt * 10);
      rig.rotation.x *= 0.8;
    }
  }

  return { group: root, update };
}
