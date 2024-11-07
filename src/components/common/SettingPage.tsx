import 'server-only';

import { ReactNode } from "react";

import styles from '@/styles/text/text.module.css';
import formStyles from '@/styles/components/form.module.css';

import NavbarDrawer from "@/components/common/NavbarDrawer";
import { getSidebarItems } from "@/actions/actions";

type Props = {
    title: string,
    children: ReactNode,

}

export default async function SettingPage({ title, children }: Props) {
    const sidebarItems: Array<SidebarItemInfo> = await getSidebarItems();

    return (
        <div className={`text-left ${formStyles['form-container']}`}>
            <div className="flex justify-between">
                <h1 className={`${styles['h1']}`}>{title}</h1>
                <NavbarDrawer items={sidebarItems} />
            </div>

            {children}
        </div>
    )
}
