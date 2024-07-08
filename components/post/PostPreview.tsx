import Link from 'next/link'
import PostImage from '@/components/post/image/PostImage';
import postImage from '@/public/profile5.jpg'

type PostProps = {
    post: PostPreviewDTO
}

export default function PostPreview({ post }: PostProps) {
    return (
        <Link href={`post/${post.id}`}>
            <PostImage size='cropped-square' src={postImage} />
        </Link>
    )
}
