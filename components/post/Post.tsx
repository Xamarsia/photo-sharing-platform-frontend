"use client"


import { useState } from 'react';

import postImage from '@/public/profile5.jpg'

import Text from '@/components/common/Text';
import Card from '@/components/common/Card';
import PostMenu from '@/components/post/PostMenu';
import PostImage from '@/components/post/image/PostImage';


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
            <Text style='base-text' size='base' text={post.description} />
        </Card>
    )
}
