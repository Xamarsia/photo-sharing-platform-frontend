"use client";

import { useState } from "react";

import Modal from "@/components/common/Modal";
import StatCounter from "@/components/common/stats/StatCounter";

import ProfilePreviewListInfiniteLoading from "@/components/common/infinite-loading/ProfilePreviewListInfiniteLoading";


type StatsInfoProps = {
    local: any,
    profile: ProfileDTO,
};

type ModalContent = "FOLLOWERS" | "FOLLOWINGS";

export default function StatsInfo({ local, profile }: StatsInfoProps) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<ModalContent>();

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
            <StatCounter text={local.posts} count={profile.postsCount} unclickable />
            <StatCounter text={local.followers} count={profile.followersCount} onClick={onFollowersClick} />
            <StatCounter text={local.followings} count={profile.followingsCount} onClick={onFollowingsClick} />

            <Modal title={local.followers} onCloseClicked={handleModal} opened={showModal && modalContent == "FOLLOWERS"}>
                <div className="flex flex-col items-center overflow-y-auto h-96">
                    <ProfilePreviewListInfiniteLoading local={local} url={`/user/${profile.userDTO.username}/followers`} size={6} />
                </div>
            </Modal>

            <Modal title={local.followings} onCloseClicked={handleModal} opened={showModal && modalContent == "FOLLOWINGS"}>
                <div className="flex flex-col items-center overflow-y-auto h-96">
                    <ProfilePreviewListInfiniteLoading local={local} url={`/user/${profile.userDTO.username}/followings`} size={6} />
                </div>
            </Modal>
        </div>
    )
}
