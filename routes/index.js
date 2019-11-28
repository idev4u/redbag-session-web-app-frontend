var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // request to the backend
  res.render('index', {
    title: 'Walters quote of the day :-)',
    quote: 'Wenn den Baum siehst, in den du rein fährst, hast untersteuern. Wenn ihn nur hörst, hast übersteuern'
  });
});

module.exports = router;
