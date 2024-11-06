"use client";


import { useState } from "react";
import { UserState } from '@/constants';


import { follow, unfollow } from "@/actions/user-actions";
import DropdownRemoveButton from "@/components/buttons/DropdownRemoveButton";
import DropdownButton from "@/components/buttons/DropdownButton";


type Props = {
    local: any,
    user: UserDTO,
}

export default function ToggleDropdownFollowButton({ user, local }: Props) {
    const [following, setFollowing] = useState<boolean>(user.state == UserState.Followed);

    async function followProfile() {
        setFollowing(true);
        await follow(user.username);
    }

    async function unfollowProfile() {
        setFollowing(false);
        await unfollow(user.username);
    }

    return (
        <>
            {user.state != UserState.Current &&
                (following
                    ? <DropdownRemoveButton text={local.unfollow} onClick={unfollowProfile} />
                    : <DropdownButton text={local.follow} onClick={followProfile} />
                )
            }
        </>
    );
}
