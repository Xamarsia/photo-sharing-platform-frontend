'use server'

import { authFetch } from "@/lib/auth-controller";


export async function createPost(data: FormData): Promise<PostDTO | undefined> {
    const res: Response = await authFetch(`/post/create`, { method: 'POST', body: data, });
    if (!res.ok) {
        return undefined;
    }
    const post: PostDTO = await res.json();
    return post;
}