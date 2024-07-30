"use strict";

var _kue = require("kue");
var queue = (0, _kue.createQueue)();
var notification = {
  'phoneNumber': '4153518780',
  'message': 'This is the code to verify your account'
};
var job = queue.create('push_notification_code', notification).save(function (error) {
  if (!error) {
    console.log("Notification job created: ".concat(job.id));
  }
});
job.on('complete', function () {
  console.log('Notification job completed');
}).on('failed', function () {
  console.log('Notification job failed');
});