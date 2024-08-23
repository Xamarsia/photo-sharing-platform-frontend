"use client";


import Link from 'next/link';

import { useState } from 'react';
import { UserState } from '@/constants';

import PostDropdown from '@/components/post/PostDropdown';
import DropdownButton from '@/components/buttons/DropdownButton';
import ProfileImage from '@/components/profile/image/ProfileImage';

import styles from '@/app/styles/text/text.module.css';


type Props = {
    local: any,
    detailedPost: DetailedPostDTO,
}


export default function PostMenuComponent({ local, detailedPost }: Props) {
    const [post] = useState<PostDTO>(detailedPost.postDTO);
    const [postAuthor] = useState<UserDTO>(detailedPost.authorDTO);
    const [isUserPostOwner] = useState<boolean>(postAuthor.state == UserState.Current);

    return (
        <div className='flex justify-around items-center'>
            <Link href={`/${post.username}`}>
                <ProfileImage profileImageExist={detailedPost.authorDTO.isProfileImageExist} username={detailedPost.authorDTO.username} preview />
            </Link>
            <div className="flex-1 flex gap-2 mx-4">
                <span className={`${styles['main-info']}`}>{postAuthor.username}</span>
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
