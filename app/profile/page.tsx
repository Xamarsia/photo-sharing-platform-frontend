import 'server-only';


import { getDictionary } from '@/lib/localization';
import { getProfile } from '@/lib/profile-controller';
import Profile from '@/components/common/Profile';
import { getPosts } from '@/lib/post-controller';
import PostsPreviewGrid from '@/components/post/PostsPreviewGrid';


export default async function ProfilePage() {
    const dict = await getDictionary('en');
    const profile: ProfileDTO = await getProfile();
    const posts: Array<PostDTO> = await getPosts()

    return (
        <main className="min-h-screen bg-white flex items-center justify-center text-gray-500">
            <div className="flex flex-col items-center gap-4">
                <Profile local={dict} profile={profile} />
                <PostsPreviewGrid posts={posts} />
            </div>
        </main>
    );
}
