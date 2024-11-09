import Link from 'next/link';

import PostImagePreview from '@/components/post/image/PostImagePreview';

type Props = {
    post: PostPreviewDTO
}

export default function PostPreview({ post }: Props) {
    return (
        <Link href={`post/${post.id}`}>
            <PostImagePreview postId={post.id} />
        </Link>
    )
}
