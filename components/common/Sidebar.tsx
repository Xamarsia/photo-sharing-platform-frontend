"use client";


import SidebarItem from "@/components/common/SidebarItem";

import { useState } from "react";
import { SidebarNavItem } from "@/constants";


type Props = {
    local: any,
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void,
}


export default function Sidebar({ local, onClick }: Props) {

    const [currentItem, setCurrentItem] = useState<SidebarNavItem>(SidebarNavItem.UserInfo);

    return (
        <nav className="flex flex-col p-2 md:p-4 gap-0.5" onClick={onClick}>
            <SidebarItem href="/profile/edit/info" value={SidebarNavItem.UserInfo} selectedValue={currentItem} text={local.userInfo} onClick={() => { setCurrentItem(SidebarNavItem.UserInfo) }} />
            <SidebarItem href="/profile/edit/image" value={SidebarNavItem.ProfileImage} selectedValue={currentItem} text={local.profileImage} onClick={() => { setCurrentItem(SidebarNavItem.ProfileImage) }} />
            <SidebarItem href="/profile/edit/password" value={SidebarNavItem.Password} selectedValue={currentItem} text={local.password} onClick={() => { setCurrentItem(SidebarNavItem.Password) }} />
            <SidebarItem href="/profile/edit/username" value={SidebarNavItem.Username} selectedValue={currentItem} text={local.username} onClick={() => { setCurrentItem(SidebarNavItem.Username) }} />
            <SidebarItem href="/profile/edit/email" value={SidebarNavItem.Email} selectedValue={currentItem} text={local.email} onClick={() => { setCurrentItem(SidebarNavItem.Email) }} />
        </nav>
    )
}
