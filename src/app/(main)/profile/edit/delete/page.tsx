import 'server-only';

import { getTranslations } from 'next-intl/server';
import { getProvider } from '@/lib/firebase/serverApp';

import DeleteAccountForm from '@/components/forms/profile/DeleteAccountForm';
import SettingPage from '@/components/common/SettingPage';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Delete Account'
}


export default async function DeleteAccountPage() {
    const provider: string[] | undefined = await getProvider();
    const t = await getTranslations('form');

    return (
        <SettingPage title={t('deleteAccount')} >
            {provider && <DeleteAccountForm provider={provider} />}
        </SettingPage>
    );
}
