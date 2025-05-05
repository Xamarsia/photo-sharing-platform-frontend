"use client";

import { getNewsPostsPage } from '@/actions/user-actions';

import PostsList from '@/components/post/PostsList';
import InfiniteLoading from '@/components/common/infinite-loading/InfiniteLoading';


export default function NewsPageContent() {
    return (
        <InfiniteLoading<DetailedPostDTO>
            displayItems={(items) => (<PostsList posts={items} />)}
            fetchPage={getNewsPostsPage}
        />
    )
}
