'use client';

import PostPreview from '@/components/post/PostPreview';
import { useCallback } from 'react';


type PostsProps = {
    posts: Array<PostPreviewDTO>
}

export default function PostsPreview({ posts }: PostsProps) {
    /* Creates empty list elements to balance flexbox */
    const createEmptyListItems = useCallback(() => {
        if (posts.length % 3 == 0) {
            return;
        }

        let val = [];
        for (let i = (3 - (posts.length % 3)); i > 0; i--) {
            val.push(
                <li className='flex-1 basis-3/12' key={'empty-post-' + i}>
                    <div className='w-full aspect-square' />
                </li>
            )
        }
        return val;
    }, [posts.length]);

    return (
        <ul className='flex flex-grow size-full flex-wrap content-start gap-0.5 md:gap-1'>
            {posts.map(post => (
                <li key={post.id} className='flex flex-auto basis-3/12'>
                    <PostPreview post={post} />
                </li>
            ))}
            {createEmptyListItems()}
        </ul>
    )
}
