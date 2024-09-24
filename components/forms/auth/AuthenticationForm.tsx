"use client";


import styles from '@/app/styles/text/text.module.css';

import Link from 'next/link';

import { ChangeEvent, FormEvent, useState } from "react";

import { signUpWithEmailPassword, signUpWithGoogle } from '@/lib/firebase/auth';

import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';
import FormFieldError from '@/components/common/FormFieldError';
import TextIconSecondaryButton from '@/components/buttons/TextIconSecondaryButton';

import google from '@/public/google/google-icon-logo.svg';

import { authFormValidationSchema, emailChangeValidationSchema, setPasswordSchema } from '@/lib/zod/schemas/auth/authentication';
import { getValidationErrors } from '@/lib/zod/validation';


type Props = {
    local: any;
    onSubmit?: () => void;
}


export default function AuthenticationForm({ local, onSubmit }: Props) {
    const [password, setPassword] = useState("password");
    const [confirmPassword, setConfirmPassword] = useState("password");
    const [email, setEmail] = useState("localpart@domain.com");
    const [formIsValid, setFormIsValid] = useState(true);
    const [errors, setErrors] = useState<Map<string | number, string>>(new Map());

    async function handleSignUpWithEmailAndPassword(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const response = await authFormValidationSchema.safeParseAsync({
            email: email,
            password: password,
            confirmPassword: confirmPassword,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);

        if (errorsMap.size != 0) {
            setErrors(errorsMap);
            return;
        };

        const body: LoginRequest = {
            email: email,
            password: password,
        }

        const isAuthorized: boolean = await signUpWithEmailPassword(body);
        if (isAuthorized && onSubmit) {
            onSubmit();
        }
    }

    async function handleSignUnWithGoogle(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        const isAuthorized: boolean = await signUpWithGoogle();
        if (isAuthorized && onSubmit) {
            onSubmit();
        }
    }

    async function onEmailChangeHendler(event: ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);

        const response = emailChangeValidationSchema.safeParse({
            email: event.target.value,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);

        const error = errorsMap.get(event.target.name);
        if (error) {
            setErrors(errors.set(event.target.name, error));
        } else {
            errors.delete(event.target.name);
        }
    }

    async function onPasswordChangeHendler(event: ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);

        const response = setPasswordSchema.safeParse({
            password: event.target.value,
            confirmPassword: confirmPassword,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);

        const emailError = errors.get('email');
        if (emailError) {
            errorsMap.set('email', emailError);
        }

        setErrors(errorsMap);
    }

    async function onConfirmPasswordChangeHendler(event: ChangeEvent<HTMLInputElement>) {
        setConfirmPassword(event.target.value);

        const response = setPasswordSchema.safeParse({
            password: password,
            confirmPassword: event.target.value,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);
        const emailError = errors.get('email');
        if (emailError) {
            errorsMap.set('email', emailError);
        }

        setErrors(errorsMap);
    }


    return (
        <form onSubmit={handleSignUpWithEmailAndPassword}
            onChange={(e) => setFormIsValid(e.currentTarget.checkValidity())}
            className={`flex flex-col justify-between h-[464px]`}>
            <div className={`flex flex-col gap-y-3 `}>
                <h1 className={`${styles['h1']}`}>{local.signUp}</h1>

                <TextIconSecondaryButton
                    text={local.continueWithGoogle}
                    onClick={handleSignUnWithGoogle}
                    icon={google}
                    fill="parent"
                />

                <hr className="h-px bg-gray-100 border-0" />
                <div>
                    <Input
                        type="text"
                        name="email"
                        value={email}
                        title={local.email}
                        state={errors.has("email") ? 'invalid' : 'valid'}
                        onChange={(e) => onEmailChangeHendler(e)}
                        required
                    />
                    <FormFieldError text={errors.get("email")} />
                </div>
                <div>
                    <Input
                        type="password"
                        name="password"
                        value={password}
                        title={local.password}
                        state={errors.has("password") ? 'invalid' : 'valid'}
                        onChange={(e) => { onPasswordChangeHendler(e) }}
                        required
                    />
                    <FormFieldError text={errors.get("password")} />
                </div>
                <div>
                    <Input
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        title={local.repeatPassword}
                        state={errors.has("confirmPassword") ? 'invalid' : 'valid'}
                        onChange={(e) => { onConfirmPasswordChangeHendler(e) }}
                        required
                    />
                    <FormFieldError text={errors.get("confirmPassword")} />
                </div>
            </div>

            <div>
                <TextButton
                    type="submit"
                    text={local.signUp}
                    fill="content"
                    disabled={!formIsValid || errors.size != 0}
                />
                <Link href={"/auth/signin"} className={`${styles['primary-link']}`} prefetch={false}>{local.haveAccount}</Link>
            </div>
        </form>
    )
}
