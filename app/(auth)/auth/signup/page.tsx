import 'server-only';


import Card from "@/components/common/Card";
import SignUpStepper from "@/components/forms/auth/SignUpStepper";

import { getDictionary } from '@/lib/localization';
import { isAuthorized } from '@/lib/firebase/serverApp';

export default async function SigninPage() {
    const dict = await getDictionary('en');
    const isAuth = await isAuthorized();

    return (
        <div className='flex flex-grow flex-shrink justify-center items-center m-4'>
            <Card>
                <SignUpStepper local={dict} isAuth={isAuth} />
            </Card>
        </div>
    );
}
