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
    "revision": "496ad71b7382d7baca5c871aa8b4f838"
  },
  {
    "url": "index.html",
    "revision": "3fc9712d8300297f279bdbed8ff8d64c"
  },
  {
    "url": "categories/code/index.html",
    "revision": "4cc0a8d3e88733b8011be01a77d18235"
  },
  {
    "url": "categories/index.html",
    "revision": "4ebfcacd64393ca3b18952855cfab657"
  },
  {
    "url": "categories/personal/index.html",
    "revision": "90936d112e8566aae3802701a740b724"
  },
  {
    "url": "creating-google-sheets-web-app-for-catching-netlify-webhooks/index.html",
    "revision": "579b297132d1f92954406aa9b28ba70e"
  },
  {
    "url": "enable-term-jquery-in-vue-cli-3-scaffolded-project/index.html",
    "revision": "724b695338190162084195293830ff24"
  },
  {
    "url": "hugo-tachyons-src-without-gulp-or-webpack/index.html",
    "revision": "ff5bf800371904f2cd4ab39729a8e8e3"
  },
  {
    "url": "lambda-function-on-netlify-as-endpoint-for-google-amp-form/index.html",
    "revision": "b7afe0ecb8ca668177e85f60933f83f3"
  },
  {
    "url": "my-digital-footprint/index.html",
    "revision": "af1fbf4a38a56a82287926042e7a406f"
  },
  {
    "url": "page/1/index.html",
    "revision": "a2e4221873bc9f7acd6bb69f52bdbc78"
  },
  {
    "url": "page/2/index.html",
    "revision": "ecab4b6c181827a8cd0ef190f5164160"
  },
  {
    "url": "show-remaining-characters-in-textarea-using-amp-bind/index.html",
    "revision": "70b063764a4f1f1c30cbe82645e306b3"
  },
  {
    "url": "using-hugo-htmlunescape-function-to-solve-selector-expected-errors/index.html",
    "revision": "618083df85f00ae6e80f6c7138e66bf0"
  },
  {
    "url": "welcome-to-my-site/index.html",
    "revision": "19a18f19c1c6566a1ea0350468fa37f6"
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
