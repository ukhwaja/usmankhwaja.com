---
title: Enable term 'jQuery' in Vue CLI 3 scaffolded project
date: 2018-08-11T14:01:54+05:00
categories: ["Code"]
tags: ["Vue", "JavaScript"]
keywords: ["Webpack", "Vue", "jQuery"]
images: ["https://raw.githubusercontent.com/webpack/media/master/logo/logo-on-white-bg.png"]
---
I have been trying for way too long to figure out how to enable the term 'jQuery' to be used in my [Vue CLI 3](https://cli.vuejs.org/) scaffolded project. In my case I am using [Semantic UI](https://semantic-ui.com/) for creating the interface which requires jQuery.

Apparently there is something called *chainWebpack* now. No idea what it is but the following code when added to `vue.config.js` in root seems to solve the problem.

```javascript
var webpack = require('webpack')
module.exports = {
    chainWebpack: config => {
        config
            .plugin('jquery')
            .use(webpack.ProvidePlugin, [{
                $: "jquery",
                jQuery: "jquery",
            }])
    }
}
```

There is probably other ways to do that. Or not. But this allows the Semantic UI library to be able to use jQuery.

Extra..

If you want to access jQuery from the browser, you have to add `window.jQuery = require('jquery')` in `main.js`
