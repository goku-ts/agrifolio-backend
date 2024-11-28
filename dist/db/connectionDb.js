"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
var loggerService_1 = require("../services/loggerService");
var uri = (_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.DB_URI;
//console.log(uri)
var options = { useNewUrlParser: true, useUnifiedTopology: true };
var dbConnect = function () {
    if (!uri) {
        loggerService_1.logger.error("no db connection found");
    }
    mongoose_1.default.connect(uri)
        .then(function () { return loggerService_1.logger.info("connected to database"); })
        .catch(function (e) { return loggerService_1.logger.error(e); });
};
exports.dbConnect = dbConnect;
