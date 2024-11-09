import 'server-only';

import { getTranslations } from 'next-intl/server';

import ChangeProfileImageContent from '@/components/page-contents/ChangeProfileImageContent';
import SettingsPage from '@/components/common/SettingsPage';
import { getAuthenticatedUser } from '@/actions/user-actions';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Profile Image Update'
}


export default async function ChangeProfileImagePage() {
  const user: UserDTO | undefined = await getAuthenticatedUser();
  const t = await getTranslations('editProfile');

  return (
    <SettingsPage title={t('changeProfileImage')}>
      {user && <ChangeProfileImageContent user={user} />}
    </SettingsPage>
  );
}
