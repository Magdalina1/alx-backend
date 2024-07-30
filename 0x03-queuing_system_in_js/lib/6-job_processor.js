"use strict";

var _kue = require("kue");
var queue = (0, _kue.createQueue)();
function sendNotification(phoneNumber, message) {
  console.log("Sending notification to ".concat(phoneNumber, ", with message: ").concat(message));
}
;
queue.process('push_notification_code', function (job, done) {
  sendNotification(job.data.phoneNumber, job.data.message);
  done();
});