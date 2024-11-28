"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
require('dotenv').config();
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var generateToken = function (id) {
    var token = "";
    if (process.env.APP_KEY) {
        var genrateToken = jsonwebtoken_1.default.sign({ _id: id }, process.env.APP_KEY);
        token = genrateToken;
    }
    return token;
};
exports.generateToken = generateToken;
