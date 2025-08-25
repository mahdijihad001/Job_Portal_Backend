import express, { Request, Response } from "express"
import cors from "cors";
import { globalErrorHanlder } from "./middleware/globalErrorHadler";
import { notFoundRoute } from "./middleware/notFoundRoute";
import userRouter from "./modules/user/userRouter";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/user", userRouter);


app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ success: true, message: "Job Portal Server runing success." });
});



app.use(globalErrorHanlder);
app.use(notFoundRoute);

export default app