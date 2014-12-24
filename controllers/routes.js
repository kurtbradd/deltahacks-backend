var LandingPageCtrl = require('./LandingPageCtrl.js');
var SessionsCtrl = require('./SessionsCtrl.js');
var ResetPasswordCtrl = require('./ResetPasswordCtrl.js');
var ApplicationCtrl = require('./ApplicationCtrl.js');
var AdminCtrl = require('./AdminCtrl.js');

module.exports = function (app) {
  console.log('Routes Loaded');

  app.use('/sessions', SessionsCtrl);
  app.use('/forgotpassword', ResetPasswordCtrl);
  app.use('/application', ApplicationCtrl);
  app.use('/admin', AdminCtrl);

  //Catchall Route for Angular App
  app.use('*', LandingPageCtrl);
}