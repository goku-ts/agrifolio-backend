"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = exports.Register = void 0;
var lodash_1 = __importDefault(require("lodash"));
require("dotenv").config();
var userModel_1 = require("../../model/userModel");
var validationService_1 = require("../../services/validationService");
var tokenServices_1 = require("../../services/tokenServices");
var passwordServices_1 = require("../../services/passwordServices");
var loggerService_1 = require("../../services/loggerService");
var Register = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var error, newUser, user, _a, addUser, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                error = (0, validationService_1.validateRegister)(req.body).error;
                if (error)
                    return [2 /*return*/, res.json({
                            message: error.details[0].message
                        })];
                newUser = req.body;
                return [4 /*yield*/, userModel_1.User.findOne({ email: newUser.email })];
            case 1:
                user = _b.sent();
                if (user)
                    return [2 /*return*/, res.status(409).json({
                            message: "User already has an account, try logging in"
                        })];
                _a = newUser;
                return [4 /*yield*/, (0, passwordServices_1.hashPassword)(newUser.password)];
            case 2:
                _a.password = _b.sent();
                addUser = new userModel_1.User(newUser);
                return [4 /*yield*/, addUser.save()];
            case 3:
                _b.sent();
                res.status(201).json({
                    status: "SUCCESS",
                    "new user": lodash_1.default.pick(addUser, ["_id", "email", "businessName"])
                });
                return [3 /*break*/, 5];
            case 4:
                error_1 = _b.sent();
                if (error_1)
                    return [2 /*return*/, res.status(500).json({
                            message: "internal server error"
                        })];
                loggerService_1.logger.error(error_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.Register = Register;
var Login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var error, userLogin, user, validpassword, token, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                error = (0, validationService_1.validateLogin)(req.body).error;
                if (error)
                    return [2 /*return*/, res.json({
                            message: error.details[0].message
                        })];
                userLogin = req.body;
                return [4 /*yield*/, userModel_1.User.findOne({ email: userLogin.email })];
            case 1:
                user = _a.sent();
                if (!user)
                    return [2 /*return*/, res.status(404).json({
                            message: "incorrect username or password"
                        })];
                return [4 /*yield*/, (0, passwordServices_1.comparePassword)(userLogin.password, user.password)];
            case 2:
                validpassword = _a.sent();
                if (!validpassword)
                    return [2 /*return*/, res.status(404).json({
                            message: "incorrect username or password"
                        })];
                token = (0, tokenServices_1.generateToken)(user._id);
                res.header("token", token).json({
                    status: "SUCCESS",
                    token: token
                });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                loggerService_1.logger.error(error_2);
                if (error_2)
                    return [2 /*return*/, res.status(500).json({
                            message: "iternsal server error"
                        })];
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.Login = Login;
// export const uploadImage = async (req: Request, res: Response) => {
//     const userId = req.params.id
//     const body: UserRegisterTypes = req.body
//     try {
//         const user = await User.findById({ _id: userId })
//         if (!user) res.json({
//             message: "user not found, could not upload image"
//         })
//         const result = await ImageUpload(req.file)
//          if (!result) return res.json({
//             message: "image updload fail"
//         })
//         body.image = result
//         const update = await User.findByIdAndUpdate({ _id: userId },{...body})
//         res.json({
//             message: "SUCCESS"
//         })
//     } catch (error) {
//         logger.error(error)
//     }
// }
