"use client";


import Image from 'next/image';
import { useCallback, useState } from 'react';


type Props = {
    icon: string,
    hoveredIcon?: string,
    disabled?: boolean,
    className?: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
}


export default function IconButton({ icon, hoveredIcon, disabled, className, onClick }: Props) {
    const [isHovering, setIsHovered] = useState<boolean>(false);

    const onMouseEnter = useCallback(() => {
        setIsHovered(true);
    }, [isHovering]);

    const onMouseLeave = useCallback(() => {
        setIsHovered(false);
    }, [isHovering]);

    return (
        <button
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            disabled={disabled}
            className={`inline-flex justify-center items-center aspect-square ${className} min-h-8 min-w-8`}>
                <Image src={hoveredIcon && isHovering ? hoveredIcon : icon} alt="icon" className={`size-8`} /> 
        </button>
    )
}