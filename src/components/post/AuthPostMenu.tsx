"use client";


import styles from '@/styles/text/text.module.css';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';

import { UserState } from '@/constants';
import { formatDateTime } from '@/utils/dateTime';
import { deletePost } from '@/actions/post-actions';
import { follow, unfollow } from "@/actions/user-actions";

import Modal from '@/components/common/Modal';
import Dropdown from '@/components/common/Dropdown';
import IconButton from '@/components/buttons/IconButton';
import TextButton from '@/components/buttons/TextButton';
import DropdownButton from '@/components/buttons/DropdownButton';
import ProfileImage from '@/components/profile/image/ProfileImage';

import ellipsisHorizontal from '@/public/ellipsis-horizontal/ellipsis-horizontal.svg';
import hoveredEllipsisHorizontal from '@/public/ellipsis-horizontal/ellipsis-horizontal-hovered.svg';


type Props = {
    detailedPost: DetailedPostDTO,
}


export default function AuthPostMenu({ detailedPost }: Props) {
    const [post] = useState<PostDTO>(detailedPost.postDTO);
    const [author] = useState<UserDTO>(detailedPost.authorDTO);
    const [showModal, setShowModal] = useState<boolean>(false);

    const [isUserPostOwner] = useState<boolean>(author.state == UserState.Current);
    const createdDate: string = formatDateTime(post.createdDate);
    const [following, setFollowing] = useState<boolean>(author.state == UserState.Follow);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const t = useTranslations('form');
    const router = useRouter();

    const onDeletePost = useCallback(async () => {
        await deletePost(post.id);
        router.push(`/${author.username}`);
    }, [post, author]);

    const followProfile = useCallback(async () => {
        setFollowing(true);
        await follow(author.username);
    }, [following, author]);

    const unfollowProfile = useCallback(async () => {
        setFollowing(false);
        await unfollow(author.username);
    }, [following, author]);

    const onShowDropdownClick = useCallback(() => {
        setShowDropdown(!showDropdown);
    }, [showDropdown]);

    const onOutsideClick = useCallback(() => {
        setShowDropdown(false);
    }, [showDropdown]);

    const onCloseModalClick = useCallback(() => {
        setShowModal(false);
    }, [showModal]);

    const onShowModalClick = useCallback(() => {
        setShowModal(true);
    }, [showModal]);

    return (
        <div className='flex justify-around items-center shrink-0'>
            <Link href={`/${post.username}`} className='min-h-12 min-w-12'>
                <ProfileImage profileImageExist={author.isProfileImageExist} username={author.username} preview />
            </Link>
            <div className="flex-1 flex mx-4 w-16 flex-col">
                <span className={`${styles['main-info']} text-clip overflow-x-hidden`}>{author.username}</span>
                <time dateTime={createdDate} className={`${styles['secondary-info']}`}>{createdDate}</time>
            </div>
            <IconButton
                icon={ellipsisHorizontal}
                hoveredIcon={hoveredEllipsisHorizontal}
                onClick={onShowDropdownClick}
                className={showDropdown ? "pointer-events-none" : ""}
            />

            <Dropdown isVisible={showDropdown} onOutsideClicked={onOutsideClick}>
                {isUserPostOwner
                    ? <>
                        <DropdownButton style='primary' text={t('editPost')} onClick={() => { router.push(`/post/${post.id}/edit`); }} />
                        <DropdownButton style='remove' text={t('deletePost')} onClick={onShowModalClick} />
                    </>
                    : following
                        ? <DropdownButton style='remove' text={t('unfollow')} onClick={unfollowProfile} />
                        : <DropdownButton style='primary' text={t('follow')} onClick={followProfile} />
                }
            </Dropdown>

            <Modal onCloseClicked={onCloseModalClick} title={t('deletePost')} opened={showModal}>
                <div className='flex flex-col gap-20'>
                    <p>{t('deleteThisPost')}</p>
                    <TextButton style="remove" text={t('delete')} onClick={onDeletePost} />
                </div>
            </Modal>
        </div>
    )
}
