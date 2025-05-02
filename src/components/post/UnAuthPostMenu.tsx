"use client";

import styles from '@/styles/text/text.module.css';

import Link from 'next/link';
import { useState } from 'react';

import { formatDateTime } from '@/utils/dateTime';
import ProfileImage from '@/components/profile/image/ProfileImage';


type Props = {
    detailedPost: DetailedPostDTO,
}


export default function UnAuthPostMenu({ detailedPost }: Props) {
    const [post] = useState<PostDTO>(detailedPost.postDTO);
    const [author] = useState<UserDTO>(detailedPost.authorDTO);
    const createdDate: string = formatDateTime(post.createdDate);

    return (
        <div className='flex justify-around items-center shrink-0'>
            <Link href={`/${post.username}`} className='min-h-12 min-w-12'>
                <ProfileImage profileImageExist={author.isProfileImageExist} username={author.username} preview />
            </Link>
            <div className="flex-1 flex mx-4 w-16 flex-col">
                <span className={`${styles['main-info']} text-clip overflow-x-hidden`}>{author.username}</span>
                <time dateTime={createdDate} className={`${styles['secondary-info']}`}>{createdDate}</time>
            </div>
        </div>
    )
}
