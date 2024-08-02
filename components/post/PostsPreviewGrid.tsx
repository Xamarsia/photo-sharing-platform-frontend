import PostPreview from '@/components/post/PostPreview';


type PostsProps = {
    posts: Array<PostPreviewDTO>
}

export default function PostsPreview({ posts }: PostsProps) {
    return (
        <ul className='grid sm:grid-cols-2 md:grid-cols-3 sm:gap-2 md:gap-4 gap-4'>
            {posts.map(post => (
                <li key={post.id}>
                    <PostPreview post={post} />
                </li>
            ))}
        </ul>
    )
}
