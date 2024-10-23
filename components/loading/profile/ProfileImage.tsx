import 'server-only';


import styles from '@/app/styles/components/profile.image.module.css';


export default function ProfileImage() {
    return (
        <div className={`${styles['image-layout']}`}>
            <div className={`${styles['regular-size']} inline-flex rounded-full bg-gray-200`} />
        </div>
    )
}
