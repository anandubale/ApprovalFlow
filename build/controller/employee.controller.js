"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.employee_Registration = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _readOnlyError2 = _interopRequireDefault(require("@babel/runtime/helpers/readOnlyError"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var EmployeeService = _interopRequireWildcard(require("../services/user.service"));
var _httpStatusCodes = _interopRequireDefault(require("http-status-codes"));
var _winston = require("winston");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var employee_Registration = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return EmployeeService.employee_Registration(req.body);
        case 3:
          _data = _context.sent;
          res.status(_httpStatusCodes["default"].CREATED).json({
            code: _httpStatusCodes["default"].CREATED,
            data: _data,
            message: "Employee is Created Successfully"
          });
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(_httpStatusCodes["default"].CONFLICT).json({
            code: _httpStatusCodes["default"].CONFLICT,
            message: "".concat(_context.t0)
          });
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function employee_Registration(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.employee_Registration = employee_Registration;
var login = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _data2;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return employee_Registration.login(req.body);
        case 3:
          _data2 = _context2.sent;
          if (null, (0, _readOnlyError2["default"])("data")) {
            res.status(_httpStatusCodes["default"].NOT_FOUND).json({
              code: _httpStatusCodes["default"].NOT_FOUND,
              message: "".concat(error)
            });
          } else {
            res.status(_httpStatusCodes["default"].OK).json({
              code: _httpStatusCodes["default"].OK,
              data: _data2,
              message: "login successfully"
            });
          }
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(_httpStatusCodes["default"].BAD_REQUEST).json({
            code: _httpStatusCodes["default"].BAD_REQUEST,
            data: data,
            message: "".concat(_context2.t0)
          });
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function login(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.login = login;