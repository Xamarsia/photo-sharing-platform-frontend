import { uniqueUsernameSchema, usernameSchema } from "@/lib/zod/schemas/common";
import { z } from "zod";

export const updateUsernameSchema = z.object({
    username: usernameSchema
});

export const updateUniqueUsernameSchema = z.object({
    username: uniqueUsernameSchema
});
