"use client";


import styles from '@/styles/text/text.module.css';

import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';
import FormFieldError from '@/components/common/FormFieldError';

import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { registerUser } from '@/actions/user-actions';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { fullNameValidationSchema, signUpFormValidationSchema, updateUsernameSchema } from '@/lib/zod/schemas/auth/signUp';
import { getValidationErrors } from '@/lib/zod/validation';


export default function RegistrationForm() {
    const [username, setUsername] = useState<string>("");
    const [fullName, setFullName] = useState<string>("");
    const [formIsValid, setFormIsValid] = useState<boolean>(false);
    const [errors, setErrors] = useState<Map<string | number, string>>(new Map());
    const t = useTranslations('form');
    const router = useRouter();

    const onFormSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

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
    }, [username, fullName, errors]);


    const onUsernameChangeHendler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);

        const response = updateUsernameSchema.safeParse({
            username: e.target.value,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);
        const error: string | undefined = errorsMap.get(e.target.name);
        if (error) {
            setErrors(errors.set(e.target.name, error));
        } else {
            errors.delete(e.target.name);
        }
    }, [username, errors]);


    const onFullNameChangeHendler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setFullName(e.target.value);

        const response = fullNameValidationSchema.safeParse({
            fullName: e.target.value,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);
        const error: string | undefined = errorsMap.get(e.target.name);
        if (error) {
            setErrors(errors.set(e.target.name, error));
        } else {
            errors.delete(e.target.name);
        }
    }, [fullName, errors]);

    const onFormChange = useCallback((e: FormEvent<HTMLFormElement>) => {
        setFormIsValid(e.currentTarget.checkValidity());
    }, [formIsValid]);

    return (
        <form onSubmit={onFormSubmit}
            onChange={onFormChange}
            className='flex flex-col justify-between h-[464px]'>
            <div className='flex flex-col gap-y-3'>
                <h1 className={`${styles['h1']}`}>{t('signUp')}</h1>
                <div>
                    <Input
                        required
                        type="text"
                        name="username"
                        value={username}
                        title={t('username')}
                        onChange={onUsernameChangeHendler}
                        state={errors.has("username") ? 'invalid' : 'valid'}
                    />
                    <FormFieldError text={errors.get("username")} />
                </div>

                <div>
                    <Input
                        type="text"
                        name="fullName"
                        value={fullName}
                        title={t('fullName')}
                        onChange={onFullNameChangeHendler}
                        state={errors.has("fullName") ? 'invalid' : 'valid'}
                    />
                    <FormFieldError text={errors.get("fullName")} />
                </div>

            </div>
            <TextButton
                type="submit"
                text={t('finish')}
                fill="content"
                disabled={!formIsValid || errors.size != 0}
            />
        </form>
    )
}
