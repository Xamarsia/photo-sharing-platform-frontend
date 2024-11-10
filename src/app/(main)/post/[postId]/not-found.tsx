import 'server-only';

import NotFound from '@/components/common/NotFound';

import { useTranslations } from 'next-intl';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Not Found',
}

export default function InvalidURLPage() {
    const t = useTranslations('NotFound');

    return (
        <div className='flex flex-grow flex-shrink justify-center items-center m-4'>
            <NotFound alertTitle={t('postNotFound')} alertBody={t('postDoesNotExist')} />
        </div>
    );
}
