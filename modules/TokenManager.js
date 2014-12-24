var redis = require('../config/redis-config.js')();
var constants = require('../config/constants.js');

exports.verifyToken = function (req, res, next) {
  var token = getToken(req.headers);
  redis.get(token, function (err, reply) {
    if (err)    return res.send(500); //not found
    if (reply)  return res.send(401); //invalidated
    next();
  });
}

exports.expireToken = function(headers) {
  var token = getToken(headers);
  if (token != null) {
    redis.set(token, {is_expired:true});
    redis.expire(token, constants.TOKEN_EXPIRATION);
  }
}

var getToken = function(headers) {
  if (headers && headers.authorization) {
    var authorization = headers.authorization;
    var part = authorization.split(' ');
    if (part.length == 2) return part[1];
    return null;
  }
}