/* eslint-disable no-restricted-globals */

console.log("Sir, I am service worker! Allow me to introduce");

const CACHE_VERSION = 1;
const CACHE_NAME = `site-cache-v${CACHE_VERSION}`;

const prefetchAssetsUrl = [
    "/",
    "index.html",
    "offline.html",
    "favicon.ico",
    "logo192.png",
    "serviceWorker.js",
    "manifest.json",
    "static/js/bundle.js",
    "static/js/main.chunk.js",
    "static/js/vendors~main.chunk.js",
    "static/media/login-bg.f943f8e8.jpg"
];

// service worker installation process
self.addEventListener("install", (event) => {
    console.log("Prefetching started...");
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            const promises = prefetchAssetsUrl.map(assetUrl => {
                // make a new request
                const request = new Request(assetUrl, {mode: "no-cors"});
                return fetch(request).then(res => {
                    if (res.status >= 400) {
                        throw new Error(`Error prefetching ${assetUrl} for ${res.statusText}`);
                    }
                    return cache.put(assetUrl, res);
                }).catch(err => console.log(`${assetUrl} failed prefetching with error: ${err}`));
            });

            return Promise.all(promises).then(() => console.log('Prefetching completeted!'))
        }).catch(err => {
            console.log(`Prefetching failed due to ${err}`);
        })
    );
});

// on any request
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then(res => {
            if (res) return res;
            return fetch(event.request).then(response => {
                if (!response || response.status !== 200 || response.type !== "basic") return response;
                const toCache = response.clone();
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, toCache);
                });
                return response;
            });
        })
    );
});


// on activation
self.addEventListener("activate", (event) => {
    const allowList = [];
    allowList.push(CACHE_NAME);
    event.waitUntil(
        caches.keys().then(cachesNames => {
            return Promise.all(
                cachesNames.map(cacheName => {
                    if (allowList.indexOf(cacheName) === -1) return caches.delete(cacheName);
                })
            );
        })
    );
});