import 'server-only'

import { getDictionary } from '@/lib/localization';

import styles from '@/app/styles/components/page.module.css';

import Card from '@/components/common/Card';
import SignInStepper from '@/components/forms/auth/SignInStepper';
import { isAuthorized } from '@/lib/firebase/serverApp';

export default async function SigninPage() {
    const dict = await getDictionary('en');
    const isAuth = await isAuthorized();

    return (
        <div className={`${styles['simple-page-layout']}`}>
            <Card>
                <SignInStepper local={dict} isAuth={isAuth} />
            </Card>
        </div>
    );
}
