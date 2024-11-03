"use client"


import { ReactNode, useEffect, useRef, useState } from 'react';

import Dropdown from '@/components/common/Dropdown';
import IconButton from '@/components/buttons/IconButton';

import ellipsisHorizontal from '@/public/ellipsis-horizontal/ellipsis-horizontal.svg';
import hoveredEllipsisHorizontal from '@/public/ellipsis-horizontal/ellipsis-horizontal-hovered.svg';

type Props = {
    children?: ReactNode,
}


export default function PostDropdown({ children }: Props) {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const dropdown = useRef<HTMLDivElement>(null);

    /* TODO Transfer this useEffect to dropdown component as done in modal component */
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (showDropdown && !dropdown.current?.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        }
        if (showDropdown) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [showDropdown]);

    return (
        <div ref={dropdown}>
            <IconButton
                icon={ellipsisHorizontal}
                hoveredIcon={hoveredEllipsisHorizontal}
                onClick={(e) => { setShowDropdown(!showDropdown) }}
            />
            {showDropdown &&
                <Dropdown onDropdownClicked={(e) => setShowDropdown(false)}>
                    {children}
                </Dropdown>
            }
        </div>
    );
}
