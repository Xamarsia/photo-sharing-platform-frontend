'use client';

import InfiniteLoading from '@/components/common/infinite-loading/InfiniteLoading';
import ProfilePreviewList from '@/components/profile/ProfilePreviewList';
import styles from '@/app/styles/text/text.module.css';


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
        } urlParams={urlParams} emptyResult={<span className={`${styles['secondary-info']} m-4`}>{local.listEmpty}</span>} />
    );
}
