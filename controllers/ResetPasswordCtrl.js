var express = require('express');
var router = express.Router();

console.log('ResetPasswordCtrl Loaded');

router.post('/', function (req, res) {
  // verify user email, create reset token & expiry date
  // store in user model
  // send reset email to user.email
  // notify user that reset email will arrive shortly
  res.status(200).send('success create reset tokens');
});

router.get('/reset/:token', function (req, res) {
  // find user that has req.params.token
  // if user found, redirect user to reset form
  // return user in body, so token is available
  // for password reset
  res.status(200).send('success found reset token');
});

router.post('/reset/:token', function (req, res) {
  // find user that has req.params.token
  // verify the token is still valid
  // clear reset token & expiry
  // update with new passwords
  // redirect user to login page
  res.status(200).send('success updated password');
});

module.exports = router;
