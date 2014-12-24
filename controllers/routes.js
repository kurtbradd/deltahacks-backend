var LandingPageCtrl = require('./LandingPageCtrl.js');

module.exports = function (app) {
  console.log('Routes Loded');

  //Catchall Route for Angular App
  app.use('*', LandingPageCtrl);
}