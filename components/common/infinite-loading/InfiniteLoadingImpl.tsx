'use client';


import React, { useState, useEffect, useRef, useCallback, ReactNode } from 'react';

import { fetchPageData } from '@/actions/user-actions';

import Loader from '@/components/common/Loader';


type Props<ItemsType> = {
    size: number,
    url: string,
    urlParams?: string | undefined,
    displayItems: (items: ItemsType[]) => ReactNode,
}


export default function InfiniteLoadingImpl<ItemsType>({ size, url, urlParams, displayItems }: Props<ItemsType>) {
    const [items, setItems] = useState<Array<ItemsType>>(Array<ItemsType>);
    const [page, setPage] = useState<number>(0);
    const [isLast, setIsLast] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const containerRef = useRef(null);


    const fetchData = useCallback(async () => {
        if (isLoading || isLast) return;
        setIsLoading(true);

        const { content, last } = await fetchPageData(size, page, url, urlParams);
        if (last) {
            setIsLast(last);
        }
        setItems((prevItems) => [...prevItems, ...content]);
        setPage((prevIndex) => prevIndex + 1);

        setIsLoading(false);
    }, [page, isLoading]);


    const intersectionObserverCallback = async (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            fetchData();
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(intersectionObserverCallback);
        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
        }
    }, [fetchData]);


    return (
        <>
            {displayItems(items)}
            {isLoading && <Loader />}
            <div ref={containerRef} />
        </>
    );
}
