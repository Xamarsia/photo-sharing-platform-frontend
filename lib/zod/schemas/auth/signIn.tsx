import { emailSchema } from "@/lib/zod/schemas/common";
import { z } from "zod";

export const emailChangeValidationSchema = z.object({
    email: emailSchema
});

export const signInFormValidationSchema = z.object({
    email: z.string({ required_error: "Email is required" }),
    password: z.string({ required_error: "Password is required" }),
});
