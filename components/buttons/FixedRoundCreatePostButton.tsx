"use client";


import plus from '@/public/plus/plus-white.svg';

import IconButton from "@/components/buttons/IconButton";

import { useRouter } from 'next/navigation';


export default function FixedRoundCreatePostButton() {
    const router = useRouter()

    return (
        <div className='absolute flex flex-col-reverse h-full top-0 right-0 z-60 pointer-events-none '>
            <div className='sticky bottom-4 m-4 sm:bottom-8 sm:m-8 md:hidden block focus:pointer-events-auto'>
                <IconButton style='primary' size='large' rounded='rounded-full' icon={plus} hoveredIcon={plus} onClick={(e) => { router.push('/post/create') }} />
            </div>
        </div>
    );
}
