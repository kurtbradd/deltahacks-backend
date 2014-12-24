var LandingPageCtrl = require('./LandingPageCtrl.js');
var SessionsCtrl = require('./SessionsCtrl.js');
var ResetPasswordCtrl = require('./ResetPasswordCtrl.js');

module.exports = function (app) {
  console.log('Routes Loaded');

  app.use('/sessions', SessionsCtrl);
  app.use('/forgotpassword', ResetPasswordCtrl);
  //Catchall Route for Angular App
  app.use('*', LandingPageCtrl);
}