"use client";


import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { UserState } from '@/constants';
import { formatDateTime } from '@/utils/dateTime';
import { deletePost } from '@/actions/post-actions';
import { follow, unfollow } from "@/actions/user-actions";

import Modal from '@/components/common/Modal';
import Dropdown from '@/components/common/Dropdown';
import IconButton from '@/components/buttons/IconButton';
import DropdownButton from '@/components/buttons/DropdownButton';
import ProfileImage from '@/components/profile/image/ProfileImage';
import TextButton from '@/components/buttons/TextButton';

import styles from '@/styles/text/text.module.css';

import ellipsisHorizontal from '@/public/ellipsis-horizontal/ellipsis-horizontal.svg';
import hoveredEllipsisHorizontal from '@/public/ellipsis-horizontal/ellipsis-horizontal-hovered.svg';


type Props = {
    detailedPost: DetailedPostDTO,
}


export default function PostMenuComponent({ detailedPost }: Props) {
    const [post] = useState<PostDTO>(detailedPost.postDTO);
    const [author] = useState<UserDTO>(detailedPost.authorDTO);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [isUserPostOwner] = useState<boolean>(author.state == UserState.Current);
    const createdDate: string = formatDateTime(post.createdDate);
    const [following, setFollowing] = useState<boolean>(author.state == UserState.Follow);
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const t = useTranslations('form');
    const router = useRouter();

    async function onDeletePost() {
        await deletePost(post.id);
        router.push(`/${author.username}`);
    }

    async function followProfile() {
        setFollowing(true);
        await follow(author.username);
    }

    async function unfollowProfile() {
        setFollowing(false);
        await unfollow(author.username);
    }

    return (
        <div className='flex justify-around items-center'>
            <Link href={`/${post.username}`}>
                <ProfileImage profileImageExist={author.isProfileImageExist} username={author.username} preview />
            </Link>
            <div className="flex-1 flex gap-2 mx-4">
                <span className={`${styles['main-info']}`}>{author.username}</span>
                <time dateTime={createdDate} className={`${styles['secondary-info']} truncate`}>{createdDate}</time>
            </div>
            <IconButton
                icon={ellipsisHorizontal}
                hoveredIcon={hoveredEllipsisHorizontal}
                onClick={(e) => { setShowDropdown(!showDropdown) }}
                className={showDropdown ? "pointer-events-none" : ""}
            />
            <Dropdown isVisible={showDropdown} onOutsideClicked={() => setShowDropdown(false)}>
                {isUserPostOwner
                    ? <>
                        <DropdownButton style='primary' text={t('editPost')} onClick={() => { router.push(`/post/${post.id}/edit`); }} />
                        <DropdownButton style='remove' text={t('deletePost')} onClick={() => { setShowModal(true); }} />
                    </>
                    : following
                        ? <DropdownButton style='remove' text={t('unfollow')} onClick={unfollowProfile} />
                        : <DropdownButton style='primary' text={t('follow')} onClick={followProfile} />
                }
            </Dropdown>
            <Modal onCloseClicked={() => { setShowModal(false); }} title={t('deletePost')} opened={showModal}>
                <div className='flex flex-col gap-20'>
                    <p>{t('deleteThisPost')}</p>
                    <TextButton style="remove" text={t('delete')} onClick={onDeletePost} />
                </div>
            </Modal>
        </div>
    )
}
