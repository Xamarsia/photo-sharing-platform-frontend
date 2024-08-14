"use client";

import Image from 'next/image';

import style from '@/app/styles/text/text.module.css';


type Props = {
    text: string,
    icon: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}


export default function TextIconButton({ icon, text, onClick }: Props) {
    return (
        <button
            type='button'
            onClick={onClick}
            className={`
                ${style['button-text']} 
                bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 h-10 px-4 
                rounded-xl text-white flex justify-between gap-x-1.5 items-center
             `}
        >
            <Image src={icon} alt="icon" className='size-5' />
            <h1 className={`hidden md:block`}>{text}</h1>
        </button>
    )
}
