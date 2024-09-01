"use client";

import { useEffect, useState } from "react";

import Modal from "@/components/common/Modal";
import StatCounter from "@/components/common/StatCounter";
import ProfilePreviewList from "../profile/ProfilePreviewList";
import { getFollowers, getFollowings } from "@/actions/user-actions";


type StatsInfoProps = {
    local: any,
    profile: ProfileDTO,
}

type ModalContent = "FOLLOWERS" | "FOLLOWINGS"

export default async function StatsInfo({ local, profile }: StatsInfoProps) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<ModalContent>();
    // const [followers, setFollowers] = useState<Array<UserDTO>>();
    // const [followers, setFollowers] = useState<Array<UserDTO>>();

    const [content, setContent] = useState<Array<UserDTO>>();


    // const followers: Array<UserDTO> = await getFollowers(profile.userDTO.username, 2, 0);
    // const followings: Array<UserDTO> = await getFollowings(profile.userDTO.username, 2, 0);

    const handleModal = () => {
        setShowModal(!showModal)
    }


    const onFollowersClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
        handleModal();
        setModalContent("FOLLOWERS");
        const followers: Array<UserDTO> = await getFollowers(profile.userDTO.username, 2, 0);
        setContent(followers);
    }

    const onFollowingsClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
        handleModal();
        setModalContent("FOLLOWINGS");
        const followings: Array<UserDTO> = await getFollowings(profile.userDTO.username, 2, 0);
        setContent(followings);
    }

    return (
        <div className="flex flex-row w-full justify-around gap-8">
            <StatCounter text={local.posts} count={profile.postsCount} unclickable />
            <StatCounter text={local.followers} count={profile.followersCount} onClick={onFollowersClick} />
            <StatCounter text={local.followings} count={profile.followingsCount} onClick={onFollowingsClick} />

            <Modal title={modalContent == "FOLLOWERS" ? local.followers : local.followings} onCloseClicked={handleModal} opened={showModal}>
                {content && <ProfilePreviewList users={content} local={local} />}
            </Modal>

        </div>
    )
}
