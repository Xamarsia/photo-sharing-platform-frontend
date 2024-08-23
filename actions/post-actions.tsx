'use server'

import { authFetch, JSONRequest } from "@/lib/auth-controller";


export async function createPost(data: FormData): Promise<PostDTO | undefined> {
    const res: Response = await authFetch(`/post/create`, { method: 'POST', body: data, });
    if (!res.ok) {
        return undefined;
    }
    const post: PostDTO = await res.json();
    return post;
}

export async function getDetailedPost(postId: number): Promise<DetailedPostDTO | undefined> {
    const res: Response = await authFetch(`/post/${postId}/detailed`, { method: 'GET' });
    if (!res.ok) {
        return undefined;
    }
    const detailedPost: DetailedPostDTO = await res.json();
    return detailedPost;
}

export async function getPost(postId: number): Promise<PostDTO | undefined> {
    const res: Response = await authFetch(`/post/${postId}`, { method: 'GET' });
    if (!res.ok) {
        return undefined;
    }
    const post: PostDTO = await res.json();
    return post;
}

export async function updatePostImage(postId: number, data: FormData): Promise<void> {
    const res: Response = await authFetch(`/post/${postId}/update/image`, { method: 'PUT', body: data, });
    if (!res.ok) {
        return undefined;
    }
    return;
}

export async function updatePost(postId: number, data: UpdatePostRequest): Promise<PostDTO | undefined> {
    const req = await JSONRequest(data, { method: 'PUT' });
    const res: Response = await authFetch(`/post/${postId}/update`, req);

    if (!res.ok) {
        return undefined;
    }

    const post: PostDTO = await res.json();
    return post;
}
