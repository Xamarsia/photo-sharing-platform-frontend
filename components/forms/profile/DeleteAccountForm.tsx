"use client";


import { FormEvent, useState } from "react";

import { ProviderID } from "@/constants";
import { deleteAccount } from '@/actions/user-actions';
import { deleteUserAuth, reauthenticate, reauthenticateWithGoogle } from "@/lib/firebase/auth";

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

    async function handlenDeleteAccount(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (provider.includes(ProviderID.EmailAuthProvider)) {
            await reauthenticate(password);
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
                    className={`flex flex-col justify-between h-[464px]`}>

                    <div className={`flex flex-col gap-y-3`}>
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
