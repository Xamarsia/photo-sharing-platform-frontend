

"use client";

import { getNewsPostsPage } from '@/actions/user-actions';
import PostsList from '../post/PostsList';
import InfiniteLoading from '../common/infinite-loading/InfiniteLoading';


export default function NewsPageContent() {
    return (
        <InfiniteLoading<DetailedPostDTO>
            displayItems={(items) => (<PostsList posts={items} />)}
            fetchPage={getNewsPostsPage}
        />
    )
}
