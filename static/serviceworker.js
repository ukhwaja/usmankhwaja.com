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
    "revision": "dac433879ff8ce524b6506987ded418d"
  },
  {
    "url": "index.html",
    "revision": "56d678288bdb2ff4b8914f522e2b3278"
  },
  {
    "url": "categories/code/index.html",
    "revision": "caeee60274f5ac714c3c3914e02b1cc4"
  },
  {
    "url": "categories/index.html",
    "revision": "cfdccb1094f3502b38cb25b28fc76866"
  },
  {
    "url": "categories/personal/index.html",
    "revision": "0f113ba51cb39f2a44fdda79eb68eade"
  },
  {
    "url": "cloudflare-fast-google-fonts-service-worker-with-google-amp-custom-style-tag/index.html",
    "revision": "89f5426b100c2f892753dea68787e6fe"
  },
  {
    "url": "creating-google-sheets-web-app-for-catching-netlify-webhooks/index.html",
    "revision": "1dee4e5289e62646b2343df0209878f1"
  },
  {
    "url": "digital-footprint/index.html",
    "revision": "965f1494413f160174f32c22871ce3ad"
  },
  {
    "url": "enable-term-jquery-in-vue-cli-3-scaffolded-project/index.html",
    "revision": "3bc601ee2a7571e41160e92fef908861"
  },
  {
    "url": "hugo-tachyons-src-without-gulp-or-webpack/index.html",
    "revision": "ffcbafc301d74c6eec19f56f074221f6"
  },
  {
    "url": "lambda-function-on-netlify-as-endpoint-for-google-amp-form/index.html",
    "revision": "6c5aef42eb0405b10df85be111a761da"
  },
  {
    "url": "page/1/index.html",
    "revision": "a2e4221873bc9f7acd6bb69f52bdbc78"
  },
  {
    "url": "page/2/index.html",
    "revision": "6e77d8b59c292d46ca4d4dd35a03afc6"
  },
  {
    "url": "show-remaining-characters-in-textarea-using-amp-bind/index.html",
    "revision": "d357b82880de62255a3e08374ddc2267"
  },
  {
    "url": "uses/index.html",
    "revision": "122435a6d668bc4df103dcbcfb424207"
  },
  {
    "url": "using-hugo-htmlunescape-function-to-solve-selector-expected-errors/index.html",
    "revision": "a2fc729e50b91f66cd57199556b45a02"
  },
  {
    "url": "welcome-to-my-site/index.html",
    "revision": "6e4b5f7a2151020ad9321bf604706663"
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
