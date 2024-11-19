"use client";


import styles from '@/styles/text/text.module.css';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { ChangeEvent, FormEvent, useCallback, useState } from "react";

import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';
import FormFieldError from '@/components/common/FormFieldError';

import xMark from '@/public/x-mark/x-mark.svg';
import xMarkHovered from '@/public/x-mark/x-mark-hovered.svg';
import { getValidationErrors } from '@/lib/zod/validation';
import { emailChangeValidationSchema } from '@/lib/zod/schemas/auth/signIn';
import { resetPassword } from '@/lib/firebase/auth';
import IconButton from '@/components/buttons/IconButton';


export default function ResetPasswordForm() {
    const [email, setEmail] = useState<string>("localpart@domain.com");
    const [formIsValid, setFormIsValid] = useState<boolean>(true);
    const [resetPressed, setResetPressed] = useState<boolean>(false);
    const [errors, setErrors] = useState<Map<string | number, string>>(new Map());
    const t = useTranslations('form');
    const router = useRouter();

    const onResetPasswordSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = emailChangeValidationSchema.safeParse({
            email: email,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);

        if (errorsMap.size != 0) {
            setErrors(errorsMap);
            return;
        };

        await resetPassword(email);
        setResetPressed(true);
    }, [email, errors]);

    const onEmailChangeHendler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);

        const response = emailChangeValidationSchema.safeParse({
            email: e.target.value,
        });

        const errorsMap: Map<string | number, string> = getValidationErrors(response);
        setErrors(errorsMap);
    }, [email, errors]);

    const onFormChange = useCallback(async (e: FormEvent<HTMLFormElement>) => {
        setFormIsValid(e.currentTarget.checkValidity());
    }, [formIsValid]);

    const onSignInClick = useCallback(() => {
        router.push("/auth/signin");
    }, []);

    return (
        <form onSubmit={onResetPasswordSubmit}
            onChange={onFormChange}
            className='flex flex-col justify-between h-[464px]'>

            <div className='flex flex-col gap-y-3'>

                <div className="flex justify-between pb-8">
                    <h1 className={`${styles['h1']}`}>{t('resetPassword')}</h1>
                    <IconButton icon={xMark} hoveredIcon={xMarkHovered} onClick={onSignInClick} />
                </div>

                <p className={`${styles['base-text']}`}>{resetPressed ? t('resetPasswordMessageSended') : t('resetPasswordMessage')} </p>

                {!resetPressed && <div>
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
                </div>}
            </div>

            {!resetPressed && <TextButton
                type="submit"
                text={t('reset')}
                fill="content"
                disabled={!formIsValid || errors.size != 0 || resetPressed}
            />}
        </form>
    )
}
