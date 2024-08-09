import Image, { StaticImageData } from 'next/image';


type Props = {
    src: string | StaticImageData;
}


export default function DragAndDropFullPreview({ src }: Props) {
    return (
        <div className={`relative aspect-square bg-gray-100`}>
            <Image className={`size-full object-center rounded-xl object-scale-down`}
                src={src} width="400" height="400" alt="Post image" />
        </div>
    );
}
