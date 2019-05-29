# basic-node-scraper
From [Getting Started with Web Scraping in Node.js](https://www.codementor.io/dushyantbgs/getting-started-with-web-scraping-in-node-js-sozgieaun?utm_content=posts&amp;utm_source=sendgrid&amp;utm_medium=email&amp;utm_term=post-sozgieaun&amp;utm_campaign=newsletter20190417)


Web scraping is data scraping used for extracting data from websites. Web scraping software may access the World Wide Web directly using the Hypertext Transfer Protocol, or through a web browser.

Fundamental steps involved in Web Scraping
Make a request to the Web Page to scrape data from.
Extracting the body of the web page.
Understanding the structure of the tags/elements that you want to extract from the webpage and making changes in the code to traverse the DOM accordingly.

Why use Node.js ?
The open source project Node.js is one of the most popular runtime environments and has a bunch of features that make it easy to develop awesome stuff with it.

Manipulating the DOM inside a web browser is something that Javascript and libraries like jQuery do really well and so it makes a lot of sense to write web scraping scripts in Node.js, since we can use many techniques that we know from DOM manipulation in the client-side code for the web browser.

Setup
To get started with web scraping using Node.js, one would need the following things setup :-

node.js
npm
request- npm install request
cheerio - npm install cheerio

In Cheerio, we use selectors to select tags of an HTML document. The selector syntax was borrowed from jQuery.The following is a partial list of available selectors:

$("*") — selects all elements
$("#first") — selects the element with id="first"
$(".intro") — selects all elements with class="intro"
$("div") — selects all <div> elements
$("h2, div, p") — selects all <h2>, <div>, <p> elements
$("li:first") — selects the first <li> element