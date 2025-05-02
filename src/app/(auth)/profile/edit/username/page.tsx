import 'server-only';

import { Metadata } from 'next';
import { useTranslations } from 'next-intl';

import SettingsPage from '@/components/common/SettingsPage';
import ChangeUsernameContent from '@/components/page-contents/ChangeUsernameContent';


export const metadata: Metadata = {
    title: 'Username Update'
}


export default function ChangeUsernamePage() {
    const t = useTranslations('editProfile');

    return (
        <SettingsPage title={t('changeUsername')} >
            <ChangeUsernameContent />
        </SettingsPage>
    );
}
