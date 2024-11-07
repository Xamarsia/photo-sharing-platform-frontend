import 'server-only';

import { getTranslations } from 'next-intl/server';

import ChangeProfileImageForm from '@/components/forms/profile/ChangeProfileImageForm';
import SettingPage from '@/components/common/SettingPage';
import { getAuthenticatedUser } from '@/actions/user-actions';


export default async function ChangeUserInfoPage() {
  const user: UserDTO | undefined = await getAuthenticatedUser();
  const t = await getTranslations('editProfile');

  return (
    <SettingPage title={t('changeProfileImage')}>
      {user && <ChangeProfileImageForm user={user} />}
    </SettingPage>
  );
}
