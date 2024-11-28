"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv").config();
var KEY = process.env.APP_KEY;
var Auth = function (req, res, next) {
    var token = req.header("token");
    try {
        if (token) {
            if (KEY) {
                try {
                    var userId = jsonwebtoken_1.default.verify(token, KEY);
                    if (userId) {
                        req.user = userId;
                    }
                }
                catch (error) {
                    return res.json({
                        message: error.message
                    });
                }
                next();
            }
        }
        else
            return res.json({
                message: "no token provided"
            });
    }
    catch (error) {
        if (error)
            return res.json({
                message: "invalid token"
            });
    }
};
exports.Auth = Auth;
