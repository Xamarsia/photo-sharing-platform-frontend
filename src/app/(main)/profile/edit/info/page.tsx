import 'server-only';


import ChangeUserInfoForm from '@/components/forms/profile/ChangeUserInfoForm';
import SettingsPage from '@/components/common/SettingsPage';

import { getAuthenticatedUser } from '@/actions/user-actions';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Edit Profile Info'
}


export default async function ChangeUserInfoPage() {
    const user: UserDTO | undefined = await getAuthenticatedUser();
    const t = await getTranslations('editProfile');

    return (
        <SettingsPage title={t('changeUserInfo')} >
            {user && <ChangeUserInfoForm user={user} />}
        </SettingsPage>
    );
}
