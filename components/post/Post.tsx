"use client";


import { useState } from 'react';

import Card from '@/components/common/Card';
import PostMenu from '@/components/post/PostMenu';
import PostImage from '@/components/post/PostImage';

import styles from '@/app/styles/text/text.module.css';


type Props = {
    local: any,
    detailedPost: DetailedPostDTO,
}


export default async function Post({ local, detailedPost }: Props) {
    const [post] = useState<PostDTO>(detailedPost.postDTO);

    return (
        <Card>
            <PostMenu local={local} detailedPost={detailedPost} />
            <PostImage postId={post.id} />
            <p className={`${styles['base-text']}`}>{post.description}</p>
        </Card>
    )
}
