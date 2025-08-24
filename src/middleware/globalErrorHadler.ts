import { NextFunction, Request, Response } from "express";
import { AppError } from "../utils/AppError";
import { envVars } from "../config/env";

export const globalErrorHanlder = (error: any, req: Request, res: Response, next: NextFunction) => {

    if (envVars.NODE_ENVIRONMENT === "development") {
        console.log(error);
    }

    let statusCode: number = 500;
    let message = "Something went wrong.";

    if (error instanceof AppError) {
        statusCode = error.statusCode
        message = error.message
    } else if (error instanceof Error) {
        statusCode = 500;
        message = error.message
    };

    res.status(statusCode).json({
        success: false,
        message: message,
        error: envVars.NODE_ENVIRONMENT === "development" ? error : null,
        stack: envVars.NODE_ENVIRONMENT === "development" ? error.stack : null
    })

}