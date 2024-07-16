"use client";

import { useState } from "react";
import { UserState } from '@/constants';

import TextButton from '@/components/buttons/TextButton';

type UserProps = {
    local: any,
    user: UserPreviewDTO,
    dropdown?: boolean,
}

export default function FollowButton({ user, dropdown, local }: UserProps) {
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
                    ? <TextButton type="submit" fill="parent" style={dropdown ? 'red-dropdown-button' : 'secondary-button'} onClick={unfollowProfile} text={local.unfollow} />
                    : <TextButton type="submit" fill="parent" style={dropdown ? 'blue-dropdown-button' : 'primary-button'} onClick={followProfile} text={local.follow} />
                )
            }
        </>
    );
}
