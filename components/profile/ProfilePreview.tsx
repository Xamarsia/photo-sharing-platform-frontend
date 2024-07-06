import ProfileImage from './image/ProfileImage';
import DefaultProfileImage from './image/DefaultProfileImage';

import textStyles from '@/app/styles/components/text.module.css'
import styles from '@/app/styles/profile/profile.module.css'

import Link from '@/components/Link';
import { ReactNode } from 'react';

type ProfilePreviewProps = {
    user: UserPreviewDTO
    children?: ReactNode;
}

export default function ProfilePreview({ user, children }: ProfilePreviewProps) {
    return (
        <div className={`${styles["profile-preview-container"]}`}>
            <div className={`${styles["profile-preview-layout"]}`}>
                <Link href={`/${user.username}`} >
                    {user.isProfileImageExist
                        ? <ProfileImage src={`/api/auth/user/${user.username}/profile/image`} preview />
                        : <DefaultProfileImage preview username={user.username} />
                    }
                </Link>
                <div className="flex-1">
                    <p className={`${textStyles["main-info"]}`}>{user.fullName}</p>
                    <p className={`${textStyles["secondary-info"]}`}>{'@' + user.username}</p>
                </div>
                <div className="ml-12">
                    {children}
                </div>
            </div>
        </div>
    )
}