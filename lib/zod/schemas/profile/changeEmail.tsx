import { emailSchema, uniqueEmailSchema } from "@/lib/zod/schemas/common";
import { z } from "zod";

export const updateEmailSchema = z.object({
    email: emailSchema
});

export const updateUniqueEmailSchema = z.object({
    email: uniqueEmailSchema
});
