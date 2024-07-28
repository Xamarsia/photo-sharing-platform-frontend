"use client";


import SidebarButton from "@/components/buttons/SidebarButton";


type Props = {
    local: any,
}


export default function Sidebar({ local }: Props) {

    return (
        <nav className="flex flex-col p-2 md:p-4">
            <SidebarButton size='small' text={local.userInfo} />
            <SidebarButton size='small' text={local.profileImage} />
            <SidebarButton size='small' text={local.password} />
            <SidebarButton size='small' text={local.username} />
            <SidebarButton size='small' text={local.email} />
        </nav>
    )
}
