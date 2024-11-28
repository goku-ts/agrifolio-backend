"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePost = exports.validateLogin = exports.validateRegister = void 0;
var joi_1 = __importDefault(require("joi"));
var validateRegister = function (body) {
    var validationschema = joi_1.default.object({
        email: joi_1.default.string().email().required(),
        businessName: joi_1.default.string().required().min(5).max(30),
        password: joi_1.default.string().required().min(6).max(25),
    });
    return validationschema.validate(body);
};
exports.validateRegister = validateRegister;
var validateLogin = function (body) {
    var validationschema = joi_1.default.object({
        email: joi_1.default.string().email().required(),
        password: joi_1.default.string().required().min(6).max(25)
        // .pattern(new RegExp("^[a-zA-Z0-9@]{3,30}$"))
    });
    return validationschema.validate(body);
};
exports.validateLogin = validateLogin;
var validatePost = function (body) {
    var validationschema = joi_1.default.object({
        title: joi_1.default.string().required(),
        content: joi_1.default.string().required(),
        description: joi_1.default.string().required(),
    });
    return validationschema.validate(body);
};
exports.validatePost = validatePost;
