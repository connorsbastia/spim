const CACHE_NAME = 'devis-app-cache-v1';
const urlsToCache = [
'./',
'./index.html',
'./app.js',
'./manifest.json',
'./icon-192x192.png',
'./icon-512x512.png'
];

// Installer le Service Worker et mettre en cache les ressources
self.addEventListener('install', event => {
event.waitUntil(
caches.open(CACHE_NAME)
.then(cache => {
console.log('Mise en cache des ressources');
return cache.addAll(urlsToCache);
})
);
});

// Activer le Service Worker
self.addEventListener('activate', event => {
console.log('Service Worker activé');
});

// Intercepter les requêtes réseau et servir les fichiers en cache si disponibles
self.addEventListener('fetch', event => {
event.respondWith(
caches.match(event.request)
.then(response => {
return response || fetch(event.request);
})
);
});
