"use client";

import Modal from '@/components/common/Modal';
import TextButton from '@/components/buttons/TextButton';
import ChangeProfileImageForm from '@/components/forms/profile/ChangeProfileImageForm';

import { useCallback, useState } from "react";
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

import { deleteProfileImage } from '@/actions/user-actions';



type Props = {
    user: UserDTO,
}


export default function ChangeProfileImageContent({ user }: Props) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const t = useTranslations('form');
    const router = useRouter();

    const onDeleteProfileImage = useCallback(async () => {
        await deleteProfileImage();
        router.push(`/${user.username}`);
    }, []);

    const onCloseClick = useCallback(() => {
        setShowModal(false);
    }, [showModal]);

    const onShowModalClick = useCallback(() => {
        setShowModal(true);
    }, [showModal]);

    return (
        <>
            <ChangeProfileImageForm onDeleteProfileImage={onShowModalClick} user={user} />
            <Modal onCloseClicked={onCloseClick} title={t('removeProfileImage')} opened={showModal}>
                <div className='flex flex-col gap-20'>
                    <p>{t('removeProfileImageMessage')}</p>
                    <TextButton style="remove" text={t('remove')} onClick={onDeleteProfileImage} />
                </div>
            </Modal>
        </>
    )
}
