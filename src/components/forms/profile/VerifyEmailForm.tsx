"use client";

import styles from '@/styles/text/text.module.css';
import formStyles from '@/styles/components/form.module.css';

import { FormEvent, useState } from "react";

import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';

import { reauthenticate, updateUserEmail } from '@/lib/firebase/auth';
import { useTranslations } from 'next-intl';
import { FirebaseError } from 'firebase/app';
import { useAlert } from '@/utils/useAlert';
import { UserCredential } from 'firebase/auth';

type Props = {
    newEmail: string,
}


export default function VerifyEmailForm({ newEmail }: Props) {
    const [password, setPassword] = useState<string>("password");
    const [formIsValid, setFormIsValid] = useState<boolean>(true);
    const [confirmPressed, setConfirmPressed] = useState<boolean>(false);
    const t = useTranslations('form');
    const { showAlert } = useAlert();

    async function handleEmailVerification(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const credential: UserCredential | undefined | FirebaseError = await reauthenticate(password);
        if (credential instanceof FirebaseError) {
            let errorCode: string = credential.code;
            let errorMessage: string = credential.message;

            if (errorCode == 'auth/invalid-credential') {
                showAlert('Error', t('invalidCredential'));
            } else if (errorCode == 'auth/too-many-requests') {
                showAlert('Error', t('tooManyRequests'));
            } else {
                console.error(errorMessage);
            }

            setPassword("");
            return;
        }

        await updateUserEmail(newEmail);
        setConfirmPressed(true);
    }


    return (
        <form onSubmit={handleEmailVerification}
            onChange={(e) => setFormIsValid(e.currentTarget.checkValidity())}
            className={`${formStyles['form-card-container']}`}>
            <div className={`${formStyles['form-container']}`}>
                <p className={`${styles['base-text']}`}>{confirmPressed ? t('resetEmailMessageSended') : t('resetEmailMessage')} </p>

                {!confirmPressed && <Input
                    type="password"
                    name="password"
                    title={t('password')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />}
            </div>

            {!confirmPressed && <TextButton
                type="submit"
                text={t('confirm')}
                fill="content"
                disabled={!formIsValid}
            />}
        </form>
    )
}
