'server-only';


import ProfilePreviewListInfiniteLoading from '@/components/common/infinite-loading/ProfilePreviewListInfiniteLoading';
import type { Metadata } from 'next'

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ searchParams }: Props,): Promise<Metadata> {
  const query: string | string[] | undefined = (await searchParams).query;

  return {
    title: `${query} - Search`,
    description: 'SPSP Search page',
  }
}


export default async function SearchPage({ searchParams }: Props) {
  const query: string | string[] | undefined = (await searchParams).query;

  return <>
    {query && <ProfilePreviewListInfiniteLoading url={`/user/search`} size={20} urlParams={`substring=${query}`} />}
  </>
}
