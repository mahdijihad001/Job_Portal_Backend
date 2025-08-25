import { IUser } from "./userInterfaces";
import { User } from "./userModel";
import { AppError } from "../../utils/AppError";
import bcrypt from "bcryptjs";
import { generateJwt } from "../../utils/jwt";
import { envVars } from "../../config/env";

const createUser = async (payload: Partial<IUser>, picture: string) => {

    const existUser = await User.findOne({ email: payload.email });

    if (existUser) {
        throw new AppError(400, "User already exist.");
    };

    const data = {
        ...payload,
        picture
    }

    const user = await User.create(data);

    const { password, ...rest } = user.toObject();

    return rest

};

const logInUser = async (payload: Partial<IUser>) => {
    const existUser = await User.findOne({ email: payload.email });

    if (!existUser) {
        throw new AppError(400, "User not exist. Please register.");
    };

    const matchPassword = await bcrypt.compare(payload.password as string, existUser.password);

    if (!matchPassword) {
        throw new AppError(400, "Invalid password");
    };

    const token = {
        accessToken: generateJwt(existUser, envVars.JWT.ACCESS_SECRATE, "7d"),
        refreshToken: generateJwt(existUser, envVars.JWT.REFRESH_SECRATE, "30d")
    };

    const { password, ...user } = existUser.toObject()

    return { user, token };

}


export const userServices = {
    createUser,
    logInUser
}