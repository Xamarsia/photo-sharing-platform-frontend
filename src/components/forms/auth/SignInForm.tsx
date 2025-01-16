"use client";


import styles from '@/styles/text/text.module.css';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { FirebaseError } from 'firebase/app';
import { ChangeEvent, FormEvent, useCallback, useState } from "react";

import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';
import FormFieldError from '@/components/common/FormFieldError';
import TextIconButton from '@/components/buttons/TextIconButton';

import google from '@/public/google/google-icon-logo.svg';

import { getValidationErrors } from '@/lib/zod/validation';
import { signInWithEmailPassword, signInWithGoogle } from '@/lib/firebase/auth';
import { emailChangeValidationSchema, signInFormValidationSchema } from '@/lib/zod/schemas/auth/signIn';

import { useAlert } from '@/utils/useAlert';
import { UserCredential } from 'firebase/auth';
import { isUserRegistered } from '@/actions/user-actions';


export default function SignInForm() {
    const [password, setPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [formIsValid, setFormIsValid] = useState<boolean>(false);
    const [errors, setErrors] = useState<Map<string | number, string>>(new Map());
    const t = useTranslations('form');
    const { showAlert } = useAlert();
    const router = useRouter();

    const onSignInWithEmailAndPassword = useCallback(async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

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

        const credential: UserCredential | undefined | FirebaseError = await signInWithEmailPassword(body);

        if (credential instanceof FirebaseError) {
            let errorCode: string = credential.code;
            let errorMessage: string = credential.message;

            if (errorCode == 'auth/invalid-credential') {
                showAlert('Error', 'Invalid credential');
            } else {
                console.error(errorMessage);
            }
            setFormIsValid(false);
            return;
        }
        if (credential) {
            const isRegistered: boolean | undefined = await isUserRegistered();
            if (isRegistered) {
                router.replace('/');
                return;
            }
        }
    }, [email, password, formIsValid, errors]);

    const onSignInWithGoogle = useCallback(async (e: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
        e.preventDefault();
        const credential: UserCredential | undefined = await signInWithGoogle();
        if (credential) {
            const isRegistered: boolean | undefined = await isUserRegistered();
            if (isRegistered) {
                router.replace('/');
                return;
            }
        }
    }, []);

    const onEmailChangeHendler = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);

        const response = emailChangeValidationSchema.safeParse({
            email: e.target.value,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);
        setErrors(errorsMap);
    }, []);

    const onFormChange = useCallback((e: FormEvent<HTMLFormElement>): void => {
        setFormIsValid(e.currentTarget.checkValidity());
    }, []);

    const onPasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value);
    }, []);


    return (
        <form onSubmit={onSignInWithEmailAndPassword}
            onChange={onFormChange}
            className='flex flex-col justify-between h-[464px]'>
            <div className='flex flex-col gap-y-3'>
                <h1 className={`${styles['h1']}`}>{t('signIn')}</h1>

                <TextIconButton
                    style='secondary'
                    text={t('continueWithGoogle')}
                    onClick={onSignInWithGoogle}
                    icon={google}
                    fill="parent"
                />

                <hr className="h-px bg-gray-100 border-0" />

                <div>
                    <Input
                        type="text"
                        name="email"
                        title={t('email')}
                        state={errors.has("email") ? 'invalid' : 'valid'}
                        value={email}
                        onChange={onEmailChangeHendler}
                        required
                    />
                    <FormFieldError text={errors.get("email")} />
                </div>
                <div>
                    <Input
                        type="password"
                        name="password"
                        title={t('password')}
                        state={errors.has("password") ? 'invalid' : 'valid'}
                        value={password}
                        onChange={onPasswordChange}
                        required
                    />
                    <FormFieldError text={errors.get("password")} />
                </div>

                <div className='flex justify-between items-end '>
                    <div />
                    <Link href={"/auth/password/reset"} className={`${styles['primary-link']}`} prefetch={false}>{t('forgotPassword')}</Link>
                </div>
            </div>

            <div>
                <TextButton
                    type="submit"
                    text={t('signIn')}
                    fill="content"
                    disabled={!formIsValid || errors.size != 0}
                />
                <Link href={"/auth/signup"} className={`${styles['primary-link']}`} prefetch={false}>{t('dontHaveAccount')}</Link>
            </div>
        </form>
    )
}
