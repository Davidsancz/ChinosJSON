const STATIC_CACHE = "static";

const APP_SHELL = [

    "/",
    "html/index.html",
    "css/style.css",
    "js/function.js",
    "js/main.js",
    "js/script1.js",
    "js/script2.js",
    "img/among.png"

];


self.addEventListener("install", (e) => {

    const cacheStatic = caches
        .open(STATIC_CACHE)
        .then((cache) => cache.addAll(APP_SHELL));

    e.waitUntill(cacheStatic);

});

self.addEventListener("fecth", (e) => {
    console.log("fetch!", e.request);

    e.responWith(
        caches
            .match(e.request)
            .then(res => res || fetch(e.request))
            .catch(console.log)
    );

});

