const post: PostDTO = {
    id: 1,
    username: 'username',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et quod quis eaque aliquam necessitatibus vel eligendi laboriosam optio quisquam sunt.',
    createdDate: '24.01.2021',
}

const user: UserPreviewDTO = {
    id: '1',
    username: 'username',
    fullName: 'Full Name',
    state: 'FOLLOWED',
    isProfileImageExist: false,
}

const detailedPost: DetailedPostDTO = {
    postDTO: post,
    authorDTO: user
}


export async function getDetailedPost(postId: string): Promise<DetailedPostDTO> {
    return detailedPost;
}