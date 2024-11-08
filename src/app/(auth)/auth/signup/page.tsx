import 'server-only';


import Card from "@/components/common/Card";
import AuthenticationForm from '@/components/forms/auth/AuthenticationForm';

import { isAuthorized } from '@/lib/firebase/serverApp';
import { isAuthenticationUsed } from '@/actions/user-actions';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Sign Up - SPSP'
}

export default async function SignUpPage() {
    const isAuth: string | undefined = await isAuthorized();

    if (isAuth) {
        const isAuthUsed: boolean | undefined = await isAuthenticationUsed();
        if (isAuthUsed == false) {
            redirect('/auth/registration')
        }
    }

    return (
        <Card>
            <AuthenticationForm />
        </Card>
    );
}
