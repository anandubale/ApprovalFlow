"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _helmet = _interopRequireDefault(require("helmet"));
var _index = _interopRequireDefault(require("./routes/index.js"));
var _database = _interopRequireDefault(require("./config/database.js"));
var _errorMiddlerware = require("./middlware/error.middlerware.js");
var _logger = _interopRequireWildcard(require("./config/logger.js"));
var _morgan = _interopRequireDefault(require("morgan"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
_dotenv["default"].config();
var app = (0, _express["default"])();
var host = process.env.APP_HOST;
var port = process.env.APP_PORT;
var api_version = process.env.API_VERSION;
app.use((0, _cors["default"])());
app.use((0, _helmet["default"])());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.use((0, _morgan["default"])('combined', {
  stream: _logger.logStream
}));
(0, _database["default"])();
app.use("/api/".concat(api_version), (0, _index["default"])());
app.use(_errorMiddlerware.appErrorHandler);
app.use(_errorMiddlerware.genericErrorHandler);
app.use(_errorMiddlerware.notFound);
app.listen(port, function () {
  _logger["default"].info("Server started at ".concat(host, ":").concat(port, "/api/").concat(api_version, "/"));
});
var _default = app;
exports["default"] = _default;