"use client"

import { ReactNode, useEffect, useRef } from 'react';


type Props = {
    isVisible: boolean,
    onOutsideClicked: () => void,
    children?: ReactNode,
}


export default function Dropdown({ children, isVisible, onOutsideClicked }: Props) {
    const dropdown = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isVisible && !dropdown.current?.contains(event.target as Node)) {
                onOutsideClicked();
            }
        }
        if (isVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isVisible]);

    return (
        <div ref={dropdown}>
            {isVisible &&
                <div className='relative inline-block'>
                    <div className='absolute right-0 mt-2 w-48 sm:w-56 origin-top-right p-1 rounded-lg bg-white border border-gray-100'>
                        {children}
                    </div>
                </div>
            }
        </div>
    );
}
