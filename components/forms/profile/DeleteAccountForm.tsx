"use client";


import { useState } from "react";
import { deleteAccount } from '@/actions/user-actions';
import Modal from '@/components/common/Modal';
import TextRemoveButton from '@/components/buttons/TextRemoveButton';
import { deleteUserAuth } from "@/lib/firebase/auth";


type Props = {
    local: any,
}


export default function DeleteAccountForm({ local }: Props) {
    const [showModal, setShowModal] = useState(false);


    const onDeleteAccount = async () => {
        await deleteAccount();
        await deleteUserAuth();
    };

    return (
        <>
            <TextRemoveButton
                type="submit"
                text={local.delete}
                fill="content"
                onClick={() => { setShowModal(true) }}
            />
            <Modal onCloseClicked={() => { setShowModal(false); }} title={local.deleteAccount} opened={showModal}>
                <div className='flex flex-col gap-20'>
                    <p>{local.deleteAccountMessage}</p>
                    <TextRemoveButton text={local.delete} onClick={onDeleteAccount} />
                </div>
            </Modal>
        </>
    )
}
