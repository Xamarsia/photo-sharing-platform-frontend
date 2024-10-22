import 'server-only'

import { getDictionary } from '@/lib/localization';

import styles from '@/app/styles/components/page.module.css';

import Card from '@/components/common/Card';
import { isAuthorized } from '@/lib/firebase/serverApp';
import { isAuthenticationUsed } from '@/actions/user-actions';
import RegistrationForm from '@/components/forms/auth/RegistrationForm';
import { redirect } from 'next/navigation';

export default async function RegistrationPage() {
    const dict = await getDictionary('en');
    const isAuth = await isAuthorized();

    if (!isAuth) {
        redirect('/login');
    }

    const isAuthUsed = await isAuthenticationUsed();
    if (isAuthUsed) {
        redirect('/login');
    }

    return (
        <div className={`${styles['simple-page-layout']}`}>
            <Card>
                <RegistrationForm local={dict} />,
            </Card>
        </div>
    );
}
