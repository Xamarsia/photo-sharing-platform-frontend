"use client"

import styles from '@/app/styles/components/icon.button.module.css'
import Image from 'next/image'
import { useState } from 'react'


type ButtonProps = {
    icon: string;
    hoveredIcon: string;
    style?: 'transparent-button';
    size?: 'extra-small' | 'small' | 'base' | 'large' | 'extra-large' | 'extra-extra-large';
    rounded?: 'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-xl' | 'rounded-full';
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


export default function IconButton({ icon, hoveredIcon, style, size = 'extra-large', rounded = 'rounded-md', onClick }: ButtonProps) {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    var iconSize: string = size + `-icon`;
    return (
        <div className="flex items-center flex-shrink-0"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <button type="button"
                className={`
                ${styles['icon-button']} 
                ${style ? styles[style] : ''} 
                ${styles[size]}
                ${rounded}
            `}>
                <div className={`${styles[iconSize]}`}>
                    <Image src={isHovering ? hoveredIcon : icon} alt="icon" />
                </div>
            </button>
        </div>
    )
}