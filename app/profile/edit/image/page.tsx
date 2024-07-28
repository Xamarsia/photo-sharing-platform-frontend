import 'server-only';


import { getDictionary } from '@/lib/localization';

import ChangeProfileImageForm from '@/components/forms/profile/ChangeProfileImageForm';


export default async function ChangeUserInfoPage() {
    const dict = await getDictionary('en');

    return (
        <ChangeProfileImageForm local={dict} />
    );
}
