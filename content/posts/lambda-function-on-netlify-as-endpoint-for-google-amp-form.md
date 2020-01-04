---
title: Lambda function on Netlify as endpoint for Google AMP form
date: 2018-10-23T19:19:18+05:00
categories: ["Code"]
tags: ["Netlify", "AMP", "JavaScript"]
keywords: ["Netlify", "Lambda functions", "amp-form", "Google AMP"]
images: ["https://raw.githubusercontent.com/ampproject/docs/master/assets/img/logo-og-image.jpg"]
---
I recently converted this site to be [AMP](https://www.ampproject.org/) valid. Everything went easy except when it came to setting up the contact form to use [amp-form](https://www.ampproject.org/docs/reference/components/amp-form). I was previously using Netlify's own [Forms](https://www.netlify.com/docs/form-handling/) integration which is super straight forward compared to this mess.

First thing was getting the response headers right. After many tries this is what worked. Even though the sender and receiver of requests is on the same domain. The origin domain has to be declared nonetheless. See [CORM in AMP](https://www.ampproject.org/docs/fundamentals/amp-cors-requests).

```JavaScript
  const headers = {
    'Access-Control-Allow-Origin': 'https://name-of-the-requesting-site.com',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type',
    'AMP-Access-Control-Allow-Source-Origin': 'https://name-of-the-requesting-site.com',
    'Access-Control-Expose-Headers': 'AMP-Access-Control-Allow-Source-Origin',
  };
```

The second part is sending back a valid JSON response body. I decided to send an empty object like `body: '{}'` to avoid any errors. I have not figured out if the response can be displayed by the amp-form in any manner yet. So sending any information back was useless anyway.

Here is the worst part. Even though amp-form wants `application/json` to be returned as response. It packeges the form inputs using the `multipart/form-data` format. This allows uploading of large files etc. So the following does not work:

```JavaScript
JSON.parse(event) // ERROR: 'event' is not a valid JSON object
```

Anyways. I had to use a module called `lambda-multipart` to interpret the POST data recieved and merge it in the event. 

```JavaScript
const Multipart = require('lambda-multipart');
const parsed = new Multipart(event);
```

The bizarre thing. My first thought was that the part that needs to be parsed would be the `event.body`. But this resulted in faliures. The only way to get the valid form data in JSON format from the event is to parse the entire event using the module. The parsed content will be the form-data only which can be replaced with the 'body' part of the event. Simply:

```JavaScript
event.body = parsed;
```

Now the entire event is a JSON object. This can now be stringified and sent to Zapier for instance.

```Javascript
JSON.stringify(event) // Now works
```

:zap:

Listen..

I am still not completely learned as to how technologies like CORS or AMP or Serverless functions work. But I figured out the form through trial and error eventually. So the above might be the horribly wrong way to do things.