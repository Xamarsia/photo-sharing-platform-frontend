import Post from "@/components/post/Post"

type PostsProps = {
    posts: Array<DetailedPostDTO>,
    local: any,
}

export default function PostsList({ posts, local }: PostsProps) {
    return (
        <ul className='flex flex-col gap-4'>
            {posts.map(post => (
                <li key={post.postDTO.id}>
                    <Post detailedPost={post} local={local} />
                </li>
            ))}
        </ul>
    )
}
