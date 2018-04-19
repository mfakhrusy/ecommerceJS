importScripts("precache-manifest.2e42d12b32567fcd5cc8b51aea0700cd.js", "https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

// Check that service workers are registered
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}

