"use client"

import styles from '@/app/styles/components/button.module.css'
import textStyles from '@/app/styles/components/text.module.css'
import { useState } from 'react'
import Image from 'next/image'


type ButtonProps = {
    type: 'button' | 'submit';
    text: string | undefined;
    style: 'primary-button' | 'secondary-button' | 'transparent-button' | 'delete-button' | 'delete-transparent-button' | 'dropdown-button';
    size?: 'extra-small' | 'small' | 'base' | 'large' | 'extra-large';
    rounded?: 'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-xl';
    fill?: 'content' | 'parent';
    disabled?: boolean;
    hidden?: boolean;
    icon?: string;
    hoveredIcon?: string;
    iconSide?: 'left' | 'right';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


export default function Button({ icon, text, style, hidden, type = 'button', size = 'base', rounded = 'rounded-md', fill = "content", disabled = false, iconSide = 'left', hoveredIcon = icon, onClick }: ButtonProps) {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    var iconSize: string = size + `-icon`;
    var iconGap: string = size + `-gap`;
    return (
        <button type={type}
            className={`
                ${styles['base-button']} 
                ${textStyles[style]} 
                ${styles[style]} 
                ${styles[size]}
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

            {icon && hoveredIcon &&
                <div className={`${iconSide == 'right' ? 'order-last' : 'order-first'}`}>
                    <div className={`${styles[iconSize]}`}>
                        <Image src={isHovering ? hoveredIcon : icon} alt="icon" />
                    </div>
                </div>
            }
            <h1 className={`items-center`}>{text}</h1>

        </button>
    )
}
