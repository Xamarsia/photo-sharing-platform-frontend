import 'server-only';

import { getDictionary } from '@/lib/localization';

import NotFound from '@/components/common/NotFound';


type PageProps = {
    invalidURL: string,
}


export default async function InvalidURLPage({ params }: { params: PageProps }) {
    const dict = await getDictionary('en');
    return (
        <main className="min-h-screen bg-white flex items-center justify-center">
            <NotFound alertTitle={dict.pageNotFound} alertBody={dict.pageDoesNotExist} />
        </main>
    );
}
