import { Router } from "express";
import { userController } from "./userController";
import { multerUpload } from "../../config/multer.config";
import { requestValidation } from "../../utils/requestValidation";
import { createUserZodSchema } from "./userZodSchema";

const userRouter = Router();

userRouter.post("/create", multerUpload.single("file"), requestValidation(createUserZodSchema), userController.createUser);
userRouter.post("/login", userController.logInUser);



export default userRouter;