"use client";


import Link from 'next/link';
import { useState } from 'react';

import { UserState } from '@/constants';
import { getProfileImagePreview } from '@/lib/profile-controller';

import PostDropdown from '@/components/post/PostDropdown';
import DropdownButton from '@/components/buttons/DropdownButton';

import styles from '@/app/styles/text/text.module.css';


type Props = {
    local: any,
    detailedPost: DetailedPostDTO,
}


export default function PostMenuComponent({ local, detailedPost }: Props) {
    const [post] = useState<PostDTO>(detailedPost.postDTO);
    const [postAuthor] = useState<UserPreviewDTO>(detailedPost.authorDTO);
    const [isUserPostOwner] = useState<boolean>(postAuthor.state == UserState.Current);

    const profileImagePreview = getProfileImagePreview(detailedPost.authorDTO);

    return (
        <div className='flex justify-around items-center'>
            <Link href={`/${post.username}`}>{profileImagePreview}</Link>
            <div className="flex-1 flex gap-2 mx-4">
                <span className={`${styles['main-info']}`}>{postAuthor.fullName}</span>
                <span className={`${styles['secondary-info']}`}>{post.createdDate}</span>
            </div>
            <PostDropdown>
                <DropdownButton text={local.goToPost} />
                {isUserPostOwner
                    ? <>
                        <DropdownButton text={local.editPost} />
                        <DropdownButton text={local.deletePost} />

                    </>
                    :
                    <> {postAuthor.state == UserState.Unfollowed
                        ? <DropdownButton text={local.follow} />
                        : <DropdownButton text={local.unfollow} />
                    } </>
                }
            </PostDropdown>
        </div>
    )
}
