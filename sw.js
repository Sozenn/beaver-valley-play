const CACHE = 'beaver-valley-v3';
const FILES = ["./game.js","./icons/icon-192.png","./icons/icon-512.png","./index.html","./manifest.webmanifest","./models/badi.glb","./style.css","./tex/bark_c.jpg","./tex/bark_n.jpg","./tex/grass_c.jpg","./tex/grass_n.jpg","./tex/ground_c.jpg","./tex/ground_n.jpg","./tex/rock_c.jpg","./tex/rock_n.jpg"];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request)));
});
