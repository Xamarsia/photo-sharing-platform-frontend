import { isUsernameUsed } from "@/actions/user-actions";
import { z } from "zod";

// TODO add error localization
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg"];

export const fileSchema = z.optional(z.any()
    .refine((file) => file instanceof File, 'Expected a file')
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), "Only .jpg, .jpeg files are accepted."),
);

export const requiredFileSchema = z.any()
    .refine((file) => file instanceof File, 'Expected a file')
    .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), "Only .jpg, .jpeg files are accepted.")
    .optional().refine((file) => file, "Image is required.");

export const emailSchema = z.string()
    .email('Invalid email format')
    .min(1, 'Email is required')
    .max(50, 'Email must contain no more than 30 characters');

export const passwordSchema = z.string()
    .min(6, { message: 'Password must be at least 6 characters' }) // minLengthErrorMessage
    .max(128, { message: "Password must contain no more than 128 characters" }) // maxLengthErrorMessage
    .refine((password) => !password.includes(' '), 'Spaces are not allowed')
    .refine((password) => !(password === ""), { message: "Password is required" });

export const usernameSchema = z.string()
    .min(1, 'Username is required')
    .max(30, 'Username must contain no more than 30 characters')
    .refine((password) => !password.includes(' '), 'Spaces are not allowed');


export const uniqueUsernameSchema = z.string()
    .min(1, 'Username is required')
    .max(30, 'Username must contain no more than 30 characters')
    .refine((password) => !password.includes(' '), 'Spaces are not allowed')
    .refine(async (val) => {
        const isUsernameAlreadyInUse: boolean | undefined = await isUsernameUsed(val);
        console.log("isUsernameAlreadyInUse: ", isUsernameAlreadyInUse)
        return isUsernameAlreadyInUse == false;
    }, { message: "Username is already taken" });

export const fullNameSchema = z.optional(z.string()
    .max(30, "Full name must contain no more than 30 characters")
);

export const descriptionSchema = z.optional(z.string()
    .max(3000, "Description must contain no more than 3000 characters")
);

export const setPasswordSchema = z.object({
    password: passwordSchema,
    confirmPassword: z.string().min(1, 'Confirm password is required'),
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "The passwords do not match", // passwordMismatchErrorMessage
        path: ['confirmPassword'],
    });
