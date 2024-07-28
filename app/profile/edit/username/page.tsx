import 'server-only';


import { getDictionary } from '@/lib/localization';

import ChangeUsernameForm from '@/components/forms/profile/ChangeUsernameForm';


export default async function ChangeUsernamePage() {
    const dict = await getDictionary('en');

    return (
        <ChangeUsernameForm local={dict} />
    );
}
