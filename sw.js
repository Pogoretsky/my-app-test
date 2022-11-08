let cacheData = "appV1";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        '/static/js/main.chunk.js',
        '/static/js/0.chunk.js',
        '/static/js/bundle.js',
        '/static/css/main.chunk.css',
        '/bootstrap.min.css',
        '/index.html',
        '/',
        "/feed",
        "/events"
      ])
    })
  )

  const triggerNotification = () => {
    console.log('triggerNotification STARTED', String(Math.floor((Math.random() * 1000000) + 1)))
    this.registration.showNotification(lorem(2), {
      body: lorem(10),
      type: 'basic',
      icon: './favicon.ico',
      requireInteraction: true,
      // tag: 'test'
      tag: `notif_${Math.floor((Math.random() * 1000000) + 1)}`
    })
  }
  const timerId = setInterval(triggerNotification, 5000)
})
this.addEventListener("fetch", (event) => {

  if (!navigator.onLine) {
    // if (event.request.url === "http://localhost:3000/static/js/main.chunk.js") {
    //   event.waitUntil(
    //     this.registration.showNotification("Internet", {
    //       body: "internet not working",
    //     })
    //   )
    // }
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

const source = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin, mi in ultrices tincidunt, nisl libero gravida sem, imperdiet gravida justo turpis vel mi. Morbi consequat gravida ligula, ut lacinia tortor dignissim vel. Nunc quis hendrerit dolor. Pellentesque elit enim, lacinia at tellus eget, lacinia dapibus neque. Pellentesque vitae urna nisi. Aenean a hendrerit augue. Maecenas tellus sem, laoreet id auctor non, vulputate quis sem. Aenean sagittis condimentum arcu non volutpat. Maecenas consequat ante eu quam viverra, et venenatis dui posuere. Quisque et cursus quam. In cursus ante vitae erat blandit, a aliquet risus mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed venenatis feugiat fringilla. Proin et hendrerit dui. Sed aliquam finibus sodales. Etiam at risus sit amet nunc rhoncus maximus. Fusce faucibus luctus leo tincidunt lobortis. Nulla facilisis, nisi sed tincidunt maximus, turpis ligula dignissim lorem, at lacinia metus orci non erat. Fusce in purus porta nulla tristique faucibus pharetra ut diam. Praesent non facilisis libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam tristique non erat et blandit. Praesent aliquet eleifend erat imperdiet tristique. Praesent ac lectus enim. Aliquam erat volutpat. Quisque vulputate mauris id sapien posuere accumsan. Quisque sit amet ligula nec lectus auctor finibus. Aliquam mi felis, faucibus at efficitur et, vestibulum quis ipsum. Nam sem nunc, posuere ac turpis eget, consectetur blandit arcu. Nulla euismod arcu arcu, non ullamcorper felis consectetur vel. Sed consequat lorem in mi mattis, quis volutpat leo congue. Nulla sodales quam sed lobortis dapibus. Nunc lobortis eros ac diam porta, quis auctor justo ornare. Nam tempor lectus erat, quis condimentum nunc iaculis sit amet. Nam quis dolor felis. Nunc pulvinar, nisi sit amet consectetur ullamcorper, ante urna fermentum mi, posuere pharetra quam diam eget lectus. Maecenas nec elementum leo, non ultricies orci. Nulla sem purus, commodo eu sem sit amet, bibendum feugiat ligula. Cras faucibus enim a mi dignissim, non dignissim lacus vehicula. Sed bibendum tortor nec hendrerit fermentum. Nam pulvinar commodo nulla vitae molestie. Sed ultrices tortor et augue eleifend porttitor. Ut hendrerit sagittis arcu in bibendum. Nunc nibh arcu, dapibus eu sapien non, vestibulum fringilla mi. Fusce elementum erat eget sem laoreet tempus. Phasellus tempus in magna ut aliquet. Suspendisse vitae dolor at velit eleifend laoreet. Nulla a turpis turpis. Pellentesque fermentum ipsum dapibus felis mollis ullamcorper. Sed nec sollicitudin leo. Integer vel neque vitae lectus porta luctus et et mi. Proin efficitur ex quam. In bibendum fringilla maximus. Donec viverra tempor posuere. Donec mauris mi, maximus in lectus in, accumsan viverra enim. Cras semper faucibus arcu a mattis. Etiam elit augue, fermentum id est gravida, laoreet faucibus nisi. Mauris semper, nisl vestibulum aliquam pulvinar, mi diam ultricies nisi, id auctor diam arcu id est. Integer a massa pretium, convallis felis at, pharetra lorem. Pellentesque bibendum urna quis tortor blandit luctus. Fusce euismod ex quis tortor mollis iaculis. Vivamus posuere ac sem a condimentum. Duis condimentum dui non metus molestie, eget fringilla ligula egestas. Pellentesque orci erat, vehicula et orci quis, suscipit efficitur purus. Praesent elementum mollis lacus eu luctus. Integer dictum tellus quis dolor maximus ultrices. Cras letius libero eget magna placerat, ut porta diam sodales. Mauris rutrum viverra lorem et interdum. Sed lobortis placerat efficitur. Praesent tortor turpis, facilisis vel est ut, sagittis molestie elit. Nullam sit amet ante eu est fermentum efficitur sit amet nec sapien. Duis at cursus mauris. Vivamus congue arcu metus, ut ornare odio dignissim nec. Vestibulum eu luctus orci. Pellentesque id euismod massa. Nulla tincidunt vitae diam id laoreet. Suspendisse dui dolor, auctor ut purus vel, faucibus cursus leo. Donec auctor, sapien gravida efficitur tincidunt, nunc nibh dictum velit, vel rhoncus eros lacus vitae turpis. Sed arcu turpis, posuere a ligula ut, bibendum tincidunt tortor. Integer ut est sed ante suscipit sodales. Sed quis dolor et massa gravida feugiat. Mauris vehicula ligula sed eleifend bibendum. Praesent viverra mollis neque, rhoncus efficitur nisl porttitor ac. Aliquam id laoreet justo. Suspendisse vitae sodales magna. Sed interdum iaculis dui sed faucibus. Suspendisse et tincidunt arcu. Donec vel rhoncus augue, a letius ex. Nulla sed eros dignissim ante auctor vulputate sed et enim. Cras tincidunt, enim sit amet mollis fermentum, magna lectus volutpat nisi, vitae convallis ipsum elit sed eros. Nullam ac arcu fermentum nisi suscipit interdum. Donec mattis felis id cursus letius. Etiam a scelerisque quam. Aliquam erat volutpat. Nulla urna velit, luctus at rhoncus non, fermentum non erat. Nunc tempus, risus rhoncus hendrerit mattis, mi eros gravida mi, at finibus ante metus a sapien. Cras hendrerit orci eu euismod faucibus. Aliquam finibus urna ipsum, non luctus diam euismod sed. Aenean non eleifend enim, efficitur facilisis sem. Donec quis est nec sem tincidunt vestibulum quis sed ligula. Donec lectus mauris, faucibus sit amet sollicitudin vel, rhoncus quis diam. Phasellus vel ex elementum, condimentum turpis a, volutpat quam. Cras malesuada pretium nisl, eu congue ipsum iaculis sit amet. Mauris eget imperdiet quam. Morbi porta sit amet nunc vitae placerat. Cras mattis tempus tortor vel gravida. Suspendisse imperdiet in tortor in mollis. Aliquam erat volutpat. Nam eu imperdiet sapien. Nulla venenatis purus eu purus vulputate, eget viverra massa fermentum. In consectetur vehicula purus ut condimentum. Vestibulum in nisi id augue viverra rutrum a in sapien. Phasellus sit amet metus quis ligula malesuada fringilla. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus id ultricies odio. Duis ut velit venenatis, scelerisque sapien dapibus, fringilla elit. Nulla id turpis pellentesque, iaculis nisl non, mollis mauris. Suspendisse ultricies, odio at auctor viverra, erat ipsum commodo purus, ac elementum tortor neque sit amet sem. Maecenas aliquet eu ante ut molestie. Vestibulum ut massa nec urna malesuada egestas. Sed non ligula urna. Nam porta et eros vitae dapibus. Praesent pellentesque augue in dui cursus aliquet. Cras id massa elementum, tempus arcu vel, gravida nulla. Duis eu lacus volutpat, vulputate sem ullamcorper, semper sem. Fusce mauris diam, porttitor non quam non, commodo ultricies risus. Mauris nec imperdiet lorem, non volutpat ex. Maecenas bibendum ex sit amet.";
const words = source.split(" ");
let sentences = indexes(words);

sentences.unshift(words[0]);
sentences.pop();

function indexes(source) {
  let output = [];

  for (let i = 0; i < source.length; i++) {
    if (source[i].indexOf(".") !== -1) {
      output.push(source[i + 1]);
    }
  }

  return output;
}

function lorem(wordcount) {
  let random = Math.floor(Math.random() * sentences.length);
  let max = words.length - wordcount;

  if (random > max) {
    lorem(wordcount);
  }

  let start = sentences[random];
  let pos = words.indexOf(start);
  let output = [];

  for (let i = pos; i < pos + wordcount; i++) {
    output.push(words[i]);
  }

  return output.join(" ");
}