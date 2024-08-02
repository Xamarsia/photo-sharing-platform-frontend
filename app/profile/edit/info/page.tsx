import 'server-only';


import { getDictionary } from '@/lib/localization';

import ChangeUserInfoForm from '@/components/forms/profile/ChangeUserInfoForm';
import SettingPage from '@/components/common/SettingPage';


export default async function ChangeUserInfoPage() {
    const dict = await getDictionary('en');

    return (
        <SettingPage title={dict.changeUserInfo} >
            <ChangeUserInfoForm local={dict} />
        </SettingPage>
    );
}
