'use client';

import InfiniteLoading from '@/components/common/infinite-loading/InfiniteLoading';
import ProfilePreviewList from '@/components/profile/ProfilePreviewList';
import styles from '@/styles/text/text.module.css';
import { useTranslations } from 'next-intl';

type Props = {
    url: string,
    size: number,
    urlParams?: string | undefined,
}


export default function ProfilePreviewListInfiniteLoading({ url, size, urlParams }: Props) {
    const t = useTranslations('form');
    return (
        <InfiniteLoading<UserDTO> size={size} url={url} displayItems={
            (items) => (<ProfilePreviewList users={items} />)
        } urlParams={urlParams} emptyResult={<span className={`${styles['secondary-info']} m-4`}>{t('listEmpty')}</span>} />
    );
}
