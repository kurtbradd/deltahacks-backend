var express = require('express');
var app = express();

// Connect MongoDB
require('./config/mongoose-config.js')();

// Require Models
require('./models/models.js')();

// Express Config
require('./config/express-config.js')(app);

//Load Routes
require('./controllers/routes.js')(app);

//Error Handlers
require('./config/error-handlers.js')(app);

module.exports = app;
