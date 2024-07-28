import 'server-only';


import { getDictionary } from '@/lib/localization';
import ChangePasswordForm from '@/components/forms/profile/ChangePasswordForm';


export default async function ChangePasswordPage() {
    const dict = await getDictionary('en');

    return (
        <ChangePasswordForm local={dict} />
    );
}
