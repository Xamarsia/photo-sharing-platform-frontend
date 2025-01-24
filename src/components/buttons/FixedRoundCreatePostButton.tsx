"use client";

import plus from '@/public/plus/plus-white.svg';

import CircleButton from '@/components/buttons/CircleButton';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';


export default function FixedRoundCreatePostButton() {
    const router = useRouter()

    const onClick = useCallback((): void => {
        router.push('/post/create');
    }, []);

    return (
        <div className='absolute flex flex-col-reverse h-full top-0 right-0 pointer-events-none'>
            <div className='sticky bottom-12 m-4 sm:m-8 md:hidden block pointer-events-auto'>
                <CircleButton icon={plus} onClick={onClick} />
            </div>
        </div>
    );
}
