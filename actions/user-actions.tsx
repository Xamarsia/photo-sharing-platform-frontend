'use server'

import { authFetch } from "@/lib/auth-controller";


export async function getUser(username: string): Promise<UserDTO | undefined> {
    const res: Response = await authFetch(`/${username}`, { method: 'GET', });
    if (!res.ok) {
        return undefined;
    }
    const user: UserDTO = await res.json();
    return user;
}

export async function getUserProfile(username: string): Promise<ProfileDTO | undefined> {
    const res: Response = await authFetch(`/user/profile/${username}`, { method: 'GET', });
    if (!res.ok) {
        return undefined;
    }
    const profile: ProfileDTO = await res.json();
    return profile;
}

export async function fetchPageData(size: number, page: number, url: string) {
    const res: Response = await authFetch(`${url}?size=${size}&page=${page}`, { method: 'GET' });

    if (!res.ok) {
        return undefined;
    }
    return await res.json();
};

export async function getFollowers(username: string, size: number, page: number): Promise<Array<UserDTO>> {
    const { content, last } = await fetchPageData(size, page, `/user/${username}/followers`);
    return content;
}

export async function getFollowings(username: string, size: number, page: number): Promise<Array<UserDTO>> {
    const { content, last } = await fetchPageData(size, page, `/user/${username}/followings`);
    return content;
}

