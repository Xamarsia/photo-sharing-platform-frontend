'use server';

import { spspFetch, JSONRequest } from "@/lib/auth-controller";


export async function getUser(username: string): Promise<UserDTO | undefined> {
    const res: Response = await spspFetch(`/${username}`, { method: 'GET', });
    if (!res.ok) {
        return undefined;
    }
    const user: UserDTO = await res.json();
    return user;
}

export async function isUserRegistered(): Promise<boolean | undefined> {
    const res: Response = await spspFetch(`/user/isRegistered`, { method: 'GET' });
    if (!res.ok) {
        return undefined;
    }

    const isUserRegistered: boolean = await res.json();
    return isUserRegistered;
}

export async function registerUser(data: RegisterRequest): Promise<UserDTO | undefined> {
    const req: RequestInit = await JSONRequest(data, { method: 'POST' });
    const res: Response = await spspFetch(`/user/register`, req);

    if (!res.ok) {
        return undefined;
    }

    const user: UserDTO = await res.json();
    return user;
}

export async function createAuth(): Promise<boolean> {
    const res: Response = await spspFetch('/auth', { method: 'POST', });
    return res.ok;
}

export async function getUserProfile(username: string): Promise<ProfileDTO | undefined> {
    const res: Response = await spspFetch(`/user/${username}/profile`, { method: 'GET', });
    if (!res.ok) {
        return undefined;
    }
    const profile: ProfileDTO = await res.json();
    return profile;
}

export async function getNewsPostsPage(page: number): Promise<Page<DetailedPostDTO>> {
    const res: Response = await spspFetch(`/post/newsFeed?size=20&page=${page}`, { method: 'GET' });

    if (!res.ok) {
        return {
            content: [],
            last: true,
        };
    }
    return await res.json();
};

export async function getUserPostPreviewsPage(username: string, page: number,): Promise<Page<PostPreviewDTO>> {
    const res: Response = await spspFetch(`/post/preview/${username}?size=6&page=${page}`, { method: 'GET' });

    if (!res.ok) {
        return {
            content: [],
            last: true,
        };
    }
    return await res.json();
};

export async function getFollowingsPage(username: string, page: number): Promise<Page<UserDTO>> {
    const res: Response = await spspFetch(`/user/${username}/followings?size=6&page=${page}`, { method: 'GET' });

    if (!res.ok) {
        return {
            content: [],
            last: true,
        };
    }
    return await res.json();
};

export async function getFollowersPage(username: string, page: number): Promise<Page<UserDTO>> {
    const res: Response = await spspFetch(`/user/${username}/followers?size=6&page=${page}`, { method: 'GET' });

    if (!res.ok) {
        return {
            content: [],
            last: true,
        };
    }
    return await res.json();
};

export async function getUsersLikedPostPage(postId: number, page: number): Promise<Page<UserDTO>> {
    const res: Response = await spspFetch(`/user/${postId}/liked?size=6&page=${page}`, { method: 'GET' });

    if (!res.ok) {
        return {
            content: [],
            last: true,
        };
    }
    return await res.json();
};

export async function getSearchUsersPage(query: string | string[], page: number): Promise<Page<UserDTO>> {
    const res: Response = await spspFetch(`/user/search?size=20&page=${page}&request=${query}`, { method: 'GET' });

    if (!res.ok) {
        return {
            content: [],
            last: true,
        };
    }
    return await res.json();
};

export async function updateProfileImage(data: FormData): Promise<void> {
    const res: Response = await spspFetch(`/user/image`, { method: 'PUT', body: data, });
    if (!res.ok) {
        return undefined;
    }
    return;
}

export async function updateUsername(data: UsernameUpdateRequest): Promise<UserDTO | undefined> {
    const req: RequestInit = await JSONRequest(data, { method: 'PUT' });
    const res: Response = await spspFetch(`/user/updateUsername`, req);

    if (!res.ok) {
        return undefined;
    }

    const user: UserDTO = await res.json();
    return user;
}

export async function updateUserInfo(data: UserInfoUpdateRequest): Promise<UserDTO | undefined> {
    const req: RequestInit = await JSONRequest(data, { method: 'PUT' });
    const res: Response = await spspFetch(`/user/updateUserInfo`, req);

    if (!res.ok) {
        return undefined;
    }

    const user: UserDTO = await res.json();
    return user;
}

export async function deleteProfileImage(): Promise<void> {
    const res: Response = await spspFetch(`/user/image`, { method: 'DELETE' });
    if (!res.ok) {
        return undefined;
    }
    return;
}

export async function deleteAccount(): Promise<void> {
    const res: Response = await spspFetch(`/user`, { method: 'DELETE' });
    if (!res.ok) {
        return undefined;
    }
    return;
}

export async function follow(username: string): Promise<void> {
    const res: Response = await spspFetch(`/user/follow/${username}`, { method: 'PUT' });
    if (!res.ok) {
        return undefined;
    }
    return;
}

export async function unfollow(username: string): Promise<void> {
    const res: Response = await spspFetch(`/user/deleteFollowing/${username}`, { method: 'PUT' });
    if (!res.ok) {
        return undefined;
    }
    return;
}

export async function isUsernameUsed(username: string): Promise<boolean | undefined> {
    const res: Response = await fetch(`${process.env.BACKEND_URL}/user/isUsernameUsed/${username}`, { method: 'GET' });
    if (!res.ok) {
        return undefined;
    }

    const isUsernameUsed: boolean = await res.json();
    return isUsernameUsed;
}

export async function isAuthUsed(): Promise<boolean | undefined> {
    const res: Response = await spspFetch(`/auth/isUsed`, { method: 'GET' });
    if (!res.ok) {
        return undefined;
    }

    const isAuthUsed: boolean = await res.json();
    return isAuthUsed;
}
