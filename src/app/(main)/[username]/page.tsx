import 'server-only';

import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getUserProfile } from '@/actions/user-actions';

import Profile from '@/components/profile/Profile';
import PostsPreviewGridInfiniteLoading from '@/components/common/infinite-loading/PostsPreviewGridInfiniteLoading';
import NotFound from '@/components/common/NotFound';


type Props = {
    params: Promise<{ username: string }>
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const username: string = (await params).username;

    return {
        title: `${username}`
    }
}

export default async function ProfilePage({ params }: Props) {
    const username: string = (await params).username;
    const profile: ProfileDTO | undefined = await getUserProfile(username);
    const t = await getTranslations('NotFound');

    return (
        <div className="flex flex-grow flex-col flex-shrink items-center justify-center mt-4 lg:m-4 gap-4 max-w-7xl">
            {profile
                ? <>
                    <Profile profile={profile} />
                    <PostsPreviewGridInfiniteLoading username={username} />
                </>
                : <div className='flex flex-grow flex-shrink justify-center items-center m-4'>
                    <NotFound alertTitle={t('userNotFound')} alertBody={t('userDoesNotExist')} />
                </div>
            }
        </div>
    );
}
