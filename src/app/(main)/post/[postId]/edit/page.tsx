import 'server-only';

import Card from '@/components/common/Card';
import NotFound from '@/components/common/NotFound';
import EditPostForm from '@/components/forms/post/EditPostForm';

import { getTranslations } from 'next-intl/server';
import { getPost } from '@/actions/post-actions';
import { Metadata } from 'next';



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
    const t = await getTranslations('NotFound');
    const postId: number = (await params).postId;

    const post: PostDTO | undefined = await getPost(postId);

    return (
        <Card>
            {post
                ? <EditPostForm post={post} />
                : <NotFound alertTitle={t('postNotFound')} alertBody={t('postDoesNotExist')} />
            }
        </Card>
    );
}
