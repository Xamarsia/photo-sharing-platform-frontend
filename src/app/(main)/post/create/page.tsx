import 'server-only'

import Card from '@/components/common/Card';
import CreatePostForm from '@/components/forms/post/CreatePostForm';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Create post',
}


export default async function CreatePostPage() {

    return (
        <Card>
            <CreatePostForm />
        </Card>
    );
}
