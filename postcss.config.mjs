import postcssImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';
import { purgeCSSPlugin } from '@fullhuman/postcss-purgecss';
import postcssDiscardComments from 'postcss-discard-comments';
import postcssCombineDuplicatedSelectors from 'postcss-combine-duplicated-selectors';

const purgecss = purgeCSSPlugin({
  content: ["./hugo_stats.json"],
  defaultExtractor: (content) => {
    const els = JSON.parse(content).htmlElements;
    return [...(els.tags || []), ...(els.classes || []), ...(els.ids || [])];
  },
  safelist: [/highlight/],
  deep: [/chroma/, /content/]
});

export default {
  plugins: [
    postcssImport({
      path: [
        'node_modules/tachyons/src/',
      ],
    }),
    postcssPresetEnv({
      stage: 4,
      preserve: false,
      features: {
        'custom-media-queries': true,
        'custom-properties': true,
      },
    }),
    ...(process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss] : []),
    postcssDiscardComments({
      removeAll: true,
    }),
    postcssCombineDuplicatedSelectors({
      removeDuplicatedProperties: true,
    }),
  ],
};
