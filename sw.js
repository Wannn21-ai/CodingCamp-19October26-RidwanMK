const CACHE_NAME = "daylight-v1";
const STATIC_ASSETS = [
  "./",
  "./index.html",
  "./css/style.css",
  "./js/script.js",
  "./manifest.json",
  "./icons/favicon.svg",
  "./icons/icon-192.svg",
  "./icons/icon-512.svg"
];

// Install: cache all static assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting();
});

// Activate: remove old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch: cache-first for static assets, network-first for quote API
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Let quote API go through network, fallback to nothing (app handles it)
  if (url.hostname === "quotes.liupurnomo.com") {
    event.respondWith(fetch(event.request).catch(() => new Response("", { status: 503 })));
    return;
  }

  // Google favicon service — network only, no cache
  if (url.hostname === "www.google.com" && url.pathname.startsWith("/s2/favicons")) {
    event.respondWith(fetch(event.request).catch(() => new Response("", { status: 503 })));
    return;
  }

  // Cache-first for everything else
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
