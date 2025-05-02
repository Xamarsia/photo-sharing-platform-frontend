import 'server-only';

import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getProvider } from '@/lib/firebase/serverApp';

import DeleteAccountContent from '@/components/page-contents/DeleteAccountContent';
import SettingsPage from '@/components/common/SettingsPage';


export const metadata: Metadata = {
    title: 'Delete Account'
}


export default async function DeleteAccountPage() {
    const provider: string[] | undefined = await getProvider();
    const t = await getTranslations('form');

    return (
        <SettingsPage title={t('deleteAccount')} >
            {provider && <DeleteAccountContent provider={provider} />}
        </SettingsPage>
    );
}
