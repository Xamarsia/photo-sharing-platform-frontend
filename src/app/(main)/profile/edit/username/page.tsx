import 'server-only';

import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getAuthenticatedUser } from '@/actions/user-actions';

import ChangeUsernameContent from '@/components/page-contents/ChangeUsernameContent';
import SettingsPage from '@/components/common/SettingsPage';


export const metadata: Metadata = {
    title: 'Username Update'
}


export default async function ChangeUsernamePage() {
    const user: UserDTO | undefined = await getAuthenticatedUser();
    const t = await getTranslations('editProfile');

    return (
        <SettingsPage title={t('changeUsername')} >
            {user && <ChangeUsernameContent oldUsername={user.username} />}
        </SettingsPage>
    );
}
