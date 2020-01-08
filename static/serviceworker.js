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
    "revision": "9683afdd5ee919d67f1f9b97178ba62e"
  },
  {
    "url": "index.html",
    "revision": "30d7d768ed5e8a1759bea9985dc44d6d"
  },
  {
    "url": "categories/code/index.html",
    "revision": "747706581d4c3e4980b3fc769e7c34da"
  },
  {
    "url": "categories/index.html",
    "revision": "b255d24026113a9b8d1cd0f8ee0ef305"
  },
  {
    "url": "categories/personal/index.html",
    "revision": "c29896bea6f1d7f2185c58628ce35ab3"
  },
  {
    "url": "creating-google-sheets-web-app-for-catching-netlify-webhooks/index.html",
    "revision": "a6bba79606e9b16ed2d5f4d4dfdc3eee"
  },
  {
    "url": "enable-term-jquery-in-vue-cli-3-scaffolded-project/index.html",
    "revision": "604376fd5d33091332e540ef64e1833e"
  },
  {
    "url": "hugo-tachyons-src-without-gulp-or-webpack/index.html",
    "revision": "973bbefad21faa612453c9a4eda540da"
  },
  {
    "url": "lambda-function-on-netlify-as-endpoint-for-google-amp-form/index.html",
    "revision": "2fde500fef81fd7b916faa96bb05ca8a"
  },
  {
    "url": "my-digital-footprint/index.html",
    "revision": "763ab743021b1b3e0848babc1cd8a6e0"
  },
  {
    "url": "page/1/index.html",
    "revision": "a2e4221873bc9f7acd6bb69f52bdbc78"
  },
  {
    "url": "page/2/index.html",
    "revision": "b51ced11b8f247a8109aeef4499f1e2d"
  },
  {
    "url": "show-remaining-characters-in-textarea-using-amp-bind/index.html",
    "revision": "a09a2502612ed010839a8f8866929caa"
  },
  {
    "url": "using-hugo-htmlunescape-function-to-solve-selector-expected-errors/index.html",
    "revision": "97c6d66117dbaf3de208bc5756fb6c3f"
  },
  {
    "url": "welcome-to-my-site/index.html",
    "revision": "e31efe737b1a45e96ba812aec3528dd0"
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
