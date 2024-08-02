import Image, { StaticImageData } from 'next/image';


type Props = {
    src: string | StaticImageData;
    size: 'full' | 'cropped-square' | 'uncropped-square';
}


export default function PostImage({ src, size }: Props) {
    return (
        <div
            className={`
            ${size.includes('square') ? 'relative aspect-square bg-gray-100' : ''} 
        `}>
            <Image className={`size-full max-h-full max-w-full object-center
                ${size == 'cropped-square' ? 'object-cover' : 'object-scale-down'}
            `}
                src={src} width="400" height="400" alt="Post image" />
        </div>
    );
}
