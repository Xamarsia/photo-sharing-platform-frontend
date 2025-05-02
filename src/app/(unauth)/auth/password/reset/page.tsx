import 'server-only'


import Card from '@/components/common/Card';
import ResetPasswordForm from '@/components/forms/auth/ResetPasswordForm';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Reset Password'
}

export default async function ResetPasswordPage() {

    return (
        <Card>
            <ResetPasswordForm />
        </Card>
    );
}
