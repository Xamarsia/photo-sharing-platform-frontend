import 'server-only'


import SignUpForm from '@/components/forms/SignUpForm';
import { getDictionary } from '@/lib/localization'
import Card from '@/components/Card';


export default async function SigninPage() {
    const dict = await getDictionary('en');


    return (
        <main className="min-h-screen bg-blue-100 flex items-center justify-center text-gray-500">
            <Card>
                <SignUpForm local={dict} />
            </Card>
        </main>
    );
}
