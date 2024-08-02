"use client";


import { useState } from 'react';

import postImage from '@/public/profile5.jpg'

import Card from '@/components/common/Card';
import PostMenu from '@/components/post/PostMenu';
import PostImage from '@/components/post/image/PostImage';

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
            <div className='px-4 my-4 pb-4'>
                <PostImage src={postImage} size={'full'} />
            </div>

            <p className={`${styles['base-text']} ${styles['base']}`}>
                {post.description}
            </p>
        </Card>
    )
}
