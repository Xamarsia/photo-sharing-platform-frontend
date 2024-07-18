"use client"


import { useState } from 'react';

import postImage from '@/public/profile5.jpg'

import Card from '@/components/common/Card';
import PostMenu from '@/components/post/PostMenu';
import PostImage from '@/components/post/image/PostImage';

import textStyles from '@/app/styles/components/text.module.css';

type PostProps = {
    local: any
    detailedPost: DetailedPostDTO
}


export default function PostComponent({ local, detailedPost }: PostProps) {
    const [post] = useState<PostDTO>(detailedPost.postDTO);

    return (
        <Card size='large'>
            <PostMenu local={local} detailedPost={detailedPost} />
            <div className='px-4 my-4 pb-4'>
                <PostImage src={postImage} size={'full'} />
            </div>
            <p className={`${textStyles['base-text']}`}>{post.description}</p>
        </Card>
    )
}
