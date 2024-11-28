"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByUserFromDB = exports.deleteFromDB = exports.updateToDB = exports.getAllFromDB = exports.getFromDB = exports.addToDB = void 0;
var addToDB = function (request, database, validation) { return __awaiter(void 0, void 0, void 0, function () {
    var name, pid, get, add;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                name = request.body.businessProfile.name;
                pid = name.split(" ").join("");
                return [4 /*yield*/, database.find({ pid: pid })];
            case 1:
                get = (_a.sent())[0];
                if (get)
                    return [2 /*return*/, "Profile Exists"];
                add = new database(__assign(__assign({}, request.body), { user: request.user, pid: pid }));
                return [4 /*yield*/, add.save()];
            case 2: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.addToDB = addToDB;
var getFromDB = function (request, database, populate_path, populate_name, collection_name) { return __awaiter(void 0, void 0, void 0, function () {
    var pid, get;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                pid = request.params.pid;
                return [4 /*yield*/, database.find({ pid: pid })]; //.populate({ path: populate_path, select: populate_name })
            case 1:
                get = _a.sent() //.populate({ path: populate_path, select: populate_name })
                ;
                if (!get)
                    return [2 /*return*/, "no data with given id available"];
                return [2 /*return*/, get];
        }
    });
}); };
exports.getFromDB = getFromDB;
var getAllFromDB = function (request, database, populate_path, populate_name, collection_name) { return __awaiter(void 0, void 0, void 0, function () {
    var get;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, database.find()]; //.populate({ path: populate_path, select: populate_name })
            case 1:
                get = _a.sent() //.populate({ path: populate_path, select: populate_name })
                ;
                if (get.length === 0)
                    return [2 /*return*/, "no data available"];
                return [2 /*return*/, get];
        }
    });
}); };
exports.getAllFromDB = getAllFromDB;
var updateToDB = function (request, database, collection_name) { return __awaiter(void 0, void 0, void 0, function () {
    var get_update, id, get;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                get_update = request.body;
                id = request.params.id;
                return [4 /*yield*/, database.findByIdAndUpdate({ _id: id }, get_update)];
            case 1:
                get = _a.sent();
                if (!get)
                    return [2 /*return*/, "no data with this id available"];
                return [2 /*return*/, get];
        }
    });
}); };
exports.updateToDB = updateToDB;
var deleteFromDB = function (request, database, collection_name) { return __awaiter(void 0, void 0, void 0, function () {
    var id, get;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = request.params.id;
                return [4 /*yield*/, database.findByIdAndDelete({ _id: id })];
            case 1:
                get = _a.sent();
                if (!get)
                    return [2 /*return*/, "no data with this id available"];
                return [2 /*return*/, get];
        }
    });
}); };
exports.deleteFromDB = deleteFromDB;
var getByUserFromDB = function (request, database, collection_name) { return __awaiter(void 0, void 0, void 0, function () {
    var userId, get;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                userId = request.user;
                return [4 /*yield*/, database.find({ seller: userId })];
            case 1:
                get = _a.sent();
                if (get.length === 0)
                    return [2 /*return*/, "no data available"];
                return [2 /*return*/, get];
        }
    });
}); };
exports.getByUserFromDB = getByUserFromDB;
