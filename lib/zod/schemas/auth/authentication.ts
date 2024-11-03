import { z } from "zod";
import { emailSchema, passwordSchema } from "@/lib/zod/schemas/common";

export const authFormValidationSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string({ required_error: "Confirm password is required" }),
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "The passwords do not match",
        path: ['confirmPassword'],
    });

export const emailChangeValidationSchema = z.object({
    email: emailSchema
});

export const setPasswordSchema = z.object({
    password: passwordSchema,
    confirmPassword: z.string({ required_error: "Confirm password is required" }),
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "The passwords do not match",
        path: ['confirmPassword'],
    });
