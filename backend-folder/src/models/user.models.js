import { Type } from "lucide-react";
import mongoose, { Schema} from "mongoose";

const userSchema = new Schema (
    {
        username: {
            type: string,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            minlength: 1,
            maxlength: 30
        },

        password: {
            type: string,
            required: true,
            minlength: 6,
            maxlength: 50,
        },

        email: {
           type: string,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },

    },
    {
        timestamps: true,
    }
)

export const User = mongoose.Model ("User", userSchema)