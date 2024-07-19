import styles from '@/app/styles/profile/profile.module.css';

import Link from '@/components/common/Link';
import Text from '@/components/common/Text';
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
                    <Text style='main-info' size='small' text={user.fullName} />
                    <Text style='secondary-info' size='small' text={'@' + user.username} />
                </div>
                <div className="ml-12">
                    {children}
                </div>
            </div>
        </div>
    )
}