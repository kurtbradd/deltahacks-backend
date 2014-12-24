var express = require('express');
var router = express.Router();

console.log('LandingPageCtrl Loaded');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
