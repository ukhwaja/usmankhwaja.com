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
    "revision": "0ca8633e77865a5751e9f148c2e4ef48"
  },
  {
    "url": "index.html",
    "revision": "5cd5ac1a0af6e918fa0c637696a8ac7a"
  },
  {
    "url": "categories/code/index.html",
    "revision": "ef3babfa5188e2d2545cf7826643aca4"
  },
  {
    "url": "categories/index.html",
    "revision": "f287e7047141749bf44ed07953870ff5"
  },
  {
    "url": "categories/personal/index.html",
    "revision": "30c10a3e2c097f0c5505bfb0a8e81761"
  },
  {
    "url": "cloudflare-fast-google-fonts-service-worker-with-google-amp-custom-style-tag/index.html",
    "revision": "b1e34403514783dd53d06f6b368c52cb"
  },
  {
    "url": "creating-google-sheets-web-app-for-catching-netlify-webhooks/index.html",
    "revision": "e7c2f07018e051eff92694b45f77e982"
  },
  {
    "url": "digital-footprint/index.html",
    "revision": "47be0602583f5c66823fc4b0ce1cccc9"
  },
  {
    "url": "enable-term-jquery-in-vue-cli-3-scaffolded-project/index.html",
    "revision": "0a7e14de275ca64d7cea31139c00ff79"
  },
  {
    "url": "hugo-tachyons-src-without-gulp-or-webpack/index.html",
    "revision": "dfba6a102f6c94858240392779e79841"
  },
  {
    "url": "lambda-function-on-netlify-as-endpoint-for-google-amp-form/index.html",
    "revision": "4c09e40836e0be6bd303dca0e1dc0392"
  },
  {
    "url": "page/1/index.html",
    "revision": "a2e4221873bc9f7acd6bb69f52bdbc78"
  },
  {
    "url": "page/2/index.html",
    "revision": "62a03aab419878e55b3f656ed0a026b1"
  },
  {
    "url": "show-remaining-characters-in-textarea-using-amp-bind/index.html",
    "revision": "4eed522e2d40a9a4f5011645e832066e"
  },
  {
    "url": "uses/index.html",
    "revision": "037eec16401c52aa1021ec3e3e3ecb3a"
  },
  {
    "url": "using-hugo-htmlunescape-function-to-solve-selector-expected-errors/index.html",
    "revision": "42fc7e09fc3711f294273c3490e788e2"
  },
  {
    "url": "welcome-to-my-site/index.html",
    "revision": "5d627217b43a531141c46251e606e62a"
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
