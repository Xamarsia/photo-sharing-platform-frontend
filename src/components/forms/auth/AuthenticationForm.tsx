"use client";


import styles from '@/styles/text/text.module.css';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FirebaseError } from 'firebase/app';
import { ChangeEvent, FormEvent, useCallback, useState } from "react";

import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';
import FormFieldError from '@/components/common/FormFieldError';
import TextIconButton from '@/components/buttons/TextIconButton';

import google from '@/public/google/google-icon-logo.svg';

import { authFormValidationSchema, emailChangeValidationSchema, setPasswordSchema } from '@/lib/zod/schemas/auth/authentication';
import { signUpWithEmailPassword, signUpWithGoogle } from '@/lib/firebase/auth';
import { getValidationErrors } from '@/lib/zod/validation';
import { useAlert } from '@/utils/useAlert';
import { useRouter } from 'next/navigation';
import { UserCredential } from 'firebase/auth';


export default function AuthenticationForm() {
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [formIsValid, setFormIsValid] = useState<boolean>(false);
    const [errors, setErrors] = useState<Map<string | number, string>>(new Map());
    const { showAlert } = useAlert();
    const t = useTranslations('form');
    const router = useRouter();

    const onSignUpWithEmailAndPassword = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

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

        const credential: UserCredential | undefined | FirebaseError = await signUpWithEmailPassword(body);
        if (credential instanceof FirebaseError) {
            let errorCode: string = credential.code;
            let errorMessage: string = credential.message;

            if (errorCode == 'auth/email-already-in-use') {
                showAlert('Error', t('emailAlreadyUsed'));
                router.push("/auth/signin");
            } else if (errorCode == 'auth/weak-password') {
                //TODO Enable enforcement https://cloud.google.com/identity-platform/docs/password-policy
                showAlert('Error', t('providedPasswordWeak'));
            } else {
                console.error(errorMessage);
            }
            setFormIsValid(false);
            return;
        }

        if (credential) {
            router.push('/auth/registration');
        }
    }, [email, password, confirmPassword, errors, showAlert]);

    const onSignUnWithGoogle = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const credential: UserCredential | undefined = await signUpWithGoogle();
        if (credential) {
            router.push('/auth/registration');
        }
    }, []);

    const onEmailChangeHendler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);

        const response = emailChangeValidationSchema.safeParse({
            email: e.target.value,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);

        const error: string | undefined = errorsMap.get(e.target.name);
        if (error) {
            setErrors(errors.set(e.target.name, error));
        } else {
            errors.delete(e.target.name);
        }
    }, [email, errors]);

    const onPasswordChangeHendler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);

        const response = setPasswordSchema.safeParse({
            password: e.target.value,
            confirmPassword: confirmPassword,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);
        const emailError: string | undefined = errors.get('email');

        if (emailError) {
            errorsMap.set('email', emailError);
        }
        setErrors(errorsMap);
    }, [password, confirmPassword, errors]);

    const onConfirmPasswordChangeHendler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);

        const response = setPasswordSchema.safeParse({
            password: password,
            confirmPassword: e.target.value,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);
        const emailError: string | undefined = errors.get('email');
        if (emailError) {
            errorsMap.set('email', emailError);
        }

        setErrors(errorsMap);
    }, [password, confirmPassword, errors]);

    const onFormChange = useCallback((e: FormEvent<HTMLFormElement>) => {
        setFormIsValid(e.currentTarget.checkValidity());
    }, [formIsValid]);


    return (
        <form onSubmit={onSignUpWithEmailAndPassword}
            onChange={onFormChange}
            className='flex flex-col justify-between h-[464px]'>
            <div className='flex flex-col gap-y-3'>
                <h1 className={`${styles['h1']}`}>{t('signUp')}</h1>

                <TextIconButton
                    style='secondary'
                    text={t('continueWithGoogle')}
                    onClick={onSignUnWithGoogle}
                    icon={google}
                    fill="parent"
                />

                <hr className="h-px bg-gray-100 border-0" />
                <div>
                    <Input
                        type="text"
                        name="email"
                        value={email}
                        title={t('email')}
                        state={errors.has("email") ? 'invalid' : 'valid'}
                        onChange={onEmailChangeHendler}
                        required
                    />
                    <FormFieldError text={errors.get("email")} />
                </div>
                <div>
                    <Input
                        type="password"
                        name="password"
                        value={password}
                        title={t('password')}
                        state={errors.has("password") ? 'invalid' : 'valid'}
                        onChange={onPasswordChangeHendler}
                        required
                    />
                    <FormFieldError text={errors.get("password")} />
                </div>
                <div>
                    <Input
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        title={t('repeatPassword')}
                        state={errors.has("confirmPassword") ? 'invalid' : 'valid'}
                        onChange={onConfirmPasswordChangeHendler}
                        required
                    />
                    <FormFieldError text={errors.get("confirmPassword")} />
                </div>
            </div>

            <div>
                <TextButton
                    type="submit"
                    text={t('signUp')}
                    fill="content"
                    disabled={!formIsValid || errors.size != 0}
                />
                <Link href={"/auth/signin"} className={`${styles['primary-link']}`} prefetch={false}>{t('haveAccount')}</Link>
            </div>
        </form>
    )
}
