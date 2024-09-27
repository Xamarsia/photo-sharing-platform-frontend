import 'server-only';

import { getDictionary } from '@/lib/localization';

import NotFound from '@/components/common/NotFound';
import styles from '@/app/styles/components/page.module.css';

type PageProps = {
    invalidURL: string,
}


export default async function InvalidURLPage({ params }: { params: PageProps }) {
    const dict = await getDictionary('en');
    return (

        <div className={`${styles['simple-page-layout']}`}>
            <NotFound alertTitle={dict.pageNotFound} alertBody={dict.pageDoesNotExist} />
        </div>
    );
}
