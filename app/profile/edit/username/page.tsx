import 'server-only';


import { getDictionary } from '@/lib/localization';

import ChangeUsernameForm from '@/components/forms/profile/ChangeUsernameForm';
import SettingPage from '@/components/common/SettingPage';


export default async function ChangeUsernamePage() {
    const dict = await getDictionary('en');

    return (
        <SettingPage title={dict.changeUsername} >
            <ChangeUsernameForm local={dict} />
        </SettingPage>
    );
}
