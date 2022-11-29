var tomoriru_setsuna = [
  "index.html",
  "/icon-192x192.png",
  "/icon-256x256.png",
  "/icon-384x384.png",
  "/icon-512x512.png",
  "/manifest.json",
  "/xlsx.full.min.js",
  "/QR_SSEd.png"
]



self.addEventListener('install',function(e) {
  e.waitUntil(
    caches.open(tomoriru_setsuna).then(function(cache) {
      return cache.addAll(tomoriru_setsuna)
    })

  )
})


self.addEventListener('fetch', function(event) {
  event.respondwith(
    caches.match(event.request).then(function(response) {
      
      //if(cache != tomoriru_setsuna){
      if(navigator.onLine != false || cache != tomoriru_setsuna){
        return caches.open(tomoriru_setsuna).then(function(cache){
          return cache.match(event.request)
        })
      }

      return response || fetch(event.request)
    })
  )
})
