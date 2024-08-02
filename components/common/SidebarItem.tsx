"use client";

import textStyles from '@/app/styles/text/text.module.css';
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
            className={`
                block hover:bg-gray-100 w-full min-w-[144px] sm:min-w-[192px] md:min-w-[224px] px-2 sm:px-3 py-1 sm:py-2
                ${textStyles['base-text']}
                ${value == selectedValue ? 'bg-gray-100' : ''}
            `}
            onClick={onClick}
        >
            {text}
        </Link>
    )
}
