import 'server-only'

import { getDictionary } from '@/lib/localization';

import Card from '@/components/common/Card';
import SignInStepper from '@/components/forms/auth/SignInStepper';

export default async function SigninPage() {
    const dict = await getDictionary('en');

    return (
        <div className='flex flex-grow flex-shrink justify-center items-center m-4'>
            <Card>
                <SignInStepper local={dict} />
            </Card>
        </div>
    );
}
