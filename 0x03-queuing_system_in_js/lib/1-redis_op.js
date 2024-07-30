"use strict";

var _redis = require("redis");
var client = (0, _redis.createClient)();
client.on('connect', function () {
  console.log('Redis client connected to the server');
});
client.on('error', function (err) {
  console.log("Redis client not connected to the server: ".concat(err));
});
function setNewSchool(schoolName, value) {
  client.set(schoolName, value, _redis.print);
}
;
function displaySchoolValue(schoolName) {
  client.get(schoolName, function (error, result) {
    if (error) {
      console.log(error);
      throw error;
    }
    console.log(result);
  });
}
displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');