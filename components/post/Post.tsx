"use client";


import { useState } from 'react';

import postImage from '@/public/profile5.jpg'
import Image from 'next/image';

import Card from '@/components/common/Card';
import PostMenu from '@/components/post/PostMenu';

import styles from '@/app/styles/text/text.module.css';

type Props = {
    local: any,
    detailedPost: DetailedPostDTO,
}


export default function PostComponent({ local, detailedPost }: Props) {
    const [post] = useState<PostDTO>(detailedPost.postDTO);

    return (
        <Card>
            <PostMenu local={local} detailedPost={detailedPost} />
            <div className='m-3 sm:m-4'>
                <Image className={`size-full object-cover object-center rounded-xl`}
                    src={postImage} width="400" height="400" alt="Post image" />
            </div>
            <p className={`${styles['base-text']}`}>{post.description}</p>
        </Card>
    )
}
