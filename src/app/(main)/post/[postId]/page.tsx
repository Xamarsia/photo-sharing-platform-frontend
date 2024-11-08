import 'server-only';

import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getDetailedPost } from '@/actions/post-actions';

import Post from '@/components/post/Post';
import NotFound from '@/components/common/NotFound';


type Props = {
    params: Promise<{ postId: number }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const postId: number = (await params).postId;

    return {
        title: `Post ${postId}`
    }
}


export default async function PostPage({ params }: Props) {
    const t = await getTranslations('NotFound');
    const postId: number = (await params).postId;

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
