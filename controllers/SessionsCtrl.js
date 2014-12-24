var express = require('express');
var router = express.Router();

console.log('SessionsCtrl Loaded');

router.post('/signup', function (req, res) {
  res.status(200).send('success signup');
});

router.post('/login', function (req, res) {
  res.status(200).send('success login');
});

router.get('/logout', function (req, res) {
  res.status(200).send('success logout');
});

router.all('*', function (req, res) {
  res.redirect('/');
})

module.exports = router;
