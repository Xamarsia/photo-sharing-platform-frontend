import { descriptionSchema, fullNameSchema } from "@/lib/zod/schemas/common";
import { z } from "zod";

export const fullNameValidationSchema = z.object({
    fullName: fullNameSchema
});

export const updateDescriptionSchema = z.object({
    description: descriptionSchema
});

export const updateUserInfoValidationSchema = z.object({
    fullName: fullNameSchema,
    description: descriptionSchema,
});