import 'server-only'

import { redirect } from 'next/navigation';

import { isAuthorized } from '@/lib/firebase/serverApp';
import { isAuthUsed } from '@/actions/user-actions';

import Card from '@/components/common/Card';
import SignInForm from '@/components/forms/auth/SignInForm';


export default async function SignInPage() {
    const isAuth: string | undefined = await isAuthorized();

    if (isAuth) {
        const isUsed: boolean | undefined = await isAuthUsed();
        if (isUsed == false) {
            redirect('/auth/registration')
        }
    }

    return (
        <Card>
            <SignInForm />
        </Card>
    );
}
