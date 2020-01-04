---
title: Hugo + Tachyons (src) without gulp or webpack
date: 2018-08-05T07:47:14+05:00
categories: ["Code"]
tags: ["Hugo", "PostCSS"]
keywords: ["Tachyons", "PostCSS", "Hugo"]
images: ["https://raw.githubusercontent.com/gohugoio/hugoDocs/master/static/img/hugo.png"]
---
[Tachyons](https://www.tachyons.io) is a pretty epic css toolkit. The first and common way to use it is to link the minified css into your html.

However once in a while it can be very useful to get the src and build css from source with the application. Especially when you need to customize the default themes and colors.

Tachyons can be built with [PostCSS](https://postcss.org). And Hugo comes with PostCSS processing Pipe pre-built. Essentially all you need to do is add the following to the `head.html` 

```html
{{ $style := resources.Get "css/tachyons.css" | resources.PostCSS }}
<link rel="stylesheet" href="{{ $style.Permalink }}">
```

But wait.. Building the Tachyons src requires a few plugins.

First of all. Hugo requires `postcss-cli` npm module to build the css. Then Tachyons uses `@import` statements in its main `tachyons.css` which requires `postcss-import`. To process the css once all the parts are included we need `postcss-next`. And finally use `cssnano` to minify the whole thing.

All these dependencies can be fetched with a single command.

```bash
npm init # do this if the project does not have a package.json already
npm i -D postcss-cli postcss-import postcss-next cssnano autoprefixer
```

One last thing. PostCSS looks for a config file named `postcss.config.js` by default. So add one in the root of the project with the following call to the plugins.

```javascript
module.exports = {
  plugins: {
    'postcss-import': { path: "assets/css" },
    'postcss-cssnext': {},
    'cssnano': { autoprefixer: true },
  }
}
```

Some known issues..

1. Hugo Pipes for css only work if the css is in the `assets` folder.
+ The `tachyons.css` has all the imports linked as relative paths like `'./_styles'`. Remove all the `'./'` from all the paths or PostCSS will give a file-not-found error.
