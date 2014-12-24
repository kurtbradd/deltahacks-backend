var redis = require("redis").createClient();

module.exports = function () {
  redis.on("connect", function () {
    console.log('Redis Connected');
  });
  return redis;
}