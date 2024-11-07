import 'server-only';

import { getTranslations } from 'next-intl/server';
import { getAuthenticatedUser } from '@/actions/user-actions';

import ChangeUsernameForm from '@/components/forms/profile/ChangeUsernameForm';
import SettingPage from '@/components/common/SettingPage';


export default async function ChangeUsernamePage() {
    const user: UserDTO | undefined = await getAuthenticatedUser();
    const t = await getTranslations('editProfile');

    return (
        <SettingPage title={t('changeUsername')} >
            {user && <ChangeUsernameForm user={user} />}
        </SettingPage>
    );
}
