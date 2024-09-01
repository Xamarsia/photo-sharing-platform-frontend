"use client"


import SidebarItem from "@/components/common/SidebarItem";
import { usePathname } from "next/navigation";

type Props = {
    local: any,
}


export default function Sidebar({ local }: Props) {
    const pathname = usePathname()

    type SidebarItemInfo = {
        href: string,
        title: string,
    }

    const items: Array<SidebarItemInfo> = [
        { href: "/profile/edit/info", title: local.userInfo },
        { href: "/profile/edit/image", title: local.profileImage },
        { href: "/profile/edit/password", title: local.password },
        { href: "/profile/edit/username", title: local.username },
        { href: "/profile/edit/email", title: local.email },
    ];

    return (
        <nav className="flex flex-col p-2 md:p-4 gap-0.5">
            {items.map((item) => {
                return <SidebarItem key={item.title} href={item.href} text={item.title} selected={pathname == item.href} />
            })}
        </nav>
    )
}
