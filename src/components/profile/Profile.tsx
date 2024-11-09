"use client"

import styles from '@/styles/text/text.module.css';

import StatsInfo from '@/components/common/stats/StatsInfo';
import TextButton from '@/components/buttons/TextButton';
import ProfileImage from '@/components/profile/image/ProfileImage';

import { follow, unfollow } from "@/actions/user-actions";

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { UserState } from '@/constants';
import { useState } from 'react';


type Props = {
    profile: ProfileDTO,
}


export default function Profile({ profile }: Props) {
    const [user] = useState<UserDTO>(profile.userDTO);
    const [following, setFollowing] = useState<boolean>(user.state == UserState.Follow);
    const router = useRouter();
    const t = useTranslations('form');


    async function followProfile(): Promise<void> {
        setFollowing(true);
        await follow(user.username);
    }

    async function unfollowProfile(): Promise<void> {
        setFollowing(false);
        await unfollow(user.username);
    }

    return (
        <div className="flex flex-col items-center gap-4 w-11/12 max-w-lg">
            <ProfileImage profileImageExist={user.isProfileImageExist} username={user.username} />
            <h1 className={`${styles['h1']} text-center`}>{user.fullName}</h1>

            <span className={`${styles['secondary-info']}`}>
                {user.username}
            </span>

            <p className={`${styles['base-text']}`}>
                {user.description}
            </p>

            <StatsInfo profile={profile} />
            <div className="flex flex-row items-center basis-1/3 my-4">

                {user.state == UserState.Current
                    ? <TextButton fill="parent" text={t('editProfile')} onClick={(e) => { router.push('/profile/edit/info') }} />
                    : (following
                        ? <TextButton style={"secondary"} text={t('unfollow')} onClick={unfollowProfile} />
                        : <TextButton style={"primary"} text={t('follow')} onClick={followProfile} />
                    )
                }
            </div>
        </div>
    )
}
