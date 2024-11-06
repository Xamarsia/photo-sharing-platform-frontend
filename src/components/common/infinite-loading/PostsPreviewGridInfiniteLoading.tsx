'use client';

import PostsPreviewGrid from '@/components/post/PostsPreviewGrid';
import InfiniteLoading from '@/components/common/infinite-loading/InfiniteLoading';


type Props = {
    username: string,
}


export default function PostsPreviewGridInfiniteLoading({ username }: Props) {
    return (
        <InfiniteLoading<PostPreviewDTO> size={6} displayItems={
            (items) => (<PostsPreviewGrid posts={items} />)
        } url={`/post/preview/${username}`} />
    );
}
