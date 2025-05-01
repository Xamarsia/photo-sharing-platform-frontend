'use server'

import { spspFetch, JSONRequest } from "@/lib/auth-controller";


export async function createPost(data: FormData): Promise<PostDTO | undefined> {
    const res: Response = await spspFetch(`/post/create`, { method: 'POST', body: data, });
    if (!res.ok) {
        return undefined;
    }
    const post: PostDTO = await res.json();
    return post;
}

export async function getDetailedPost(postId: number): Promise<DetailedPostDTO | undefined> {
    const res: Response = await spspFetch(`/post/${postId}/detailed`, { method: 'GET' });
    if (!res.ok) {
        return undefined;
    }
    const detailedPost: DetailedPostDTO = await res.json();
    return detailedPost;
}

export async function getPost(postId: number): Promise<PostDTO | undefined> {
    const res: Response = await spspFetch(`/post/${postId}`, { method: 'GET' });
    if (!res.ok) {
        return undefined;
    }
    const post: PostDTO = await res.json();
    return post;
}

export async function updatePostImage(postId: number, data: FormData): Promise<void> {
    const res: Response = await spspFetch(`/post/${postId}/updateImage`, { method: 'PUT', body: data, });
    if (!res.ok) {
        return undefined;
    }
    return;
}

export async function updatePostInfo(postId: number, data: UpdatePostRequest): Promise<PostDTO | undefined> {
    const req: RequestInit = await JSONRequest(data, { method: 'PUT' });
    const res: Response = await spspFetch(`/post/${postId}/updatePostInfo`, req);

    if (!res.ok) {
        return undefined;
    }

    const post: PostDTO = await res.json();
    return post;
}

export async function deletePost(postId: number): Promise<void> {
    const res: Response = await spspFetch(`/post/${postId}`, { method: 'DELETE' });
    if (!res.ok) {
        return;
    }
    return;
}

export async function like(postId: number): Promise<void> {
    const res: Response = await spspFetch(`/like/${postId}`, { method: 'POST' });
    console.log("like: ", res.ok);
    if (!res.ok) {
        return undefined;
    }

    return;
}

export async function deleteLike(postId: number): Promise<void> {
    const res: Response = await spspFetch(`/like/${postId}`, { method: 'DELETE' });
    if (!res.ok) {
        return undefined;
    }
    return;
}
