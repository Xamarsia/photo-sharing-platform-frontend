'use client';


import React, { useState, useEffect, useRef, useCallback, ReactNode } from 'react';

import { fetchPageData } from '@/actions/user-actions';

import Loader from '@/components/common/Loader';


type Props<ItemsType> = {
    size: number,
    url: string,
    urlParams?: string | undefined,
    emptyResult?: ReactNode | undefined,
    displayItems: (items: ItemsType[]) => ReactNode,
}


export default function InfiniteLoadingImpl<ItemsType>({ size, url, urlParams, emptyResult, displayItems }: Props<ItemsType>) {
    const [items, setItems] = useState<Array<ItemsType>>(Array<ItemsType>);
    const [page, setPage] = useState<number>(0);
    const [isLast, setIsLast] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const containerRef: React.MutableRefObject<null> = useRef(null);

    const fetchData = useCallback(async () => {
        if (isLoading || isLast) {
            return;
        }
        setIsLoading(true);

        const { content, last } = await fetchPageData(size, page, url, urlParams);
        if (last) {
            setIsLast(true);
        }
        setItems((prevItems) => [...prevItems, ...content]);
        setPage((prevIndex) => prevIndex + 1);

        setIsLoading(false);
    }, [page, isLoading]);


    useEffect(() => {
        const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                fetchData();
            }
        });

        const curr = containerRef.current;
        if (curr) {
            observer.observe(curr);
            return () => {
                if (curr) observer.unobserve(curr);
            }
        }
    }, [fetchData]);


    return (
        <>
            {displayItems(items)}
            {isLoading && <Loader />}
            {!items.length && isLast && emptyResult}
            <div ref={containerRef} />
        </>
    );
}
