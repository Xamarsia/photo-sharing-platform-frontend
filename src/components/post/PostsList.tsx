import Post from "@/components/post/Post";

type PostsProps = {
    posts: Array<DetailedPostDTO>,
}

export default function PostsList({ posts }: PostsProps) {
    return (
        <ul className='flex flex-col gap-4'>
            {posts.map(post => (
                <li key={post.postDTO.id}>
                    <Post detailedPost={post} />
                </li>
            ))}
        </ul>
    )
}
