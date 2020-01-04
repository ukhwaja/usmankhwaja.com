---
title: Show remaining characters in <textarea> using amp-bind
date: 2019-04-25T18:28:59+05:00
categories: ["Code"]
tags: ["AMP"]
keywords: ["Google AMP", "amp-bind", "amp-bind-macro", "HTML"]
images: ["https://raw.githubusercontent.com/ampproject/docs/master/assets/img/logo-og-image.jpg"]
---

AMP is awesome! Look at this. So easy to code. It reminds me of Vue.

Type something in the text area below:

{{< remaining-characters >}}

### How to do it
Get the required script in the head.

```html
<script async custom-element="amp-bind" 
    src="https://cdn.ampproject.org/v0/amp-bind-0.1.js">
</script>
```

### Bind values to a variable
Create a simple `<textarea>` element. Set a `maxlength` attribute. 

```html
<textarea maxlength="20">
</textarea>
```

Use the `on` attribute to save the character count of the text area to a variable. We will use `input-throttled` because we want the value to update on every key input.

```html
<textarea maxlength="20"
    on="input-throttled:AMP.setState({ 
        length: event.value.length, 
        maxlength: 20 })">
</textarea>
```

### Calculate the answer
Now `length` is saved. Let's create a macro to calculate the remaining characters

```html
<amp-bind-macro id="textCounter"
    arguments="length, maxlength"
    expression="maxlength - length" />
```

`id` is the name of the function. `arguments` are the values it will take. And `expression` is the formula.

### Show the results
We get to display the result of the expression on input. Call the `textCounter` macro to get the value of `[text]` which is the `innerText` of the DOM element.

```html
<span hidden [hidden]="length < 1" 
    [text]="textCounter(length, maxlength)">
</span>
```

Notice that I have used the `[hidden]` attribute to hide the element if the input is empty or, in other words, when there is zero characters in the text area.

WOW! :zap: is :heart_eyes_cat:
