"use client";


import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useTranslations } from 'next-intl';
import { FirebaseError } from "firebase/app";
import { UserCredential } from "firebase/auth";

import { ProviderID } from "@/constants";
import { useAlert } from "@/utils/useAlert";
import { deleteAccount } from '@/actions/user-actions';
import { deleteUserAuth, reauthenticate, reauthenticateWithGoogle } from "@/lib/firebase/auth";

import Input from "@/components/common/Input";
import TextButton from "@/components/buttons/TextButton";


type Props = {
    provider: string[]
}


export default function DeleteAccountForm({ provider }: Props) {
    const [password, setPassword] = useState<string>("password");
    const [formIsValid, setFormIsValid] = useState<boolean>(true);
    const t = useTranslations('form');
    const { showAlert } = useAlert();

    const onDeleteAccount = useCallback(async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        if (provider.includes(ProviderID.EmailAuthProvider)) {
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
        }

        // TODO Verify authentication with Google
        if (provider.includes(ProviderID.GoogleAuthProvider)) {
            await reauthenticateWithGoogle();
        }

        await deleteAccount();
        await deleteUserAuth();
    }, [password, showAlert]);

    const onFormChange = useCallback((event: FormEvent<HTMLFormElement>): void => {
        setFormIsValid(event.currentTarget.checkValidity());
    }, [formIsValid]);

    const onPasswordChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value);
    }, [password]);

    return (
        <form onSubmit={onDeleteAccount}
            onChange={onFormChange}
            className='flex flex-col justify-between h-[464px]'>

            <div className='flex flex-col gap-y-3'>
                <p>{t('deleteAccountMessage')}</p>

                {provider.includes(ProviderID.EmailAuthProvider) &&
                    <>
                        <p> {t('confirmPassword')} </p>
                        <Input
                            type="password"
                            name="password"
                            title={t('password')}
                            value={password}
                            onChange={onPasswordChange}
                            required
                        />
                    </>
                }
            </div>

            <TextButton
                style="remove"
                type="submit"
                text={t('delete')}
                fill="content"
                disabled={!formIsValid}
            />
        </form>
    )
}
