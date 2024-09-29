'use server';

import { authFetch, JSONRequest } from "@/lib/auth-controller";


export async function getUser(username: string): Promise<UserDTO | undefined> {
    const res: Response = await authFetch(`/${username}`, { method: 'GET', });
    if (!res.ok) {
        return undefined;
    }
    const user: UserDTO = await res.json();
    return user;
}

export async function isUserRegistered(): Promise<boolean | undefined> {
    const res: Response = await authFetch(`/user/isRegistered`, { method: 'GET' });
    if (!res.ok) {
        return undefined;
    }

    const isUserRegistered: boolean = await res.json();
    return isUserRegistered;
}

export async function registerUser(data: RegisterRequest): Promise<UserDTO | undefined> {
    const req = await JSONRequest(data, { method: 'POST' });
    const res: Response = await authFetch(`/user/register`, req);

    if (!res.ok) {
        return undefined;
    }

    const user: UserDTO = await res.json();
    return user;
}

export async function saveAuth(): Promise<boolean> {
    const res: Response = await authFetch('/auth', { method: 'POST', });
    return res.ok;
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

export async function fetchPageData(size: number, page: number, url: string, urlParams?: string) {
    const res: Response = await authFetch(`${url}?size=${size}&page=${page}&${urlParams}`, { method: 'GET' });

    if (!res.ok) {
        return undefined;
    }
    return await res.json();
};

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

export async function deleteProfileImage(): Promise<void> {
    const res: Response = await authFetch(`/user/profile/image`, { method: 'DELETE' });
    if (!res.ok) {
        return undefined;
    }
    return;
}

export async function deleteAccount(): Promise<void> {
    const res: Response = await authFetch(`/user`, { method: 'DELETE' });
    if (!res.ok) {
        return undefined;
    }
    return;
}

export async function follow(username: string): Promise<void> {
    const res: Response = await authFetch(`/user/${username}/follow`, { method: 'PUT' });
    if (!res.ok) {
        return undefined;
    }
    return;
}

export async function unfollow(username: string): Promise<void> {
    const res: Response = await authFetch(`/user/${username}/unfollow`, { method: 'PUT' });
    if (!res.ok) {
        return undefined;
    }
    return;
}

export async function isUsernameUsed(username: string): Promise<boolean | undefined> {
    const res: Response = await fetch(`${process.env.BACKEND_URL}/user/isUsernameAlreadyInUse/${username}`, { method: 'GET' });
    if (!res.ok) {
        return undefined;
    }

    const isUsernameUsed: boolean = await res.json();
    return isUsernameUsed;
}

export async function isAuthenticationUsed(): Promise<boolean | undefined> {
    const res: Response = await fetch(`${process.env.BACKEND_URL}/auth/isUsed`, { method: 'GET' });
    if (!res.ok) {
        return undefined;
    }

    const isAuthUsed: boolean = await res.json();
    return isAuthUsed;
}
