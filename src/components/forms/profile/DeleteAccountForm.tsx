"use client";


import { FormEvent, useState } from "react";
import { useTranslations } from 'next-intl';
import { FirebaseError } from "firebase/app";

import { ProviderID } from "@/constants";
import { useAlert } from "@/utils/useAlert";
import { deleteAccount } from '@/actions/user-actions';
import { deleteUserAuth, reauthenticate, reauthenticateWithGoogle } from "@/lib/firebase/auth";

import formStyles from '@/styles/components/form.module.css';

import Modal from '@/components/common/Modal';
import Input from "@/components/common/Input";
import TextRemoveButton from '@/components/buttons/TextRemoveButton';
import { UserCredential } from "firebase/auth";


type Props = {
    provider: string[]
}


export default function DeleteAccountForm({ provider }: Props) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("password");
    const [formIsValid, setFormIsValid] = useState<boolean>(true);
    const t = useTranslations('form');
    const { showAlert } = useAlert();

    async function handlenDeleteAccount(event: FormEvent<HTMLFormElement>) {
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
    }

    return (
        <>
            <TextRemoveButton
                type="submit"
                text={t('delete')}
                fill="content"
                onClick={() => { setShowModal(true) }}
            />
            <Modal onCloseClicked={() => { setShowModal(false); }} title={t('deleteAccount')} opened={showModal}>
                <form onSubmit={handlenDeleteAccount}
                    onChange={(e) => setFormIsValid(e.currentTarget.checkValidity())}
                    className={`${formStyles['form-card-container']}`}>

                    <div className={`${formStyles['form-container']}`}>
                        <p>{t('deleteAccountMessage')}</p>

                        {provider.includes(ProviderID.EmailAuthProvider) &&
                            <>
                                <p> {t('confirmPassword')} </p>
                                <Input
                                    type="password"
                                    name="password"
                                    title={t('password')}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </>
                        }
                    </div>

                    <TextRemoveButton
                        type="submit"
                        text={t('delete')}
                        fill="content"
                        disabled={!formIsValid}
                    />
                </form>
            </Modal>
        </>
    )
}
