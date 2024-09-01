import 'server-only';


import { getDictionary } from '@/lib/localization';
import { getUserProfile } from '@/actions/user-actions';

import Profile from '@/components/profile/Profile';
import PostsPreviewGridInfiniteLoading from '@/components/common/infinite-loading/PostsPreviewGridInfiniteLoading';


type PageProps = {
    username: string,
}


export default async function ProfilePage({ params }: { params: PageProps }) {
    const dict = await getDictionary('en');

    const profile: ProfileDTO | undefined = await getUserProfile(params.username);

    return (
        <div className="flex flex-grow flex-shrink justify-center lg:m-4">
            <div className="flex flex-col items-center gap-4 max-w-7xl">
                {profile &&
                    <>
                        <Profile local={dict} profile={profile} />
                        <PostsPreviewGridInfiniteLoading username={params.username} />
                    </>
                }
            </div>
        </div>
    );
}
