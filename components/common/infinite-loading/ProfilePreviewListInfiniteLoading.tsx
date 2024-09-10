'use client';

import InfiniteLoading from '@/components/common/infinite-loading/InfiniteLoading';
import ProfilePreviewList from '@/components/profile/ProfilePreviewList';


type Props = {
    local: any,
    url: string,
    size: number,
    urlParams?: string | undefined,
}


export default function ProfilePreviewListInfiniteLoading({ local, url, size, urlParams }: Props) {
    return (
        <InfiniteLoading<UserDTO> size={size} url={url} displayItems={
            (items) => (<ProfilePreviewList users={items} local={local} />)
        } urlParams={urlParams} />
    );
}
