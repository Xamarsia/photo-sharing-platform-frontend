'use client';


import InfiniteLoading from '@/components/common/infinite-loading/InfiniteLoading';
import PostsPreviewGrid from '@/components/post/PostsPreviewGrid';


type Props = {
    username: string,
}


export default async function PostsPreviewGridInfiniteLoading({ username }: Props) {
    return (
        <InfiniteLoading<PostPreviewDTO> size={6} url={`/post/preview/${username}`} displayItems={(items) => (<PostsPreviewGrid posts={items} />)} />
    );
}
