import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/app/styles/globals.css';

import { getDictionary } from '@/lib/localization';
import { getSidebarItems } from '@/actions/actions';

import Sidebar from '@/components/common/sidebar/Sidebar';

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
  const sidebarItems = await getSidebarItems(dict);

  return (
    <div className='flex flex-grow flex-col w-full relative flex-shrink-0'>
      <div className="flex flex-auto justify-center w-full">
        <div className='flex flex-row w-full max-w-6xl bg-white m-4 p-4 rounded-2xl'>

          <section className='relative hidden md:flex flex-col top-0 left-0 h-full border-r border-gray-100'>
            <div className='sticky top-20'>
              <Sidebar local={dict} items={sidebarItems} />
            </div>
          </section>

          <section className="flex-grow flex-shrink-0 p-2 md:p-4">
            {children}
          </section>

        </div>
      </div>
    </div>
  )
}
