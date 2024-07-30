"use strict";

var _mocha = require("mocha");
var _chai = require("chai");
var _kue = require("kue");
var _job = _interopRequireDefault(require("./8-job.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var queue = (0, _kue.createQueue)();
(0, _mocha.describe)('Test createPushNotificatinsJobs function', function () {
  (0, _mocha.before)(function () {
    queue.testMode.enter();
  });
  (0, _mocha.afterEach)(function () {
    queue.testMode.clear();
  });
  (0, _mocha.after)(function () {
    queue.testMode.exit();
  });
  (0, _mocha.it)('display an error message if jobs is not an array', function () {
    (0, _chai.expect)(function () {
      return (0, _job["default"])('job', queue);
    }).to["throw"](Error, 'Jobs is not an array');
  });
  (0, _mocha.it)('Test whether jobs are created', function () {
    var jobs = [{
      phoneNumber: '4153518780',
      message: 'This is the code 1234 to verify your account'
    }, {
      phoneNumber: '4153518781',
      message: 'This is the code 4562 to verify your account'
    }];
    (0, _job["default"])(jobs, queue);
    (0, _chai.expect)(queue.testMode.jobs.length).to.equal(2);
    (0, _chai.expect)(queue.testMode.jobs[0].type).to.equal('push_notification_code_3');
    (0, _chai.expect)(queue.testMode.jobs[0].data).to.eql(jobs[0]);
    (0, _chai.expect)(queue.testMode.jobs[1].type).to.equal('push_notification_code_3');
    (0, _chai.expect)(queue.testMode.jobs[1].data).to.eql(jobs[1]);
  });
});