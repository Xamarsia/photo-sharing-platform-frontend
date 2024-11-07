import 'server-only'

import { redirect } from 'next/navigation';

import { isAuthorized } from '@/lib/firebase/serverApp';
import { isAuthenticationUsed } from '@/actions/user-actions';

import Card from '@/components/common/Card';
import SignInForm from '@/components/forms/auth/SignInForm';


export default async function SigninPage() {
    const isAuth: string | undefined = await isAuthorized();

    if (isAuth) {
        const isAuthUsed: boolean | undefined = await isAuthenticationUsed();
        if (isAuthUsed == false) {
            redirect('/auth/registration')
        }
    }

    return (
        <Card>
            <SignInForm />
        </Card>
    );
}
