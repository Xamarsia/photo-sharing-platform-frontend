"use client";

import Image from 'next/image';
import { useState } from 'react';

import styles from '@/app/styles/components/button.module.css';
import textStyles from '@/app/styles/components/text.module.css';


type TextIconButtonProps = {
    type: 'button' | 'submit';
    text: string | undefined;
    style: 'primary-button' | 'secondary-button' | 'transparent-button' | 'delete-button' | 'delete-transparent-button' | 'dropdown-button' | 'red-dropdown-button' | 'blue-dropdown-button';
    size?: 'extra-small' | 'small' | 'base' | 'large' | 'extra-large';
    rounded?: 'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-xl';
    fill?: 'content' | 'parent';
    disabled?: boolean;
    hidden?: boolean;
    icon: string;
    hoveredIcon?: string;
    iconSide?: 'left' | 'right';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
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
                ${styles[size]}
                ${textStyles[size]} 
                ${textStyles[style]} 
                ${style.includes('dropdown-button') ? styles['dropdown-button'] : styles[style]} 
                ${rounded}
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
                <div className={`${styles[iconSize]}`}>
                    <Image src={isHovering ? hoveredIcon : icon} alt="icon" />
                </div>
            </div>
            <h1 className={`items-center`}>{text}</h1>

        </button>
    )
}
