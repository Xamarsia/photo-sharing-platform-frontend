import 'server-only';

import Card from '@/components/common/Card';

import styles from '@/app/styles/components/form.module.css';
import PostMenu from '@/components/loading/post/PostMenu';
import Description from '@/components/loading/common/Description';


export default function Post() {
    return (
        <Card>
            <div className={`text-left ${styles['form-container']}`}>
                <PostMenu />
                <div className={`relative w-full aspect-square bg-gray-200 rounded-lg mb-4 my-3 sm:my-4`} />
                <Description />
                <div className='flex items-center justify-end gap-6 '>
                    <div className="h-2 bg-gray-100 rounded-full my-2 w-14" />
                    <div className="bg-gray-100 my-2 size-6 rounded-lg" />
                </div>
            </div>
        </Card>
    )
}
