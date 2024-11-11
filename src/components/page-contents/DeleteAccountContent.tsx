"use client";


import { useCallback, useState } from "react";
import { useTranslations } from 'next-intl';


import Modal from '@/components/common/Modal';
import TextButton from "@/components/buttons/TextButton";
import DeleteAccountForm from "@/components/forms/profile/DeleteAccountForm";


type Props = {
    provider: string[]
}


export default function DeleteAccountContent({ provider }: Props) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const t = useTranslations('form');

    const onCloseClick = useCallback(() => {
        setShowModal(false);
    }, [showModal]);

    const onShowModalClick = useCallback(() => {
        setShowModal(true);
    }, [showModal]);

    return (
        <>
            <TextButton
                style="remove"
                type="submit"
                text={t('delete')}
                fill="content"
                onClick={onShowModalClick}
            />
            <Modal onCloseClicked={onCloseClick} title={t('deleteAccount')} opened={showModal}>
                <DeleteAccountForm provider={provider} />
            </Modal>
        </>
    )
}
