"use client";

import Image from 'next/image';
import { useState } from 'react';

import styles from '@/app/styles/components/buttons/button.module.css';

import textStyles from '@/app/styles/text/text.module.css';
import buttonTextStyle from '@/app/styles/text/button.text.module.css';


type Props = {
    text: string,
    style: 'primary' | 'secondary',
    fill?: 'content' | 'parent',
    size?: 'small' | 'base' | 'large',
    rounded?: 'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-xl',
    disabled?: boolean,
    icon: string,
    hoveredIcon?: string,
    iconSide?: 'left' | 'right',
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}


export default function TextIconButton({ icon, text, style, size = 'base', rounded = 'rounded-md', fill = "content", disabled = false, iconSide = 'left', hoveredIcon = icon, onClick }: Props) {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    var iconSize: string = size + `-icon`;
    var iconGap: string = size + `-gap`;
    return (
        <button
            type='button'
            disabled={disabled}
            onClick={onClick}
            className={`
                ${styles['base-button']}
                ${rounded} 
                ${styles[size]}
                ${styles[style]}
                ${textStyles[size]} 
                ${buttonTextStyle[style]}  
                ${(text && icon) ? styles[iconGap] : ''}
                ${fill == 'parent' ? 'w-full' : ''}
                ${icon ? 'flex justify-between' : ''}
            `}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className={`${iconSide == 'right' ? 'order-last' : 'order-first'}`}>
                <Image src={isHovering ? hoveredIcon : icon} alt="icon" className={`${styles[iconSize]}`} />
            </div>
            <h1 className={`hidden md:block`}>{text}</h1>

        </button>
    )
}
