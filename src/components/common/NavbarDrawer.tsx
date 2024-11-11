"use client";

import { RefObject, useCallback, useEffect, useRef, useState } from "react";

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

    const onClick = useCallback(() : void => {
        setShowDropdown(!showDropdown);
    }, [showDropdown]);


    useEffect(() => {
        const onClickOutside = (event: MouseEvent) => {
            if (showDropdown && !dropdown.current?.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        }
        document.addEventListener('mousedown', onClickOutside);
    }, [showDropdown]);

    return (
        <div className="md:hidden">
            {showDropdown
                ? <IconButton icon={xMark} hoveredIcon={xMarkHovered} onClick={onClick} />
                : <IconButton icon={bars3} hoveredIcon={bars3Hovered} onClick={onClick} />
            }

            <div className={`bg-white z-10 ${showDropdown ? 'fixed top-20 left-0 size-full no-doc-scroll' : 'hidden'} `}>
                <div ref={dropdown}>
                    <Sidebar items={items} />
                </div>
            </div>
        </div>
    )
}
