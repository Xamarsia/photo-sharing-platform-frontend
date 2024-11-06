import 'server-only';


import { getDictionary } from '@/lib/localization';

import ChangeUserInfoForm from '@/components/forms/profile/ChangeUserInfoForm';
import SettingPage from '@/components/common/SettingPage';
import { getAuthenticatedUser } from '@/actions/user-actions';


export default async function ChangeUserInfoPage() {
    const dict = await getDictionary('en');
    const user: UserDTO | undefined = await getAuthenticatedUser();

    return (
        <SettingPage local={dict} title={dict.changeUserInfo} >
            {user && <ChangeUserInfoForm local={dict} user={user} />}
        </SettingPage>
    );
}
