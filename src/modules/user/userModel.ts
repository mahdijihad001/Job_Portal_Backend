import { model, Schema } from "mongoose";
import { IActive, IUser, Role } from "./userInterfaces";
import bcrypt from "bcryptjs";

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
    },
    picture: {
        type: String
    }
}, { timestamps: true, versionKey: false });

// Hashing password
userSchema.pre("save", async function (next) {

    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 10);

    next();
})

export const User = model<IUser>("User", userSchema);