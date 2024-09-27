import { fullNameSchema, uniqueUsernameSchema, usernameSchema } from "@/lib/zod/schemas/common";
import { z } from "zod";

export const fullNameValidationSchema = z.object({
    fullName: fullNameSchema
});

export const updateUsernameSchema = z.object({
    username: usernameSchema
});

export const signUpFormValidationSchema = z.object({
    username: uniqueUsernameSchema,
    fullName: fullNameSchema,
});
