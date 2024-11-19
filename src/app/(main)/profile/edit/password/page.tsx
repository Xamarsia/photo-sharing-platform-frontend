import 'server-only';

import { useTranslations } from 'next-intl';

import ChangePasswordForm from '@/components/forms/profile/ChangePasswordForm';
import SettingsPage from '@/components/common/SettingsPage';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Change Password'
}


export default function ChangePasswordPage() {
    const t = useTranslations('editProfile');

    return (
        <SettingsPage title={t('changePassword')}>
            <ChangePasswordForm />
        </SettingsPage>
    );
}
