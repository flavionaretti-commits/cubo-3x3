const CACHE_NAME = "cubo-3x3-github-v1";
const INDEX_URL = new URL("./index.html", self.location.href).toString();
const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./favicon.svg",
  "./apple-touch-icon.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./assets/big-puzzle-orientation-ZVZQJEF5-CYC-VDRR.js",
  "./assets/chunk-DQGYYYHZ-CZk1xKot.js",
  "./assets/chunk-FLK6AZKB-DyfrLHow.js",
  "./assets/framework-CXnKph_e.js",
  "./assets/index-BOGTLvfo.css",
  "./assets/index-BUj8YWs8.js",
  "./assets/layout-segment-context-CMmxBiu7.js",
  "./assets/page-B__2JLCl.js",
  "./assets/puzzle-geometry-BdakBgeu.js",
  "./assets/puzzles-D55Rl5zf.js",
  "./assets/puzzles-dynamic-3x3x3-FYXD7SIU-_n8esyK1.js",
  "./assets/puzzles-dynamic-4x4x4-REUXFQJ4-BCO5i3yW.js",
  "./assets/puzzles-dynamic-megaminx-2LVHIDL4-CQvKr2g_.js",
  "./assets/puzzles-dynamic-side-events-IMYJ533P-CbEQeKzL.js",
  "./assets/puzzles-dynamic-unofficial-P3TW433I-DvlcAYCK.js",
  "./assets/rolldown-runtime-S-ySWqyJ.js",
  "./assets/twisty-CEcjsVAi.js",
  "./assets/twisty-dynamic-3d-VGZIQ64W-CtkyPOlb.js"
].map((item) => new URL(item, self.location.href).toString());

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(INDEX_URL, copy));
          return response;
        })
        .catch(() => caches.match(INDEX_URL))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
