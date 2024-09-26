import { descriptionSchema, fileSchema, requiredFileSchema } from "@/lib/zod/schemas/common";
import { z } from "zod";

export const updateDescriptionSchema = z.object({
    description: descriptionSchema
});

export const updateRequiredFileSchema = z.object({
    file: requiredFileSchema
});

export const editPostValidationSchema = z.object({
    file: fileSchema,
    description: descriptionSchema,
    defaultImage: z.boolean()
})
.refine((data) => ((data.file != undefined) != data.defaultImage), {
    message: "Image is required.",
    path: ['file'],
});
