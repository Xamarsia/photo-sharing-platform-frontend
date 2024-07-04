import 'server-only'


import SignInForm from '@/components/forms/SignInForm';
import { getDictionary } from '@/lib/localization'
import Card from '@/components/Card';


export default async function SigninPage() {
    const dict = await getDictionary('en');


    return (
        <main className="min-h-screen bg-blue-100 flex items-center justify-center text-gray-500">
            <Card>
                <SignInForm local={dict} />
            </Card>
        </main>
    );
}
