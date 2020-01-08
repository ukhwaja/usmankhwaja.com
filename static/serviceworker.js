/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fdab042d8a18d43feac97af5fdf2b6b1"
  },
  {
    "url": "index.html",
    "revision": "2ba8749fc20b873be8310b1401b8d4a1"
  },
  {
    "url": "categories/code/index.html",
    "revision": "35c5f0f95025a42cddd1c0d409492261"
  },
  {
    "url": "categories/index.html",
    "revision": "c7dc2bff5ab08cc66d1631024de41b0b"
  },
  {
    "url": "categories/personal/index.html",
    "revision": "cebbbe9a0daf04d792e01cf3ba2e8cf5"
  },
  {
    "url": "creating-google-sheets-web-app-for-catching-netlify-webhooks/index.html",
    "revision": "5af94ab87ed434ce45082ddc63ad5ac6"
  },
  {
    "url": "enable-term-jquery-in-vue-cli-3-scaffolded-project/index.html",
    "revision": "9ef68325a9990958770f409940c0ddf5"
  },
  {
    "url": "hugo-tachyons-src-without-gulp-or-webpack/index.html",
    "revision": "089953a484cf1e076b027618aca025aa"
  },
  {
    "url": "lambda-function-on-netlify-as-endpoint-for-google-amp-form/index.html",
    "revision": "483b8ae0885938d410ad2bdd77652f95"
  },
  {
    "url": "my-digital-footprint/index.html",
    "revision": "ed6c1cb8b04aa90147e13ac6c49154e3"
  },
  {
    "url": "page/1/index.html",
    "revision": "a2e4221873bc9f7acd6bb69f52bdbc78"
  },
  {
    "url": "page/2/index.html",
    "revision": "802c26c20f4c37cfc4a4186c3d315a17"
  },
  {
    "url": "show-remaining-characters-in-textarea-using-amp-bind/index.html",
    "revision": "24d4dbf21b77ebd25dbbddf569cb5b86"
  },
  {
    "url": "using-hugo-htmlunescape-function-to-solve-selector-expected-errors/index.html",
    "revision": "a9f24e9beea677b5cbca3c176c4068f2"
  },
  {
    "url": "welcome-to-my-site/index.html",
    "revision": "32bd8f21a69b8db56df93b2fdaea6e57"
  },
  {
    "url": "using-hugo-htmlunescape-function-to-solve-selector-expected-errors/html-error.webp",
    "revision": "75f47af35a34db0296f315d7963f1ed0"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "8cbf43d949490e6cac6abdb04cf6e402"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:webp|gif|png)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({ maxEntries: 10, maxAgeSeconds: 604800, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"google-fonts-stylesheets", plugins: [] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/, new workbox.strategies.CacheFirst({ "cacheName":"google-fonts-webfonts", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }), new workbox.expiration.Plugin({ maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
