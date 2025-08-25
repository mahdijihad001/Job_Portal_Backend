import z from "zod";
import { Role } from "./userInterfaces";


export const createUserZodSchema = z.object({
    userName: z.string({ required_error: "Username must be required." }).min(4, { message: "Username to short. Minimum 4 charecter long." }),
    email: z.string({ required_error: "Email must be required." }).email({ message: "Invalid email formate" }).toLowerCase().trim(),
    password: z.string({ required_error: "Password must be required." }).min(8, { message: "Password to short. Minimun 8 character long." })
        .regex(/\d/, { message: "Password must be contain at least one number" })
        .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, { message: "Password must be at last one speacil character" })
        .regex(/[A-Z]/, { message: "Password must be contain must be one uppercase chacacter" })
        .regex(/[a-z]/, { message: "Password must be contain at last one lowarcast character" })
    ,
    phone: z.string()
        .regex(/^(?:\+?880|0)(13|14|15|16|17|18|19)[0-9]{8}$/, { message: "Invalid number formate. Please try valid bangladashi number" })
        .optional(),
    address: z.string().optional(),
    picture: z.string().optional(),
});

export const updateUserZodSchema = z.object({
    userName: z.string().min(4, { message: "Username to short. Minimum 4 charecter long." }).optional(),
    email: z.string().email({ message: "Invalid email formate" }).toLowerCase().trim().optional(),
    password: z.string().min(8, { message: "Password to short. Minimun 8 character long." })
        .regex(/\d/, { message: "Password must be contain at least one number" })
        .regex(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, { message: "Password must be at last one speacil character" })
        .regex(/[A-Z]/, { message: "Password must be contain must be one uppercase chacacter" })
        .regex(/[a-z]/, { message: "Password must be contain at last one lowarcast character" }).optional()
    ,
    phone: z.string()
        .regex(/^(?:\+?880|0)(13|14|15|16|17|18|19)[0-9]{8}$/, { message: "Invalid number formate. Please try valid bangladashi number" })
        .optional(),
    address: z.string().optional(),
    role: z.enum(Object.values(Role) as [string]).optional(),
    picture: z.string().optional(),
});