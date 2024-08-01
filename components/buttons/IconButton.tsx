"use client";


import Image from 'next/image';
import { useState } from 'react';

type Props = {
    icon: string,
    hoveredIcon: string,
    hovered?: boolean,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void,
}


export default function IconButton({ icon, hoveredIcon, hovered, onClick }: Props) {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    return (
        <button type="button"
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={`inline-flex justify-center items-center aspect-square cursor-pointer`}>
            <Image src={(isHovering || hovered) ? hoveredIcon : icon} alt="icon" className={`size-8`} />
        </button>
    )
}