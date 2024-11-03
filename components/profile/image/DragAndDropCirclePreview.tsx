import Image, { StaticImageData } from 'next/image';
import styles from '@/app/styles/components/profile.image.module.css';

type Props = {
    src: string | StaticImageData;
}


export default function DragAndDropCirclePreview({ src }: Props) {
    return (
        <Image className={`${styles['regular-size']} rounded-full object-cover object-center`}
            src={src} quality={60} alt="Profile image" width={500} height={500} />
    );
}
