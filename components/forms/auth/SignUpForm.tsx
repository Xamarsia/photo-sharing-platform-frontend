"use client";


import styles from '@/app/styles/text/text.module.css';
import formStyles from '@/app/styles/components/form.module.css';

import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';
import FormFieldError from '@/components/common/FormFieldError';

import { ChangeEvent, FormEvent, useState } from "react";
import { registerUser } from '@/actions/user-actions';
import { useRouter } from 'next/navigation';

import { fullNameValidationSchema, signUpFormValidationSchema, updateUsernameSchema } from '@/lib/zod/schemas/auth/signUp';
import { getValidationErrors } from '@/lib/zod/validation';


type Props = {
    local: any;
}


export default function SignUpForm({ local }: Props) {
    const [username, setUsername] = useState("username");
    const [fullName, setFullName] = useState("");
    const [formIsValid, setFormIsValid] = useState(true);
    const [errors, setErrors] = useState<Map<string | number, string>>(new Map());
    const router = useRouter();

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const response = await signUpFormValidationSchema.safeParseAsync({
            username: username,
            fullName: fullName,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);

        if (errorsMap.size != 0) {
            setErrors(errorsMap);
            return;
        };

        const body: RegisterRequest = {
            username: username,
            fullName: fullName,
        }

        const newUser: UserDTO | undefined = await registerUser(body);
        if (newUser) {
            router.push(`/${newUser.username}`);
        }
    }

    async function onUsernameChangeHendler(event: ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);

        const response = updateUsernameSchema.safeParse({
            username: event.target.value,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);
        const error = errorsMap.get(event.target.name);
        if (error) {
            setErrors(errors.set(event.target.name, error));
        } else {
            errors.delete(event.target.name);
        }
    }


    async function onFullNameChangeHendler(event: ChangeEvent<HTMLInputElement>) {
        setFullName(event.target.value);

        const response = fullNameValidationSchema.safeParse({
            fullName: event.target.value,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);

        const error = errorsMap.get(event.target.name);
        if (error) {
            setErrors(errors.set(event.target.name, error));
        } else {
            errors.delete(event.target.name);
        }
    }

    return (
        <form onSubmit={handleSubmit}
            onChange={(e) => setFormIsValid(e.currentTarget.checkValidity())}
            className={`${formStyles['form-card-container']}`}>
            <div className={`${formStyles['form-container']}`}>
                <h1 className={`${styles['h1']}`}>{local.signUp}</h1>
                <div>
                    <Input
                        required
                        type="text"
                        name="username"
                        value={username}
                        title={local.username}
                        onChange={(e) => onUsernameChangeHendler(e)}
                        state={errors.has("username") ? 'invalid' : 'valid'}
                    />
                    <FormFieldError text={errors.get("username")} />
                </div>

                <div>
                    <Input
                        type="text"
                        name="fullName"
                        value={fullName}
                        title={local.fullName}
                        onChange={(e) => onFullNameChangeHendler(e)}
                        state={errors.has("fullName") ? 'invalid' : 'valid'}
                    />
                    <FormFieldError text={errors.get("fullName")} />
                </div>

            </div>
            <TextButton
                type="submit"
                text={local.finish}
                fill="content"
                disabled={!formIsValid || errors.size != 0}
            />
        </form>
    )
}
