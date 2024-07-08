"use client";

import { useState } from "react";
import { UserState } from '@/constants';

import Button from '@/components/Button';

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
                    ? <Button type="submit" fill="parent" style={dropdown ? 'red-dropdown-button' : 'secondary-button'} onClick={unfollowProfile} text={local.unfollow} />
                    : <Button type="submit" fill="parent" style={dropdown ? 'blue-dropdown-button' : 'primary-button'} onClick={followProfile} text={local.follow} />
                )
            }
        </>
    );
}
