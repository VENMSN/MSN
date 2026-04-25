const cacheName = 'v1';
const cacheFiles = [
  'index.html',
  'style.css', // ඔබේ css ෆයිල් එකේ නම
  'script.js', // ඔබේ js ෆයිල් එකේ නම
  'manifest.json'
];

// ඇප් එක ඉන්ස්ටෝල් වන විට ෆයිල් සේව් කිරීම
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(cacheFiles);
    })
  );
});

// Offline ඇති විට සේව් කරගත් ෆයිල් ලබා දීම
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
