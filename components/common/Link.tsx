import styles from '@/app/styles/components/link.module.css';
import textStyles from '@/app/styles/text/text.module.css';
import linkTextStyle from '@/app/styles/text/link.text.module.css';

import Link from "next/link";

type LinkProps = {
    href?: string,
    prefetch?: boolean,
    text?: string,
    style: 'primary' | 'secondary' | 'delete',
    size?: 'small' | 'base' | 'large',
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void,
}

export default function LinkButton({ prefetch, text, style, size = 'small', href = '', onClick }: LinkProps) {

    return (
        <Link href={href}
            prefetch={prefetch}
            onClick={onClick}
            className={`
                ${styles['link']} 
                ${textStyles[size]}
                ${linkTextStyle[style]}
                ${linkTextStyle['link']}
            `}>
            {text}
        </Link>
    )
}