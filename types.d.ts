type UserState = 'CURRENT' | 'FOLLOWED' | 'UNFOLLOWED'

type UserDTO = {
    "id": string,
    "fullName": string | undefined,
    "username": string,
    "email": string,
    "description": string | undefined,
    "roles": Array<string>,
    "state": UserState,
    "isProfileImageExist": boolean
}

type UserPreviewDTO = {
    "id": string,
    "fullName": string | undefined,
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
    "description": string | undefined,
    "username": string,
}

type DetailedPostDTO = {
    "postDTO": PostDTO,
    "authorDTO": UserPreviewDTO,
}

type ProfileDTO = {
    "followingsCount": number,
    "followersCount": number,
    "postsCount": number,
    "description": string | undefined,
    "userPreviewDTO": UserPreviewDTO,
}
