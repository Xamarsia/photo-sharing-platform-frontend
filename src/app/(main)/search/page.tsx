'server-only';


import ProfilePreviewListInfiniteLoading from '@/components/common/infinite-loading/ProfilePreviewListInfiniteLoading';

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>


export default async function SearchPage(props: {
  searchParams: SearchParams
}) {
  const searchParams = await props.searchParams;
  const query: string | string[] | undefined = searchParams.query;

  return <>
    {query && <ProfilePreviewListInfiniteLoading url={`/user/search`} size={20} urlParams={`substring=${query}`} />}
  </>
}
