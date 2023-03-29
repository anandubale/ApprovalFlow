"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.employee_Registration = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _user = _interopRequireDefault(require("../model/user.model"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _jsonwebtoken = require("jsonwebtoken");
/**
 * Service for Employee Registration
 */

var employee_Registration = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var saltRounds, hashedPassword, email_Check, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          saltRounds = 10;
          hashedPassword = _bcrypt["default"].hashSync(body.password, saltRounds);
          body.password = hashedPassword;
          _context.next = 5;
          return _user["default"].findOne({
            emailId: body.emailId
          });
        case 5:
          email_Check = _context.sent;
          if (!(email_Check != null)) {
            _context.next = 10;
            break;
          }
          throw new Error("Employee already registered");
        case 10:
          data = _user["default"].Create(body);
          console.log("EMployee is Created, hurray!!");
          return _context.abrupt("return", data);
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function employee_Registration(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Service to Login Employee in Portal
 */
exports.employee_Registration = employee_Registration;
var login = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var find_Emp, validPassword, token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _user["default"].findOne({
            emailId: body.emailId
          });
        case 2:
          find_Emp = _context2.sent;
          validPassword = _bcrypt["default"].compareSync(body.password, _user["default"].password);
          if (!validPassword) {
            _context2.next = 9;
            break;
          }
          token = _jsonwebtoken.jwt.sign({
            "emailId": _user["default"].emailId,
            "id": _user["default"]._id
          }, process.env.LOGIN_SECRET_CODE);
          return _context2.abrupt("return", token);
        case 9:
          throw new Error("password is not correct");
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function login(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
exports.login = login;