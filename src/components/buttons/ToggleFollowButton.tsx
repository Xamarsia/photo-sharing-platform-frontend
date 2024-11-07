"use client";


import { useState } from "react";
import { UserState } from '@/constants';
import { useTranslations } from 'next-intl';

import TextButton from "@/components/buttons/TextButton";
import TextSecondaryButton from "@/components/buttons/TextSecondaryButton";
import { follow, unfollow } from "@/actions/user-actions";


type Props = {
    user: UserDTO,
}

export default function ToggleFollowButton({ user }: Props) {
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
                    ? <TextSecondaryButton text={t('unfollow')} onClick={unfollowProfile} />
                    : <TextButton text={t('follow')} onClick={followProfile} />
                )
            }
        </>
    );
}
