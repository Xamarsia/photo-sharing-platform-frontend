import 'server-only';


import { getDictionary } from '@/lib/localization';
import { getProvider } from '@/lib/firebase/serverApp';

import DeleteAccountForm from '@/components/forms/profile/DeleteAccountForm';
import SettingPage from '@/components/common/SettingPage';


export default async function DeleteAccountPage() {
    const dict = await getDictionary('en');
    const provider = await getProvider();

    return (
        <SettingPage local={dict} title={dict.deleteAccount} >
            {provider && <DeleteAccountForm local={dict} provider={provider} />}
        </SettingPage>
    );
}
