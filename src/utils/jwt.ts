import { IUser } from "../modules/user/userInterfaces";
import jwt from "jsonwebtoken";

export const generateJwt = (data: Partial<IUser>, secret: string, exp: "7d" | "30d"): string => {

    const payload = {
        userId: data.__id,
        email: data.email,
        role: data.role
    }

    return jwt.sign(payload, secret, { expiresIn: exp });
};
