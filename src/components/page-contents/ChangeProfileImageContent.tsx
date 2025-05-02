"use client";


import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from "react";

import Modal from '@/components/common/Modal';
import TextButton from '@/components/buttons/TextButton';
import { GetCurrentUserOrRedirect } from '@/components/common/guards/UserProvider';
import ChangeProfileImageForm from '@/components/forms/profile/ChangeProfileImageForm';

import { deleteProfileImage } from '@/actions/user-actions';


export default function ChangeProfileImageContent() {
    const [showModal, setShowModal] = useState<boolean>(false);
    const currentUser: UserDTO = GetCurrentUserOrRedirect();
    const t = useTranslations('form');
    const router = useRouter();

    const onDeleteProfileImage = useCallback(async () => {
        await deleteProfileImage();
        router.push(`/${currentUser.username}`);
    }, []);

    const onCloseClick = useCallback(() => {
        setShowModal(false);
    }, [showModal]);

    const onShowModalClick = useCallback(() => {
        setShowModal(true);
    }, [showModal]);


    return (
        <>
            <ChangeProfileImageForm onDeleteProfileImage={onShowModalClick} username={currentUser.username} isProfileImageExist={currentUser.isProfileImageExist} />
            <Modal onCloseClicked={onCloseClick} title={t('removeProfileImage')} opened={showModal}>
                <div className='flex flex-col gap-20'>
                    <p>{t('removeProfileImageMessage')}</p>
                    <TextButton style="remove" text={t('remove')} onClick={onDeleteProfileImage} />
                </div>
            </Modal>
        </>
    )
}
