import 'server-only';


import ChangeUserInfoForm from '@/components/forms/profile/ChangeUserInfoForm';
import SettingPage from '@/components/common/SettingPage';

import { getAuthenticatedUser } from '@/actions/user-actions';
import { getTranslations } from 'next-intl/server';


export default async function ChangeUserInfoPage() {
    const user: UserDTO | undefined = await getAuthenticatedUser();
    const t = await getTranslations('editProfile');

    return (
        <SettingPage title={t('changeUserInfo')} >
            {user && <ChangeUserInfoForm user={user} />}
        </SettingPage>
    );
}
