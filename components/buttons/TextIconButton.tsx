"use client";

import Image from 'next/image';

import textStyle from '@/app/styles/text/text.module.css';
import style from '@/app/styles/components/button.module.css';


type Props = {
    text: string,
    icon: string,
    fill?: 'content' | 'parent',
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}


export default function TextIconButton({ icon, text, fill, onClick }: Props) {
    return (
        /* External div for anti-flex */
        <div>
            <button
                type='button'
                onClick={onClick}
                className={`
                ${textStyle['button-text']} 
                ${style['primary']} flex justify-between gap-x-1.5 items-center
                ${fill == 'parent' && 'w-full'}
                `}
            >
                <Image src={icon} alt="icon" className='size-5' />
                <h1 className={`hidden md:block ${fill == 'parent' && 'w-full'}`}>{text}</h1>
            </button>
        </div>
    )
}
