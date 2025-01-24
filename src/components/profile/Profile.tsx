"use client"

import styles from '@/styles/text/text.module.css';

import StatsInfo from '@/components/common/stats/StatsInfo';
import TextButton from '@/components/buttons/TextButton';
import PostsPreviewGrid from '@/components/post/PostsPreviewGrid';
import ProfileImage from '@/components/profile/image/ProfileImage';
import InfiniteLoading from '@/components/common/infinite-loading/InfiniteLoading';

import { follow, getUserPostPreviewsPage, unfollow } from "@/actions/user-actions";

import { UserState } from '@/constants';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useCallback, useState } from 'react';


type Props = {
    profile: ProfileDTO,
}


export default function Profile({ profile }: Props) {
    const [user] = useState<UserDTO>(profile.userDTO);
    const [following, setFollowing] = useState<boolean>(user.state == UserState.Follow);
    const router = useRouter();
    const t = useTranslations('form');
    const [more, setMore] = useState<boolean>(true);

    const followProfile = useCallback(async (): Promise<void> => {
        setFollowing(true);
        await follow(user.username);
    }, [following, user]);

    const unfollowProfile = useCallback(async (): Promise<void> => {
        setFollowing(false);
        await unfollow(user.username);
    }, [following, user]);

    const getUserPostPreviews = useCallback((page: number) => {
        return getUserPostPreviewsPage(profile.userDTO.username, page);
    }, [profile]);

    const onEditProfileClicked = useCallback(() => {
        router.push('/profile/edit/info');
    }, []);

    const onMoreClick = useCallback(() => {
        setMore(!more);
    }, [more]);

    return (
        <div className="flex flex-grow flex-col flex-shrink items-center justify-center mt-4 lg:m-4 gap-4 max-w-7xl">
            <div className="flex flex-col items-center gap-4 w-11/12 max-w-2xl break-all">
                <ProfileImage profileImageExist={user.isProfileImageExist} username={user.username} />
                <h1 className={`${styles['h1']} text-center`}>{user.username}</h1>
                <p className={`${styles['base-text']}`}>{more ? user.description?.substring(0, 200) : user.description}
                    {user.description && user.description.length > 200 &&
                        <>
                            <span className={`${!more && "hidden"}`}>...</span>
                            <button onClick={onMoreClick} className={`${styles['secondary-link']} mx-4`}>{more ? t("more") : t('less')}</button>
                        </>
                    }
                </p>

                <StatsInfo profile={profile} />
                <div className="flex flex-row items-center basis-1/3 my-4">

                    {user.state == UserState.Current
                        ? <TextButton fill="parent" text={t('editProfile')} onClick={onEditProfileClicked} />
                        : (following
                            ? <TextButton style={"secondary"} text={t('unfollow')} onClick={unfollowProfile} />
                            : <TextButton style={"primary"} text={t('follow')} onClick={followProfile} />
                        )
                    }
                </div>
            </div>

            <InfiniteLoading<PostPreviewDTO>
                fetchPage={getUserPostPreviews}
                displayItems={(items) => (<PostsPreviewGrid posts={items} />)}
            />
        </div>
    )
}
