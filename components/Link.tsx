import styles from '@/app/styles/components/link.module.css'
import textStyles from '@/app/styles/components/text.module.css'
import Link from "next/link";

type ButtonProps = {
    href: string;
    text: string;
    prefetch?: boolean;
}


export default function LinkButton({ href, text, prefetch }: ButtonProps) {

    return (
        <Link href={href}
            className={`
            ${styles["link"]} 
            ${textStyles["link"]}`}
            prefetch={prefetch}>
            {text}
        </Link>
    )
}