"use client";

import { useState } from "react";
import { useTranslations } from 'next-intl';

import Modal from "@/components/common/Modal";
import StatCounter from "@/components/common/stats/StatCounter";
import ProfilePreviewListInfiniteLoading from "@/components/common/infinite-loading/ProfilePreviewListInfiniteLoading";


type StatsInfoProps = {
    profile: ProfileDTO,
};

type ModalContent = "FOLLOWERS" | "FOLLOWINGS";

export default function StatsInfo({ profile }: StatsInfoProps) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<ModalContent>();
    const t = useTranslations('form');

    const handleModal = () => {
        setShowModal(!showModal)
    };

    const onFollowersClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        handleModal();
        setModalContent("FOLLOWERS");
    };

    const onFollowingsClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        handleModal();
        setModalContent("FOLLOWINGS");
    };

    return (
        <div className="flex flex-row w-full justify-around gap-8">
            <StatCounter text={t('posts')} count={profile.postsCount} unclickable />
            <StatCounter text={t('followers')} count={profile.followersCount} onClick={onFollowersClick} />
            <StatCounter text={t('followings')} count={profile.followingsCount} onClick={onFollowingsClick} />

            <Modal title={t('followers')} onCloseClicked={handleModal} opened={showModal && modalContent == "FOLLOWERS"}>
                <div className="flex flex-col items-center overflow-y-auto h-96">
                    <ProfilePreviewListInfiniteLoading url={`/user/${profile.userDTO.username}/followers`} size={6} />
                </div>
            </Modal>

            <Modal title={t('followings')} onCloseClicked={handleModal} opened={showModal && modalContent == "FOLLOWINGS"}>
                <div className="flex flex-col items-center overflow-y-auto h-96">
                    <ProfilePreviewListInfiniteLoading url={`/user/${profile.userDTO.username}/followings`} size={6} />
                </div>
            </Modal>
        </div>
    )
}
