import 'server-only';

import { ReactNode } from "react";

import styles from '@/app/styles/text/text.module.css';
import formStyles from '@/app/styles/components/form.module.css';

import NavbarDrawer from "@/components/common/NavbarDrawer";
import { getSidebarItems } from "@/actions/actions";

type Props = {
    local: any,
    title: string,
    children: ReactNode,

}

export default async function SettingPage({ local, title, children }: Props) {
    const sidebarItems = await getSidebarItems(local);

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
