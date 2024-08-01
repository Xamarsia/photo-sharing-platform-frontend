"use client";

import Image from 'next/image';
import { useState } from 'react';

import styles from '@/app/styles/components/buttons/button.module.css';
import buttonTextStyle from '@/app/styles/text/button.text.module.css';


type Props = {
    text: string,
    style: 'primary' | 'secondary',
    fill?: 'content' | 'parent',
    disabled?: boolean,
    icon: string,
    hoveredIcon?: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}


export default function TextIconButton({ icon, text, style, fill = "content", disabled = false, hoveredIcon = icon, onClick }: Props) {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    return (
        <button
            type='button'
            disabled={disabled}
            onClick={onClick}
            className={`
                flex justify-between px-2 py-1 sm:px-3 sm:py-2 text-sm leading-5 gap-x-1.5
                ${styles['base-button']}
                ${styles[style]}
                ${buttonTextStyle[style]}  
                ${fill == 'parent' ? 'w-full' : ''}
            `}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <Image src={isHovering ? hoveredIcon : icon} alt="icon" className='size-5' />
            <h1 className={`hidden md:block`}>{text}</h1>
        </button>
    )
}
