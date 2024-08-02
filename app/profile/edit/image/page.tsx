import 'server-only';


import { getDictionary } from '@/lib/localization';

import ChangeProfileImageForm from '@/components/forms/profile/ChangeProfileImageForm';
import SettingPage from '@/components/common/SettingPage';


export default async function ChangeUserInfoPage() {
    const dict = await getDictionary('en');

    return (
        <SettingPage title={dict.changeProfileImage} >
            <ChangeProfileImageForm local={dict} />
        </SettingPage>
    );
}
