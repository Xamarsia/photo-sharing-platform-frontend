"use client";

import { useState } from "react";

import Modal from "@/components/common/Modal";
import StatCounter from "@/components/common/stats/StatCounter";

import ProfilePreviewListInfiniteLoading from "@/components/common/infinite-loading/ProfilePreviewListInfiniteLoading";


type Props = {
    local: any,
    post: PostDTO,
}

export default function LikesInfo({ local, post }: Props) {
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div>
            <StatCounter text={local.likes} count={post.likes} onClick={handleModal} />

            <Modal title={local.likes} onCloseClicked={handleModal} opened={showModal}>
                <div className="flex flex-col items-center overflow-y-auto h-96">
                    <ProfilePreviewListInfiniteLoading local={local} url={`/user/${post.id}/likers`} size={6} />
                </div>
            </Modal>
        </div>
    )
}
