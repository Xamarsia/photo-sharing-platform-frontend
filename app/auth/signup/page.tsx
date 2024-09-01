import 'server-only';


import Card from "@/components/common/Card";
import SignUpStepper from "@/components/forms/SignUpStepper";

import { getDictionary } from '@/lib/localization';

export default async function SigninPage() {
    const dict = await getDictionary('en');

    return (
        <div className='flex flex-grow flex-shrink justify-center items-center'>
            <Card>
                <SignUpStepper local={dict} />
            </Card>
        </div>
    );
}

