const CACHE_NAME = `note-keerer-cache-v1`;
const urlsToCache = ["/", "/index.html"];

// install service worker.
self.addEventListener("install", (e) => {
  // perform the steps of initialization
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Cached opened");
      return cache.addAll(urlsToCache);
    })
  );
  // skip waiting
  self.skipWaiting();
});

self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request)).then((res) => {
    if (res) return res;
    fetch(e.request);
  });
});
