// Girdi: klavye, fare, dokunmatik joystick (sol yarı) ve kamera sürükleme (sağ yarı).
export function createInput(canvas, handlers) {
  const keys = new Set();
  const state = { jx: 0, jy: 0, camDX: 0, camDY: 0, zoom: 0, actHeld: false };
  const joy = document.getElementById('joy');
  const knob = document.getElementById('joy-knob');
  const JOY_R = 52;

  let joyId = null, joyOx = 0, joyOy = 0;
  let camId = null, camX = 0, camY = 0;

  const setJoyUI = (visible, ox, oy, kx, ky) => {
    joy.style.display = visible ? 'block' : 'none';
    if (!visible) return;
    joy.style.left = ox + 'px';
    joy.style.top = oy + 'px';
    knob.style.transform = `translate(${kx}px, ${ky}px)`;
  };

  canvas.addEventListener('pointerdown', (e) => {
    canvas.setPointerCapture(e.pointerId);
    const touch = e.pointerType !== 'mouse';
    if (touch && e.clientX < innerWidth * 0.5 && joyId === null) {
      joyId = e.pointerId; joyOx = e.clientX; joyOy = e.clientY;
      setJoyUI(true, joyOx, joyOy, 0, 0);
    } else if (camId === null) {
      camId = e.pointerId; camX = e.clientX; camY = e.clientY;
    }
  });
  canvas.addEventListener('pointermove', (e) => {
    if (e.pointerId === joyId) {
      let dx = e.clientX - joyOx, dy = e.clientY - joyOy;
      const l = Math.hypot(dx, dy);
      if (l > JOY_R) { dx = dx / l * JOY_R; dy = dy / l * JOY_R; }
      state.jx = dx / JOY_R;
      state.jy = -dy / JOY_R;
      setJoyUI(true, joyOx, joyOy, dx, dy);
    } else if (e.pointerId === camId) {
      state.camDX += e.clientX - camX;
      state.camDY += e.clientY - camY;
      camX = e.clientX; camY = e.clientY;
    }
  });
  const end = (e) => {
    if (e.pointerId === joyId) { joyId = null; state.jx = state.jy = 0; setJoyUI(false); }
    if (e.pointerId === camId) camId = null;
  };
  canvas.addEventListener('pointerup', end);
  canvas.addEventListener('pointercancel', end);
  canvas.addEventListener('wheel', (e) => { e.preventDefault(); state.zoom += Math.sign(e.deltaY); }, { passive: false });
  canvas.addEventListener('contextmenu', (e) => e.preventDefault());

  addEventListener('keydown', (e) => {
    if (e.repeat) return;
    const k = e.key.toLowerCase();
    if (k === 'escape' || k === 'p') { handlers.onPause(); return; }
    if (k === 'b') handlers.onBuild();
    keys.add(k);
  });
  addEventListener('keyup', (e) => keys.delete(e.key.toLowerCase()));
  addEventListener('blur', () => { keys.clear(); state.actHeld = false; });

  // Ekran düğmeleri
  const act = document.getElementById('btn-act');
  const hold = (down) => (e) => { e.preventDefault(); state.actHeld = down; act.classList.toggle('down', down); };
  act.addEventListener('pointerdown', hold(true));
  act.addEventListener('pointerup', hold(false));
  act.addEventListener('pointercancel', hold(false));
  act.addEventListener('pointerleave', hold(false));
  // Parmak düğme dışında kalkarsa da bırakılmış say
  addEventListener('pointerup', () => { state.actHeld = false; act.classList.remove('down'); });
  addEventListener('pointercancel', () => { state.actHeld = false; act.classList.remove('down'); });
  document.getElementById('btn-build').addEventListener('click', () => handlers.onBuild());
  document.getElementById('btn-pause').addEventListener('click', () => handlers.onPause());

  return {
    // Ekran uzayı: x sağ, y ileri
    move() {
      let x = state.jx, y = state.jy;
      if (keys.has('a') || keys.has('arrowleft')) x -= 1;
      if (keys.has('d') || keys.has('arrowright')) x += 1;
      if (keys.has('w') || keys.has('arrowup')) y += 1;
      if (keys.has('s') || keys.has('arrowdown')) y -= 1;
      const l = Math.hypot(x, y);
      if (l > 1) { x /= l; y /= l; }
      return l < 0.12 ? { x: 0, y: 0 } : { x, y };
    },
    actHeld() { return state.actHeld || keys.has('e') || keys.has(' ') || keys.has('enter'); },
    consumeCam() { const r = { dx: state.camDX, dy: state.camDY, zoom: state.zoom };
      state.camDX = state.camDY = state.zoom = 0; return r; },
    reset() { keys.clear(); state.jx = state.jy = 0; state.actHeld = false; joyId = camId = null; setJoyUI(false); },
  };
}
