import 'server-only';


import Card from "@/components/common/Card";
import SignUpStepper from "@/components/forms/auth/SignUpStepper";

import styles from '@/app/styles/components/page.module.css';

import { getDictionary } from '@/lib/localization';
import { isAuthorized } from '@/lib/firebase/serverApp';

export default async function SigninPage() {
    const dict = await getDictionary('en');
    const isAuth = await isAuthorized();

    return (
        <div className={`${styles['simple-page-layout']}`}>
            <Card>
                <SignUpStepper local={dict} isAuth={isAuth} />
            </Card>
        </div>
    );
}
