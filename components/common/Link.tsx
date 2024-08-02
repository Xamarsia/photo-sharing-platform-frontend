import Link from "next/link";

type LinkProps = {
    href?: string,
    prefetch?: boolean,
    text?: string,
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void,
}

export default function LinkButton({ prefetch, text, href = '', onClick }: LinkProps) {

    return (
        <Link href={href}
            prefetch={prefetch}
            onClick={onClick}
            className={`
                inline-flex w-full justify-center sm:mt-0 sm:w-auto bg-transparent border-none 
               disabled:text-slate-500 disabled:no-underline text-sm leading-5
                underline text-blue-500 font-semibold hover:text-blue-700
            `}>
            {text}
        </Link>
    )
}