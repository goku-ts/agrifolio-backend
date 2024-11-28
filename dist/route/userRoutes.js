"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
var express_1 = __importDefault(require("express"));
var multer_1 = __importDefault(require("multer"));
var userController_1 = require("../controllers/user/userController");
var storage = multer_1.default.diskStorage({}); // Store image in memory as a Buffer
var upload = (0, multer_1.default)({ storage: storage });
exports.userRouter = express_1.default.Router();
exports.userRouter.post("/register", userController_1.Register);
exports.userRouter.post("/login", userController_1.Login);
//userRouter.post("/upload/:id",upload.single('image'),uploadImage )
