var LandingPageCtrl 	= require('./LandingPageCtrl.js');
var SessionsCtrl 			= require('./SessionsCtrl.js');
var ResetPasswordCtrl = require('./ResetPasswordCtrl.js');
var ApplicationCtrl 	= require('./ApplicationCtrl.js');
var TokenManager      = require('../modules/TokenManager.js');
var AdminCtrl 				= require('./AdminCtrl.js');
var secret 						= require('../config/secrets.js').sessionSecret;
var jwt 							= require('express-jwt');

module.exports = function (app) {
  console.log('Routes Loaded');

  app.use('/sessions', SessionsCtrl);
  app.use('/forgotpassword', ResetPasswordCtrl);
  app.use('/application', jwt({secret:secret}), TokenManager.verifyToken, ApplicationCtrl);
  app.use('/admin', jwt({secret:secret}), TokenManager.verifyToken, AdminCtrl);

  //Catchall Route for Angular App
  app.use('*', LandingPageCtrl);
}