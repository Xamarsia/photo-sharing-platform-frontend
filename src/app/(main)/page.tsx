'server-only';

import styles from '@/styles/components/page.module.css';

import PostsListInfiniteLoading from '@/components/common/infinite-loading/PostsListInfiniteLoading';
import { getDictionary } from '@/lib/localization';


export default async function NewsPage() {
  const dict = await getDictionary('en');

  return (
    <div className={`${styles['simple-page-layout']}`}>
      <PostsListInfiniteLoading local={dict} url={`/post/random/detailed`} size={20} />
    </div>
  )
}
