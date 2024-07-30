"use client";


import SidebarItem from "@/components/common/SidebarItem";

import { useState } from "react";
import { SidebarNavItem } from "@/constants";


type Props = {
    local: any,
    size: 'small' | 'base' | 'large',
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void,
}


export default function Sidebar({ local, size, onClick }: Props) {

    const [currentItem, setCurrentItem] = useState<SidebarNavItem>(SidebarNavItem.UserInfo);

    return (
        <nav className="flex flex-col p-2 md:p-4 gap-0.5" onClick={onClick}>
            <SidebarItem href="/profile/edit/info" value={SidebarNavItem.UserInfo} selectedValue={currentItem} size={size} text={local.userInfo} onClick={() => { setCurrentItem(SidebarNavItem.UserInfo) }} />
            <SidebarItem href="/profile/edit/image" value={SidebarNavItem.ProfileImage} selectedValue={currentItem} size={size} text={local.profileImage} onClick={() => { setCurrentItem(SidebarNavItem.ProfileImage) }} />
            <SidebarItem href="/profile/edit/password" value={SidebarNavItem.Password} selectedValue={currentItem} size={size} text={local.password} onClick={() => { setCurrentItem(SidebarNavItem.Password) }} />
            <SidebarItem href="/profile/edit/username" value={SidebarNavItem.Username} selectedValue={currentItem} size={size} text={local.username} onClick={() => { setCurrentItem(SidebarNavItem.Username) }} />
            <SidebarItem href="/profile/edit/email" value={SidebarNavItem.Email} selectedValue={currentItem} size={size} text={local.email} onClick={() => { setCurrentItem(SidebarNavItem.Email) }} />
        </nav>
    )
}
