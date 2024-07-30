"use strict";

var _redis = require("redis");
var redisClient = (0, _redis.createClient)();
redisClient.on('connect', function () {
  console.log('Redis client connected to the server');
});
redisClient.on('error', function (error) {
  console.log("Redis client not connected to the server: ".concat(error));
});

//set hash key-value in HolbertonSchools list
redisClient.hset('HolbertonSchools', 'Portland', '50', _redis.print);
redisClient.hset('HolbertonSchools', 'Seattle', '80', _redis.print);
redisClient.hset('HolbertonSchools', 'New York', '20', _redis.print);
redisClient.hset('HolbertonSchools', 'Bogota', '20', _redis.print);
redisClient.hset('HolbertonSchools', 'Cali', '40', _redis.print);
redisClient.hset('HolbertonSchools', 'Paris', '2', _redis.print);

// retrieve all elements stored in HolbertonSchools list
redisClient.hgetall('HolbertonSchools', function (error, result) {
  if (error) {
    console.log(error);
    throw error;
  }
  console.log(result);
});