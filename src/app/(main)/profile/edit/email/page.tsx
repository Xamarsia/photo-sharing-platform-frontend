import 'server-only';


import { getTranslations } from 'next-intl/server';
import { getAuthenticatedApp } from '@/lib/firebase/serverApp';

import ChangeEmailForm from '@/components/forms/profile/ChangeEmailForm';
import SettingPage from '@/components/common/SettingPage';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Email Update'
}


export default async function ChangeEmailPage() {
    const t = await getTranslations('editProfile');
    const email: string | null | undefined = (await getAuthenticatedApp()).currentUser?.email;

    return (
        <SettingPage title={t('changeEmail')} >
            {email && <ChangeEmailForm oldEmail={email} />}
        </SettingPage>
    );
}
