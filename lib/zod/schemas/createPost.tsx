import { descriptionSchema, requiredFileSchema } from "@/lib/zod/schemas/common";
import { z } from "zod";

export const updateDescriptionSchema = z.object({
    description: descriptionSchema
});

export const updateRequiredFileSchema = z.object({
    file: requiredFileSchema
});

export const createPostValidationSchema = z.object({
    file: requiredFileSchema,
    description: descriptionSchema,
});
