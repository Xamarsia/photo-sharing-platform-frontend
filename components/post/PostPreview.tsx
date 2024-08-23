import Link from 'next/link';

import PostImagePreview from '@/components/post/image/PostImagePreview';

type PostProps = {
    post: PostPreviewDTO
}

export default function PostPreview({ post }: PostProps) {
    return (
        <Link href={`post/${post.id}`}>
            <PostImagePreview postId={post.id} />
        </Link>
    )
}
