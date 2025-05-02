"use client";

import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from "react";

import Modal from '@/components/common/Modal';
import ChangeUsernameForm from '@/components/forms/profile/ChangeUsernameForm';
import VerifyUsernameForm from '@/components/forms/profile/VerifyUsernameForm';


export default function ChangeUsernameContent() {
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
            <ChangeUsernameForm onSubmit={onChangeUsernameFormSubmit} />
            {newUsername &&
                <Modal title={t('verifyNewUsername')} onCloseClicked={onCloseClick} opened={showModal}>
                    <VerifyUsernameForm newUsername={newUsername} onSubmit={onVerifyUsernameFormSubmit} />
                </Modal>
            }
        </>
    )
}
