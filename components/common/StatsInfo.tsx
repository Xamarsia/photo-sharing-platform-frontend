"use client";

import { useState } from "react";

import Modal from "@/components/common/Modal";
import StatCounter from "@/components/common/StatCounter";
import ProfilePreviewList from "../profile/ProfilePreviewList";

import { getFollowers, getFollowings } from "@/lib/profile-controller";

type StatsInfoProps = {
    local: any,
    profile: ProfileDTO,
}

type ModalContent = "FOLLOWERS" | "FOLLOWINGS"

export default function StatsInfo({ local, profile }: StatsInfoProps) {
    const [showModal, setShowModal] = useState<boolean>(false);

    const [modalContent, setModalContent] = useState<ModalContent>();

    const followers: Array<UserPreviewDTO> = getFollowers();
    const followings: Array<UserPreviewDTO> = getFollowings();

    const handleModal = () => {
        setShowModal(!showModal)
    }

    return (
        <div className="flex flex-row w-full justify-around gap-8">
            <StatCounter text={local.posts} count={profile.postsCount} unclickable />
            <StatCounter text={local.followers} count={profile.followersCount} onClick={(e) => { handleModal(); setModalContent("FOLLOWERS") }} />
            <StatCounter text={local.followings} count={profile.followingsCount} onClick={(e) => { handleModal(); setModalContent("FOLLOWINGS") }} />

            <Modal title={modalContent == "FOLLOWERS" ? local.followers : local.followings} onCloseClicked={handleModal} opened={showModal}>
                <ProfilePreviewList users={modalContent == "FOLLOWERS" ? followers : followings} local={local} />
            </Modal>

        </div>
    )
}
