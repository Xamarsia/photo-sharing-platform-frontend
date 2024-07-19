"use client"

import { useState } from 'react';
import { getProfileImage } from '@/lib/profile-controller';

import textStyles from '@/app/styles/components/text.module.css';
import Text from '@/components/common/Text';

import StatsInfo from '@/components/common/StatsInfo';
import TextButton from '@/components/buttons/TextButton';
import FollowButton from '@/components/buttons/FollowButton';

type ProfileProps = {
    local: any;
    profile: ProfileDTO;
}


export default function Profile({ local, profile }: ProfileProps) {
    const [user] = useState<UserPreviewDTO>(profile.userPreviewDTO);
    const profileImage = getProfileImage(user);

    return (
        <div className="flex flex-col items-center gap-4 w-11/12 max-w-lg ">
            {profileImage}
            <h1 className={`${textStyles["title-large"]}`}>{user.fullName}</h1>

            <Text style='secondary-info' size='large' text={user.username} />
            <Text style='base-text' size='small' text={profile.description} />

            <StatsInfo local={local} profile={profile} />
            <div className="flex flex-row items-center basis-1/3 my-4">
                <FollowButton user={user} local={local} />
                <TextButton type={'button'} fill="parent" text={local.editProfile} style={'primary-button'} />
            </div>
        </div>
    )
}