import 'server-only';

import Link from "next/link";

import styles from '@/styles/text/text.module.css';
import { useTranslations } from 'next-intl';


export default function FooterMenu() {
    const t = useTranslations('footer');

    return (
        <ul className="flex flex-wrap items-center gap-2 sm:gap-4 md:gap-8">
            <li>
                <Link href={""} className={`${styles['secondary-link']}`}>{t('about')}</Link>
            </li>
            <li>
                <Link href={""} className={`${styles['secondary-link']}`}>{t('privacyPolicy')}</Link>
            </li>
            <li>
                <Link href={""} className={`${styles['secondary-link']}`}>{t('contact')}</Link>
            </li>
        </ul>
    )
}
