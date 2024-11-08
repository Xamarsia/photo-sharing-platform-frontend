import 'server-only';

import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { getUserProfile } from '@/actions/user-actions';

import styles from '@/styles/components/page.module.css';
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
        <div className="flex flex-grow flex-shrink justify-center lg:m-4">
            <div className="flex flex-grow flex-col items-center justify-start gap-4 max-w-7xl">
                {profile
                    ? <>
                        <Profile profile={profile} />
                        <PostsPreviewGridInfiniteLoading username={username} />
                    </>
                    : <div className={`${styles['simple-page-layout']}`}>
                        <NotFound alertTitle={t('userNotFound')} alertBody={t('userDoesNotExist')} />
                    </div>
                }
            </div>
        </div>
    );
}
