import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/styles/globals.css';

import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import CreatePostButton from '@/components/buttons/CreatePostButton';

import { getDictionary } from '@/lib/localization';

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
    <html lang="en" className='size-full'>
      <body className={`${inter.className} size-full`}>
        <div className='min-h-full flex flex-col flex-grow items-stretch'>
          <header className='z-10 flex-shrink-0'>
            <Navbar local={dict} />
          </header>
          <main className='flex flex-grow relative flex-shrink-0 bg-green-200 justify-center items-center'>
            {children}
            <div className='absolute flex flex-col-reverse h-full top-0 right-0'>
              <div className='sticky bottom-4 m-4 sm:bottom-8 sm:m-8 md:hidden block'>
                <CreatePostButton local={dict} style='round' />
              </div>
            </div>
          </main>
          <footer className='flex-shrink-0'>
            <Footer local={dict} />
          </footer>
        </div>
      </body>
    </html>
  )
}
