import 'server-only';


import { getDictionary } from '@/lib/localization';

import DeleteAccountForm from '@/components/forms/profile/DeleteAccountForm';
import SettingPage from '@/components/common/SettingPage';


export default async function DeleteAccountPage() {
    const dict = await getDictionary('en');

    return (
        <SettingPage local={dict} title={dict.deleteAccount} >
            <DeleteAccountForm local={dict} />
        </SettingPage>
    );
}
