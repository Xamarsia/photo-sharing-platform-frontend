"use client";


import { useState } from "react";
import { LikeState } from '@/constants';

import { like, unlike } from "@/actions/post-actions";

import heart from '@/public/heart/heart.svg';

import heartOutline from '@/public/heart/outline/heart-outline.svg';
import heartHoveredOutline from '@/public/heart/outline/heart-hovered-outline.svg';


import IconButton from "@/components/buttons/IconButton";


type Props = {
    postId: number,
    state: LikeState,
}

export default function ToggleLikeButton({ postId, state }: Props) {
    const [liking, setLiking] = useState<boolean>(state == LikeState.Liked);

    async function likePost() {
        setLiking(true);
        await like(postId);
    }

    async function unlikePost() {
        setLiking(false);
        await unlike(postId);
    }

    return (
        <>
            {liking
                ? <IconButton icon={heart} hoveredIcon={heart}
                onClick={unlikePost} 
                />
                : <IconButton icon={heartOutline} hoveredIcon={heartHoveredOutline}
                onClick={likePost}
                />
            }
        </>
    );
}
