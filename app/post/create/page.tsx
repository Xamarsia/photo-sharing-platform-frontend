import 'server-only'

import { getDictionary } from '@/lib/localization'

import Card from '@/components/common/Card';
import CreatePostForm from '@/components/forms/CreatePostForm';


export default async function CreatePostPage() {
    const dict = await getDictionary('en');

    return (
        <Card size='large'>
            <CreatePostForm local={dict} />
        </Card>
    );
}
