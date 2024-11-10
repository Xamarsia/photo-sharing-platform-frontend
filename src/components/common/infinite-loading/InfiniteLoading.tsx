'use client';


import React, { useState, useEffect, useRef, useCallback, ReactNode } from 'react';

import Loader from '@/components/common/Loader';


type Props<T> = {
    emptyResult?: ReactNode | undefined,
    displayItems: (items: T[]) => ReactNode,
    fetchPage: (page: number) => Promise<Page<T>>,
}

export default function InfiniteLoading<T>({ emptyResult, displayItems, fetchPage }: Props<T>) {
    const [items, setItems] = useState<Array<T>>(Array<T>);
    const [page, setPage] = useState<number>(0);
    const [isLast, setIsLast] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const containerRef: React.MutableRefObject<null> = useRef(null);

    const fetchData = useCallback(async () => {
        if (isLoading || isLast) {
            return;
        }
        setIsLoading(true);

        const { content, last } = await fetchPage(page);
        if (last) {
            setIsLast(true);
        }
        setItems((prevItems) => [...prevItems, ...content]);
        setPage((prevIndex) => prevIndex + 1);

        setIsLoading(false);
    }, [page, isLoading, fetchPage]);

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
