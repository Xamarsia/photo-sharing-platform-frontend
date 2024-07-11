import 'server-only'

import { getDictionary } from '@/lib/localization'

import Card from '@/components/common/Card';
import CreatePostForm from '@/components/forms/CreatePostForm';


export default async function CreatePostPage() {
    const dict = await getDictionary('en');

    return (
        <main className="min-h-screen bg-blue-100 flex items-center justify-center text-gray-500">
            <Card>
                <CreatePostForm local={dict} />
            </Card>
        </main>
    );
}
