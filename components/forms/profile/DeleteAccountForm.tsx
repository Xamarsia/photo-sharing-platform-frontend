"use client";


import { FormEvent, useState } from "react";
import { FirebaseError } from "firebase/app";

import { ProviderID } from "@/constants";
import { useAlert } from "@/utils/useAlert";
import { deleteAccount } from '@/actions/user-actions';
import { deleteUserAuth, reauthenticate, reauthenticateWithGoogle } from "@/lib/firebase/auth";

import formStyles from '@/app/styles/components/form.module.css';

import Modal from '@/components/common/Modal';
import Input from "@/components/common/Input";
import TextRemoveButton from '@/components/buttons/TextRemoveButton';


type Props = {
    local: any,
    provider: string[]
}


export default function DeleteAccountForm({ local, provider }: Props) {
    const [showModal, setShowModal] = useState(false);
    const [password, setPassword] = useState("password");
    const [formIsValid, setFormIsValid] = useState(true);
    const { showAlert } = useAlert();

    async function handlenDeleteAccount(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (provider.includes(ProviderID.EmailAuthProvider)) {
            const credential = await reauthenticate(password);
            if (credential instanceof FirebaseError) {
                var errorCode = credential.code;
                var errorMessage = credential.message;
                if (errorCode == 'auth/invalid-credential') {
                    showAlert('Error', local.invalidCredential)
                } else if (errorCode == 'auth/too-many-requests') {
                    showAlert('Error', local.tooManyRequests)
                } else {
                    console.error(errorMessage);
                }
                setPassword("")
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
                text={local.delete}
                fill="content"
                onClick={() => { setShowModal(true) }}
            />
            <Modal onCloseClicked={() => { setShowModal(false); }} title={local.deleteAccount} opened={showModal}>
                <form onSubmit={handlenDeleteAccount}
                    onChange={(e) => setFormIsValid(e.currentTarget.checkValidity())}
                    className={`${formStyles['form-card-container']}`}>

                    <div className={`${formStyles['form-container']}`}>
                        <p>{local.deleteAccountMessage}</p>

                        {provider.includes(ProviderID.EmailAuthProvider) &&
                            <>
                                <p>{local.confirmPassword} </p>
                                <Input
                                    type="password"
                                    name="password"
                                    title={local.password}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </>
                        }
                    </div>

                    <TextRemoveButton
                        type="submit"
                        text={local.delete}
                        fill="content"
                        disabled={!formIsValid}
                    />
                </form>
            </Modal>
        </>
    )
}
