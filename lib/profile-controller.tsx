import ProfileImage from "@/components/profile/image/ProfileImage";
import DefaultProfileImage from "@/components/profile/image/DefaultProfileImage";


export const getProfileImagePreview = (user: UserPreviewDTO | UserDTO) => {
    if (user.isProfileImageExist) {
        return <ProfileImage src={`/api/auth/user/${user.username}/profile/image`} preview />
    } else {
        return <DefaultProfileImage username={user.username} preview />
    }

}

export const getProfileImage = (user: UserPreviewDTO | UserDTO) => {
    if (user.isProfileImageExist) {
        return <ProfileImage src={`/api/auth/user/${user.username}/profile/image`} />
    } else {
        return <DefaultProfileImage username={user.username} />
    }
}

const userDTO: UserDTO = {
    id: '3',
    roles: ["User role", "Admin role"],
    email: "email@gmail.com",
    state: 'CURRENT',
    username: 'username',
    fullName: 'Full Name',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quod quis eaque aliquam necessitatibus vel eligendi laboriosam optio quisquam sunt.',
    isProfileImageExist: false,
}

const userPreviewDTO: UserPreviewDTO = {
    id: '3',
    state: 'CURRENT',
    username: 'username',
    fullName: 'Full Name',
    isProfileImageExist: false,
}

// export async function getUser(): Promise<UserDTO> {
//     return userDTO;
// }

export function getUser(): UserDTO {
    return userDTO;
}

const profile: ProfileDTO = {
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quod quis eaque aliquam necessitatibus vel eligendi laboriosam optio quisquam sunt.',
    followersCount: 4,
    followingsCount: 5,
    postsCount: 3,
    userPreviewDTO: userDTO
}

export async function getProfile(username: string): Promise<ProfileDTO> {
    return profile;
}

const followers: Array<UserPreviewDTO> = [userPreviewDTO, userPreviewDTO, userPreviewDTO, userPreviewDTO]
const followings: Array<UserPreviewDTO> = [userPreviewDTO, userPreviewDTO, userPreviewDTO, userPreviewDTO]


export async function getFollowers(): Promise<Array<UserPreviewDTO>> {
    return followers;
}

export async function getFollowings(): Promise<Array<UserPreviewDTO>> {
    return followings;
}