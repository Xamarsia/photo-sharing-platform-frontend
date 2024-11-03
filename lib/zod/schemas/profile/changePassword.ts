import { passwordSchema } from "@/lib/zod/schemas/common";
import { z } from "zod";

// TODO add error localization
export const currentPasswordSchema = z.object({
    currentPassword: z.string().min(1, 'Current password is required')
});

export const setPasswordSchema = z.object({
    password: passwordSchema,
    confirmPassword: z.string().min(1, 'Confirm password is required'),
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "The passwords do not match",
        path: ['confirmPassword'],
    });

export const updatePasswordSchema = z.object({
    currentPassword: z.string().min(1, 'Current password is required'),
    password: passwordSchema,
    confirmPassword: z.string().min(1, 'Confirm password is required'),
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "The passwords do not match",
        path: ['confirmPassword'],
    });
