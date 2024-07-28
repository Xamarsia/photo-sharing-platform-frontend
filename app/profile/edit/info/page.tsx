import 'server-only';


import { getDictionary } from '@/lib/localization';
import ChangeUserInfoForm from '@/components/forms/profile/ChangeUserInfoForm';


export default async function ChangeUserInfoPage() {
    const dict = await getDictionary('en');

    return (
        <ChangeUserInfoForm local={dict} />
    );
}
