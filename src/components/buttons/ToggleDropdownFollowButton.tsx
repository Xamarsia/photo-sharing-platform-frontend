"use client";

import { useTranslations } from 'next-intl';

import { useState } from "react";
import { UserState } from '@/constants';


import { follow, unfollow } from "@/actions/user-actions";
import DropdownRemoveButton from "@/components/buttons/DropdownRemoveButton";
import DropdownButton from "@/components/buttons/DropdownButton";


type Props = {
    user: UserDTO,
}

export default function ToggleDropdownFollowButton({ user }: Props) {
    const [following, setFollowing] = useState<boolean>(user.state == UserState.Followed);
    const t = useTranslations('Following');

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
                    ? <DropdownRemoveButton text={t('unfollow')} onClick={unfollowProfile} />
                    : <DropdownButton text={t('follow')} onClick={followProfile} />
                )
            }
        </>
    );
}
// REMOVE