import 'server-only';

import { getDictionary } from '@/lib/localization';
import { getUserPosts } from '@/lib/post-controller';
import { getProfile } from '@/lib/profile-controller';

import Profile from '@/components/common/Profile';
import PostsPreviewGrid from '@/components/post/PostsPreviewGrid';


type PageProps = {
    username: string,
}


export default async function ProfilePage({ params }: { params: PageProps }) {
    const dict = await getDictionary('en');
    const profile: ProfileDTO = await getProfile(params.username);
    const posts: Array<PostDTO> = await getUserPosts(params.username);

    return (
        <div className="flex flex-grow items-center flex-shrink justify-center m-4 lg:m-8">
            <div className="flex flex-col items-center gap-4">
                <Profile local={dict} profile={profile} />
                <PostsPreviewGrid posts={posts} />
            </div>
        </div>
    );
}
