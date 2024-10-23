import 'server-only';

import styles from '@/app/styles/components/profile.image.module.css';


export default function PostMenu() {
    return (
        <div className='flex justify-around items-center'>
            <div className={`${styles['image-layout']}`}>
                <div className={`${styles['preview-size']} relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-200`} />
            </div>
            <div className="flex-1 flex gap-2 mx-4">
                <div className="h-2 bg-gray-200 rounded-full my-2 w-20" />
                <div className="h-2 bg-gray-200 rounded-full my-2 w-48" />
            </div>
            <div className="h-2 bg-gray-200 rounded-full my-2 w-6" />
        </div>
    )
}
