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
    <center>
      <div className="flex flex-row sm:w-10/12 md:w-9/12 lg:w-4/6">
        <section className='flex-grow-0'>
          <div className='relative flex flex-col h-full top-0 left-0 border-r border-gray-200'>
            <div className='sticky top-20'>
              <Sidebar local={dict} />
            </div>
          </div>
        </section>

        <div className="flex-grow flex-shrink-0">
          <div className="content-block flex flex-col gap-4">
            {children}
          </div>
        </div>
      </div>
    </center>
  )
}
