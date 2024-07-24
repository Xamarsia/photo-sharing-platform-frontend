"use client"


import styles from '@/app/styles/components/buttons/icon.button.module.css';

import Image from 'next/image';

import { useState } from 'react';


type Props = {
    icon: string;
    hoveredIcon: string;
    size: 'small' | 'base' | 'large';
    style: 'primary' | 'secondary' | 'no-background';
    hovered?: boolean;
    rounded?: 'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-xl' | 'rounded-full';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}


export default function IconButton({ icon, hoveredIcon, hovered, style, size, rounded = 'rounded-md', onClick }: Props) {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    const iconSize: string = size + `-icon`;
    return (
        <button type="button"
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`
                ${styles['icon-button']} 
                ${style != 'no-background' ? styles[size] : ''}
                ${styles[style]} 
                ${rounded}
            `}>
            <Image src={(isHovering || hovered) ? hoveredIcon : icon} alt="icon" className={`${styles[iconSize]}`} />
        </button>
    )
}