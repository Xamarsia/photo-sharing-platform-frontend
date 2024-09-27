type UserState = 'CURRENT' | 'FOLLOWED' | 'UNFOLLOWED'

type LikeState = "LIKED" | "UNLIKED"

type ProviderID = 'password' | 'facebook.com' | 'github.com' | 'google.com' | 'phone' | 'twitter.com'

type UserDTO = {
    "id": number,
    "username": string,
    "fullName": string | undefined,
    "description": string | undefined,
    "state": UserState,
    "isProfileImageExist": boolean
}

type UserInfoUpdateRequest = {
    "fullName": string | undefined,
    "description": string | undefined,
}

type RegisterRequest = {
    "username": string,
    "fullName": string | undefined,
}

type LoginRequest = {
    "email": string,
    "password": string,
}

type PostPreviewDTO = {
    "id": number,
}

type UpdatePostRequest = {
    "description": string | undefined,
}

type UsernameUpdateRequest = {
    "username": string
}

type PostDTO = {
    "id": number,
    "createdDate": string,
    "description": string | undefined,
    "username": string,
    "likes": number
}

type DetailedPostDTO = {
    "postDTO": PostDTO,
    "authorDTO": UserDTO,
    "state": LikeState
}

type ProfileDTO = {
    "followingsCount": number,
    "followersCount": number,
    "postsCount": number,
    "userDTO": UserDTO,
}

type SidebarItemInfo = {
    href: string,
    title: string,
}
