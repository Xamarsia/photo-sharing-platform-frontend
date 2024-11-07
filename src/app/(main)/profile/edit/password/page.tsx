import 'server-only';

import { useTranslations } from 'next-intl';

import ChangePasswordForm from '@/components/forms/profile/ChangePasswordForm';
import SettingPage from '@/components/common/SettingPage';


export default function ChangePasswordPage() {
    const t = useTranslations('editProfile');

    return (
        <SettingPage title={t('changePassword')}>
            <ChangePasswordForm />
        </SettingPage>
    );
}
