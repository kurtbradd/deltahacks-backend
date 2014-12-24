var mongoose = require('mongoose');
var secrets = require('./secrets.js');

module.exports = function () {
  mongoose.connect(secrets.mongo.url);

  var connection = mongoose.connection;
  connection.on('error', function () {
    console.error('MongoDB Connection Error.');
  });

  connection.on('connected', function () {
    console.log('Mongoose Connected');
  })
  return connection;
}