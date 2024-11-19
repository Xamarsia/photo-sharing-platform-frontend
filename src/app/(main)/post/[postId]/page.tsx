import 'server-only';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getDetailedPost } from '@/actions/post-actions';

import Post from '@/components/post/Post';

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
    const postId: number = (await params).postId;

    const detailedPost: DetailedPostDTO | undefined = await getDetailedPost(postId);

    if (!detailedPost) {
        notFound();
    }

    return (
        <Post detailedPost={detailedPost} />
    );
}
