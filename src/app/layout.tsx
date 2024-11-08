import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

import '@/styles/globals.css';
import styles from '@/styles/components/page.module.css';


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
            <body className={`${styles['body']}`}>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
                {/* To prevent Firefox FOUC*/}
                <script>
                    let FIREFOX_FOUC_FIX;
                </script>
            </body>
        </html>
    );
}