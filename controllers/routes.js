var LandingPageCtrl = require('./LandingPageCtrl.js');

module.exports = function (app) {
  console.log('Routes Loded');

  // LandingPage Routes
  app.use('/', LandingPageCtrl);
}