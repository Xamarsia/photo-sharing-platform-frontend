"use client";


import { ReactNode } from "react";

import styles from '@/app/styles/text/text.module.css';

type Props = {
    title: string,
    children: ReactNode,

}

export default function SettingPage({ title, children }: Props) {

    return (
        <div className='text-left flex flex-col gap-y-3 sm:gap-y-6'>
            <h1 className={`${styles['h1']} text-left`}>{title}</h1>
            {children}
        </div>
    )
}