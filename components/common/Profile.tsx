"use client";

import { useState } from 'react';
import { getProfileImage } from '@/lib/profile-controller';

import Text from '@/components/common/Text';
import Title from '@/components/common/Title';
import TextBlock from '@/components/common/TextBlock';
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
            <Title size="base" text={user.fullName} />

            <Text style='secondary-info' size='large' text={user.username} />
            <TextBlock size='small' text={profile.description} />

            <StatsInfo local={local} profile={profile} />
            <div className="flex flex-row items-center basis-1/3 my-4">
                <FollowButton user={user} local={local} />
                <TextButton fill="parent" text={local.editProfile} style={'primary'} />
            </div>
        </div>
    )
}