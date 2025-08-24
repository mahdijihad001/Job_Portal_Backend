import { model, Schema } from "mongoose";
import { IActive, IUser, Role } from "./userInterfaces";

const userSchema = new Schema<IUser>({
    userName: {
        type: String,
        required: [true, "Username is required."]
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    role: {
        type: String,
        enum: Object.values(Role),
        default: Role.USER
    },
    isActive: {
        type: String,
        enum: Object.values(IActive),
        default: IActive.ACTIVE
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    isVerifid: {
        type: Boolean,
        default: false
    }
}, { timestamps: true, versionKey: false });


export const User = model<IUser>("User", userSchema);