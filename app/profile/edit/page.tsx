import 'server-only';


import Card from '@/components/common/Card';
import EditProfileForm from '@/components/forms/profile/EditProfileForm';


import { getDictionary } from '@/lib/localization';


export default async function CreatePostPage() {
    const dict = await getDictionary('en');

    return (
        <main className="min-h-screen bg-blue-100 flex items-center justify-center text-gray-500">
            <Card>
                <EditProfileForm local={dict} />
            </Card>
        </main>
    );
}
