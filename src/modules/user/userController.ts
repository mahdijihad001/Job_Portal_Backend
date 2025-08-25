import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { userServices } from "./userServices";
import { AppError } from "../../utils/AppError";

const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const picture = req.file?.path

    const result = await userServices.createUser(req.body, picture as string);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "User created successfully.",
        data: result
    })
});


const logInUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body.email || !req.body.password) {
        throw new AppError(400, "Email & Password must be required.");
    }
    const { user, token } = await userServices.logInUser(req.body);

    res.cookie("accessToken", token.accessToken, { httpOnly: true, secure: false });
    res.cookie("refreshToken", token.refreshToken, { httpOnly: true, secure: false });

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Successfully login.",
        data: user
    })

});


export const userController = {
    createUser,
    logInUser
}