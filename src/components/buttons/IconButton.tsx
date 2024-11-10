"use client";


import Image from 'next/image';
import { useState } from 'react';


type Props = {
    icon: string,
    hoveredIcon: string,
    className?: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}


export default function IconButton({ icon, hoveredIcon, className, onClick }: Props) {
    const [isHovering, setIsHovered] = useState<boolean>(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    return (
        <button
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`inline-flex justify-center items-center aspect-square ${className}`}>
            <Image src={isHovering ? hoveredIcon : icon} alt="icon" className={`size-8`} />
        </button>
    )
}