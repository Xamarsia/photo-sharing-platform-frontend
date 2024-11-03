"use client";


import styles from '@/app/styles/text/text.module.css';
import formStyles from '@/app/styles/components/form.module.css';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FirebaseError } from 'firebase/app';
import { ChangeEvent, FormEvent, useState } from "react";

import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';
import FormFieldError from '@/components/common/FormFieldError';
import TextIconSecondaryButton from '@/components/buttons/TextIconSecondaryButton';

import google from '@/public/google/google-icon-logo.svg';

import { getValidationErrors } from '@/lib/zod/validation';
import { emailChangeValidationSchema, signInFormValidationSchema } from '@/lib/zod/schemas/auth/signIn';
import { signInWithEmailPassword, signInWithGoogle } from '@/lib/firebase/auth';
import { useAlert } from '@/utils/useAlert';
import { UserCredential } from 'firebase/auth';
import { isUserRegistered } from '@/actions/user-actions';


type Props = {
    local: any;
}


export default function SignInForm({ local }: Props) {
    const [password, setPassword] = useState<string>("password");
    const [email, setEmail] = useState<string>("localpart@domain.com");
    const [formIsValid, setFormIsValid] = useState<boolean>(true);
    const [errors, setErrors] = useState<Map<string | number, string>>(new Map());
    const { showAlert } = useAlert();
    const router = useRouter();

    async function handleSignInWithEmailAndPassword(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const response = signInFormValidationSchema.safeParse({
            email: email,
            password: password,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);

        if (errorsMap.size != 0) {
            setErrors(errorsMap);
            return;
        };

        const body: LoginRequest = {
            email: email,
            password: password,
        };

        const credential = await signInWithEmailPassword(body);
        if (credential instanceof FirebaseError) {
            var errorCode = credential.code;
            var errorMessage = credential.message;
            if (errorCode == 'auth/invalid-credential') {
                showAlert('Error', 'Invalid credential');
            } else {
                console.error(errorMessage);
            }
            setFormIsValid(false);
            return;
        }
        if (credential) {
            const isRegistered = await isUserRegistered();
            if (isRegistered) {
                router.replace('/');
                return;
            }
        }
    }

    async function handleSignInWithGoogle(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        const credential: UserCredential | undefined = await signInWithGoogle();
        if (credential) {
            const isRegistered = await isUserRegistered();
            if (isRegistered) {
                router.replace('/');
                return;
            }
        }
    }

    async function onEmailChangeHendler(event: ChangeEvent<HTMLInputElement>) {
        setEmail(event.target.value);

        const response = emailChangeValidationSchema.safeParse({
            email: event.target.value,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);
        setErrors(errorsMap);
    }


    return (
        <form onSubmit={handleSignInWithEmailAndPassword}
            onChange={(e) =>
                setFormIsValid(e.currentTarget.checkValidity())
            }
            className={`${formStyles['form-card-container']}`}>
            <div className={`${formStyles['form-container']}`}>
                <h1 className={`${styles['h1']}`}>{local.signIn}</h1>

                <TextIconSecondaryButton
                    text={local.continueWithGoogle}
                    onClick={handleSignInWithGoogle}
                    icon={google}
                    fill="parent"
                />

                <hr className="h-px bg-gray-100 border-0" />

                <div>
                    <Input
                        type="text"
                        name="email"
                        title={local.email}
                        state={errors.has("email") ? 'invalid' : 'valid'}
                        value={email}
                        onChange={(e) => onEmailChangeHendler(e)}
                        required
                    />
                    <FormFieldError text={errors.get("email")} />
                </div>
                <div>
                    <Input
                        type="password"
                        name="password"
                        title={local.password}
                        state={errors.has("password") ? 'invalid' : 'valid'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <FormFieldError text={errors.get("password")} />
                </div>

                <div className='flex justify-between items-end '>
                    <div />
                    <Link href={"/auth/password/reset"} className={`${styles['primary-link']}`} prefetch={false}>{local.forgotPassword}</Link>
                </div>
            </div>

            <div>
                <TextButton
                    type="submit"
                    text={local.signIn}
                    fill="content"
                    disabled={!formIsValid || errors.size != 0}
                />
                <Link href={"/auth/signup"} className={`${styles['primary-link']}`} prefetch={false}>{local.dontHaveAccount}</Link>
            </div>
        </form>
    )
}
