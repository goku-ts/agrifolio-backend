"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileRouter = void 0;
var express_1 = __importDefault(require("express"));
var profileControllers_1 = require("../controllers/profile/profileControllers");
var authMiddleware_1 = require("../middlewares/authMiddleware");
exports.profileRouter = express_1.default.Router();
{ /* service ROUTES*/ }
exports.profileRouter.get("/", profileControllers_1.getAllPosts);
exports.profileRouter.get("/:pid", profileControllers_1.getPost);
exports.profileRouter.post("/create", authMiddleware_1.Auth, profileControllers_1.addPost);
exports.profileRouter.put("/:id", authMiddleware_1.Auth, profileControllers_1.updatePost);
exports.profileRouter.delete("/:id", authMiddleware_1.Auth, profileControllers_1.deletePost);
