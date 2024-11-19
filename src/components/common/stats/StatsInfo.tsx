"use client";

import { useCallback, useState } from "react";
import { useTranslations } from 'next-intl';

import Modal from "@/components/common/Modal";
import StatCounter from "@/components/common/stats/StatCounter";
import InfiniteLoading from "@/components/common/infinite-loading/InfiniteLoading";
import ProfilePreviewsList from "@/components/profile/ProfilePreviewsList";

import styles from '@/styles/text/text.module.css';
import { getFollowersPage, getFollowingsPage } from "@/actions/user-actions";

type StatsInfoProps = {
    profile: ProfileDTO,
};

type ModalContent = "FOLLOWERS" | "FOLLOWINGS";

export default function StatsInfo({ profile }: StatsInfoProps) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<ModalContent>();
    const t = useTranslations('form');

    const onCloseModalClick = useCallback(() => {
        setShowModal(!showModal);
    }, [showModal]);

    const onFollowersClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>): void => {
        onCloseModalClick();
        setModalContent("FOLLOWERS");
    }, [modalContent, onCloseModalClick]);

    const onFollowingsClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>): void => {
        onCloseModalClick();
        setModalContent("FOLLOWINGS");
    }, [modalContent, onCloseModalClick]);

    const getFollowings = useCallback((page: number) => {
        return getFollowingsPage(profile.userDTO.username, page)
    }, [profile]);

    const getFollowers = useCallback((page: number) => {
        return getFollowersPage(profile.userDTO.username, page)
    }, [profile]);


    return (
        <div className="flex flex-row w-full justify-around gap-8">
            <StatCounter text={t('posts')} count={profile.postsCount} disabled />
            <StatCounter text={t('followers')} count={profile.followersCount} onClick={onFollowersClick} />
            <StatCounter text={t('followings')} count={profile.followingsCount} onClick={onFollowingsClick} />

            <Modal title={t('followers')} onCloseClicked={onCloseModalClick} opened={showModal && modalContent == "FOLLOWERS"}>
                <div className="flex flex-col items-center overflow-y-auto h-96">
                    <InfiniteLoading<UserDTO>
                        fetchPage={getFollowers}
                        displayItems={(items) => (<ProfilePreviewsList users={items} />)}
                        emptyResult={<span className={`${styles['secondary-info']} m-4`}>{t('listEmpty')}</span>} />
                </div>
            </Modal>

            <Modal title={t('followings')} onCloseClicked={onCloseModalClick} opened={showModal && modalContent == "FOLLOWINGS"}>
                <div className="flex flex-col items-center overflow-y-auto h-96">
                    <InfiniteLoading<UserDTO>
                        fetchPage={getFollowings}
                        displayItems={(items) => (<ProfilePreviewsList users={items} />)}
                        emptyResult={<span className={`${styles['secondary-info']} m-4`}>{t('listEmpty')}</span>} />
                </div>
            </Modal>
        </div>
    )
}
