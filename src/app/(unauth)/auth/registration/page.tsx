import 'server-only'

import { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { isAuthorized } from '@/lib/firebase/serverApp';
import { isAuthUsed } from '@/actions/user-actions';

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

    const isUsed: boolean | undefined = await isAuthUsed();
    if (isUsed) {
        redirect('/login');
    }

    return (
        <Card>
            <RegistrationForm />
        </Card>
    );
}
