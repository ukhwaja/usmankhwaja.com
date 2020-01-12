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
    "revision": "81330a26d8c6f3c8ab1c442ce8fa175a"
  },
  {
    "url": "index.html",
    "revision": "5928a7f4820ed9e62672d4cf3b836c48"
  },
  {
    "url": "categories/code/index.html",
    "revision": "e25c86c7e56fb1ca11537e16a6806727"
  },
  {
    "url": "categories/index.html",
    "revision": "ca3f841106eb71246dafc8c7e201c518"
  },
  {
    "url": "categories/personal/index.html",
    "revision": "1a4f2f99d5b5c0a9fcb58fafa9052abf"
  },
  {
    "url": "creating-google-sheets-web-app-for-catching-netlify-webhooks/index.html",
    "revision": "54513b3588ca3bbf817a7ab7239f916b"
  },
  {
    "url": "digital-footprint/index.html",
    "revision": "05618b1be6c305f8a0b17744af3f2586"
  },
  {
    "url": "enable-term-jquery-in-vue-cli-3-scaffolded-project/index.html",
    "revision": "44eeb7216fca8a06a966bf8305ebb105"
  },
  {
    "url": "hugo-tachyons-src-without-gulp-or-webpack/index.html",
    "revision": "4585baebc569101942119289777b4eb6"
  },
  {
    "url": "lambda-function-on-netlify-as-endpoint-for-google-amp-form/index.html",
    "revision": "3c37be2983166d874e565baf67376196"
  },
  {
    "url": "page/1/index.html",
    "revision": "a2e4221873bc9f7acd6bb69f52bdbc78"
  },
  {
    "url": "page/2/index.html",
    "revision": "68d234d207c409a7a10c874f3fb85a8d"
  },
  {
    "url": "show-remaining-characters-in-textarea-using-amp-bind/index.html",
    "revision": "f798cb10520409a77ff774d4265b5f92"
  },
  {
    "url": "uses/index.html",
    "revision": "c05afc6f80a3e1e55b9d74aec95f3bca"
  },
  {
    "url": "using-hugo-htmlunescape-function-to-solve-selector-expected-errors/index.html",
    "revision": "9fc87a94a8e6d267ea8a75cf8b2d969a"
  },
  {
    "url": "welcome-to-my-site/index.html",
    "revision": "c46d06ead8b9e1c5954114f50e0ea534"
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
