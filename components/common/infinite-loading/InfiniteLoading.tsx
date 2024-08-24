'use client';


import React, { useState, useEffect, useRef, useCallback, ReactNode } from 'react';

import { fetchPageData } from '@/actions/user-actions';

import Loader from '@/components/common/Loader';


type Props<ItemsType> = {
    size: number,
    url: string,
    displayItems: (items: ItemsType[]) => ReactNode,
}

export default function InfiniteLoading<ItemsType>({ size, url, displayItems }: Props<ItemsType>) {
    const [items, setItems] = useState<Array<ItemsType>>(Array<ItemsType>);
    const [page, setPage] = useState<number>(0);
    const [isLast, setIsLast] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const containerRef = useRef(null);


    const fetchData = useCallback(async () => {
        if (isLoading || isLast) return;
        setIsLoading(true);

        const { content, last } = await fetchPageData(size, page, url);
        if (last) {
            setIsLast(last)
        }
        setItems((prevItems) => [...prevItems, ...content])
        setPage((prevIndex) => prevIndex + 1);

        setIsLoading(false);
    }, [page, isLoading]);


    const callbackFunction = async (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
            fetchData();
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction)
        if (containerRef.current) observer.observe(containerRef.current)

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current)
        }
    }, [fetchData])


    return (
        <>
            {displayItems(items)}
            {isLoading && <Loader />}
            <div ref={containerRef} />
        </>
    );
}
