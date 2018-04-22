importScripts("precache-manifest.98c13058f89be309c499304f690ae817.js", "https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

workbox.routing.registerRoute(
  new RegExp('https://5ac586c8a79a110014ce6778.mockapi.io/ejs'),
  workbox.strategies.staleWhileRevalidate()
);

self.addEventListener('push', (event) => {
  const title = 'Get Started With Workbox';
  const options = {
    body: event.data.text()
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

workbox.precaching.precacheAndRoute(self.__precacheManifest);
