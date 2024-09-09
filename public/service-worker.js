const appName = "rick-and-morty-v2";
const dynamicAppName = "dynamic-rick-and-morty-v2";

const assetUrls = ["index.html", "offline.html"];

self.addEventListener("install", async () => {
  const cache = await caches.open(appName);
  await cache.addAll(assetUrls);
});

self.addEventListener("activate", async () => {
  const cacheNames = await caches.keys();
  await Promise.all(
    cacheNames
      .filter((name) => name !== appName)
      .filter((name) => name !== dynamicAppName)
      .map((name) => caches.delete(name))
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  const url = new URL(request.url);
  if (url.origin === location.origin) {
    event.respondWith(cacheFirst(request));
  } else {
    event.respondWith(networkFirst(request));
  }
});

// strategies
async function cacheFirst(request) {
  const cached = await caches.match(request);
  return cached ?? (await fetch(request));
}

async function networkFirst(request) {
  const cache = await caches.open(dynamicAppName);

  try {
    const response = await fetch(request);
    await cache.put(request, response.clone());
    return response;
  } catch (e) {
    const cached = await cache.match(request);
    return cached ?? (await caches.match("/offline.html"));
  }
}
