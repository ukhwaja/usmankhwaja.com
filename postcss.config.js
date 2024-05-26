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
    '@fullhuman/postcss-purgecss': process.env.HUGO_ENV === 'development' ? false : {
      content: [
        'layouts/**/*.html',
        'themes/palemoss/layouts/**/*.html',
      ],
      safelist: {
        standard: [/highlight/],
        deep: [/chroma/, /content/],
      }
    },
    'postcss-discard-comments': {
      removeAll: true,
    },
    'postcss-combine-duplicated-selectors': {
      removeDuplicatedProperties: true,
    },
  },
};
