import 'server-only';

import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import SettingsPage from '@/components/common/SettingsPage';
import ChangeProfileImageContent from '@/components/page-contents/ChangeProfileImageContent';


export const metadata: Metadata = {
  title: 'Profile Image Update'
}


export default async function ChangeProfileImagePage() {
  const t = await getTranslations('editProfile');

  return (
    <SettingsPage title={t('changeProfileImage')}>
      <ChangeProfileImageContent />
    </SettingsPage>
  );
}
