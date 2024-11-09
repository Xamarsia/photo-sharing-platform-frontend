"use client"

import { ReactNode, useEffect, useRef, useState } from 'react';

import Dropdown from '@/components/common/Dropdown';
import ProfileImage from '@/components/profile/image/ProfileImage';


type Props = {
    user: UserDTO;
    children?: ReactNode;
}


export default function HeaderMenuDropdown({ user, children }: Props) {
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
            <button onClick={e => { setShowDropdown(!showDropdown) }}>
                <ProfileImage profileImageExist={user.isProfileImageExist} username={user.username} preview />
            </button>
            {showDropdown &&
                <Dropdown onDropdownClicked={(e) => setShowDropdown(false)} >
                    {children}
                </Dropdown>
            }
        </div>
    );
}
