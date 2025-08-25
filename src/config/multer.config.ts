import { CloudinaryStorage } from "multer-storage-cloudinary";
import { cloudinaryUpload } from "./cloudinary.config";
import multer from "multer";


const storage = new CloudinaryStorage({
    cloudinary: cloudinaryUpload,
    params: {
        public_id: (req, file) => {
            const fileName = file.originalname
                .replace(/\s+/g, "-")
                .replace(/\.(?=.*\.)/g, "-")
                .replace(/[^a-z0-9\-]/g, "");

            const extension = file.originalname.split(".").pop();

            const uniqueFilename = Math.random().toString().substring(2) + "-" + Date.now() + "-" + fileName + "." + extension;

            return uniqueFilename

        }

    }
});

export const multerUpload = multer({ storage: storage });