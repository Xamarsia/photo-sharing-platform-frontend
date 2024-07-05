import styles from '@/app/styles/components/link.module.css';
import textStyles from '@/app/styles/components/text.module.css';

import Link from "next/link";
import { ReactNode } from 'react';

type LinkProps = {
    href: string;
    prefetch?: boolean;
    style?: 'none' | 'text-link';
    children: ReactNode;
}


export default function LinkButton({ href, prefetch, children, style = 'none' }: LinkProps) {
    const textStyle: string = `${styles["link"]} ${textStyles["link"]}`

    return (
        <Link href={href}
            prefetch={prefetch}
            className={`${style == 'none' ? '' : textStyle}`}>
            {children}
        </Link>
    )
}