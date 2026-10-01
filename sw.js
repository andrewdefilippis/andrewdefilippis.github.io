---
layout: null
sitemap: false
---
// The old theme could install a "service worker" (a background script that caches pages).
// This replacement removes itself so returning visitors always get the current site.
// No page on this site loads this file; browsers fetch it on their own to check for updates.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) await caches.delete(key);
    await self.registration.unregister();
    for (const client of await self.clients.matchAll({ type: 'window' })) client.navigate(client.url);
  })());
});
