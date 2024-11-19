import 'server-only';

import { ReactNode } from "react";

import styles from '@/styles/text/text.module.css';

import NavbarDrawer from "@/components/common/NavbarDrawer";
import { getSidebarItems } from "@/actions/actions";

type Props = {
    title: string,
    children: ReactNode,

}

export default async function SettingsPage({ title, children }: Props) {
    const sidebarItems: Array<SidebarItemInfo> = await getSidebarItems();

    return (
        <div className='text-left flex flex-col gap-y-3'>
            <div className="flex justify-between">
                <h1 className={`${styles['h1']}`}>{title}</h1>
                <NavbarDrawer items={sidebarItems} />
            </div>

            {children}
        </div>
    )
}
