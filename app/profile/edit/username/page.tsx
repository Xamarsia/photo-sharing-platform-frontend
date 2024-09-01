import 'server-only';


import { getDictionary } from '@/lib/localization';

import ChangeUsernameForm from '@/components/forms/profile/ChangeUsernameForm';
import SettingPage from '@/components/common/SettingPage';
import { getAuthenticatedUser } from '@/actions/user-actions';


export default async function ChangeUsernamePage() {
    const dict = await getDictionary('en');

    const user: UserDTO | undefined = await getAuthenticatedUser();
    
    return (
        <SettingPage local={dict} title={dict.changeUsername} >
            { user && <ChangeUsernameForm local={dict} user={user} />}
        </SettingPage>
    );
}
