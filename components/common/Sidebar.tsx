
import SidebarItem from "@/components/common/SidebarItem";


type Props = {
    local: any,
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void,
}


export default function Sidebar({ local, onClick }: Props) {

    return (
        <nav className="flex flex-col p-2 md:p-4 gap-0.5" onClick={onClick}>
            <SidebarItem href="/profile/edit/info" text={local.userInfo} />
            <SidebarItem href="/profile/edit/image" text={local.profileImage} />
            <SidebarItem href="/profile/edit/password" text={local.password} />
            <SidebarItem href="/profile/edit/username" text={local.username} />
            <SidebarItem href="/profile/edit/email" text={local.email} />
        </nav>
    )
}
