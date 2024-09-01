'use server'

import { authFetch, JSONRequest } from "@/lib/auth-controller";


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

export async function getAuthenticatedUser(): Promise<UserDTO | undefined> {
    const res: Response = await authFetch(`/user`, { method: 'GET', });
    if (!res.ok) {
        return undefined;
    }
    const user: UserDTO = await res.json();
    return user;
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


export async function updateProfileImage(data: FormData): Promise<void> {
    const res: Response = await authFetch(`/user/profile/image`, { method: 'PUT', body: data, });
    if (!res.ok) {
        return undefined;
    }
    return;
}

export async function updateUsername(data: UsernameUpdateRequest): Promise<UserDTO | undefined> {
    const req = await JSONRequest(data, { method: 'PUT' });
    const res: Response = await authFetch(`/user/username/update`, req);

    if (!res.ok) {
        return undefined;
    }

    const user: UserDTO = await res.json();
    return user;
}

export async function updateUserInfo(data: UserInfoUpdateRequest): Promise<UserDTO | undefined> {
    const req = await JSONRequest(data, { method: 'PUT' });
    const res: Response = await authFetch(`/user/update`, req);

    if (!res.ok) {
        return undefined;
    }

    const user: UserDTO = await res.json();
    return user;
}
