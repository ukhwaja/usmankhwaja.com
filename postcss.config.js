module.exports = {
  plugins: {
    'postcss-import': {
      path: [
        '/node_modules/tachyons/src/',
      ],
    },
    'postcss-preset-env': {
      stage: 4,
      preserve: false,
      features: {
        'custom-media-queries': true,
        'custom-properties': true,
      },
    },
    'postcss-purgecss': process.env.HUGO_ENV === 'development' ? false : {
      content: [
        'layouts/**/*.html',
        'themes/palemoss/layouts/**/*.html',
      ],
      whitelist: ['pre'],
      whitelistPatterns: [/^amp/, /^chroma/],
    },
    'postcss-discard-comments': {
      removeAll: true,
    },
    'postcss-combine-duplicated-selectors': {
      removeDuplicatedProperties: true,
    },
  },
};
