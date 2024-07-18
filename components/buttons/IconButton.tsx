"use client"


import styles from '@/app/styles/components/icon.button.module.css';

import Image from 'next/image';

import { useState } from 'react';


type ButtonProps = {
    icon: string;
    hoveredIcon: string;
    hovered?: boolean;
    fill?: 'content' | 'parent';
    style?: 'transparent-button' | 'primary-button' | 'icon-only';
    size?: 'extra-small' | 'small' | 'base' | 'large' | 'extra-large';
    rounded?: 'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-xl' | 'rounded-full';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


export default function IconButton({ icon, hoveredIcon, hovered, fill, style='icon-only', size = 'small', rounded = 'rounded-md', onClick }: ButtonProps) {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    const iconSize: string = size + `-icon`;
    const isBackgroundExist: boolean | undefined = !(style?.includes('transparent') || (style == 'icon-only'));

    return (
        <button type="button"
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`
                ${styles['icon-button']} 
                ${style ? styles[style] : ''} 
                ${fill == 'parent' ? 'w-full' : ''}
                ${isBackgroundExist ? styles[size] : ''}
                ${rounded}
            `}>
            <Image src={(isHovering || hovered) ? hoveredIcon : icon} alt="icon" className={`${styles[iconSize]}`} />
        </button>
    )
}