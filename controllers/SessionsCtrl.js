var express           = require('express');
var jwt               = require('jsonwebtoken');
var router            = express.Router();
var User              = require('../models/User.js');
var TokenManager      = require('../modules/TokenManager.js');
var secret            = require('../config/secrets.js').sessionSecret;
var TOKEN_EXPIRATION  = require('../config/constants.js').TOKEN_EXPIRATION;

console.log('SessionsCtrl Loaded');

router.post('/signup', function (req, res) {
  if (!(req.body.firstName && req.body.lastName &&
      req.body.email && req.body.password &&
      req.body.confirmPassword)) {
    return res.status(400).send('Missing Parameter');
  }

  if (req.body.password != req.body.confirmPassword) {
    return res.status(400).send('Passwords do not match');
  }

  var user = new User;
  user.email = req.body.email;
  user.password = req.body.password;
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.school = req.body.school;
  user.links.website = req.body.links.website;
  user.links.github = req.body.links.github;
  user.links.linkedin = req.body.links.linkedin;
  user.about.bio = req.body.about.bio;
  user.dietaryRestrictions = req.body.dietaryRestrictions;
  user.isAdmin = false;
  user.save(function (err, savedUser) {
    if (err) return res.status(401).send(err);
    // send verification email
    var token = jwt.sign({id: savedUser._id}, secret, {expiresInMinutes:TOKEN_EXPIRATION});
    return res.status(201).send({token: token, user:savedUser});
  });
});

router.post('/login', function (req, res) {
  if (!(req.body.email && req.body.password)) {
    return res.status(400).send('Missing Parameter');
  }
  User.findOne({email: req.body.email}, function (err, user) {
    if (err) return res.status(401).send(err);
    if (user == undefined) return res.status(401).send('Email not found')
    user.comparePassword(req.body.password, function (isMatch) {
      if (!isMatch) return res.status(401).send('Incorrect Password');
      var token = jwt.sign({id: user._id}, secret, {expiresInMinutes:TOKEN_EXPIRATION});
      return res.status(200).send({token: token, user:user});
    })
  })
});

router.get('/logout', function (req, res) {
  // expire jwt
  res.status(200).send('success logout');
});

module.exports = router;
