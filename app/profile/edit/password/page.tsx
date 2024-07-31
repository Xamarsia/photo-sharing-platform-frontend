import 'server-only';


import { getDictionary } from '@/lib/localization';
import ChangePasswordForm from '@/components/forms/profile/ChangePasswordForm';
import SettingPage from '@/components/common/SettingPage';


export default async function ChangePasswordPage() {
    const dict = await getDictionary('en');

    return (
        <SettingPage title={dict.changePassword} >
            <ChangePasswordForm local={dict} />
        </SettingPage>
    );
}
