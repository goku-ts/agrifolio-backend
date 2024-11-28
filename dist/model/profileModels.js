"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = exports.profileSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
exports.profileSchema = new mongoose_1.default.Schema({
    pid: {
        type: String,
        unique: true
    },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User'
    },
    businessProfile: {
        logo: {
            type: String
        },
        name: {
            type: String,
            required: true
        },
        businessTypes: {
            type: [String],
        },
        businessTypesDetails: {
            type: String
        },
        historyAndMission: {
            type: String
        },
        values: {
            type: [String],
        },
        valuesDetails: {
            type: String
        },
        sustainabilityPractices: {
            type: [String],
        },
        sustainabilityDetails: {
            type: String
        },
        agriculturalExpertise: {
            type: [String],
        },
        expertiseDetails: {
            type: String
        }
    },
    contactInformation: {
        location: {
            country: {
                type: String,
                required: true
            },
            region: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
        },
        contact: {
            email: {
                type: String,
                required: true
            },
            phone: {
                type: String,
                required: true
            }
        },
        serviceAreas: {
            type: [String],
        },
    },
    gallery: {
        type: [Object],
    }
}, {
    timestamps: true
});
exports.Profile = mongoose_1.default.model("Profile", exports.profileSchema);
