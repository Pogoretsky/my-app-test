let cacheData = "appV1";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([])
    })
  )
})

this.addEventListener("fetch", (event) => {
  console.log('fetch started')

    if (event.request.url === "https://jsonplaceholder.typicode.com/users") {
      console.log('notification started on fetch')
      event.waitUntil(
        this.registration.showNotification('Test notification', {
          body: 'This is test notification for application',
          type: 'basic',
          icon: './favicon.ico',
          requireInteraction: true,
          tag: `notif_${Math.floor((Math.random() * 1000000) + 1)}`
        })
      )
      setTimeout(() => {
        console.log('show notif from timeout started')
        this.registration.showNotification('Test notification', {
          body: 'This is test notification for application',
          type: 'basic',
          icon: './favicon.ico',
          requireInteraction: true,
          tag: `notif_${Math.floor((Math.random() * 1000000) + 1)}`
        })
      }, 60000)
    }
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp
        }
        let requestUrl = event.request.clone();
        fetch(requestUrl)
      })
    )
  }
})