import mongoose, { Schema } from "mongoose";
import { UserRegisterTypes } from "../types/types";

const userSchema = new mongoose.Schema<UserRegisterTypes>({
    businessName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },

},
    {
        timestamps: true
    })


export const User = mongoose.model("User", userSchema)