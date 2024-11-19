import 'server-only';


import Card from "@/components/common/Card";
import AuthenticationForm from '@/components/forms/auth/AuthenticationForm';

import { isAuthorized } from '@/lib/firebase/serverApp';
import { isAuthUsed } from '@/actions/user-actions';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Sign Up - SPSP'
}

export default async function SignUpPage() {
    const isAuth: string | undefined = await isAuthorized();

    if (isAuth) {
        const isUsed: boolean | undefined = await isAuthUsed();
        if (isUsed == false) {
            redirect('/auth/registration')
        }
    }

    return (
        <Card>
            <AuthenticationForm />
        </Card>
    );
}
