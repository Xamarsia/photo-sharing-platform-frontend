"use client";


import { ReactNode } from "react";


type Props = {
    title: string,
    children: ReactNode,

}

export default function SettingPage({ title, children }: Props) {

    return (
        <div className='text-left flex flex-col gap-y-3 sm:gap-y-6'>
            <h1 className={`text-slate-800 font-normal tracking-normal text-xl sm:text-2xl leading-9 text-left`}>{title}</h1>
            {children}
        </div>
    )
}