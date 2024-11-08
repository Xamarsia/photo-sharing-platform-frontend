"use client";


import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { UserState } from '@/constants';
import { formatDateTime } from '@/utils/dateTime';
import { deletePost } from '@/actions/post-actions';

import Modal from '@/components/common/Modal';
import PostDropdown from '@/components/post/PostDropdown';
import DropdownButton from '@/components/buttons/DropdownButton';
import ProfileImage from '@/components/profile/image/ProfileImage';
import TextRemoveButton from '@/components/buttons/TextRemoveButton';
import DropdownRemoveButton from '@/components/buttons/DropdownRemoveButton';
import ToggleDropdownFollowButton from '@/components/buttons/ToggleDropdownFollowButton';

import styles from '@/styles/text/text.module.css';


type Props = {
    detailedPost: DetailedPostDTO,
}


export default function PostMenuComponent({ detailedPost }: Props) {
    const [post] = useState<PostDTO>(detailedPost.postDTO);
    const [author] = useState<UserDTO>(detailedPost.authorDTO);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [isUserPostOwner] = useState<boolean>(author.state == UserState.Current);
    const createdDate: string = formatDateTime(post.createdDate);
    const t = useTranslations('form');
    const router = useRouter();

    async function onDeletePost() {
        await deletePost(post.id);
        router.push(`/${author.username}`);
    }

    return (
        <div className='flex justify-around items-center'>
            <Link href={`/${post.username}`}>
                <ProfileImage profileImageExist={author.isProfileImageExist} username={author.username} preview />
            </Link>
            <div className="flex-1 flex gap-2 mx-4">
                <span className={`${styles['main-info']}`}>{author.username}</span>
                <time dateTime={createdDate} className={`${styles['secondary-info']}`}>{createdDate}</time>
            </div>
            <PostDropdown>
                {isUserPostOwner
                    ? <>
                        <DropdownButton text={t('editPost')} onClick={() => { router.push(`/post/${post.id}/edit`); }} /> // ALL CALLBACKS MUST USE USECALLBACK
                        <DropdownRemoveButton text={t('deletePost')} onClick={() => { setShowModal(true); }} />
                    </>
                    : <ToggleDropdownFollowButton user={author} /> //split toggle dropdown follow button
                }
            </PostDropdown>
            <Modal onCloseClicked={() => { setShowModal(false); }} title={t('deletePost')} opened={showModal}>
                <div className='flex flex-col gap-20'>
                    <p>{t('deleteThisPost')}</p>
                    <TextRemoveButton text={t('delete')} onClick={onDeletePost} />
                </div>
            </Modal>
        </div>
    )
}
