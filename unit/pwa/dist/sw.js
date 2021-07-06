// Step 4 code here //
// try edit the cached files and/or the `cachedFiles` list
const cachedFiles = [
    './',
    './src/app.js',
    './src/cat1.jpeg',
    './src/cat2.jpeg',
    './index.html',
    './manifest.json',
    './src/VOCA-144x144.png',
  ]
  
  // edit this to force re-cache
  const cacheKey = 'demo-sw-v2'
  
  // install, a good time to preload cache
  self.addEventListener('install', event => {
    console.log(`${cacheKey} is installed`)
    event.waitUntil((async () => {
      const cache = await caches.open(cacheKey)
      return cache.addAll(cachedFiles)
    })())
  })

// Step 5 code here //
self.addEventListener('activate', event => {
    console.log(`${cacheKey} is activated`)
    event.waitUntil((async () => {
      const keys = await caches.keys()
      return Promise.all(keys.filter(key => key != cacheKey).map(key => caches.delete(key)))
    })())
})

// activate, a good time to clean old cache since the old service work stops now


// Step 6 code here //
self.addEventListener('fetch', event => {
    event.respondWith((async () => {
      const response = await caches.match(event.request)
      if (response) {
        console.log(`Cache fetch: ${event.request.url}`)
        return response
      }
      console.log(`Network fetch: ${event.request.url}`)
      return fetch(event.request)
    })())
})

