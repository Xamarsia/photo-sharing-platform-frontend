"use client";


import Link from 'next/link';

import styles from '@/styles/text/text.module.css';


type Props = {
    text: string,
    count: number,
    disabled?: boolean,
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void,
}


export default function StatCounter({ text, count, disabled, onClick }: Props) {
    return (
        <div className="flex gap-1 md:gap-2">
            {disabled
                ? <span className={`${styles['secondary-info']}`}>{text}</span>
                : <Link href={""} className={`${styles['secondary-link']}`} onClick={onClick}>{text}</Link>
            }
            <span className={`${styles['secondary-info']}`}>{count}</span>
        </div>
    )
}
