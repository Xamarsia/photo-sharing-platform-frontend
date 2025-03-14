"use client"


import SidebarItem from "@/components/common/sidebar/SidebarItem";
import { usePathname } from "next/navigation";

type Props = {
    items: Array<SidebarItemInfo>
}


export default function Sidebar({ items }: Props) {
    const pathname: string = usePathname();

    return (
        <nav className="flex flex-col p-2 md:p-4 gap-0.5">
            {items.map((item) => {
                return <SidebarItem key={item.title} href={item.href} text={item.title} selected={pathname == item.href} />
            })}
        </nav>
    )
}
