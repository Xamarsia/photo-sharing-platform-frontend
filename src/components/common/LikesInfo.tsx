"use client";

import { useState } from "react";

import { useTranslations } from 'next-intl';
import Modal from "@/components/common/Modal";
import StatCounter from "@/components/common/stats/StatCounter";

import ProfilePreviewListInfiniteLoading from "@/components/common/infinite-loading/ProfilePreviewListInfiniteLoading";


type Props = {
    post: PostDTO,
}

export default function LikesInfo({ post }: Props) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const t = useTranslations('form');

    const handleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div>
            <StatCounter text={t('likes')} count={post.likes} onClick={handleModal} />

            <Modal title={t('likes')} onCloseClicked={handleModal} opened={showModal}>
                <div className="flex flex-col items-center overflow-y-auto h-96">
                    <ProfilePreviewListInfiniteLoading url={`/user/${post.id}/likers`} size={6} />
                </div>
            </Modal>
        </div>
    )
}
