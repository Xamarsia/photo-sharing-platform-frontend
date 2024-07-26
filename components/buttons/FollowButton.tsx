"use client";

import { useState } from "react";
import { UserState } from '@/constants';

import TextButton from '@/components/buttons/TextButton';


type Props = {
    local: any,
    user: UserPreviewDTO,
}


export default function FollowButton({ user, local }: Props) {
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
                    ? <TextButton type="submit" fill="parent" style='secondary' onClick={unfollowProfile} text={local.unfollow} />
                    : <TextButton type="submit" fill="parent" style='primary' onClick={followProfile} text={local.follow} />
                )
            }
        </>
    );
}
