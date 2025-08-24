import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

export const requestValidation = (zodSchema: AnyZodObject) => async (req: Request, res: Response, next: NextFunction) => {

    try {

        if (req.body.data) {
            try {
                req.body = JSON.parse(req.body.data)
            } catch (error) {
                return res.status(400).json({ success: false, message: "Invalid form-data formate" });
            }
        }

        req.body = await zodSchema.parseAsync(req.body);
        next();

    } catch (error) {
        next(error);
    }

}