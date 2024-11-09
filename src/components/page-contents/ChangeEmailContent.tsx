"use client";

import Modal from '@/components/common/Modal';
import VerifyEmailForm from '@/components/forms/profile/VerifyEmailForm';
import ChangeEmailForm from '@/components/forms/profile/ChangeEmailForm';


import { useTranslations } from 'next-intl';
import { useState } from "react";


type Props = {
    oldEmail: string
}

export default function ChangeEmailContent({ oldEmail }: Props) {
    const [email, setEmail] = useState<string | undefined>(undefined);
    const [showModal, setShowModal] = useState<boolean>(false);
    const t = useTranslations('form');


    async function onSubmit(newEmail: string) {
        setEmail(newEmail);
        setShowModal(true);
    }


    return (
        <>
            <ChangeEmailForm oldEmail={oldEmail} onSubmit={onSubmit} />
            {email &&
                <Modal title={t('verifyNewEmailAddress')} onCloseClicked={() => { setShowModal(false); }} opened={showModal}>
                    <VerifyEmailForm newEmail={email} />
                </Modal>
            }
        </>
    )
}
