import 'server-only';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getUserProfile } from '@/actions/user-actions';

import Profile from '@/components/profile/Profile';


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
    if (!profile) {
        notFound();
    }

    return (
        <Profile profile={profile} />
    );
}
