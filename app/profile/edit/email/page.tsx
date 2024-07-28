import 'server-only';


import { getDictionary } from '@/lib/localization';

import ChangeEmailForm from '@/components/forms/profile/ChangeEmailForm';


export default async function ChangeEmailPage() {
    const dict = await getDictionary('en');

    return (
        <ChangeEmailForm local={dict} />
    );
}
