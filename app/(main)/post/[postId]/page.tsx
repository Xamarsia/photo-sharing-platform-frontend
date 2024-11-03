import 'server-only';

import { getDictionary } from '@/lib/localization';
import { getDetailedPost } from '@/actions/post-actions';

import Post from '@/components/post/Post';
import NotFound from '@/components/common/NotFound';


type PageProps = {
    postId: number,
}

export default async function PostPage({ params }: { params: PageProps }) {
    const dict = await getDictionary('en');

    const detailedPost: DetailedPostDTO | undefined = await getDetailedPost(params.postId);

    return (
        <>
            {detailedPost
                ? <Post detailedPost={detailedPost} local={dict} />
                : <NotFound alertTitle={dict.postNotFound} alertBody={dict.postDoesNotExist} />
            }
        </>
    );
}
