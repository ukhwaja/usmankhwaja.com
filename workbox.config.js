module.exports = {
  globDirectory: './public',
  globPatterns: [
    '*.html',
    '**/index.html',
    '**/*.webp',
  ],
  swDest: 'static/serviceworker.js',
  sourcemap: false,
  cleanupOutdatedCaches: true,
  inlineWorkboxRuntime: true,
  runtimeCaching: [{
    urlPattern: /\.(?:webp|gif)$/,
    handler: 'CacheFirst',
    options: {
      cacheName: 'images',
      expiration: {
        maxEntries: 10,
        maxAgeSeconds: 60 * 60 * 24 * 7,
      },
    },
  }, {
    urlPattern: /^https:\/\/fonts\.googleapis\.com/,
    handler: 'StaleWhileRevalidate',
    options: {
      cacheName: 'google-fonts-stylesheets',
    },
  }, {
    urlPattern: /^https:\/\/fonts\.gstatic\.com/,
    handler: 'CacheFirst',
    options: {
      cacheName: 'google-fonts-webfonts',
      cacheableResponse: {
        statuses: [0, 200],
      },
      expiration: {
        maxAgeSeconds: 60 * 60 * 24 * 365,
      },
    },
  }],
};
