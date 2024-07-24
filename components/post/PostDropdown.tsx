"use client"


import { ReactNode, useState } from 'react';

import Dropdown from '@/components/common/Dropdown';
import IconButton from '@/components/buttons/IconButton';

import ellipsisHorizontal from '@/public/ellipsis-horizontal/ellipsis-horizontal.svg';
import hoveredEllipsisHorizontal from '@/public/ellipsis-horizontal/ellipsis-horizontal-hovered.svg';

type Props = {
    children?: ReactNode,
}


export default function PostDropdown({ children }: Props) {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div>
            <IconButton
                style='no-background'
                size={'large'}
                icon={ellipsisHorizontal}
                hoveredIcon={hoveredEllipsisHorizontal}
                onClick={(e) => { setShowDropdown(!showDropdown) }}
            />
            {showDropdown &&
                <Dropdown>
                    {children}
                </Dropdown>
            }
        </div>
    );
}
