var express = require('express');
var router = express.Router();

console.log('SessionsCtrl Loaded');

router.post('/signup', function (req, res) {
  // verify form fields
  // create user model
  // create verification token
  // store verification token
  // send verification email
  // send jwt token & user model
  res.status(200).send('success signup');
});

router.post('/login', function (req, res) {
  // verify user email and password
  // create jwt token
  // send jwt token and user model
  res.status(200).send('success login');
});

router.get('/logout', function (req, res) {
  // expire jwt
  res.status(200).send('success logout');
});

module.exports = router;
