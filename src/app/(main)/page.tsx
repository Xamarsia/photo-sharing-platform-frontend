'server-only';


import PostsListInfiniteLoading from '@/components/common/infinite-loading/PostsListInfiniteLoading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "News"
}

export default async function NewsPage() {

  return (
    <div className='m-4'>
      <PostsListInfiniteLoading url={`/post/newsFeed`} size={20} />
    </div>
  )
}
