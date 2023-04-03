// *******************************************   p-cache.js    ***********************************************
// What it does: it caches all requests a site makes (css, js, html, etc.) and when the app is offline it loads the cached version.
// On the Developer Tools' Network tab, if Disable cache is checked, requests will go to the network instead of the Service Worker. Uncheck that.
// Incognito mode skips the service worker as well!

var cacheName = 'pc-v2'; 

// Installing Service Worker
// "https://legends.io/index.html"
self.addEventListener('install',  function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log("CACHING /INDEX.HTML");
      return cache.addAll(
        [
          '/index.html', // == https://legends.io
          '/card.json',
          '/result.html',
          '/prep/index.html',
          '/prep/q1.html',
          '/prep/q2.html',
          '/prep/q3.html',
          '/prep/player.js',
          '/prep/jquery-3.10.0.slim.min.js',
          '/prep/articulate.js',
          '/prep/main.css',
          '/prep/style.css',
          '/test1/index.html',
          '/test1/part1.html',
          '/test1/verify.html',
          '/test2/index.html',
          '/test2/part1.html',
          '/test2/verify.html',
          '/test3/index.html',
          '/test3/part1.html',
          '/test3/verify.html',
          '/test4/index.html',
          '/test4/part1.html',
          '/test4/verify.html',
          '/test5/index.html',
          '/test5/part1.html',
          '/test5/verify.html',
          '/test6/index.html',
          '/test6/part1.html',
          '/test6/verify.html',
          '/img/busi.png',
          '/img/free.png',
          '/img/q.png',
          '/img/part2.png',
          '/img/reading.png',
          '/img/ticket-24.png',
          '/img/ticket.png',
          '/img/ticket2.png',
          '/img/ticket4.png',
          '/img/ticket5.png',
          '/img/ticket6.png',
          '/index.js'

        ]
      );
    })
  ); 
  console.log('[Service Worker] Install');   
});

self.addEventListener('activate', e => {
  console.log('Service Worker: Activated');
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// FETCH PROXY & CACHING
// 1.) try get resource from cache else fetch and update cache else --> error
self.addEventListener('fetch', function (e) {
  console.log('network or cache: ' + e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (r) {
      return r || fetch(e.request).then(function (response) {
        return caches.open(cacheName).then(function (cache) {
          console.log('Caching new resource: ' + e.request.url);
          cache.put(e.request, response.clone());
          return response;
        });
      }).catch(function(err){console.log(err);});
    })
  );
});