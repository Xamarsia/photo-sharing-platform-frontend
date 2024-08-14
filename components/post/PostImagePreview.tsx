import Image, { StaticImageData } from 'next/image';


type Props = {
    src: string | StaticImageData;
}


export default function PostImagePreview({ src }: Props) {
    return (
        <div className={`relative aspect-square`}>
            <Image className={`size-full object-center rounded-md object-cover`}
                src={src} width="400" height="400" alt="Post image" />
        </div>
    );
}
