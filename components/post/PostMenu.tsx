"use client";

import Link from 'next/link';
import { useState } from 'react';

import styles from '@/app/styles/post/post.module.css';
import textStyles from '@/app/styles/components/text.module.css';

import { UserState } from '@/constants';
import { getProfileImagePreview } from '@/lib/profile-controller';

import Button from '@/components/Button';
import FollowButton from '@/components/FollowButton';
import PostDropdown from '@/components/post/PostDropdown';


type PostProps = {
    local: any,
    detailedPost: DetailedPostDTO
}

export default function PostMenuComponent({ local, detailedPost }: PostProps) {
    const [post] = useState<PostDTO>(detailedPost.postDTO);
    const [postAuthor] = useState<UserPreviewDTO>(detailedPost.authorDTO);
    const [isUserPostOwner] = useState<boolean>(postAuthor.state == UserState.Current);

    const profileImagePreview = getProfileImagePreview(detailedPost.authorDTO);

    return (
        <div className={`${styles["post-menu-layout"]}`}>
            <Link href={`/${post.username}`}>{profileImagePreview}</Link>
            <div className="flex-1 flex flex-row gap-4 ">
                <p className={`${textStyles["main-info"]}`}>{postAuthor.fullName}</p>
                <p className={`${textStyles["secondary-info"]}`}>{'@' + postAuthor.username}</p>
                <p className={`${textStyles["secondary-info"]}`}>{'\u2022' + post.createdDate}</p>
            </div>
            <PostDropdown>
                <Button style='dropdown-button' text={local.goToPost} type='button' />
                {isUserPostOwner
                    ? <>
                        <Button style='dropdown-button' text={local.editPost} type='button' />
                        <Button style='red-dropdown-button' text={local.deletePost} type='button' />
                    </>
                    : <FollowButton local={local} user={postAuthor} dropdown />
                }
            </PostDropdown>
        </div>
    )
}
