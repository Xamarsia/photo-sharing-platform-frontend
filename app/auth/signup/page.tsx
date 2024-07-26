import 'server-only';


import { getDictionary } from '@/lib/localization';

import Card from '@/components/common/Card';
import SignUpForm from '@/components/forms/SignUpForm';


export default async function SigninPage() {
    const dict = await getDictionary('en');


    return (
        <main className="min-h-screen bg-slate-100 flex items-center justify-center text-gray-500">
            <Card>
                <SignUpForm local={dict} />
            </Card>
        </main>
    );
}
