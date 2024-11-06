"use client";

import { RefObject, useEffect, useRef, useState } from "react";

import Sidebar from "@/components/common/sidebar/Sidebar";
import IconButton from "@/components/buttons/IconButton";


import bars3 from '@/public/bars-3/bars-3.svg';
import bars3Hovered from '@/public/bars-3/bars-3-hovered.svg';
import xMark from '@/public/x-mark/x-mark.svg';
import xMarkHovered from '@/public/x-mark/x-mark-hovered.svg';


type Props = {
    items: Array<SidebarItemInfo>
}


export default function NavbarDrawer({ items }: Props) {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const dropdown: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

    const handleClick = (): void => {
        setShowDropdown(!showDropdown);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (showDropdown && !dropdown.current?.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
    }, [showDropdown]);

    return (
        <div className="md:hidden">
            {showDropdown
                ? <IconButton icon={xMark} hoveredIcon={xMarkHovered} onClick={handleClick} />
                : <IconButton icon={bars3} hoveredIcon={bars3Hovered} onClick={handleClick} />
            }

            <div className={`bg-white z-10 ${showDropdown ? 'fixed top-20 left-0 size-full no-doc-scroll' : 'hidden'} `}>
                <div ref={dropdown}>
                    <Sidebar items={items} />
                </div>
            </div>
        </div>
    )
}
