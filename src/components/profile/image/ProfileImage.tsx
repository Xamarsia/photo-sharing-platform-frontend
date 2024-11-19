import DefaultProfileImage from '@/components/profile/image/DefaultProfileImage';
import Image from 'next/image';


type Props = {
    profileImageExist: boolean,
    username: string,
    preview?: boolean,
}


export default function ProfileImage({ profileImageExist, username, preview }: Props) {
    return (
        <div className='flex object-center justify-center items-start'>
            {profileImageExist
                ?
                <Image priority
                    className={`${preview ? 'size-12' : 'size-72'} border border-slate-800 rounded-full object-cover object-center`}
                    src={`/api/user/avatar/${username}`}
                    quality={60} alt="Profile image" width={500} height={500} />
                : <DefaultProfileImage username={username} preview={preview} />
            }
        </div>
    )
}
