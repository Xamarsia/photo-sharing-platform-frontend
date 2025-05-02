import styles from '@/styles/text/text.module.css';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useCallback, useState } from 'react';

import TextButton from '@/components/buttons/TextButton';
import AuthWrapper from '@/components/common/AuthWrapper';
import ProfileImage from '@/components/profile/image/ProfileImage';

import { UserState } from '@/constants';
import { follow, unfollow } from "@/actions/user-actions";


type Props = {
    user: UserDTO
}


export default function ProfilePreview({ user }: Props) {
    const [following, setFollowing] = useState<boolean>(user.state == UserState.Follow);
    const t = useTranslations('form');

    const followProfile = useCallback(async (): Promise<void> => {
        setFollowing(true);
        await follow(user.username);
    }, [following, user]);

    const unfollowProfile = useCallback(async (): Promise<void> => {
        setFollowing(false);
        await unfollow(user.username);
    }, [following, user]);

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
            <AuthWrapper
                auth={user.state != UserState.Current &&
                    (following
                        ? <TextButton style={"secondary"} text={t('unfollow')} onClick={unfollowProfile} />
                        : <TextButton style={"primary"} text={t('follow')} onClick={followProfile} />
                    )
                }
            />
        </div>
    )
}
