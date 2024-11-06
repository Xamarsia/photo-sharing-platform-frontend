import 'server-only';

import { getDictionary } from '@/lib/localization';
import { getDetailedPost } from '@/actions/post-actions';

import Post from '@/components/post/Post';
import NotFound from '@/components/common/NotFound';


type Params = Promise<{
    postId: number
}>


export default async function PostPage(props: { params: Params }) {
    const params = await props.params;
    const postId: number = params.postId;
    const dict = await getDictionary('en');

    const detailedPost: DetailedPostDTO | undefined = await getDetailedPost(postId);

    return (
        <>
            {detailedPost
                ? <Post detailedPost={detailedPost} local={dict} />
                : <NotFound alertTitle={dict.postNotFound} alertBody={dict.postDoesNotExist} />
            }
        </>
    );
}
