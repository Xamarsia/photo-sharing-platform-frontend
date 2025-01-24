import 'server-only';

import FooterMenu from '@/components/common/footer/FooterMenu';

import styles from '@/styles/text/text.module.css';
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('footer');
    return (
        <footer className="flex flex-col-reverse items-center justify-center gap-2
            md:justify-between md:flex-row md:px-8 w-full bg-white
            border-t border-gray-100 flex-shrink-0 h-20 sm:h-24 md:h-16 z-5"
        >
            <span className={`${styles['secondary-info']}`}>
                {t('copyrightText')}
            </span>
            <FooterMenu />
        </footer>
    )
}
