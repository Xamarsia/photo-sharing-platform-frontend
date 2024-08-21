"use client";


import { useState } from "react";
import { UserState } from '@/constants';

import TextButton from "@/components/buttons/TextButton";
import TextSecondaryButton from "@/components/buttons/TextSecondaryButton";


type Props = {
    local: any,
    user: UserPreviewDTO,
}

export default function ToggleFollowButton({ user, local }: Props) {
    const [following, setFollowing] = useState<boolean>(user.state == UserState.Followed);

    async function followProfile() {
        setFollowing(true);
    }

    async function unfollowProfile() {
        setFollowing(false);
    }

    return (
        <>
            {user.state != UserState.Current &&
                (following
                    ? <TextSecondaryButton text={local.unfollow} onClick={unfollowProfile} />
                    : <TextButton text={local.follow} onClick={followProfile} />
                )
            }
        </>
    );
}
