---
title: Creating Google Sheets web app for catching Netlify webhooks
date: 2018-08-28T07:48:12+05:00
categories: ["Code"]
tags: ["Netlify", "JavaScript"]
keywords: ["Google Sheets", "Webhooks", "Netlify"]
images: ["https://www.netlify.com/img/press/logos/full-logo-light.png"]
---
[Zapier](https://zapier.com/) is great. But I wanted to try and use the Netlify's outgoing webhooks and manually (using the Google Apps Script) record data I receive into Google Sheets.

First create a new spreadsheet on Google Sheets and go to *Tools* &rsaquo; *Script editor*. Google Sheets provides a `doPost()` function that reacts to an HTTP POST request. Here is the method ~~I use to catch all form submissions from my contact page~~.

```javascript
function doPost(e) {  
  var myData = JSON.parse(e.postData.contents);
  var dateCreated = myData.created_at;
  var dataName = myData.data.name;
  var dataEmail = myData.data.email;
  var dataMessage = myData.data.message;
  var dataIP = myData.data.ip;  
  var sheet = SpreadsheetApp.getActiveSheet();
  var lastRow = Math.max(sheet.getLastRow(),1);
  sheet.insertRowAfter(lastRow);
  sheet.getRange(lastRow + 1, 1).setValue(dateCreated);
  sheet.getRange(lastRow + 1, 2).setValue(dataName);
  sheet.getRange(lastRow + 1, 3).setValue(dataEmail);
  sheet.getRange(lastRow + 1, 4).setValue(dataMessage);
  sheet.getRange(lastRow + 1, 5).setValue(dataIP);
  SpreadsheetApp.flush();
  return HtmlService.createHtmlOutput("post request received");
}
```

The logic of posting variables to a new row in the sheet is pretty straight forward. However, I used [this example](https://www.netlify.com/docs/api/#form-submissions) to know where the information I need will be within the JSON object that Netlify sends. I am just saving the Name, Email, Message, IP, and Creation Date in my case. And this is changeable. 

Once the script is saved. Go to *Publish* &rsaquo; *Deploy as web app*. Publish as a new version and give access to *Anyone, even anonymous*. And that's it, the URL provided for the web app will be listening to any requests now. Use that URL to send outgoing webhooks to. It can be set on the Netlify app under *Site settings* &rsaquo; *Forms* &rsaquo; *Form notifications*.

Careful..  

If you change the function code and save, you will have to publish the web app again as a new version for the URL to update to the new app code.

