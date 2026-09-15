const CACHE_NAME = "cubo-3x3-github-v2-pixelart";
const CACHE_PREFIX = "cubo-3x3-";
const INDEX_URL = new URL("./index.html", self.location.href).toString();
const PIXEL_URL = new URL("./pixel-art.html", self.location.href).toString();
const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./pixel-art.html",
  "./pixel-art.css",
  "./pixel-art.js",
  "./pixel-art-link.js",
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

async function addPixelArtEntry(response) {
  if (!response || !response.ok) return response;
  const type = response.headers.get("content-type") || "";
  if (!type.includes("text/html")) return response;
  const text = await response.text();
  const enhancedText = text.includes("pixel-art-link.js")
    ? text
    : text.replace("</body>", '<script src="./pixel-art-link.js" defer></script></body>');
  const headers = new Headers(response.headers);
  headers.delete("content-length");
  headers.delete("content-encoding");
  return new Response(enhancedText, { status: response.status, statusText: response.statusText, headers });
}

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(PRECACHE_URLS);
    try {
      const response = await fetch(INDEX_URL, { cache: "no-store" });
      const enhanced = await addPixelArtEntry(response);
      await cache.put(INDEX_URL, enhanced.clone());
      await cache.put(new URL("./", self.location.href).toString(), enhanced.clone());
    } catch (_) {}
  })());
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    if (url.href === PIXEL_URL || url.pathname.endsWith("/pixel-art.html")) {
      event.respondWith(
        fetch(request)
          .then((response) => {
            if (response.ok) caches.open(CACHE_NAME).then((cache) => cache.put(PIXEL_URL, response.clone()));
            return response;
          })
          .catch(() => caches.match(PIXEL_URL))
      );
      return;
    }

    event.respondWith((async () => {
      try {
        const response = await fetch(request);
        const enhanced = await addPixelArtEntry(response);
        const copy = enhanced.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(INDEX_URL, copy.clone());
          cache.put(new URL("./", self.location.href).toString(), copy);
        });
        return enhanced;
      } catch (_) {
        return (await caches.match(INDEX_URL)) || (await caches.match(new URL("./", self.location.href).toString()));
      }
    })());
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
