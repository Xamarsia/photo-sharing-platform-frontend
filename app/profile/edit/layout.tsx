import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/app/styles/globals.css';

import { getDictionary } from '@/lib/localization';
import Sidebar from '@/components/common/Sidebar';

import DropdownNavbar from '@/components/common/DropdownNavbar';

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
    <div className='flex flex-grow flex-col w-full relative flex-shrink-0'>
      <nav className="sticky top-20 bg-white w-full border-y border-gray-100 md:hidden block">
        <DropdownNavbar local={dict} />
      </nav>

      <div className="flex justify-center w-full">
        <div className='flex flex-row w-full max-w-6xl bg-white m-4 p-4 rounded-2xl'>

          <section className='relative hidden md:flex flex-col top-0 left-0 h-full border-r border-gray-100'>
            <div className='sticky top-20'>
              <Sidebar local={dict} />
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
