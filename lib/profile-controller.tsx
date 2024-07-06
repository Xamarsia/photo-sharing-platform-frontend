import DefaultProfileImage from "@/components/profile/image/DefaultProfileImage"
import ProfileImage from "@/components/profile/image/ProfileImage"

export const getProfileImagePreview = (user: UserPreviewDTO | UserDTO) => {
    if (user.isProfileImageExist) {
        return <ProfileImage src={`/api/auth/user/${user.username}/profile/image`} preview />
    } else {
        return <DefaultProfileImage username={user.username} preview />
    }

}