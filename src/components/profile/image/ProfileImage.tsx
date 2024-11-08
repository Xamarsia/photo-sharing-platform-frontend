import TextProfileImage from '@/components/profile/image/TextProfileImage';
import ImageProfileImage from '@/components/profile/image/ImageProfileImage';


type Props = {
    profileImageExist: boolean,
    username: string,
    preview?: boolean,
}


export default function ProfileImage({ profileImageExist, username, preview }: Props) {
    return (
        <>
            {profileImageExist
                ? <ImageProfileImage username={username} preview={preview} /> // remove
                : <TextProfileImage username={username} preview={preview} />
            }
        </>
    )
}
