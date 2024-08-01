"use client";

import { useState } from 'react';
import { getProfileImage } from '@/lib/profile-controller';

import styles from '@/app/styles/text/text.module.css';

import Text from '@/components/common/Text';
import StatsInfo from '@/components/common/StatsInfo';
import TextButton from '@/components/buttons/TextButton';
import FollowButton from '@/components/buttons/FollowButton';


type Props = {
    local: any;
    profile: ProfileDTO;
}


export default function Profile({ local, profile }: Props) {
    const [user] = useState<UserPreviewDTO>(profile.userPreviewDTO);
    const profileImage = getProfileImage(user);

    return (
        <div className="flex flex-col items-center gap-4 w-11/12 max-w-lg ">
            {profileImage}
            <h1 className={`text-slate-800 font-normal tracking-normal text-xl sm:text-2xl leading-9 text-center`}>{user.fullName}</h1>

            <Text style='secondary-info' size='large' text={user.username} />

            <p className={`${styles['base-text']} ${styles['small']}`}>
                {profile.description}
            </p>

            <StatsInfo local={local} profile={profile} />
            <div className="flex flex-row items-center basis-1/3 my-4">
                <FollowButton user={user} local={local} />
                <TextButton fill="parent" text={local.editProfile} style={'primary'} />
            </div>
        </div>
    )
}