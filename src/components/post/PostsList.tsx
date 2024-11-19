import Post from "@/components/post/Post";

type Props = {
    posts: Array<DetailedPostDTO>,
}

export default function PostsList({ posts }: Props) {
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
