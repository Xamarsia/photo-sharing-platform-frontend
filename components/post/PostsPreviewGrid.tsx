import PostPreview from '@/components/post/PostPreview';

import styles from '@/app/styles/post/post.module.css';

type PostsProps = {
    posts: Array<PostPreviewDTO>
}

export default function PostsPreview({ posts }: PostsProps) {
    return (
        <ul className={`${styles["posts-preview-grid-layout"]}`}>
            {posts.map(post => (
                <li key={post.id}>
                    <PostPreview post={post} />
                </li>
            ))}
        </ul>
    )
}
