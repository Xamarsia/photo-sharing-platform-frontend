import 'server-only';


import Card from "@/components/common/Card";

import styles from '@/app/styles/components/page.module.css';

import { getDictionary } from '@/lib/localization';
import { isAuthorized } from '@/lib/firebase/serverApp';
import { isAuthenticationUsed } from '@/actions/user-actions';
import { redirect } from 'next/navigation';
import AuthenticationForm from '@/components/forms/auth/AuthenticationForm';

export default async function SigninPage() {
    const dict = await getDictionary('en');
    const isAuth = await isAuthorized();

    if (isAuth) {
        const isAuthUsed = await isAuthenticationUsed();
        if (isAuthUsed == false) {
            redirect('/auth/registration')
        }
    }

    return (
        <div className={`${styles['simple-page-layout']}`}>
            <Card>
                <AuthenticationForm local={dict} />
            </Card>
        </div>
    );
}
