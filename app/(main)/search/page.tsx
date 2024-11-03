'server-only';


import ProfilePreviewListInfiniteLoading from '@/components/common/infinite-loading/ProfilePreviewListInfiniteLoading';
import { getDictionary } from '@/lib/localization';


export default async function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  const dict = await getDictionary('en');
  const query: string | string[] | undefined = searchParams.query;

  return <>
    {query && <ProfilePreviewListInfiniteLoading local={dict} url={`/user/search`} size={20} urlParams={`substring=${query}`} />}
  </>
}
