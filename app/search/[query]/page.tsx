import 'server-only';

import { getDictionary } from '@/lib/localization';
import { getFollowers, getProfile } from '@/lib/profile-controller';

import ProfilePreviewList from '@/components/profile/ProfilePreviewList';


type PageProps = {
    query: string,
}


export default async function SearchPage({ params }: { params: PageProps }) {
    const dict = await getDictionary('en');
    const followers: Array<UserPreviewDTO> = getFollowers();
    return (
        <div >
            <ProfilePreviewList users={followers} local={dict} />
            <ProfilePreviewList users={followers} local={dict} />
            <ProfilePreviewList users={followers} local={dict} />
            <ProfilePreviewList users={followers} local={dict} />
            <ProfilePreviewList users={followers} local={dict} />
        </div>
    );
}
