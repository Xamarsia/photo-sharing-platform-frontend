"use client";


import { useState } from "react";
import { UserState } from '@/constants';


import style from '@/app/styles/text/text.module.css';


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
                    ? <button className={`${style['button-text']} bg-white hover:bg-slate-100 h-10 px-4 rounded-xl text-gray-700 border border-gray-200`} onClick={unfollowProfile}>
                        {local.unfollow}
                    </button>

                    : <button className={`${style['button-text']} bg-blue-500 hover:bg-blue-600 h-10 px-4 rounded-xl text-white border `} onClick={followProfile}>
                        {local.follow}
                    </button>
                )
            }
        </>
    );
}
