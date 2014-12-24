var express = require('express');
var router = express.Router();

console.log('ApplicationCtrl Loaded');

router.get('/', function (req, res) {
  // return users current form fields
  res.status(200).send('success return user application');
});

router.post('/', function (req, res) {
  // validate fields 
  // check for unauthorized field changes
  // update user form fields
  // return updated user
  res.status(200).send('success update user application');
})

router.get('/status', function (req, res) {
  // return user going status
  res.status(200).send('success return user status');
})

router.post('/status', function (req, res) {
  // change users going status
  // return updated user model
  res.status(200).send('success update user status');
})

module.exports = router;
