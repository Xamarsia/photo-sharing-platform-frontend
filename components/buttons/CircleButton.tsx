"use client";


import Image from 'next/image';
import { useState } from 'react';

type Props = {
    icon: string,
    hoveredIcon: string,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}


export default function CircleButton({ icon, hoveredIcon, onClick }: Props) {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    return (
        <button type="button"
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`inline-flex justify-center items-center aspect-square p-1 bg-blue-500 hover:bg-blue-600 rounded-full`}>
            <Image src={isHovering ? hoveredIcon : icon} alt="icon" className={`size-8`} />
        </button>
    )
}