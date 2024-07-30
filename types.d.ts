type UserState = 'CURRENT' | 'FOLLOWED' | 'UNFOLLOWED'
type SidebarNavItem = 'USER_INFO' | 'PROFILE_IMAGE'| 'PASSWORD'| 'USERNAME' | 'EMAIL'

type UserDTO = {
    "id": string,
    "fullName": string,
    "username": string,
    "email": string,
    "description": string,
    "roles": Array<string>,
    "state": UserState,
    "isProfileImageExist": boolean
}

type UserPreviewDTO = {
    "id": string,
    "fullName": string,
    "username": string,
    "state": UserState,
    "isProfileImageExist": boolean
}

type PostPreviewDTO = {
    "id": number,
}

type PostDTO = {
    "id": number,
    "createdDate": string,
    "description": string,
    "username": string,
}

type DetailedPostDTO = {
    "postDTO": PostDTO
    "authorDTO": UserPreviewDTO
}

type ProfileDTO = {
    "followingsCount": number
    "followersCount": number
    "postsCount": number
    "description": string
    "userPreviewDTO": UserPreviewDTO
}
