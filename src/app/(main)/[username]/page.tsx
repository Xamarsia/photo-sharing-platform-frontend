import 'server-only';

import { getDictionary } from '@/lib/localization';
import { getUserProfile } from '@/actions/user-actions';

import styles from '@/styles/components/page.module.css';
import Profile from '@/components/profile/Profile';
import PostsPreviewGridInfiniteLoading from '@/components/common/infinite-loading/PostsPreviewGridInfiniteLoading';
import NotFound from '@/components/common/NotFound';


type Params = Promise<{
    username: string
}>


export default async function ProfilePage(props: { params: Params }) {
    const params = await props.params;
    const username: string = params.username;
    const dict = await getDictionary('en');

    const profile: ProfileDTO | undefined = await getUserProfile(username);

    return (
        <div className="flex flex-grow flex-shrink justify-center lg:m-4">
            <div className="flex flex-grow flex-col items-center justify-start gap-4 max-w-7xl">
                {profile
                    ? <>
                        <Profile local={dict} profile={profile} />
                        <PostsPreviewGridInfiniteLoading username={username} />
                    </>
                    : <div className={`${styles['simple-page-layout']}`}>
                        <NotFound alertTitle={dict.userNotFound} alertBody={dict.userDoesNotExist} />
                    </div>
                }
            </div>
        </div>
    );
}
