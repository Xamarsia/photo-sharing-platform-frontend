import 'server-only';


import Card from "@/components/common/Card";

import { getDictionary } from '@/lib/localization';
import { isAuthorized } from '@/lib/firebase/serverApp';
import { isAuthenticationUsed } from '@/actions/user-actions';
import { redirect } from 'next/navigation';
import AuthenticationForm from '@/components/forms/auth/AuthenticationForm';

export default async function SigninPage() {
    const dict = await getDictionary('en');
    const isAuth: string | undefined = await isAuthorized();

    if (isAuth) {
        const isAuthUsed: boolean | undefined = await isAuthenticationUsed();
        if (isAuthUsed == false) {
            redirect('/auth/registration')
        }
    }

    return (
        <Card>
            <AuthenticationForm local={dict} />
        </Card>
    );
}
