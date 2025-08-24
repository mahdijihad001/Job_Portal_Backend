import express, { Request, Response } from "express"
import cors from "cors";
import { globalErrorHanlder } from "./middleware/globalErrorHadler";
import { notFoundRoute } from "./middleware/notFoundRoute";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());



app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ success: true, message: "Job Portal Server runing success." });
});



app.use(globalErrorHanlder);
app.use(notFoundRoute);

export default app