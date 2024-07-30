"use strict";

var _kue = _interopRequireDefault(require("kue"));
var _job = _interopRequireDefault(require("./8-job.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var queue = _kue["default"].createQueue();
var list = [{
  phoneNumber: '4153518780',
  message: 'This is the code 1234 to verify your account'
}];
(0, _job["default"])(list, queue);