'server-only';


import ProfilePreviewListInfiniteLoading from '@/components/common/infinite-loading/ProfilePreviewListInfiniteLoading';
import { getDictionary } from '@/lib/localization';


type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>


export default async function SearchPage(props: {
  searchParams: SearchParams
}) {

  const searchParams = await props.searchParams;
  const dict = await getDictionary('en');
  const query: string | string[] | undefined = searchParams.query;

  return <>
    {query && <ProfilePreviewListInfiniteLoading local={dict} url={`/user/search`} size={20} urlParams={`substring=${query}`} />}
  </>
}
