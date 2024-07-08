"use client"

import { ReactNode, useState } from 'react';
import Dropdown from '@/components/Dropdown';
import IconButton from '@/components/buttons/IconButton';;

import ellipsisHorizontal from '@/public/ellipsis-horizontal/ellipsis-horizontal.svg'
import hoveredEllipsisHorizontal from '@/public/ellipsis-horizontal/ellipsis-horizontal-hovered.svg'

type Props = {
    children?: ReactNode;
}


export default function PostDropdown({ children }: Props) {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div>
            <IconButton onClick={(e) => { setShowDropdown(!showDropdown) }} size={'extra-extra-large'} icon={ellipsisHorizontal} hoveredIcon={hoveredEllipsisHorizontal} />
            {showDropdown &&
                <Dropdown>
                    {children}
                </Dropdown>
            }
        </div>
    );
}
