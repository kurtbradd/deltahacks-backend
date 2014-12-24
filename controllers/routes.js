var LandingPageCtrl = require('./LandingPageCtrl.js');
var SessionsCtrl = require('./SessionsCtrl.js');

module.exports = function (app) {
  console.log('Routes Loaded');

  app.use('/sessions', SessionsCtrl);

  //Catchall Route for Angular App
  app.use('*', LandingPageCtrl);
}