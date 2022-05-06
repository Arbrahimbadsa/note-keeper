/* eslint-disable no-restricted-globals */


// console.log(location)

// const CACHE_NAME = 'my-site-cache-v1';
// const assets = [
//     "/",
//     "/offline.html"
// ];

// self.addEventListener("install", (event) => {
//     event.waitUntil(
//         caches.open(CACHE_NAME).then(cache => {
//             console.log('Cache open');
//             return cache.addAll(assets);
//         })
//     );
// });

// self.addEventListener("fetch", (event) => {
//     event.respondWith(
//         caches.match(event.request).then(res => {
//             if (res) return res;
//             return fetch(event.request).then(response => {
//                 if (!response || response.status !== 200 || response.type !== "basic") return response;
//                 const toCache = response.clone();
//                 caches.open(CACHE_NAME).then(cache => {
//                     cache.put(event.request, toCache);
//                 });
//                 return response;
//             });
//         })
//     );
// });

// self.addEventListener("activate", (event) => {
//     const allowList = [];
//     allowList.push(CACHE_NAME);
//     event.waitUntil(
//         caches.keys().then(cachesNames => {
//             return Promise.all(
//                 cachesNames.map(cacheName => {
//                     if (allowList.indexOf(cacheName) === -1) return caches.delete(cacheName);
//                 })
//             );
//         })
//     );
// });

const OFFLINE_VERSION = 1;
const CACHE_NAME = 'offline';
// Customize this with a different URL if needed.
const OFFLINE_URL = 'offline.html';

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    // Setting {cache: 'reload'} in the new request will ensure that the response
    // isn't fulfilled from the HTTP cache; i.e., it will be from the network.
    await cache.add(new Request(OFFLINE_URL, {cache: 'reload'}));
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    // Enable navigation preload if it's supported.
    // See https://developers.google.com/web/updates/2017/02/navigation-preload
    if ('navigationPreload' in self.registration) {
      await self.registration.navigationPreload.enable();
    }   
  })());

  // Tell the active service worker to take control of the page immediately.
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // We only want to call event.respondWith() if this is a navigation request
  // for an HTML page.
  if (event.request.mode === 'navigate') {
    event.respondWith((async () => {
      try {
        // First, try to use the navigation preload response if it's supported.
        const preloadResponse = await event.preloadResponse;
        if (preloadResponse) {
          return preloadResponse;
        }

        const networkResponse = await fetch(event.request);
        return networkResponse;
      } catch (error) {
        // catch is only triggered if an exception is thrown, which is likely
        // due to a network error.
        // If fetch() returns a valid HTTP response with a response code in
        // the 4xx or 5xx range, the catch() will NOT be called.
        console.log('Fetch failed; returning offline page instead.', error);

        const cache = await caches.open(CACHE_NAME);
        const cachedResponse = await cache.match(OFFLINE_URL);
        return cachedResponse;
      }
    })());
  }

  // If our if() condition is false, then this fetch handler won't intercept the
  // request. If there are any other fetch handlers registered, they will get a
  // chance to call event.respondWith(). If no fetch handlers call
  // event.respondWith(), the request will be handled by the browser as if there
  // were no service worker involvement.
});