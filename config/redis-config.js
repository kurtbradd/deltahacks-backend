var secrets = require('./secrets.js').redis;
var redis = require("redis");
    redis = redis.createClient(secrets.port, secrets.host, {})

module.exports = function () {
  redis.on("connect", function () {
    console.log('Redis Connected');
  });
  return redis;
}