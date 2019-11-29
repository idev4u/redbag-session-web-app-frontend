var express = require('express');
var router = express.Router();
var request = require('request');
// var endpoint = process.env.API_ENDPOINT
var endpoint = 'http://web-app-backend.83zcump5ct.eu-west-1.elasticbeanstalk.com'
var morgan = require('morgan')
var quoteOfTheDay = { "quote": "Wenn du den Baum siehst, in den du rein fährst, hast untersteuern. Wenn ihn nur hörst, hast übersteuern" }

router.use(morgan('combined'))
/* GET home page. */
router.get('/', function (req, res, next) {

  console.log("endpoint is : " + endpoint)
  request(endpoint + '/quotes/from/walter/of/today', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    if (error) {
      console.error('upload failed:', error);
      // default quote the customser should everytime get a quote
      return quoteOfTheDay.quote
    }
    quoteOfTheDay = JSON.parse(body)
    console.log(quoteOfTheDay.quote)
  });

  res.render('index', {
    title: 'Walters quote of the day :-)',
    quote: quoteOfTheDay.quote
  });
});

module.exports = router;
