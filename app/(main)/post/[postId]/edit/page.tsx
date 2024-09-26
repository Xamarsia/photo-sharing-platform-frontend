import 'server-only';


import Card from '@/components/common/Card';
import NotFound from '@/components/common/NotFound';
import EditPostForm from '@/components/forms/post/EditPostForm';

import { getDictionary } from '@/lib/localization';
import { getPost } from '@/actions/post-actions';


type PageProps = {
    postId: number,
}


export default async function EditPostPage({ params }: { params: PageProps }) {
    const dict = await getDictionary('en');

    const post: PostDTO | undefined = await getPost(params.postId);

    return (
        <div className='flex flex-grow flex-shrink justify-center items-center m-4'>
            <Card>
                {post
                    ? <EditPostForm local={dict} post={post} />
                    : <NotFound alertTitle={dict.postNotFound} alertBody={dict.postDoesNotExist} />
                }
            </Card>
        </div>
    );
}
