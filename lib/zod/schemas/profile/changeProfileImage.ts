import { fileSchema } from "@/lib/zod/schemas/common";
import { z } from "zod";

export const updateProfileImageSchema = z.object({
    file: fileSchema
});
