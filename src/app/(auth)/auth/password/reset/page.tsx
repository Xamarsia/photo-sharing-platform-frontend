import 'server-only'


import Card from '@/components/common/Card';
import ResetPasswordForm from '@/components/forms/auth/ResetPasswordForm';
import { getDictionary } from '@/lib/localization';

export default async function ResetPasswordPage() {
    const dict = await getDictionary('en');

    return (
        <Card>
            <ResetPasswordForm local={dict} />
        </Card>
    );
}
