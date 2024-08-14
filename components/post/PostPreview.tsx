import Link from 'next/link';

import PostImagePreview from '@/components/post/PostImagePreview';
import postImage from '@/public/profile5.jpg';

type PostProps = {
    post: PostPreviewDTO
}

export default function PostPreview({ post }: PostProps) {
    return (
        <Link href={`post/${post.id}`}>
            <PostImagePreview src={postImage} />
        </Link>
    )
}
