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
    "revision": "3216a0f6f871163d2bf553ae4ac570f5"
  },
  {
    "url": "index.html",
    "revision": "b77ce1bf731c7a29389e9fc556b03f22"
  },
  {
    "url": "categories/code/index.html",
    "revision": "d8a4f8d8123607c412adbfb45ac2f6cf"
  },
  {
    "url": "categories/index.html",
    "revision": "304c5e6eb1f258f8d9c450e544bdaaea"
  },
  {
    "url": "categories/personal/index.html",
    "revision": "72ae34c5a4ef951622714709619e80bb"
  },
  {
    "url": "creating-google-sheets-web-app-for-catching-netlify-webhooks/index.html",
    "revision": "bb2063bd516bb4691b4519641a2b0311"
  },
  {
    "url": "digital-footprint/index.html",
    "revision": "ee202d273b98eaafd90ae3adec22e836"
  },
  {
    "url": "enable-term-jquery-in-vue-cli-3-scaffolded-project/index.html",
    "revision": "368d151fc9604b4d955ae1b75c1fdcfe"
  },
  {
    "url": "hugo-tachyons-src-without-gulp-or-webpack/index.html",
    "revision": "b73877750915800bc44de82922dacdbc"
  },
  {
    "url": "lambda-function-on-netlify-as-endpoint-for-google-amp-form/index.html",
    "revision": "bdc5460d3b0abf0fe6e8b608caf21db6"
  },
  {
    "url": "page/1/index.html",
    "revision": "a2e4221873bc9f7acd6bb69f52bdbc78"
  },
  {
    "url": "page/2/index.html",
    "revision": "c01fad1da15a645b9a896c4b55b2c4c4"
  },
  {
    "url": "show-remaining-characters-in-textarea-using-amp-bind/index.html",
    "revision": "2bfab50c1e41fadc5453591fcbb2317e"
  },
  {
    "url": "uses/index.html",
    "revision": "208500edbb1185e1bd20b9ad9e6229e6"
  },
  {
    "url": "using-hugo-htmlunescape-function-to-solve-selector-expected-errors/index.html",
    "revision": "7ee24ccbcf3b008e2efbbdd520ca5689"
  },
  {
    "url": "welcome-to-my-site/index.html",
    "revision": "bdef82813379e96e2ca2919563ce673c"
  },
  {
    "url": "logo.webp",
    "revision": "430cce373cbfe9d13a3785d4ade49eb4"
  },
  {
    "url": "using-hugo-htmlunescape-function-to-solve-selector-expected-errors/html-error.webp",
    "revision": "75f47af35a34db0296f315d7963f1ed0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:webp|gif)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({ maxEntries: 10, maxAgeSeconds: 604800, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/, new workbox.strategies.StaleWhileRevalidate({ "cacheName":"google-fonts-stylesheets", plugins: [] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/, new workbox.strategies.CacheFirst({ "cacheName":"google-fonts-webfonts", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }), new workbox.expiration.Plugin({ maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
