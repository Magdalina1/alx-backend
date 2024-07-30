"use strict";

var _kue = require("kue");
var jobs = [{
  phoneNumber: '4153518780',
  message: 'This is the code 1234 to verify your account'
}, {
  phoneNumber: '4153518781',
  message: 'This is the code 4562 to verify your account'
}, {
  phoneNumber: '4153518743',
  message: 'This is the code 4321 to verify your account'
}, {
  phoneNumber: '4153538781',
  message: 'This is the code 4562 to verify your account'
}, {
  phoneNumber: '4153118782',
  message: 'This is the code 4321 to verify your account'
}, {
  phoneNumber: '4153718781',
  message: 'This is the code 4562 to verify your account'
}, {
  phoneNumber: '4159518782',
  message: 'This is the code 4321 to verify your account'
}, {
  phoneNumber: '4158718781',
  message: 'This is the code 4562 to verify your account'
}, {
  phoneNumber: '4153818782',
  message: 'This is the code 4321 to verify your account'
}, {
  phoneNumber: '4154318781',
  message: 'This is the code 4562 to verify your account'
}, {
  phoneNumber: '4151218782',
  message: 'This is the code 4321 to verify your account'
}];
var queue = (0, _kue.createQueue)();
jobs.forEach(function (myJob) {
  var job = queue.create('push_notification_code_2', myJob).save(function (error) {
    if (!error) console.log("Notification job created: ".concat(job.id));
  });
  job.on('complete', function () {
    console.log("Notification job ".concat(job.id, " completed"));
  }).on('failed', function (error) {
    console.log("Notification job ".concat(job.id, " failed: ").concat(error));
  }).on('progress', function (progress, data) {
    console.log("Notification job ".concat(job.id, " ").concat(progress, "% complete"));
  });
});