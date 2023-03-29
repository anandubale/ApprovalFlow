"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _base = require("@hapi/joi/lib/base");
var _mongoose = require("mongoose");
var employeeSchema = new _mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  emailId: {
    type: String,
    required: true
  },
  companyName: {
    String: String,
    required: true
  },
  identification: {
    String: string,
    required: true
  }
});
var _default = model('Employee', userSchema);
exports["default"] = _default;