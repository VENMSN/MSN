const CACHE_NAME = 'buddhist-era-cache-v1';
const urlsToCache = [
  './',
  'index.html',
  'manifest.json',
  'icon-192x192.png',
  'icon-512x512.png'
];

// ලිපිගොනු මතකයෙහි තැන්පත් කිරීම
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});

// Offline ඇති විට මතකයෙහි ඇති ගොනු ලබා දීම
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
