var express = require('express');
var router = express.Router();

console.log('LandingPageCtrl Loaded');

/* GET home page. */
router.all('*', function(req, res) {
  // Send Angular app to client
  res.render('index.html');
});

module.exports = router;
