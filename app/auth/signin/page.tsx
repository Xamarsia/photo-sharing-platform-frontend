import 'server-only'


import SignInForm from '@/components/forms/SignInForm';
import Card from '@/components/common/Card';

import { getDictionary } from '@/lib/localization';

export default async function SigninPage() {
    const dict = await getDictionary('en');

    return (
        <div className='flex flex-grow flex-shrink justify-center items-center m-4'>
            <Card>
                <SignInForm local={dict} />
            </Card>
        </div>
    );
}
