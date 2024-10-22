import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/app/styles/globals.css';

import { getDictionary } from '@/lib/localization';

import Footer from '@/components/common/footer/Footer';
import Header from '@/components/common/header/Header';
import AuthProvider from '@/components/common/AuthProvider';
import AlertProvider from '@/components/common/alert/AlertProvider';
import AuthorizedGuard from '@/components/common/guards/AuthorizedGuard';
import FixedRoundCreatePostButton from '@/components/buttons/FixedRoundCreatePostButton';


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
      <AuthProvider>
        <AuthorizedGuard>
          <body className={`${inter.className} size-full flex flex-col items-stretch relative`}>
            <Header local={dict} />
            <main className='flex flex-grow relative flex-shrink-0 bg-gray-50 mt-20'>
              <AlertProvider>
                {children}
              </AlertProvider>
              <FixedRoundCreatePostButton />
            </main>
            <Footer local={dict} />
            {/* To prevent Firefox FOUC*/}
            <script>
              let FIREFOX_FOUC_FIX;
            </script>
          </body>
        </AuthorizedGuard>
      </AuthProvider>
    </html>
  )
}
