"use client";

import { useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { getSearchUsersPage } from '@/actions/user-actions';

import styles from '@/styles/text/text.module.css';

import InfiniteLoading from '@/components/common/infinite-loading/InfiniteLoading';
import ProfilePreviewsList from '@/components/profile/ProfilePreviewsList';


type Props = {
    query: string | string[],
}


export default function SearchPageContent({ query }: Props) {
    const t = useTranslations('form');

    const callback = useCallback((page: number) => {
        return getSearchUsersPage(query, page)
    }, [query]);

    return (
        <InfiniteLoading<UserDTO>
            displayItems={(items) => (<ProfilePreviewsList users={items} />)}
            fetchPage={callback}
            emptyResult={<span className={`${styles['secondary-info']} m-4`}>{t('listEmpty')}</span>}
        />
    )
}
