"use client";


import Link from "next/link";
import { useRouter } from "next/navigation";

import styles from '@/app/styles/text/text.module.css';


type Props = {
    local: any,
}


export default function FooterMenu({ local }: Props) {
    const router = useRouter();

    return (
        <ul className="flex flex-wrap items-center gap-2 sm:gap-4 md:gap-8">
            <li>
                <Link href={""} className={`${styles['secondary-link']}`}>{local.about}</Link>
            </li>
            <li>
                <Link href={""} className={`${styles['secondary-link']}`}>{local.privacyPolicy}</Link>
            </li>
            <li>
                <Link href={""} className={`${styles['secondary-link']}`}>{local.contact}</Link>
            </li>
        </ul>
    )
}
