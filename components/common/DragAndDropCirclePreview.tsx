import Image, { StaticImageData } from 'next/image';


type Props = {
    src: string | StaticImageData;
}


export default function DragAndDropCirclePreview({ src }: Props) {
    return (
        <Image className={`size-72 rounded-full object-cover object-center`}
            src={src} quality={60} alt="Profile image" width={500} height={500} />
    );
}
