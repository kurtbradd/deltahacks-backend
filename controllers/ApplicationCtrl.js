var express = require('express');
var router = express.Router();
var User = require('../models/User.js');


console.log('ApplicationCtrl Loaded');

router.post('/', function (req, res) {
  if (!req.body) {
    return res.status(400).send('Missing Parameters');
  }
  var data = req.body;
  User.findById(req.user.id, function (err, user) {
    if (err || !user) return res.status(404).send(err || 'No Info Found');
    if (data.firstName) user.firstName;
    if (data.lastName) user.lastName;
    if (data.school) user.school;
    if (data.links.website) user.links.website;    
    if (data.links.github) user.links.github; 
    if (data.links.linkedin) user.links.linkedin;
    if (data.links.challendePost) user.links.challendePost;
    if (data.about.bio) user.about.bio;
    if (data.about.firstHackathon) user.about.firstHackathon;
    if (data.about.bestDescribesYou) user.about.bestDescribesYou;
    if (data.about.tshirtGender) user.about.tshirtGender;
    if (data.about.tshirtSize) user.about.tshirtSize;
    if (data.about.dietaryRestrictions) user.about.dietaryRestrictions;
    user.save(function (err, savedUser) {
      if (err) return res.status(400).send(err);
      res.status(200).send({user:savedUser});
    })
  })
})

router.get('/status', function (req, res) {
  console.log(req.user);
  User.findById(req.user.id, 'applicationStatus', function (err, user) {
    if (err || !user) return res.status(404).send(err || 'No Info Found');
    res.status(200).send({applicationStatus: user.applicationStatus});
  })
})

router.post('/status', function (req, res) {
  if (!req.body.applicationStatus) {
    return res.status(400).send('Missing Parameter');
  }
  User.findById(req.user.id, function (err, user) {
    if (err || !user) return res.status(404).send(err || 'No Info Found');
    user.applicationStatus = req.body.applicationStatus;
    user.save(function (err, savedUser) {
      if (err) return res.status(400).send(err);
      res.status(200).send({user:savedUser});
    })
  })
})

module.exports = router;
