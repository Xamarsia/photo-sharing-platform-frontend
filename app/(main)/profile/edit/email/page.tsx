import 'server-only';


import { getDictionary } from '@/lib/localization';

import ChangeEmailForm from '@/components/forms/profile/ChangeEmailForm';
import SettingPage from '@/components/common/SettingPage';
import { getEmail } from '@/lib/firebase/serverApp';


export default async function ChangeEmailPage() {
    const dict = await getDictionary('en');
    const email = await getEmail();

    return (
        <SettingPage local={dict} title={dict.changeEmail} >
            {email && <ChangeEmailForm local={dict} />}
        </SettingPage>
    );
}
