import { cookies } from "next/headers";

export async function authFetch(path: string | URL, init?: RequestInit) {
    const token = cookies().get('token');

    return fetch(`${process.env.BACKEND_URL}${path}`, {
        ...init,
        headers: {
            Authorization: `Bearer ${token?.value}`,
            ...init?.headers
        },
    });
}

export async function JSONRequest(data: any, init?: RequestInit) {
    return {
        ...init,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    }
}
