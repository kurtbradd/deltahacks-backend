module.exports = function (app) {

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      console.log(err);
      res.status(err.status).send(err.message);
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: {}
    });
  });  
}