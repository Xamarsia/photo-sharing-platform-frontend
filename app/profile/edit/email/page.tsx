import 'server-only';


import { getDictionary } from '@/lib/localization';

import ChangeEmailForm from '@/components/forms/profile/ChangeEmailForm';
import SettingPage from '@/components/common/SettingPage';


export default async function ChangeEmailPage() {
    const dict = await getDictionary('en');

    return (
        <SettingPage local={dict} title={dict.changeEmail} >
            <ChangeEmailForm local={dict} />
        </SettingPage>
    );
}
