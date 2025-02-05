const staticDev = 'prosa-cache-v1';
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/main.js",
  "/firebase.js"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDev).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});

