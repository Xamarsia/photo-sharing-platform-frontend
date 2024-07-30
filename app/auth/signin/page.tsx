import 'server-only'


import SignInForm from '@/components/forms/SignInForm';
import { getDictionary } from '@/lib/localization'
import Card from '@/components/common/Card';


export default async function SigninPage() {
    const dict = await getDictionary('en');


    return (
        <div className='flex flex-grow flex-shrink justify-center items-center'>
            <Card>
                <SignInForm local={dict} />
            </Card>
        </div>
    );
}
