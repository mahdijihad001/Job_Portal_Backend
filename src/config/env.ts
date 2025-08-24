import dotEnv from "dotenv";

dotEnv.config();

interface IEnv {
    MONGO_URI: string,
    PORT: string,
    NODE_ENVIRONMENT: string,
    CLOUDINARY: {
        CLOUDINARY_CLOUD_NAME: string,
        CLOUDINARY_API_KEY: string,
        CLOUDINARY_API_SECRATE: string
    }
};


const lodaEnvironmentVariables = (): IEnv => {
    const requiredEnv = ["MONGO_URI", "PORT", "NODE_ENVIRONMENT", "CLOUDINARY_CLOUD_NAME", "CLOUDINARY_API_KEY", "CLOUDINARY_API_SECRATE"];

    requiredEnv.forEach((key) => {
        if (!process.env[key]) {
            throw new Error(`Required Environment missing : ${key}`);
        }
    });

    return {
        MONGO_URI: process.env.MONGO_URI as string,
        PORT: process.env.PORT as string,
        NODE_ENVIRONMENT: process.env.NODE_ENVIRONMENT as string,
        CLOUDINARY: {
            CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME as string,
            CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY as string,
            CLOUDINARY_API_SECRATE: process.env.CLOUDINARY_API_SECRATE as string
        }
    }
};

export const envVars = lodaEnvironmentVariables();