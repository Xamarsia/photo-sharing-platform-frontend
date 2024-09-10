"use client";


import { useState } from "react";
import { deleteAccount } from '@/actions/user-actions';
import { useRouter } from 'next/navigation';
import Modal from '@/components/common/Modal';
import TextRemoveButton from '@/components/buttons/TextRemoveButton';


type Props = {
    local: any,
}


export default function DeleteAccountForm({ local }: Props) {
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();


    const onDeleteAccount = async () => {
        await deleteAccount();
        router.push(`/`);
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
