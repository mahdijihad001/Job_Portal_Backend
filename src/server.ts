import express, { Request, Response } from "express"
import cors from "cors";
const port = 3500;

const app = express();


app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ success: true, message: "Job Portal Server runing success." });
});


app.listen(port, () => {
    console.log(`Server runing on port : ${port}`);
});