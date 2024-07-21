"use client";

import Image from 'next/image';
import { useState } from 'react';

import styles from '@/app/styles/components/button.module.css';
import textStyles from '@/app/styles/components/text.module.css';


type TextIconButtonProps = {
    text: string | undefined,
    style: 'primary-button' | 'secondary-button',
    type?: 'button' | 'submit',
    fill?: 'content' | 'parent',
    size?: 'extra-small' | 'small' | 'base' | 'large' | 'extra-large',
    rounded?: 'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-xl',
    disabled?: boolean,
    hidden?: boolean,
    icon: string,
    hoveredIcon?: string,
    iconSide?: 'left' | 'right',
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}


export default function TextIconButton({ icon, text, style, hidden, type = 'button', size = 'base', rounded = 'rounded-md', fill = "content", disabled = false, iconSide = 'left', hoveredIcon = icon, onClick }: TextIconButtonProps) {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    var iconSize: string = size + `-icon`;
    var iconGap: string = size + `-gap`;
    return (
        <button type={type}
            className={`
                ${styles['base-button']}
                ${rounded} 
                ${styles[size]}
                ${styles[style]}
                ${textStyles[size]} 
                ${textStyles[style]} 
                ${(text && icon) ? styles[iconGap] : ''}
                ${fill == 'parent' ? 'w-full' : ''}
                ${icon ? 'flex justify-between' : ''}
            `}
            disabled={disabled}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            hidden={hidden}
        >
            <div className={`${iconSide == 'right' ? 'order-last' : 'order-first'}`}>
                <Image src={isHovering ? hoveredIcon : icon} alt="icon" className={`${styles[iconSize]}`} />
            </div>
            <h1 className={`hidden md:block`}>{text}</h1>

        </button>
    )
}
