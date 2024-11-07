"use client";

import styles from '@/styles/text/text.module.css';
import formStyles from '@/styles/components/form.module.css';

import { FormEvent, useState } from "react";
import { useTranslations } from 'next-intl';

import Input from '@/components/common/Input';
import TextButton from '@/components/buttons/TextButton';
import { reauthenticate } from '@/lib/firebase/auth';
import { FirebaseError } from 'firebase/app';
import { useAlert } from '@/utils/useAlert';
import { updateUsername } from '@/actions/user-actions';
import { UserCredential } from 'firebase/auth';

type Props = {
    newUsername: string,
    onSubmit: () => void,
}


export default function VerifyUsernameForm({ newUsername, onSubmit }: Props) {
    const [password, setPassword] = useState<string>("password");
    const [formIsValid, setFormIsValid] = useState<boolean>(true);
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

        const body: UsernameUpdateRequest = {
            username: newUsername,
        }

        await updateUsername(body);
        if (onSubmit) {
            onSubmit();
        }
    }


    return (
        <form onSubmit={handleEmailVerification}
            onChange={(e) => setFormIsValid(e.currentTarget.checkValidity())}
            className={`${formStyles['form-card-container']}`}>
            <div className={`${formStyles['form-container']}`}>
                <p className={`${styles['base-text']}`}>{t('resetUsernameMessage')}</p>

                <Input
                    type="password"
                    name="password"
                    title={t('password')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>

            <TextButton
                type="submit"
                text={t('confirm')}
                fill="content"
                disabled={!formIsValid}
            />
        </form>
    )
}
