"use client"


import { useState } from 'react';

import postImage from '@/public/profile5.jpg'

import Card from '@/components/common/Card';
import PostMenu from '@/components/post/PostMenu';
import TextBlock from '@/components/common/TextBlock';
import PostImage from '@/components/post/image/PostImage';


type Props = {
    local: any,
    detailedPost: DetailedPostDTO,
}


export default function PostComponent({ local, detailedPost }: Props) {
    const [post] = useState<PostDTO>(detailedPost.postDTO);

    return (
        <Card size='large'>
            <PostMenu local={local} detailedPost={detailedPost} />
            <div className='px-4 my-4 pb-4'>
                <PostImage src={postImage} size={'full'} />
            </div>
            <TextBlock size='base' text={post.description} />
        </Card>
    )
}
