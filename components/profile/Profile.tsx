"use client"

import styles from '@/app/styles/text/text.module.css';

import StatsInfo from '@/components/common/StatsInfo';
import TextButton from '@/components/buttons/TextButton';
import ProfileImage from '@/components/profile/image/ProfileImage';
import ToggleFollowButton from '@/components/buttons/ToggleFollowButton';

import { useRouter } from 'next/navigation';


type Props = {
    local: any,
    profile: ProfileDTO,
}


export default function Profile({ local, profile }: Props) {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center gap-4 w-11/12 max-w-lg ">
            <ProfileImage profileImageExist={profile.userDTO.isProfileImageExist} username={profile.userDTO.username} />
            <h1 className={`${styles['h1']} text-center`}>{profile.userDTO.fullName}</h1>

            <span className={`${styles['secondary-info']}`}>
                {profile.userDTO.username}
            </span>

            <p className={`${styles['base-text']}`}>
                {profile.userDTO.description}
            </p>

            <StatsInfo local={local} profile={profile} />
            <div className="flex flex-row items-center basis-1/3 my-4">
                <ToggleFollowButton user={profile.userDTO} local={local} />
                <TextButton fill="parent" text={local.editProfile} onClick={(e) => { router.push('/profile/edit/info') }} />
            </div>
        </div>
    )
}
