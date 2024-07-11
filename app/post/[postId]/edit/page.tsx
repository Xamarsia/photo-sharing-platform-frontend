import 'server-only';

import { getDictionary } from '@/lib/localization';
import { getDetailedPost } from '@/lib/post-controller';

import Card from '@/components/common/Card';
import EditPostForm from '@/components/forms/EditPostForm';


type PageProps = {
    postId: string,
}


export default async function EditPostPage({ params }: { params: PageProps }) {
    const dict = await getDictionary('en');
    const postrData: DetailedPostDTO = await getDetailedPost(params.postId)


    return (
        <main className="min-h-screen bg-blue-100 flex items-center justify-center text-gray-500">
            <Card>
                <EditPostForm local={dict} detailedPost={postrData} />
            </Card>
        </main>
    );
}
