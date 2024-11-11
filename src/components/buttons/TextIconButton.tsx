"use client";

import textStyle from '@/styles/text/text.module.css';
import Image from 'next/image';


type Props = {
    text: string,
    icon: string,
    fill?: 'content' | 'parent',
    style?: 'primary' | 'secondary' | undefined,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
}


export default function TextIconButton({ icon, text, fill, style = 'primary', onClick }: Props) {
    return (
        /* External div for anti-flex */
        <div>
            <button
                type='button'
                onClick={onClick}
                className={`
                    ${fill == 'parent' && 'w-full'}
                    ${textStyle['button-text']} flex justify-between gap-x-1.5 items-center px-4 rounded-xl h-10
                    ${style == 'primary' && 'bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white'}
                    ${style == 'secondary' && 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-100'}
                `}
            >
                <Image src={icon} alt="icon" className='size-5' />
                <h1 className={`hidden md:block ${fill == 'parent' && 'w-full'}`}>{text}</h1>
            </button>
        </div>
    )
}
