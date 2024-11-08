'server-only';

import styles from '@/styles/components/page.module.css';

import PostsListInfiniteLoading from '@/components/common/infinite-loading/PostsListInfiniteLoading';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "News"
}

export default async function NewsPage() {

  return (
    <div className={`${styles['simple-page-layout']}`}>
      <PostsListInfiniteLoading url={`/post/random/detailed`} size={20} />
    </div>
  )
}
