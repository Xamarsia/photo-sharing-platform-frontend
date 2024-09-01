"use client";


import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useState } from 'react';
import { UserState } from '@/constants';

import PostDropdown from '@/components/post/PostDropdown';
import DropdownButton from '@/components/buttons/DropdownButton';
import ProfileImage from '@/components/profile/image/ProfileImage';

import styles from '@/app/styles/text/text.module.css';
import { deletePost } from '@/actions/post-actions';
import { follow, unfollow } from '@/actions/user-actions';
import { formatDateTime } from '@/lib/dateTime';


type Props = {
    local: any,
    detailedPost: DetailedPostDTO,
}


export default function PostMenuComponent({ local, detailedPost }: Props) {
    const [post] = useState<PostDTO>(detailedPost.postDTO);
    const [author] = useState<UserDTO>(detailedPost.authorDTO);
    const [isUserPostOwner] = useState<boolean>(author.state == UserState.Current);
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
                <time dateTime={post.createdDate} suppressHydrationWarning className={`${styles['secondary-info']}`}>{formatDateTime(post.createdDate)}</time>
            </div>
            <PostDropdown>
                <DropdownButton text={local.goToPost} onClick={() => { router.push(`/post/${post.id}`); }} />
                {isUserPostOwner
                    ? <>
                        <DropdownButton text={local.editPost} onClick={() => { router.push(`/post/${post.id}/edit`); }} />
                        <DropdownButton text={local.deletePost} onClick={onDeletePost} />
                    </>
                    :
                    <> {author.state == UserState.Unfollowed
                        ? <DropdownButton text={local.follow} onClick={follow} />
                        : <DropdownButton text={local.unfollow} onClick={unfollow} />
                    } </>
                }
            </PostDropdown>
        </div>
    )
}
