import 'server-only';

import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getAuthenticatedApp } from '@/lib/firebase/serverApp';

import SettingsPage from '@/components/common/SettingsPage';
import ChangeEmailContent from '@/components/page-contents/ChangeEmailContent';


export const metadata: Metadata = {
    title: 'Email Update'
}


export default async function ChangeEmailPage() {
    const t = await getTranslations('editProfile');
    const email: string | null | undefined = (await getAuthenticatedApp()).currentUser?.email;

    return (
        <SettingsPage title={t('changeEmail')} >
            {email && <ChangeEmailContent oldEmail={email} />}
        </SettingsPage>
    );
}
