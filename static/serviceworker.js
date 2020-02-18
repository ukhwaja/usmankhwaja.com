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
    "revision": "676efaf224a4f3292d7635460ac12387"
  },
  {
    "url": "index.html",
    "revision": "075bc9fe750adb62153eb90234476bc6"
  },
  {
    "url": "categories/code/index.html",
    "revision": "3226a6c78297401dc9415feeea0ccaa5"
  },
  {
    "url": "categories/index.html",
    "revision": "b0bbca716fd0340041432d781980adbb"
  },
  {
    "url": "categories/personal/index.html",
    "revision": "44571cc79808accf0a7a29fa5c00093c"
  },
  {
    "url": "cloudflare-fast-google-fonts-service-worker-with-google-amp-custom-style-tag/index.html",
    "revision": "9b2dc059abbeda601058d761e82edd2a"
  },
  {
    "url": "creating-google-sheets-web-app-for-catching-netlify-webhooks/index.html",
    "revision": "d60383683756fa07770b29f5a41811b2"
  },
  {
    "url": "digital-footprint/index.html",
    "revision": "2456c28e14b067a7c0f522bf5e03feab"
  },
  {
    "url": "enable-term-jquery-in-vue-cli-3-scaffolded-project/index.html",
    "revision": "472d4ef6fd1d6bf29c4dda5506ec5927"
  },
  {
    "url": "hugo-tachyons-src-without-gulp-or-webpack/index.html",
    "revision": "6741f625d4246c96ba0c438f4cd6f97a"
  },
  {
    "url": "lambda-function-on-netlify-as-endpoint-for-google-amp-form/index.html",
    "revision": "6fa57b655fde79802a798a75a7cf53fb"
  },
  {
    "url": "page/1/index.html",
    "revision": "a2e4221873bc9f7acd6bb69f52bdbc78"
  },
  {
    "url": "page/2/index.html",
    "revision": "5588dfb738656b7acc3c5ca247574b80"
  },
  {
    "url": "show-remaining-characters-in-textarea-using-amp-bind/index.html",
    "revision": "24c88e66bfa66a5f47f6a866bdd8d6c1"
  },
  {
    "url": "uses/index.html",
    "revision": "10a269dec01f7d3c972b2e728633fa7d"
  },
  {
    "url": "using-hugo-htmlunescape-function-to-solve-selector-expected-errors/index.html",
    "revision": "c710c40846aa3c62f48ab57fef3fffe9"
  },
  {
    "url": "welcome-to-my-site/index.html",
    "revision": "6979bdf7ede49ddbade3633a48e7d721"
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
