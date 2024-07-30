"use client";

import styles from '@/app/styles/components/buttons/sidebar.button.module.css';
import textStyles from '@/app/styles/text/text.module.css';
import Link from 'next/link';

type Props = {
    text: string,
    size: 'small' | 'base' | 'large',
    href: string,
    value: SidebarNavItem,
    selectedValue: SidebarNavItem,
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void,
}


export default function SidebarItem({ text, size, href, value, selectedValue, onClick }: Props) {

    return (
        <Link href={href}
            className={`
                ${styles['sidebar']}    
                ${styles[size]}
                ${textStyles[size]}
                ${textStyles['base-text']}
                ${value == selectedValue ? 'bg-gray-100' : ''}
            `}
            onClick={onClick}
        >
            {text}
        </Link>
    )
}
