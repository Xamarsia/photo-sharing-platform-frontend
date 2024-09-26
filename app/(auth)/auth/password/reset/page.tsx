import 'server-only'


import Card from '@/components/common/Card';

import { getDictionary } from '@/lib/localization';
import ResetPasswordForm from '@/components/forms/auth/ResetPasswordForm';

export default async function ResetPasswordPage() {
    const dict = await getDictionary('en');

    return (
        <div className='flex flex-grow flex-shrink justify-center items-center m-4'>
            <Card>
                <ResetPasswordForm local={dict} />
            </Card>
        </div>
    );
}
