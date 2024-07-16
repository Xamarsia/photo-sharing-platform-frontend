import textStyles from '@/app/styles/components/text.module.css';
import styles from '@/app/styles/profile/profile.module.css';

import Link from '@/components/common/Link';
import { getProfileImagePreview } from '@/lib/profile-controller';

import { ReactNode } from 'react';

type ProfilePreviewProps = {
    user: UserPreviewDTO
    children?: ReactNode;
}

export default function ProfilePreview({ user, children }: ProfilePreviewProps) {
    const profileImagePreview = getProfileImagePreview(user);

    return (
        <div className={`${styles["profile-preview-container"]}`}>
            <div className={`${styles["profile-preview-layout"]}`}>
                <Link href={`/${user.username}`} >{profileImagePreview} </Link>
                <div className="flex-1">
                    <p className={`${textStyles["main-info"]} ${textStyles['small']}`}>{user.fullName}</p>
                    <p className={`${textStyles["secondary-info"]} ${textStyles['small']}`}>{'@' + user.username}</p>
                </div>
                <div className="ml-12">
                    {children}
                </div>
            </div>
        </div>
    )
}