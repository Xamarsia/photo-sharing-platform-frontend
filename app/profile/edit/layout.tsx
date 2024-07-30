import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/app/styles/globals.css';

import { getDictionary } from '@/lib/localization';
import Sidebar from '@/components/common/Sidebar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const dict = await getDictionary('en');

  return (
    <div className="flex flex-row max-w-6xl w-full sm:w-11/12 lg:w-4/6 mx-auto px-4 sm:px-6 md:px-8">
      <section className='flex-grow-0 md:block hidden'>
        <div className='relative flex flex-col h-full top-0 left-0 border-r border-gray-200'>
          <div className='sticky top-20'>
            <Sidebar local={dict} size='small' />
          </div>
        </div>
      </section>

      <section className="flex-grow flex-shrink-0 p-2 md:p-4">
        {children}
      </section>
    </div>
  )
}
