import 'server-only';

import Card from '@/components/common/Card';
import NotFound from '@/components/common/NotFound';
import EditPostForm from '@/components/forms/post/EditPostForm';

import { getDictionary } from '@/lib/localization';
import { getPost } from '@/actions/post-actions';


type Params = Promise<{
    postId: number
}>


export default async function EditPostPage(props: { params: Params }) {
    const params = await props.params;
    const postId: number = params.postId;
    const dict = await getDictionary('en');

    const post: PostDTO | undefined = await getPost(postId);

    return (
        <Card>
            {post
                ? <EditPostForm local={dict} post={post} />
                : <NotFound alertTitle={dict.postNotFound} alertBody={dict.postDoesNotExist} />
            }
        </Card>
    );
}
