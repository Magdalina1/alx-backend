"use strict";

var _kue = require("kue");
var blacklist = ['4153518780', '4153518781'];
var queue = (0, _kue.createQueue)();
function sendNotification(phoneNumber, message, job, done) {
  job.progress(0, 100);
  if (blacklist.includes(phoneNumber)) {
    done(Error("Phone number ".concat(phoneNumber, " is blacklisted")));
    return;
  }
  job.progress(50, 100);
  console.log("Sending notification to ".concat(phoneNumber, ", with message: ").concat(message));
  done();
}
queue.process('push_notification_code_2', 2, function (job, done) {
  sendNotification(job.data.phoneNumber, job.data.message, job, done);
});