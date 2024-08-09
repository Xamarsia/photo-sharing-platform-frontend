"use client"

import { ReactNode, useEffect, useRef, useState } from 'react';
import Dropdown from '@/components/common/Dropdown';
import { getProfileImagePreview } from '@/lib/profile-controller';


type Props = {
    user: UserDTO | UserPreviewDTO;
    children?: ReactNode;
}


export default function ProfilePreviewDropdown({ user, children }: Props) {
    const [showDropdown, setShowDropdown] = useState(false);
    const profileImagePreview = getProfileImagePreview(user);

    const dropdown = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (showDropdown && !dropdown.current?.contains(event.target as Node)) {
                setShowDropdown(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
    }, [showDropdown])

    return (
        <div ref={dropdown}>
            <button onClick={e => { setShowDropdown(!showDropdown) }}>
                {profileImagePreview}
            </button>
            {showDropdown &&
                <Dropdown>
                    {children}
                </Dropdown>
            }
        </div>
    );
}
