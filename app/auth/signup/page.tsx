import 'server-only';


import { getDictionary } from '@/lib/localization';

import Card from '@/components/common/Card';
import SignUpForm from '@/components/forms/SignUpForm';


export default async function SigninPage() {
    const dict = await getDictionary('en');


    return (
        <div className='flex flex-grow flex-shrink justify-center items-center'>
            <Card>
                <SignUpForm local={dict} />
            </Card>
        </div>
    );
}
