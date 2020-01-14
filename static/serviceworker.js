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
    "revision": "0890ab88e62ba6aaa62239744dfcc2ac"
  },
  {
    "url": "index.html",
    "revision": "2860fc4f988c7442078b596bb4440328"
  },
  {
    "url": "categories/code/index.html",
    "revision": "1bf2612d0313c5f7789287bf138edddd"
  },
  {
    "url": "categories/index.html",
    "revision": "f1b5b7ee417c972efcd91573b8c3173f"
  },
  {
    "url": "categories/personal/index.html",
    "revision": "28d148fc23e9326e6944064e2e4fa1dc"
  },
  {
    "url": "creating-google-sheets-web-app-for-catching-netlify-webhooks/index.html",
    "revision": "5b19f3064f1776b383e432a54a9b05d6"
  },
  {
    "url": "digital-footprint/index.html",
    "revision": "ec903679f3d2b5424443f7a8972c9362"
  },
  {
    "url": "enable-term-jquery-in-vue-cli-3-scaffolded-project/index.html",
    "revision": "e10f38ea49dc32b3d6e1bdd06ac8c732"
  },
  {
    "url": "hugo-tachyons-src-without-gulp-or-webpack/index.html",
    "revision": "df6ae7cbf0139511e3b55e52503d685e"
  },
  {
    "url": "lambda-function-on-netlify-as-endpoint-for-google-amp-form/index.html",
    "revision": "25b8e724fd9935fac35a9055822433ee"
  },
  {
    "url": "page/1/index.html",
    "revision": "a2e4221873bc9f7acd6bb69f52bdbc78"
  },
  {
    "url": "page/2/index.html",
    "revision": "5fc6e94b3b48757d410dd39b0acd0dee"
  },
  {
    "url": "show-remaining-characters-in-textarea-using-amp-bind/index.html",
    "revision": "2116122dd5d7f245ebc0eeffe9cf8115"
  },
  {
    "url": "uses/index.html",
    "revision": "064847b0b65396908bd2d1c80ee911f9"
  },
  {
    "url": "using-hugo-htmlunescape-function-to-solve-selector-expected-errors/index.html",
    "revision": "4e2303d32c0fc33b81e48109128ff86b"
  },
  {
    "url": "welcome-to-my-site/index.html",
    "revision": "f78d9cac2d06bf995bc1e76baa7161f2"
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
