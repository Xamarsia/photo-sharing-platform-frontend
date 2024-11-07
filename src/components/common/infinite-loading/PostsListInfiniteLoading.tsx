'use client';

import PostsList from '@/components/post/PostsList';
import InfiniteLoading from '@/components/common/infinite-loading/InfiniteLoading';


type Props = {
    url: string,
    size: number,
    urlParams?: string | undefined,
}


export default function PostsListInfiniteLoading({ url, size, urlParams }: Props) {
    return (
        <InfiniteLoading<DetailedPostDTO> size={size} displayItems={
            (items) => (<PostsList posts={items} />)
        } url={url} urlParams={urlParams} />
    );
}
