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
        const onClickOutside = (e: MouseEvent) => {
            if (isVisible && !dropdown.current?.contains(e.target as Node)) {
                onOutsideClicked();
            }
        }
        if (isVisible) {
            document.addEventListener('mousedown', onClickOutside);
        } else {
            document.removeEventListener('mousedown', onClickOutside);
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
