import 'server-only'

import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { isAuthorized } from '@/lib/firebase/serverApp';
import { isAuthenticationUsed } from '@/actions/user-actions';

import Card from '@/components/common/Card';
import RegistrationForm from '@/components/forms/auth/RegistrationForm';


export const metadata: Metadata = {
    title: 'Registration'
}

export default async function RegistrationPage() {
    const isAuth = await isAuthorized();

    if (!isAuth) {
        redirect('/login');
    }

    const isAuthUsed: boolean | undefined = await isAuthenticationUsed();
    if (isAuthUsed) {
        redirect('/login');
    }

    return (
        <Card>
            <RegistrationForm />,
        </Card>
    );
}
