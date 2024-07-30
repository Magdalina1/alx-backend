"use strict";

var _redis = require("redis");
function redisConnect() {
  var client = (0, _redis.createClient)();
  client.on('connect', function () {
    console.log('Redis client connected to the server');
  }).on('error', function (err) {
    console.log("Redis client not connected to the server: ".concat(err));
  });
}
;
redisConnect();