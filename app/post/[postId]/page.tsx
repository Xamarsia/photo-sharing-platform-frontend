import 'server-only';

import { getDictionary } from '@/lib/localization';

import Post from '@/components/post/Post';
import NotFound from '@/components/common/NotFound';

import { getDetailedPost } from '@/actions/post-actions';


type PageProps = {
    postId: number,
}


export default async function EditPostPage({ params }: { params: PageProps }) {
    const dict = await getDictionary('en');

    const detailedPost: DetailedPostDTO | undefined = await getDetailedPost(params.postId);

    return (
        <div className='flex flex-grow flex-shrink justify-center items-center'>
            {detailedPost
                ? <Post detailedPost={detailedPost} local={dict} />
                : <NotFound alertTitle={dict.postNotFound} alertBody={dict.postDoesNotExist} />
            }
        </div>
    );
}
