import Text from '@/components/common/Text';

import { getProfileImagePreview } from '@/lib/profile-controller';

import Link from 'next/link';
import { ReactNode } from 'react';

type ProfilePreviewProps = {
    user: UserPreviewDTO
    children?: ReactNode;
}

export default function ProfilePreview({ user, children }: ProfilePreviewProps) {
    const profileImagePreview = getProfileImagePreview(user);

    return (
        <div className='hover:rounded-md hover:bg-gray-50 w-full'>
            <div className='flex justify-around items-center gap-4 py-2 px-4 hover:rounded-md hover:bg-gray-50'>
                <Link href={`/${user.username}`} >{profileImagePreview} </Link>
                <div className="flex-1">
                    <Text style='main-info' size='small' text={user.fullName} />
                    <Text style='secondary-info' size='small' text={'@' + user.username} />
                </div>
                <div className="ml-12">
                    {children}
                </div>
            </div>
        </div>
    )
}