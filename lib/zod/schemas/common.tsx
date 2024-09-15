import { isUsernameUsed } from "@/actions/user-actions";
import { z } from "zod";

// const MAX_FILE_SIZE = 500000;
// const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg"];


// // TODO  check it  https://github.com/colinhacks/zod/issues/387
// export const file = z.object({
//     file: z.instanceof(File)
//         .refine((file) => file.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
//         .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type), ".jpg, .jpeg, files are accepted."),
// });


//TODO Unique email validation
export const emailSchema = z.string({ required_error: "Email is required" })
    .email('Invalid email format')
    .min(3, 'Email must be at least 3 characters')
    .max(50, 'Email must contain no more than 30 characters');

export const passwordSchema = z.string({ required_error: "Password is required" })
    .min(6, { message: 'Password must be at least 6 characters' }) // minLengthErrorMessage
    .max(128, { message: "Password must contain no more than 128 characters" }) // maxLengthErrorMessage
    .refine((password) => !password.includes(' '), 'Spaces are not allowed')
    .refine((password) => /[a-zA-Z0-9!@#$%^&*]/.test(password), { message: "Only letters, numbers, and symbols !@#$%^&* are allowed" });

export const usernameSchema = z.string({ required_error: "Username is required" })
    .min(1, 'Username must be at least 1 character')
    .max(30, 'Username must contain no more than 30 characters')
    .refine((password) => !password.includes(' '), 'Spaces are not allowed');


export const uniqueUsernameSchema = z.string({ required_error: "Username is required" })
    .min(1, 'Username must be at least 1 character')
    .max(30, 'Username must contain no more than 30 characters')
    .refine((password) => !password.includes(' '), 'Spaces are not allowed')
    .refine(async (val) => {
        const isUsernameAlreadyInUse: boolean | undefined = await isUsernameUsed(val);
        return !isUsernameAlreadyInUse;
    }, { message: "Username is already taken", });

export const fullNameSchema = z.optional(z.string()
    .max(30, "Full name must contain no more than 30 characters")
    // .refine((value) => /[a-zA-Z]/.test(value ?? ""), 'Full name should contain only alphabets')
);

export const descriptionSchema = z.optional(z.string()
    .max(50000, "Description must contain no more than 30 characters"));


export const setPasswordSchema = z.object({
    password: passwordSchema,
    confirmPassword: z.string({ required_error: "Confirm password is required" }),
})
    .refine((data) => data.password === data.confirmPassword, {
        message: "The passwords do not match", // passwordMismatchErrorMessage
        path: ['confirmPassword'],
    });
