"use client";


import plus from '@/public/plus/plus-white.svg';

import TextIconButton from "@/components/buttons/TextIconButton";
import IconButton from "@/components/buttons/IconButton";

import { useRouter } from 'next/navigation';

type Props = {
    local: any,
    style: 'round' | 'rectungle'
}

export default function CreatePostButton({ local, style }: Props) {
    const router = useRouter()

    const handleClick = () => {
        router.push('/post/create');
    }

    return (
        <>
            {style == 'round' && <IconButton style='primary' size='large' rounded='rounded-full' icon={plus} hoveredIcon={plus} onClick={handleClick} />}
            {style == 'rectungle' && <TextIconButton fill="content" text={local.createPost} style={'primary'} icon={plus} iconSide='left' size="small" rounded="rounded-lg" onClick={handleClick} />}
        </>
    );
}
