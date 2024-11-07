import 'server-only'

import Card from '@/components/common/Card';
import CreatePostForm from '@/components/forms/post/CreatePostForm';


export default async function CreatePostPage() {

    return (
        <Card>
            <CreatePostForm />
        </Card>
    );
}
