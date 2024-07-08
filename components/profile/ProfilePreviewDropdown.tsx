"use client"

import { ReactNode, useState } from 'react';
import Dropdown from '@/components/Dropdown';
import { getProfileImagePreview } from '@/lib/profile-controller';


type Props = {
    user: UserDTO | UserPreviewDTO;
    children?: ReactNode;
}


export default function ProfilePreviewDropdown({ user, children }: Props) {
    const [showDropdown, setShowDropdown] = useState(false);
    const profileImagePreview = getProfileImagePreview(user);

    return (
        <div>
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
