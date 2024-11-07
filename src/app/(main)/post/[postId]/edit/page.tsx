import 'server-only';

import Card from '@/components/common/Card';
import NotFound from '@/components/common/NotFound';
import EditPostForm from '@/components/forms/post/EditPostForm';

import { getTranslations } from 'next-intl/server';
import { getPost } from '@/actions/post-actions';


type Params = Promise<{
    postId: number
}>


export default async function EditPostPage(props: { params: Params }) {
    const t = await getTranslations('NotFound');
    const params = await props.params;
    const postId: number = params.postId;

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
