import { getProfileImagePreview } from '@/lib/profile-controller';
import styles from '@/app/styles/text/text.module.css';

import Link from 'next/link';
import { ReactNode } from 'react';

type ProfilePreviewProps = {
    user: UserPreviewDTO
    children?: ReactNode;
}

export default function ProfilePreview({ user, children }: ProfilePreviewProps) {
    const profileImagePreview = getProfileImagePreview(user);

    return (
        <div className='hover:bg-gray-50 w-full'>
            <div className='flex justify-around items-center gap-4 py-2 px-4 hover:bg-gray-50'>
                <Link href={`/${user.username}`} >{profileImagePreview} </Link>
                <div className="flex-1">
                    <span className={`${styles['main-info']}`}>{user.fullName}</span>
                    <span className={`${styles['secondary-info']}`}>{'@' + user.username}</span>
                </div>
                <div className="ml-12">
                    {children}
                </div>
            </div>
        </div>
    )
}