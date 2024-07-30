import 'server-only';

import { getDictionary } from '@/lib/localization';
import { getDetailedPost } from '@/lib/post-controller';

import Post from '@/components/post/Post';


type PageProps = {
    postId: string,
}


export default async function EditPostPage({ params }: { params: PageProps }) {
    const dict = await getDictionary('en');
    const postrData: DetailedPostDTO = await getDetailedPost(params.postId);


    return (
        <Post detailedPost={postrData} local={dict} />
    );
}
