"use client";


import Modal from '@/components/common/Modal';
import VerifyUsernameForm from '@/components/forms/profile/VerifyUsernameForm';
import ChangeUsernameForm from '@/components/forms/profile/ChangeUsernameForm';

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from "react";


type Props = {
    oldUsername: string,
}


export default function ChangeUsernameContent({ oldUsername }: Props) {
    const [newUsername, setNewUsername] = useState<string | undefined>(undefined);
    const [showModal, setShowModal] = useState<boolean>(false);
    const router = useRouter();
    const t = useTranslations('form');

    const onChangeUsernameFormSubmit = useCallback((username: string) => {
        setNewUsername(username);
        setShowModal(true);
    }, [newUsername, showModal]);

    const onCloseClick = useCallback(() => {
        setShowModal(false);
    }, [showModal]);

    const onVerifyUsernameFormSubmit = useCallback(() => {
        setShowModal(false);
        router.push(`/${newUsername}`);
    }, [showModal, newUsername]);

    return (
        <>
            <ChangeUsernameForm onSubmit={onChangeUsernameFormSubmit} oldUsername={oldUsername} />
            {newUsername &&
                <Modal title={t('verifyNewUsername')} onCloseClicked={onCloseClick} opened={showModal}>
                    <VerifyUsernameForm newUsername={newUsername} onSubmit={onVerifyUsernameFormSubmit} />
                </Modal>
            }
        </>
    )
}
