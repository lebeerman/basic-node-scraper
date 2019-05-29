// Load the necessary packages
const request = require('request');
const $ = require('cheerio');

// URL to scrape
const url = 'https://github.com/cheeriojs/cheerio';

// Make the request
request(url, function(error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const res = response.toJSON();
    // const { body } = res;
    console.log('Response: ', res);
    console.log(`Response Status : ${res.headers.status}`);
    console.log(`Body : ${body}`);

    // Extract the children of the list tag having class commits
    const li = $('li.commits', body)[0].children;

    // Loop over to extract the anchor tag
    for (let i = 0; i < li.length; i++) {
      // Check for anchor tag/type
      if (li[i].type == 'tag' && li[i].name == 'a') {
        for (let j = 0; j < li[i].children.length; j++) {
          // Check for the span having the class num text-emphasized
          if (li[i].children[j].name == 'span') {
            if (li[i].children[j].attribs.class == 'num text-emphasized') {
              // console.log(li[i]["children"][j]);
              console.log(
                `Commits : ${li[i].children[j].children[0].data.trim()}`
              );
            }
          }
        }
      }
    }
  }
});
