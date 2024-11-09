"use client";

import { ReactNode } from 'react';


type Props = {
    children: ReactNode,
    onDropdownClicked?: (event: React.MouseEvent<HTMLDivElement>) => void,
}


export default function Dropdown({ children, onDropdownClicked }: Props) {
    return (
        <div className='relative inline-block' onClick={onDropdownClicked}>
            <div className='absolute right-0 mt-2 w-48 sm:w-56 origin-top-right p-1 rounded-lg bg-white border border-gray-100'>
                {children}
            </div>
        </div>
    )
}
