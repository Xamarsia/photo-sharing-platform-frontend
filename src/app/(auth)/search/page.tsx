'server-only';

import type { Metadata } from 'next'

import SearchPageContent from '@/components/page-contents/SearchPageContent';
import { notFound } from 'next/navigation';

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

  if (!query) {
    notFound();
  }

  return (
    <div className='flex flex-col items-center w-full max-w-6xl bg-white m-4 p-6 md:p-8 rounded-2xl'>
      <SearchPageContent query={query} key={query.toString()} />
    </div>
  )
}
