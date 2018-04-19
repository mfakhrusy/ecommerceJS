importScripts("precache-manifest.af5eaded9bf02c7407eaac1ed4a2ff32.js", "https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

// Check that service workers are registered
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}

