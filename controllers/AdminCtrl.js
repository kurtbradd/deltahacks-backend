var express = require('express');
var router = express.Router();

console.log('AdminCtrl Loaded');

router.get('/applicants', function (req, res) {
  // return all applicants
  res.status(200).send('success return all applicants');
});

router.get('/applicants/csv', function (req, res) {
  // return all applicants formatted into a csv
  // use node stream to buffer out file to client
  // present as a download link (auth needed)
  res.status(200).send('success return all applicants csv');
})

module.exports = router;
