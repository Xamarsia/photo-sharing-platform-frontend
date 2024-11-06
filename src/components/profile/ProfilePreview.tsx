import styles from '@/styles/text/text.module.css';

import Link from 'next/link';

import ProfileImage from '@/components/profile/image/ProfileImage';
import ToggleFollowButton from '@/components/buttons/ToggleFollowButton';


type ProfilePreviewProps = {
    local: any,
    user: UserDTO
}


export default function ProfilePreview({ local, user }: ProfilePreviewProps) {
    return (
        <div className='flex justify-between items-center border border-white hover:border-gray-100 hover:bg-gray-50 rounded-xl h-16 p-2'>
            <div className='flex items-center justify-between gap-2'>
                <Link href={`/${user.username}`}>
                    <ProfileImage profileImageExist={user.isProfileImageExist} username={user.username} preview />
                </Link>
                <div className='flex flex-col justify-center max-w-40 sm:max-w-80'>
                    <span className={`${styles['main-info']}`}>{user.username}</span>
                    <span className={`${styles['secondary-info']} truncate`}>{user.description}</span>
                </div>
            </div>
            <ToggleFollowButton local={local} user={user} />
        </div>
    )
}
