import 'server-only';

import NotFound from '@/components/common/NotFound';
import styles from '@/styles/components/page.module.css';

import { useTranslations } from 'next-intl';

export default function InvalidURLPage() {
    const t = useTranslations('NotFound');

    return (
        <div className={`${styles['simple-page-layout']}`}>
            <NotFound alertTitle={t('pageNotFound')} alertBody={t('pageDoesNotExist')} />
        </div>
    );
}
