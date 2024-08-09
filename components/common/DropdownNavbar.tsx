"use client";

import { useState } from "react";

import Sidebar from "@/components/common/Sidebar";
import IconButton from "@/components/buttons/IconButton";


import bars3 from '@/public/bars-3/bars-3.svg';
import bars3Hovered from '@/public/bars-3/bars-3-hovered.svg';

import xMark from '@/public/x-mark/x-mark.svg';
import xMarkHovered from '@/public/x-mark/x-mark-hovered.svg';

import styles from '@/app/styles/text/text.module.css';

type Props = {
    local: any,
}


export default function DropdownNavbar({ local }: Props) {

    const [showDropdown, setShowDropdown] = useState(false);

    const handleClick = () => {
        setShowDropdown(!showDropdown);
    }

    return (
        <div className="bg-white w-full border-d border-gray-200 relative">
            <div className="absolute top-0 w-full bg-white flex flex-col size-full">

                <div className="flex justify-between p-2 w-full bg-white">
                    <h1 className={`${styles['h1']} text-center`}>text</h1>
                    {showDropdown
                        ? <IconButton icon={xMark} hoveredIcon={xMarkHovered} onClick={handleClick} />
                        : <IconButton icon={bars3} hoveredIcon={bars3Hovered} onClick={handleClick} />
                    }
                </div>
                <div className="flex flex-grow items-stretch min-h-screen">
                    <div className={`${showDropdown ? 'w-full' : 'hidden'} p-1 bg-white`}>
                        <Sidebar local={local} onClick={handleClick} />
                    </div>
                </div>
            </div>
        </div>
    )
}