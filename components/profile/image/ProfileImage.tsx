import Image, { StaticImageData } from 'next/image';
import styles from '@/app/styles/profile/profile.image.module.css';


type Props = {
    src: string | StaticImageData,
    preview?: boolean,
}


export default function ProfileImage({ src, preview }: Props) {
    return (
        <div className={`${styles['image-layout']}`}>
            <Image priority
                className={`${preview ? styles['preview-size'] : styles['regular-size']} ${styles['profile-image']} `}
                src={src} quality={60} alt="Profile image" width={500} height={500} />
        </div>
    )
}
