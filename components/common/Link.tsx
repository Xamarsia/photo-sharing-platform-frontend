import linkTextStyle from '@/app/styles/text/link.text.module.css';

import Link from "next/link";

type LinkProps = {
    href?: string,
    prefetch?: boolean,
    text?: string,
    style: 'primary' | 'secondary' | 'delete',
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void,
}

export default function LinkButton({ prefetch, text, style, href = '', onClick }: LinkProps) {

    return (
        <Link href={href}
            prefetch={prefetch}
            onClick={onClick}
            className={`
                inline-flex w-full justify-center sm:mt-0 sm:w-auto bg-transparent shadow-none border-none disabled:opacity-50
               disabled:text-slate-500 disabled:no-underline
                text-sm leading-5
                ${linkTextStyle[style]}
            `}>
            {text}
        </Link>
    )
}