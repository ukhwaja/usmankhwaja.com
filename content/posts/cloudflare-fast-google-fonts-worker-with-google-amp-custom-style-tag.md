---
title: Cloudflare fast-google-fonts service worker with google amp-custom style tag
date: 2020-02-18T07:48:12+05:00
categories: ["Code"]
tags: ["Workers", "JavaScript"]
keywords: ["Google AMP", "AMP", "Service Workers", "Workers", "Cloudflare"]
images: ["https://pbs.twimg.com/profile_banners/32499999/1576870022/1500x500"]
---

The service worker template on Cloudflare's [Workers](https://workers.cloudflare.com/) for loading google fonts fater, injects the HTML with font CSS before the page loads. The CSS is embedded in a `<style>` tag. AMP however does not allow 'style' tags. It says: "_Only amp-boilerplate and amp-custom 'style' tags are allowed, and only in the document head._". Moreover, only one _amp-custom_ 'style' tag is permissable.

Here's the code seen in the fast-google-fonts worker file that replaces the actual CSS.

{{< highlight js "linenos=true,linenostart=424" >}}
// Replace the actual css
    let cssString = "<style" + mediaStr + ">\n";
    cssString += fontCSS;
    cssString += "\n</style>\n";
    content = content.split(matchString).join(cssString);
    fontCSSRegex.lastIndex -= matchString.length - cssString.length;
{{< / highlight >}}

They are using regex to match the 'link' tag and replace it with the generated font CSS. Lets use the same method and find the existing _amp-custom_ 'style' tag in the content and inject the CSS there. Replace the code above with:

```js
    const ampCustomRegex = /<style amp-custom>/g;
    let matchTag = ampCustomRegex.exec(content);
    const stringMatch = matchTag[0];
    let cssString = "<style amp-custom" + mediaStr + ">\n";
    cssString += fontCSS;
    content = content.split(stringMatch).join(cssString);
    content = content.split(matchString).join('');
    fontCSSRegex.lastIndex -= stringMatch.length - cssString.length;
```

The above code finds the `<style amp-custom>` tag in the content and replaces it with the same tag but followed by the calculated `fontCSS`. Adding font CSS before the existing custom CSS. Use the original `matchString` to remove the link tag as before and reset the `lastIndex` using the new `stringMatch`.

Putting the `@font-face` CSS before does not make a difference so all should be good.