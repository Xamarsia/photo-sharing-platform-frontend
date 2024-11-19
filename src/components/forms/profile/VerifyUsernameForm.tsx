"use client";

import styles from '@/styles/text/text.module.css';

import { ChangeEvent, FormEvent, useCallback, useState } from "react";
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

    const onEmailVerificationSubmit = useCallback(async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

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
    }, [password, showAlert]);

    const onFormChange = useCallback((e: FormEvent<HTMLFormElement>): void => {
        setFormIsValid(e.currentTarget.checkValidity());
    }, [formIsValid]);

    const onPasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value);
    }, [password]);

    return (
        <form onSubmit={onEmailVerificationSubmit}
            onChange={onFormChange}
            className='flex flex-col justify-between h-[464px]'>
            <div className='flex flex-col gap-y-3'>
                <p className={`${styles['base-text']}`}>{t('resetUsernameMessage')}</p>

                <Input
                    type="password"
                    name="password"
                    title={t('password')}
                    value={password}
                    onChange={onPasswordChange}
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
