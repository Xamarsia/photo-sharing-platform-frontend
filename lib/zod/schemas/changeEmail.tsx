import { emailSchema } from "@/lib/zod/schemas/common";
import { z } from "zod";

export const updateEmailSchema = z.object({
    email: emailSchema
});
