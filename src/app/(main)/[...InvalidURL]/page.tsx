import 'server-only';

import { getDictionary } from '@/lib/localization';

import NotFound from '@/components/common/NotFound';
import styles from '@/styles/components/page.module.css';


export default async function InvalidURLPage() {
    const dict = await getDictionary('en');
    return (

        <div className={`${styles['simple-page-layout']}`}>
            <NotFound alertTitle={dict.pageNotFound} alertBody={dict.pageDoesNotExist} />
        </div>
    );
}
