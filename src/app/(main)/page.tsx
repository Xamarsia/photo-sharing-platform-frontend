'server-only';

import NewsPageContent from '@/components/page-contents/NewsPageContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "News"
}

export default async function NewsPage() {
  return (
    <div className='m-4'>
      <NewsPageContent />
    </div>
  )
}
