import 'server-only'

import { redirect } from 'next/navigation';

import { getDictionary } from '@/lib/localization';
import { isAuthorized } from '@/lib/firebase/serverApp';
import { isAuthenticationUsed } from '@/actions/user-actions';

import styles from '@/app/styles/components/page.module.css';

import Card from '@/components/common/Card';
import SignInForm from '@/components/forms/auth/SignInForm';


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
                <SignInForm local={dict} />
            </Card>
        </div>
    );
}
