import Image, { StaticImageData } from 'next/image';
import styles from '@/app/styles/post/post.image.module.css';

type Props = {
    src: string | StaticImageData;
    size: 'full' | 'cropped-square' | 'uncropped-square';
    rounded?: 'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-xl';
}


export default function PostImage({ src, size, rounded }: Props) {
    return (
        <div
            className={`
            ${rounded}
            ${size.includes('square') ? styles['square-container'] : ''} 
        `}>
            <Image className={`
                ${rounded}
                ${styles['post-image']}
                ${size == 'cropped-square' ? 'object-cover' : 'object-scale-down'}
            `}
                src={src} width="400" height="400" alt="Post image" />
        </div>
    );
}
