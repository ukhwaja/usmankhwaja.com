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
    "revision": "62e1341a919d2ac259d41e0e258a9957"
  },
  {
    "url": "index.html",
    "revision": "283ee8b7dc54805285f3c1840c666228"
  },
  {
    "url": "categories/code/index.html",
    "revision": "f415db79c4df9297a1d7e497bbb156f2"
  },
  {
    "url": "categories/index.html",
    "revision": "a864f6c5ba7b0096084810a9f3a5db0d"
  },
  {
    "url": "categories/personal/index.html",
    "revision": "0761bb55ca439afbfbbe562b5c0ffbcc"
  },
  {
    "url": "cloudflare-fast-google-fonts-service-worker-with-google-amp-custom-style-tag/index.html",
    "revision": "40ef7525aad472ae0e0f1a8974300850"
  },
  {
    "url": "creating-google-sheets-web-app-for-catching-netlify-webhooks/index.html",
    "revision": "8d66fba9e719689dc3d640758db39b85"
  },
  {
    "url": "digital-footprint/index.html",
    "revision": "ae99269a16ae129ae020b63ddebc63aa"
  },
  {
    "url": "enable-term-jquery-in-vue-cli-3-scaffolded-project/index.html",
    "revision": "cd9487b88252a9d40a61eec015552cf9"
  },
  {
    "url": "hugo-tachyons-src-without-gulp-or-webpack/index.html",
    "revision": "c4fc00e674d27af3b2511177dc045bd0"
  },
  {
    "url": "lambda-function-on-netlify-as-endpoint-for-google-amp-form/index.html",
    "revision": "2de2b9ad58a58090c5c8d12b432b42d5"
  },
  {
    "url": "page/1/index.html",
    "revision": "a2e4221873bc9f7acd6bb69f52bdbc78"
  },
  {
    "url": "page/2/index.html",
    "revision": "4115692e16b0b73172c257136a7a521b"
  },
  {
    "url": "show-remaining-characters-in-textarea-using-amp-bind/index.html",
    "revision": "5aeb013a55af18cc61c692927b02b520"
  },
  {
    "url": "uses/index.html",
    "revision": "40c167a715426da5e8c93a6ae3cde416"
  },
  {
    "url": "using-hugo-htmlunescape-function-to-solve-selector-expected-errors/index.html",
    "revision": "e857af010bcd0a71dfd27c6a95ad485c"
  },
  {
    "url": "welcome-to-my-site/index.html",
    "revision": "b63011fb0ac33312bc41de6e6405d401"
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
