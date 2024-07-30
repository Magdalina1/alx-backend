"use strict";

function createPushNotificationsJobs(jobs, queue) {
  if (!Array.isArray(jobs)) {
    throw Error('Jobs is not an array');
  }
  jobs.forEach(function (myJob) {
    var job = queue.create('push_notification_code_3', myJob);
    job.on('complete', function () {
      console.log("Notification job ".concat(job.id, " completed"));
    }).on('failed', function (error) {
      console.log("Notification job ".concat(job.id, " failed: ").concat(error));
    }).on('progress', function (progress, data) {
      console.log("Notification job ".concat(job.id, " ").concat(progress, "% complete"));
    });
    job.save(function (error) {
      if (!error) console.log("Notification job created: ".concat(job.id));
    });
  });
}
module.exports = createPushNotificationsJobs;