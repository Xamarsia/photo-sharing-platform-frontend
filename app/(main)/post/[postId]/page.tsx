import 'server-only';

import { getDictionary } from '@/lib/localization';

import Post from '@/components/post/Post';
import NotFound from '@/components/common/NotFound';

import { getDetailedPost } from '@/actions/post-actions';
import styles from '@/app/styles/components/page.module.css';

type PageProps = {
    postId: number,
}


export default async function EditPostPage({ params }: { params: PageProps }) {
    const dict = await getDictionary('en');

    const detailedPost: DetailedPostDTO | undefined = await getDetailedPost(params.postId);

    return (
        <div className={`${styles['simple-page-layout']}`}>
            {detailedPost
                ? <Post detailedPost={detailedPost} local={dict} />
                : <NotFound alertTitle={dict.postNotFound} alertBody={dict.postDoesNotExist} />
            }
        </div>
    );
}
