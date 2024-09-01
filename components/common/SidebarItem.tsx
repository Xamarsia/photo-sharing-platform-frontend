"use client";

import Link from 'next/link';


type Props = {
    text: string,
    href: string,
    selected?: boolean,
}


export default function SidebarItem({ text, href, selected }: Props) {
    return (
        <Link href={href}
            className={`flex items-center px-3 rounded-lg h-10 w-full min-w-56
                text-sm font-normal text-gray-500 hover:text-gray-700 hover:bg-gray-100
                ${selected ? 'bg-gray-100 text-gray-800' : 'bg-white'}
            `}
        >
            {text}
        </Link>
    )
}
