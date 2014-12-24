var express = require('express');
var app = express();

// Express Config
require('./config/express-config.js')(app);

//Load Routes
require('./controllers/routes.js')(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//Error Handlers
require('./config/error-handlers.js')(app);

module.exports = app;
