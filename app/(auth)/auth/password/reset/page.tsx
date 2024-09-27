import 'server-only'


import Card from '@/components/common/Card';
import styles from '@/app/styles/components/page.module.css';
import { getDictionary } from '@/lib/localization';
import ResetPasswordForm from '@/components/forms/auth/ResetPasswordForm';

export default async function ResetPasswordPage() {
    const dict = await getDictionary('en');

    return (
        <div className={`${styles['simple-page-layout']}`}>
            <Card>
                <ResetPasswordForm local={dict} />
            </Card>
        </div>
    );
}
