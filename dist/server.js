"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require('dotenv').config({ path: "../.env" });
var connectionDb_1 = require("./db/connectionDb");
var cors_1 = __importDefault(require("cors"));
var userRoutes_1 = require("./route/userRoutes");
var profileRoutes_1 = require("./route/profileRoutes");
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/auth", userRoutes_1.userRouter);
app.use("/profile", profileRoutes_1.profileRouter);
var PORT = process.env.PORT || 3001;
app.listen(PORT, function () { return (0, connectionDb_1.dbConnect)(); });
