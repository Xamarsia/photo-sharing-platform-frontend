"use client";

import { useCallback, useState } from "react";
import { useTranslations } from 'next-intl';

import Modal from "@/components/common/Modal";
import StatCounter from "@/components/common/stats/StatCounter";
import ProfilePreviewsList from "@/components/profile/ProfilePreviewsList";
import InfiniteLoading from "@/components/common/infinite-loading/InfiniteLoading";

import styles from '@/styles/text/text.module.css';
import { getUsersLikedPostPage } from "@/actions/user-actions";


type Props = {
    post: PostDTO,
}

export default function LikesInfo({ post }: Props) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const t = useTranslations('form');

    const onOpenModalClick = useCallback(() => {
        setShowModal(!showModal);
    }, [showModal]);

    const getUsersLikedPost = useCallback((page: number) => {
        return getUsersLikedPostPage(post.id, page)
    }, [post]);


    return (
        <div>
            <StatCounter text={t('likes')} count={post.likes} onClick={onOpenModalClick} />

            <Modal title={t('likes')} onCloseClicked={onOpenModalClick} opened={showModal}>
                <div className="flex flex-col items-center overflow-y-auto h-96">
                    <InfiniteLoading<UserDTO>
                        fetchPage={getUsersLikedPost}
                        displayItems={(items) => (<ProfilePreviewsList users={items} />)}
                        emptyResult={<span className={`${styles['secondary-info']} m-4`}>{t('listEmpty')}</span>} />
                </div>
            </Modal>
        </div>
    )
}
