import 'server-only';


import SettingsPage from '@/components/common/SettingsPage';
import ChangeUserInfoForm from '@/components/forms/profile/ChangeUserInfoForm';

import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';


export const metadata: Metadata = {
    title: 'Edit Profile Info'
}


export default async function ChangeUserInfoPage() {
    const t = await getTranslations('editProfile');

    return (
        <SettingsPage title={t('changeUserInfo')} >
            <ChangeUserInfoForm />
        </SettingsPage>
    );
}
