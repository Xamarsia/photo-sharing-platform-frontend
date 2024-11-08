import 'server-only';

import { getTranslations } from 'next-intl/server';

import ChangeProfileImageForm from '@/components/forms/profile/ChangeProfileImageForm';
import SettingPage from '@/components/common/SettingPage';
import { getAuthenticatedUser } from '@/actions/user-actions';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Profile Image Update'
}


export default async function ChangeProfileImagePage() {
  const user: UserDTO | undefined = await getAuthenticatedUser();
  const t = await getTranslations('editProfile');

  return (
    <SettingPage title={t('changeProfileImage')}>
      {user && <ChangeProfileImageForm user={user} />}
    </SettingPage>
  );
}
