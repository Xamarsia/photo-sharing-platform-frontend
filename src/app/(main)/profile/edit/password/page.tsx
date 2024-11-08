import 'server-only';

import { useTranslations } from 'next-intl';

import ChangePasswordForm from '@/components/forms/profile/ChangePasswordForm';
import SettingPage from '@/components/common/SettingPage';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Change Password'
}


export default function ChangePasswordPage() {
    const t = useTranslations('editProfile');

    return (
        <SettingPage title={t('changePassword')}>
            <ChangePasswordForm />
        </SettingPage>
    );
}
