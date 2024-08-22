import { cookies } from "next/headers";

export async function authFetch(path: string | URL, init?: RequestInit) {
    const token = cookies().get('token');

    return fetch(`${process.env.BACKEND_URL}${path}`, {
        headers: {
            Authorization: `Bearer ${token?.value}`,
        },
        ...init,
    });
}

