import { Server } from "http"
import mongoose from "mongoose";
import { envVars } from "./config/env";
import app from "./app";
const port = 3500;

let server: Server




const boostServer = async () => {
    try {
        await mongoose.connect(envVars.MONGO_URI);
        console.log("MoogoDb Connection successfylly.");

        server = app.listen(port, () => {
            console.log(`Server runing on port : ${port}`);
            console.log(`http://localhost:${envVars.PORT}`);
        });

    } catch (error: any) {
        console.log("Mongoose Connection Error");
        console.log(error.message);
    }
};


(async () => {
    await boostServer();
})();



// Jodi Server hoster kono karon a server off kora tahola ai signal asba
process.on("SIGTERM", () => {
    console.log("Sigterm signal detected... Server shuting down!");

    if (server) {
        server.close(() => {
            process.exit(0);
        })
    };
    process.exit(0);
});

// Jodi Domin ownar kono karon a server off kora tahola ai sigbal
process.on("SIGINT", () => {
    console.log("Sigint signal detected... Server shuting down!");

    if (server) {
        server.close(() => {
            process.exit(0);
        })
    };
    process.exit(0);
});

process.on("uncaughtException", (error) => {
    console.log("Uncaugth exprecton detected.. Server shuting down.", error);

    if (server) {
        server.close(() => {
            process.exit(1);
        }
        )
    };
    process.exit(1);
});

process.on("unhandledRejection", (error) => {
    console.log("Unhandle rejection detected... Server shuting down.");

    if (server) {
        server.close(() => {
            process.exit(1);
        })
    };
    process.exit(1);
});



