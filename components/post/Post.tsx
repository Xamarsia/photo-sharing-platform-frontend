"use client";


import { useState } from 'react';

import Card from '@/components/common/Card';
import PostMenu from '@/components/post/PostMenu';
import PostImage from '@/components/post/image/PostImage';

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
            </div>
        </Card>
    )
}
