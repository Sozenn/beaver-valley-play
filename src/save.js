// Kayıt: sürümlü şema, anahtar beaver-valley:save:v1. Oyun kapalıyken üretim yok.
const KEY = 'beaver-valley:save:v1';
const VERSION = 1;

export function load() {
  try {
    const d = JSON.parse(localStorage.getItem(KEY));
    if (d && d.version === VERSION) return d;
  } catch { /* bozuk veya erişilemeyen kayıt: yeni oyun */ }
  return null;
}

export function save(data) {
  try {
    localStorage.setItem(KEY, JSON.stringify({ ...data, version: VERSION }));
  } catch { /* özel pencere / kota: sessizce geç */ }
}

export function clear() {
  try { localStorage.removeItem(KEY); } catch { /* yok say */ }
}
