import { getProfileImagePreview } from '@/lib/profile-controller';
import styles from '@/app/styles/text/text.module.css';

import Link from 'next/link';
import ToggleFollowButton from '@/components/buttons/ToggleFollowButton';

type ProfilePreviewProps = {
    local: any,
    user: UserPreviewDTO
}

export default function ProfilePreview({ local, user }: ProfilePreviewProps) {
    const profileImagePreview = getProfileImagePreview(user);

    return (
        <div className='flex justify-between items-center border border-white hover:border-gray-100 hover:bg-gray-50 rounded-xl h-16 p-2 '>
            <div className='flex items-center justify-between gap-2'>
                <Link href={`/${user.username}`}>{profileImagePreview}</Link>
                <div className='flex flex-col justify-center max-w-40 sm:max-w-80'>
                    <span className={`${styles['main-info']}`}>{user.username}</span>
                    <span className={`${styles['secondary-info']}  truncate`}>{'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quod quis eaque aliquam necessitatibus vel eligendi laboriosam optio quisquam sunt. dolor sit amet consectetur, adipisicing elit'}</span>
                </div>
            </div>
            <ToggleFollowButton local={local} user={user} />
        </div>
    )
}