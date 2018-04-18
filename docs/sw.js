importScripts("precache-manifest.9e807c9542286e003dff263035b37451.js", "https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

// Check that service workers are registered
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}

