"use client";

import Link from 'next/link';

type Props = {
    text: string,
    href: string,
    value: SidebarNavItem,
    selectedValue: SidebarNavItem,
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void,
}


export default function SidebarItem({ text, href, value, selectedValue, onClick }: Props) {

    return (
        <Link href={href}

            className={`flex items-center  px-3 rounded-lg h-10 w-full min-w-36 sm:min-w-48 md:min-w-56
                text-sm font-normal  text-gray-500 hover:text-gray-700 hover:bg-gray-100
                ${value == selectedValue ? 'bg-gray-100 text-gray-800 ' : 'bg-white'}
            `}
            onClick={onClick}
        >
            {text}
        </Link>
    )
}
