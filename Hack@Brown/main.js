// in terminal type npm run server
const express = require('express');
const app = express();
const vision = require('@google-cloud/vision');
// var cheerio = require('cheerio');

// Creates a client
const client = new vision.ImageAnnotatorClient({
  keyFilename: 'APIkey.json'
});
// node image scraper
// var Scraper = require("images-scraper");
// var scraper = new Scraper("https://apod.nasa.gov/apod/astropix.html");
// to change the image
// scraper.address = "http://www.npmjs.org";
// scraper.on("image", function(image){


// });

client
  .labelDetection('./birds.jpg') // file for image
  .then(results => {
    const labels = results[0].labelAnnotations;

    console.log('Labels:');
    labels.forEach(label => console.log(label.description));

  })
  .catch(err => {
    console.error('ERROR:', err);
  });

// Performs label detection on the image file


app.listen(5000, '127.0.0.1',() => console.log('Server is running'));
