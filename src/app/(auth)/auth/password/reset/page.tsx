import 'server-only'


import Card from '@/components/common/Card';
import ResetPasswordForm from '@/components/forms/auth/ResetPasswordForm';

export default async function ResetPasswordPage() {

    return (
        <Card>
            <ResetPasswordForm />
        </Card>
    );
}
