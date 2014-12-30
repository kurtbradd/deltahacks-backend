var mongoose = require('./mongoose-config.js')();
var User = require('../models/User.js'); 

var saveHandler = function (err, savedUser) {
  if (err) return console.log(err);
  console.log(savedUser);
}

var user1 = new User;
user1.email = 'testadmin@gmail.com';
user1.password = 'testpassword';
user1.firstName = 'testFirstName';
user1.lastName = 'testLastName';
user1.school = 'McMaster University';
user1.isAdmin = true;
user1.save(saveHandler);

var user2 = new User;
user2.email = 'testuser@gmail.com';
user2.password = 'testpassword';
user2.firstName = 'testFirstName';
user2.lastName = 'testLastName';
user2.school = 'McMaster University';
user2.save(saveHandler);