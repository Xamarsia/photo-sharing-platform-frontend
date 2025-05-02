import '@/styles/globals.css';

import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

import AuthProvider from '@/components/common/AuthProvider';
import AuthWrapper from '@/components/common/AuthWrapper';
import Footer from '@/components/common/footer/Footer';
import UserGuard from '@/components/common/guards/UserGuard';
import AuthHeader from '@/components/common/header/AuthHeader';
import UnAuthHeader from '@/components/common/header/UnAuthHeader';
import AlertProvider from '@/components/common/alert/AlertProvider';
import FixedRoundCreatePostButton from '@/components/buttons/FixedRoundCreatePostButton';


export const metadata: Metadata = {
  title: 'SPSP',
  description: 'Simple Photo Sharing Platform',
}

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className='size-full'>
      <body className='size-full flex flex-col items-stretch relative'>
        <NextIntlClientProvider messages={messages}>
          <AuthProvider>
            <UserGuard>
              <AuthWrapper auth={<AuthHeader />} unAuth={<UnAuthHeader />} />
              <div className='flex flex-grow flex-col justify-center relative'>
                <main className='flex flex-grow justify-center relative flex-shrink-0 bg-gray-50 mt-20'>
                  <AlertProvider>
                    {children}
                  </AlertProvider>
                </main>
                <AuthWrapper auth={<FixedRoundCreatePostButton />} />
                <Footer />
              </div>
            </UserGuard>
          </AuthProvider>
        </NextIntlClientProvider>
        {/* To prevent Firefox FOUC*/}
        <script>
          let FIREFOX_FOUC_FIX;
        </script>
      </body>
    </html>
  );
}
