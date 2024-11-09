"use client";


import Modal from '@/components/common/Modal';
import VerifyUsernameForm from '@/components/forms/profile/VerifyUsernameForm';
import ChangeUsernameForm from '@/components/forms/profile/ChangeUsernameForm';

import { useTranslations } from 'next-intl';
import { useState } from "react";


type Props = {
    oldUsername: string,
}


export default function ChangeUsernameContent({ oldUsername }: Props) {
    const [username, setUsername] = useState<string | undefined>(undefined);
    const [showModal, setShowModal] = useState<boolean>(false);
    const t = useTranslations('form');

    async function onSubmit(username: string) {
        setUsername(username);
        setShowModal(true);
    }


    return (
        <>
            <ChangeUsernameForm onSubmit={onSubmit} oldUsername={oldUsername} />
            {username && <Modal title={t('verifyNewUsername')} onCloseClicked={() => { setShowModal(false); }} opened={showModal}>
                <VerifyUsernameForm newUsername={username} onSubmit={() => { setShowModal(false); }} />  {/* TODO disable ChangeUsernameForm after verification */}
            </Modal>
            }
        </>
    )
}
