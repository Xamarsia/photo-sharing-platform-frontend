"use client";


import Link from '@/components/common/Link';

import styles from '@/app/styles/text/text.module.css';


type Props = {
    text: string,
    count: number,
    unclickable?: boolean,
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void,
}


export default function StatCounter({ text, count, unclickable, onClick }: Props) {
    return (
        <div className="flex gap-1 md:gap-2">
            {unclickable
                ? <span className={`${styles['secondary-info']}`}>{text}</span>
                : <Link text={text} onClick={onClick} />
            }
            <span className={`${styles['secondary-info']}`}>{count}</span>
        </div>
    )
}
