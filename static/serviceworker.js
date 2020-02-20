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
    "revision": "c3d35044e1465ea497d448d184eb6c88"
  },
  {
    "url": "index.html",
    "revision": "f23ffa81ea29f96b699268babe01b385"
  },
  {
    "url": "categories/code/index.html",
    "revision": "e0641905518ea038ad417cecd295b909"
  },
  {
    "url": "categories/index.html",
    "revision": "5f7f30871eafbb88fe55eef570ca2582"
  },
  {
    "url": "categories/personal/index.html",
    "revision": "adf97e686543813a9dc3317f736deb35"
  },
  {
    "url": "cloudflare-fast-google-fonts-service-worker-with-google-amp-custom-style-tag/index.html",
    "revision": "1134b7634a7fc97ef35e653b22cd8b24"
  },
  {
    "url": "creating-google-sheets-web-app-for-catching-netlify-webhooks/index.html",
    "revision": "f9e89d51927903480f286df954498928"
  },
  {
    "url": "digital-footprint/index.html",
    "revision": "d22081fd4254a82793ca21c96d80526e"
  },
  {
    "url": "enable-term-jquery-in-vue-cli-3-scaffolded-project/index.html",
    "revision": "2c7ec9352340342b85ab0294704d1272"
  },
  {
    "url": "hugo-tachyons-src-without-gulp-or-webpack/index.html",
    "revision": "63ce76fe8963fc5046480bf84296dc58"
  },
  {
    "url": "lambda-function-on-netlify-as-endpoint-for-google-amp-form/index.html",
    "revision": "f952f77e386fc7a09e82e46b79cbb921"
  },
  {
    "url": "page/1/index.html",
    "revision": "a2e4221873bc9f7acd6bb69f52bdbc78"
  },
  {
    "url": "page/2/index.html",
    "revision": "e73021c8508d81d45b7a822d1e67770d"
  },
  {
    "url": "show-remaining-characters-in-textarea-using-amp-bind/index.html",
    "revision": "fe7d3eda9ca011786c68985698d3e997"
  },
  {
    "url": "uses/index.html",
    "revision": "9e0e8a3ae9a806b91f2007ed97d7ab65"
  },
  {
    "url": "using-hugo-htmlunescape-function-to-solve-selector-expected-errors/index.html",
    "revision": "4bc0cd1ce606341e2c7f63c4e09a5016"
  },
  {
    "url": "welcome-to-my-site/index.html",
    "revision": "4cb852be91958651b10348ff68566531"
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
