'server-only';


import PostsListInfiniteLoading from '@/components/common/infinite-loading/PostsListInfiniteLoading';
import { getDictionary } from '@/lib/localization';


export default async function NewsPage() {

  const dict = await getDictionary('en');

  return <>
    <div className='flex m-4 flex-grow flex-shrink justify-center items-center'>
      <PostsListInfiniteLoading local={dict} url={`/post/random/detailed`} size={20} />
    </div>
  </>
}
