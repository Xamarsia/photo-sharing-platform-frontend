"use client";


import { useCallback, useState } from 'react';

import Card from '@/components/common/Card';
import PostMenu from '@/components/post/PostMenu';
import LikesInfo from '@/components/common/LikesInfo';
import IconButton from '@/components/buttons/IconButton';
import PostImage from '@/components/post/image/PostImage';

import styles from '@/styles/text/text.module.css';
import { LikeState } from '@/constants';
import { like, deleteLike } from "@/actions/post-actions";

import heart from '@/public/heart/heart.svg';
import heartOutline from '@/public/heart/outline/heart-outline.svg';
import heartHoveredOutline from '@/public/heart/outline/heart-hovered-outline.svg';


type Props = {
    detailedPost: DetailedPostDTO,
}


export default function Post({ detailedPost }: Props) {
    const [post] = useState<PostDTO>(detailedPost.postDTO);
    const [liking, setLiking] = useState<boolean>(detailedPost.state == LikeState.Like);

    const onLikePost = useCallback(async (): Promise<void> => {
        setLiking(true);
        await like(post.id);
    }, [liking, post]);

    const onDeleteLike = useCallback(async (): Promise<void> => {
        setLiking(false);
        await deleteLike(post.id);
    }, [liking, post]);

    return (
        <Card>
            <div className='flex flex-col gap-y-3'>
                <PostMenu detailedPost={detailedPost} />
                <PostImage postId={post.id} />
                <p className={`${styles['base-text']}`}>{post.description}</p>
                <div className='flex items-center justify-end gap-4 '>
                    <LikesInfo post={post} />
                    {liking
                        ? <IconButton icon={heart} hoveredIcon={heart} onClick={onDeleteLike} />
                        : <IconButton icon={heartOutline} hoveredIcon={heartHoveredOutline} onClick={onLikePost} />
                    }
                </div>
            </div>
        </Card>
    )
}
