import Image, { StaticImageData } from 'next/image';


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
            ${size.includes('square') ? 'relative aspect-square bg-gray-100' : ''} 
        `}>
            <Image className={`
                ${rounded}
                size-full max-h-full max-w-full object-center
                ${size == 'cropped-square' ? 'object-cover' : 'object-scale-down'}
            `}
                src={src} width="400" height="400" alt="Post image" />
        </div>
    );
}
