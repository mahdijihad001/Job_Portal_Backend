import { v2 as Cloudinary } from "cloudinary";
import { envVars } from "./env";


Cloudinary.config({
    cloud_name: envVars.CLOUDINARY.CLOUDINARY_CLOUD_NAME,
    api_key: envVars.CLOUDINARY.CLOUDINARY_API_KEY,
    api_secret: envVars.CLOUDINARY.CLOUDINARY_API_SECRATE
});


export const cloudinaryUpload = Cloudinary