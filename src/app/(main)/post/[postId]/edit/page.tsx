import 'server-only';

import Card from '@/components/common/Card';
import EditPostForm from '@/components/forms/post/EditPostForm';

import { getPost } from '@/actions/post-actions';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';



type Props = {
    params: Promise<{ postId: number }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const postId: number = (await params).postId;

    return {
        title: `Edit Post ${postId}`
    }
}

export default async function EditPostPage({ params }: Props) {
    const postId: number = (await params).postId;

    const post: PostDTO | undefined = await getPost(postId);

    if (!post) {
        notFound();
    }

    return (
        <Card>
            <EditPostForm post={post} />
        </Card>
    );
}
