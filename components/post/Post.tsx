"use client";


import { useState } from 'react';

import Card from '@/components/common/Card';
import PostMenu from '@/components/post/PostMenu';
import LikesInfo from '@/components/common/LikesInfo';
import PostImage from '@/components/post/image/PostImage';
import ToggleLikeButton from '@/components/buttons/ToggleLikeButton';

import styles from '@/app/styles/text/text.module.css';
import formStyles from '@/app/styles/components/form.module.css';


type Props = {
    local: any,
    detailedPost: DetailedPostDTO,
}


export default function Post({ local, detailedPost }: Props) {
    const [post] = useState<PostDTO>(detailedPost.postDTO);

    return (
        <Card>
            <div className={`text-left ${formStyles['form-container']}`}>
                <PostMenu local={local} detailedPost={detailedPost} />
                <PostImage postId={post.id} />
                <p className={`${styles['base-text']}`}>{post.description}</p>
                <div className='flex items-center justify-end gap-4 '>
                    <LikesInfo local={local} post={post} />
                    <ToggleLikeButton postId={post.id} state={detailedPost.state} />
                </div>
            </div>
        </Card>
    )
}
