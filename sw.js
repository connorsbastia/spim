self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fiche-releve-store').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/app.js',
      '/manifest.json',
      '/images/icon.png',
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
