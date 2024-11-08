'use client';


import React, { ReactNode, useEffect, useState } from 'react';

import InfiniteLoadingImpl from '@/components/common/infinite-loading/InfiniteLoadingImpl';


type Props<ItemsType> = {
    size: number,
    url: string,
    urlParams?: string | undefined,
    emptyResult?: ReactNode | undefined,
    displayItems: (items: ItemsType[]) => ReactNode,
}

// rewrite infitine loading
export default function InfiniteLoading<ItemsType>({ size, url, urlParams, emptyResult, displayItems }: Props<ItemsType>) {
    const [key, setKey] = useState<string>(`${url}:${urlParams}`);

    useEffect(() => {
        setKey(`${url}:${urlParams}`);
    }, [url, urlParams]);

    return (
        <InfiniteLoadingImpl key={key} size={size} url={url} urlParams={urlParams} emptyResult={emptyResult} displayItems={displayItems} />
    );
}
