import 'server-only';

import { getTranslations } from 'next-intl/server';
import { getDetailedPost } from '@/actions/post-actions';

import Post from '@/components/post/Post';
import NotFound from '@/components/common/NotFound';


type Params = Promise<{
    postId: number
}>


export default async function PostPage(props: { params: Params }) {
    const t = await getTranslations('NotFound');
    const params = await props.params;
    const postId: number = params.postId;

    const detailedPost: DetailedPostDTO | undefined = await getDetailedPost(postId);

    return (
        <>
            {detailedPost
                ? <Post detailedPost={detailedPost} />
                : <NotFound alertTitle={t('postNotFound')} alertBody={t('postDoesNotExist')} />
            }
        </>
    );
}
