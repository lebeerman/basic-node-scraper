# basic-node-scraper
From [Getting Started with Web Scraping in Node.js](https://www.codementor.io/dushyantbgs/getting-started-with-web-scraping-in-node-js-sozgieaun?utm_content=posts&amp;utm_source=sendgrid&amp;utm_medium=email&amp;utm_term=post-sozgieaun&amp;utm_campaign=newsletter20190417)

This repo is a great easily adjusted scraper template. 

## What's Web scraping

Data scraping used for extracting data from websites. Web scraping software may access the World Wide Web directly using the Hypertext Transfer Protocol, or through a web browser.

### Fundamental steps involved in Web Scraping

Make a web request to a target site/data source. Extract the response body of the page. Using the structure of the HTML/ site source, extract data by making changes in the code to traverse the DOM accordingly.

### Why use Node.js ?

Node.js is open source, one of the most popular runtime environments, and has a community that makes it easy to develop awesome stuff. JS is the language of the browser and is suited specifically for working with the DOM. 

#### Setup

what you need:

node.js
npm
request - npm install request
cheerio - npm install cheerio

The selector syntax was borrowed from jQuery.The following is a partial list of available selectors:

$("*") — selects all elements
$("#first") — selects the element with id="first"
$(".intro") — selects all elements with class="intro"
$("div") — selects all <div> elements
$("h2, div, p") — selects all <h2>, <div>, <p> elements
$("li:first") — selects the first <li> element
  
[Cheerio Docs](https://cheerio.js.org/)
