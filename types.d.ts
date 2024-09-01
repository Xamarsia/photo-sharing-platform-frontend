type UserState = 'CURRENT' | 'FOLLOWED' | 'UNFOLLOWED'

type UserDTO = {
    "id": number,
    "username": string,
    "fullName": string | undefined,
    "description": string | undefined,
    "state": UserState,
    "isProfileImageExist": boolean
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
}

type DetailedPostDTO = {
    "postDTO": PostDTO,
    "authorDTO": UserDTO,
}

type ProfileDTO = {
    "followingsCount": number,
    "followersCount": number,
    "postsCount": number,
    "userDTO": UserDTO,
}
